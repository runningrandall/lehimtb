#!/usr/bin/env npx tsx

/*
 * processSchedule.ts
 *
 * Reads a CSV file of practice/event bookings and submits each row to the
 * TrailSync Booking API, throttled to 1 request per second.
 *
 * USAGE:
 *   npx tsx scripts/processSchedule.ts <path-to-csv>
 *
 * EXAMPLE:
 *   npx tsx scripts/processSchedule.ts scripts/schedule.csv
 *
 * CSV FORMAT (see scripts/schedule.example.csv):
 *   groupName,venueName,date,startTime,endTime,participants,notes
 *
 *   - groupName: one or more group names, pipe-separated (e.g. "Group 1|Group 2")
 *                must match a group name in groups.json
 *   - venueName: must match a venue name or alias in venues.json
 *   - date: YYYY-MM-DD
 *   - startTime: HH:MM (24h)
 *   - endTime: HH:MM (24h)
 *   - participants: pipe-separated counts matching groupName (e.g. "15|10")
 *   - notes: optional free-text notes for the booking
 *
 * ENVIRONMENT VARIABLES (set in .env or shell):
 *   TRAILSYNC_TOKEN  – JWT bearer token (required)
 *   THROTTLE_MS      – delay between requests in ms (default: 1000)
 *
 * DATA FILES (in scripts/):
 *   venues.json – raw API response from TrailSync Venue entity
 *   groups.json – raw API response from TrailSync Group entity
 */

import "dotenv/config";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

// ─── Configuration ───────────────────────────────────────────────────────────

const API_URL =
  "https://base44.app/api/apps/69051b19f08a573cee1507dd/entities/Booking";
const APP_ID = "69051b19f08a573cee1507dd";
const TEAM_ID = "690623583060a2598188b121";
const TEAM_NAME = "Lehi HS";
const STATUS = "confirmed";
const THROTTLE_MS = parseInt(process.env.THROTTLE_MS ?? "1000", 10);

const TOKEN = process.env.TRAILSYNC_TOKEN;

// ─── Venue Map (loaded from venues.json) ─────────────────────────────────────

interface VenueRecord {
  name: string;
  id: string;
  aliases?: string[];
  [key: string]: unknown;
}

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const venuesRaw = readFileSync(resolve(SCRIPT_DIR, "venues.json"), "utf-8");
const venues: VenueRecord[] = JSON.parse(venuesRaw);

// Build name→id map (trimming trailing spaces from API data)
const VENUE_MAP = new Map<string, string>();
const VENUE_ALIASES = new Map<string, string>();

for (const venue of venues) {
  const trimmedName = venue.name.trim();
  VENUE_MAP.set(trimmedName, venue.id);
  // Also store the raw name so exact matches still work
  if (venue.name !== trimmedName) {
    VENUE_MAP.set(venue.name, venue.id);
  }
  // Register aliases → canonical trimmed name
  if (venue.aliases) {
    for (const alias of venue.aliases) {
      VENUE_ALIASES.set(alias.trim(), trimmedName);
    }
  }
}

function resolveVenueId(name: string): string | undefined {
  const trimmed = name.trim();
  const canonical = VENUE_ALIASES.get(trimmed) ?? VENUE_ALIASES.get(name) ?? trimmed;
  return VENUE_MAP.get(canonical) ?? VENUE_MAP.get(trimmed);
}

// ─── Group Map (loaded from groups.json) ─────────────────────────────────────

interface GroupRecord {
  name: string;
  id: string;
  [key: string]: unknown;
}

const groupsRaw = readFileSync(resolve(SCRIPT_DIR, "groups.json"), "utf-8");
const groups: GroupRecord[] = JSON.parse(groupsRaw);

const GROUP_MAP = new Map<string, string>();
for (const group of groups) {
  GROUP_MAP.set(group.name.trim(), group.id);
}

function resolveGroupId(name: string): string | undefined {
  return GROUP_MAP.get(name.trim());
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function parseCSV(raw: string): string[][] {
  const lines = raw
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  if (lines.length < 2) {
    throw new Error("CSV must have a header row and at least one data row.");
  }

  // Skip header
  return lines.slice(1).map((line) => {
    const cols: string[] = [];
    let current = "";
    let inQuotes = false;

    for (const ch of line) {
      if (ch === '"') {
        inQuotes = !inQuotes;
      } else if (ch === "," && !inQuotes) {
        cols.push(current.trim());
        current = "";
      } else {
        current += ch;
      }
    }
    cols.push(current.trim());
    return cols;
  });
}

interface Booking {
  teamId: string;
  groupId: string;
  venueId: string;
  date: string;
  startTime: string;
  endTime: string;
  participants: number;
  notes: string;
  teamName: string;
  groupName: string;
  venueName: string;
  status: string;
}

function buildBookings(row: string[]): Booking[] {
  const [groupNameRaw, venueName, date, startTime, endTime, participantsRaw, notes = ""] = row;

  if (!groupNameRaw || !venueName || !date || !startTime || !endTime) {
    throw new Error(`Missing required fields in row: ${row.join(",")}`);
  }

  const venueId = resolveVenueId(venueName);
  if (!venueId) {
    throw new Error(
      `Unknown venue "${venueName}". Add it to venues.json or update its aliases.`
    );
  }

  const groupNames = groupNameRaw.split("|").map((g) => g.trim());
  const participantsList = (participantsRaw ?? "")
    .split("|")
    .map((p) => parseInt(p.trim(), 10) || 0);

  if (participantsList.length > 1 && participantsList.length !== groupNames.length) {
    throw new Error(
      `Participant count mismatch: ${groupNames.length} group(s) but ${participantsList.length} participant value(s) in row: ${row.join(",")}`
    );
  }

  return groupNames.map((groupName, idx) => {
    const groupId = resolveGroupId(groupName);
    if (!groupId) {
      throw new Error(
        `Unknown group "${groupName}". Add it to groups.json.`
      );
    }

    return {
    teamId: TEAM_ID,
    groupId,
    venueId,
    date,
    startTime,
    endTime,
    participants: participantsList.length === 1 ? participantsList[0] : participantsList[idx],
    notes,
    teamName: TEAM_NAME,
    groupName,
    venueName,
    status: STATUS,
  };
  });
}

async function submitBooking(booking: Booking): Promise<void> {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: `Bearer ${TOKEN}`,
      "x-app-id": APP_ID,
      "x-origin-url": "https://trailsync.org/calendar",
    },
    body: JSON.stringify(booking),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`HTTP ${res.status}: ${body}`);
  }
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const csvPath = process.argv[2];
  if (!csvPath) {
    console.error("Usage: npx tsx scripts/processSchedule.ts <path-to-csv>");
    process.exit(1);
  }

  if (!TOKEN) {
    console.error("Error: Set TRAILSYNC_TOKEN environment variable.");
    process.exit(1);
  }

  const raw = readFileSync(resolve(csvPath), "utf-8");
  const rows = parseCSV(raw);

  // Expand rows into individual bookings (one per group)
  const bookings: Booking[] = [];
  for (const row of rows) {
    bookings.push(...buildBookings(row));
  }

  console.log(`Found ${bookings.length} booking(s) to submit (from ${rows.length} CSV row(s)).\n`);

  let success = 0;
  let failed = 0;

  for (let i = 0; i < bookings.length; i++) {
    const booking = bookings[i];
    try {
      const label = `[${i + 1}/${bookings.length}] ${booking.groupName} (${booking.participants}) @ ${booking.venueName} on ${booking.date} ${booking.startTime}-${booking.endTime}`;

      process.stdout.write(`${label} ... `);
      await submitBooking(booking);
      console.log("OK");
      success++;
    } catch (err) {
      console.log(`FAILED: ${(err as Error).message}`);
      failed++;
    }

    // Throttle: wait 1 second between requests
    if (i < bookings.length - 1) {
      await sleep(THROTTLE_MS);
    }
  }

  console.log(`\nDone. ${success} succeeded, ${failed} failed.`);
}

main();
