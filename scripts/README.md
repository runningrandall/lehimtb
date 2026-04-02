# TrailSync Schedule Processor

Submits practice/event bookings from a CSV file to the TrailSync Booking API.

## Setup

### 1. Install dependencies

```bash
pnpm install
```

### 2. Configure environment

Copy the example env file and add your token:

```bash
cp .env.example .env
```

Edit `.env` and set your values:

```
TRAILSYNC_TOKEN=your-jwt-token-here
THROTTLE_MS=1000
```

| Variable | Required | Default | Description |
|---|---|---|---|
| `TRAILSYNC_TOKEN` | Yes | — | JWT bearer token from TrailSync |
| `THROTTLE_MS` | No | `1000` | Delay between API requests in milliseconds |

To get your token, log in to [trailsync.org](https://trailsync.org) and copy the bearer token from an authenticated request in your browser's dev tools (Network tab).

The `.env` file is gitignored — never commit it.

## Usage

```bash
npx tsx scripts/processSchedule.ts <path-to-csv>
```

Example:

```bash
npx tsx scripts/processSchedule.ts scripts/schedule.csv
```

## CSV Format

See `schedule.example.csv` for a working example.

```
groupName,venueName,date,startTime,endTime,participants,notes
```

| Column | Format | Example |
|---|---|---|
| `groupName` | Pipe-separated group names | `Lehi HS - Groups 1 - 6\|Lehi HS - Groups 7 - 12` |
| `venueName` | Must match a name or alias in `venues.json` | `Eagle Mountain` |
| `date` | `YYYY-MM-DD` | `2026-04-07` |
| `startTime` | `HH:MM` (24h) | `18:00` |
| `endTime` | `HH:MM` (24h) | `20:00` |
| `participants` | Pipe-separated counts matching `groupName` | `30\|30` |
| `notes` | Optional free text | `Full team practice` |

When multiple groups are pipe-separated, each group becomes its own booking. If a single participant count is given, it applies to all groups in that row. If multiple counts are given, they must match the number of groups.

## Data Files

These JSON files live in `scripts/` and are loaded at runtime:

- **`venues.json`** — Raw API response from the TrailSync Venue entity. Maps venue names and aliases to venue IDs.
- **`groups.json`** — Raw API response from the TrailSync Group entity. Maps group names to group IDs.

To refresh either file, fetch the updated list from the TrailSync API and save it here.
