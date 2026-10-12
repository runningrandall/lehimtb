'use client';

import { useState, useMemo } from 'react';

type Disc = 'xc' | 'grav' | 'both';

interface Program {
    name: string;
    status?: string;
    regLabel: string | null;
    reg: string;
    club: string;
    mine?: boolean;
    disc: Disc;
    loc: string;
    ages: string;
    cost: number | null;
    costText?: string;
    costNote: string;
    lvl: 1 | 2 | 3 | 4 | 5;
    entry: string;
    req?: string;
    train: string;
    race: string;
    url: string;
}

const LEVELS = ['', 'Recreational', 'Development', 'Competitive', 'National', 'Elite'];
const DISC_LABEL: Record<Disc, string> = { xc: 'XC', grav: 'Gravity / DH', both: 'XC + Enduro' };

const VELO_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSc4Toh0mCqZMg53zPMvVJ0hTb4rIeFM7HLIVWmZ_BqFUSv8xQ/viewform';
const FLYERS_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSfdWlQVLMHGxxa3ARksTK8Dyr5KpuG47HtnG4XCTnYIp1muug/viewform';

const SOHO_FORM = 'https://forms.office.com/Pages/ResponsePage.aspx?id=2HCpuFsyg06lfN7ATNPhk5z-jQHYWT9AnQvbwPETLeRUQUZOUURMQUo0UUxCQkwxTDRIMzhYWDFVTC4u';
const SOHO_URL = 'https://www.teamsoho.org/trainelite-747728.html';

export const clubPrograms: Program[] = [
    { name: 'Accel Cycling', regLabel: 'Late application', reg: 'https://www.accelcycling.net/late-applications.html', club: 'Accel / Hart-Accel', disc: 'xc', loc: 'St. George; members also in Salt Lake', ages: '15–18, U23, Elite (13–14 case by case)', cost: 2800, costNote: '$2,200 if you use an approved outside coach', lvl: 5, entry: 'Application + race résumé; 2027 window closed', train: 'Personal coaching plan, online training library, nutrition plans, skills clinics and team camps', race: 'National XC calendar with race-day support. Kit, helmet, gloves, arm warmers included. Feeds the Hart-Accel pro team.', url: 'https://www.accelcycling.net/apply.html' },
    { name: 'Rouleur National', status: '2027 team uncertain', regLabel: 'Apply', reg: 'https://rouleurdevo.org/pages/team-application-race-national', club: 'Rouleur Devo', disc: 'xc', loc: 'Draper', ages: '15–18, U23, Pro', cost: 3900, costNote: '+ $300 camps, extra kit; $1,050 store credit included', lvl: 5, entry: 'Application; 2–3 yrs racing plus prior national/UCI starts', train: 'Spring team practices and impromptu rides; coach referral if needed; mentors Race and Devo riders', race: 'At least 4 national events; tech/feed zone, tent, mechanic support; possible international invites', url: 'https://rouleurdevo.org/pages/team-memberships' },
    { name: 'Rouleur Race', status: '2027 team uncertain', regLabel: 'Apply', reg: 'https://rouleurdevo.org/pages/team-application-race-national', club: 'Rouleur Devo', disc: 'xc', loc: 'Draper', ages: '13–18', cost: 2500, costNote: '+ $400 winter camp; $370 store credit included', lvl: 4, entry: 'Application; 2–3 yrs racing, tight ability band', train: '15–20 practices, Mon/Wed evenings or Sat, spring to June; St. George drop-ride camp Jan/Feb', race: 'Local and regional, nationals optional; team tent, pre-rides, feed zone', url: 'https://rouleurdevo.org/pages/team-memberships' },
    { name: 'Rouleur Devo', status: '2027 team uncertain', regLabel: 'Apply', reg: 'https://rouleurdevo.org/pages/team-applications', club: 'Rouleur Devo', disc: 'xc', loc: 'Draper (Draper Bike Park)', ages: '13–18', cost: 1000, costNote: '$115 store credit included', lvl: 2, entry: '1+ season raced; must ride Draper Bike Park to top of Rush nonstop and descend clean', train: '7 sessions of 3+ hrs, Tue or Thu, March to June; skills then endurance ride', race: 'Aimed at improving NICA results; team tent access', url: 'https://rouleurdevo.org/pages/team-memberships' },
    { name: 'VeloLove Elite', regLabel: 'Interest form', reg: VELO_FORM, club: 'VeloLove', disc: 'xc', loc: 'North Utah County', ages: 'Grades 9–12', cost: 0, costNote: 'Usually no cost; confirm for 2027', lvl: 4, entry: 'Interest form, then registration; capped at 40', train: 'Professional coaching, in-person and at-home winter training, spring camp, 2 coached rides/week', race: 'Weekend endurance rides and races; highest volume tier', url: VELO_FORM },
    { name: 'VeloLove Comp', regLabel: 'Interest form', reg: VELO_FORM, club: 'VeloLove', disc: 'xc', loc: 'North Utah County', ages: 'Grades 8–12', cost: 0, costNote: 'Usually no cost; confirm for 2027', lvl: 3, entry: 'Interest form; capped at 20', train: 'Winter Zwift at home, spring outdoor training, 2 coached rides/week spring–summer', race: 'Bridge to Elite with lower intensity', url: VELO_FORM },
    { name: 'VeloLove Youth', regLabel: 'Interest form', reg: VELO_FORM, club: 'VeloLove', disc: 'xc', loc: 'North Utah County', ages: 'Grades K–7', cost: 0, costNote: 'Usually no cost; confirm for 2027', lvl: 1, entry: 'Open; no racing experience needed', train: '2 rides/week spring to fall, skills and games', race: 'Racing optional', url: VELO_FORM },
    { name: 'SoHo Pro Dev', regLabel: 'Apply (invite)', reg: SOHO_FORM, club: 'Team SoHo', disc: 'xc', loc: 'Soldier Hollow (Midway)', ages: 'High school to age 20', cost: 2500, costNote: 'All Race Team benefits; extra kit; 2026 season fee', lvl: 5, entry: 'Invite only; application', req: 'TrainingPeaks account; heart rate monitor; smart trainer; power meter; road or gravel bike; Zwift ($20/mo)', train: 'Everything in Race Team plus additional camps and greater travel commitment; discounted team bikes', race: '5 UCI races incl. Nationals and SoHo; extra kit (skinsuit, jacket)', url: SOHO_URL },
    { name: 'SoHo Race', regLabel: 'Apply', reg: SOHO_FORM, club: 'Team SoHo', disc: 'xc', loc: 'Soldier Hollow (Midway)', ages: 'Grades 9–12', cost: 1700, costNote: 'Includes SoHo ski access and season pass', lvl: 4, entry: 'Application; committed to racing and development', req: 'TrainingPeaks account; heart rate monitor; smart trainer (can rent); Zwift ($20/mo); power meter', train: '3–4 coach-led sessions/week (Tue, Wed, Thu, Sat); strength, XC skiing, long rides; Jan–May', race: 'Coaches at I-Cup and Utah Gravel Series races; supported camp and race trip; Whiskey 50 supported', url: SOHO_URL },
    { name: 'SoHo Club', regLabel: 'Apply', reg: SOHO_FORM, club: 'Team SoHo', disc: 'xc', loc: 'Soldier Hollow (Midway)', ages: 'Jr. high, high school, adults', cost: 1000, costNote: 'Optional St. George camp $400', lvl: 2, entry: 'Open application; club team can apply later', req: 'Free TrainingPeaks account; bike computer (Wahoo/Garmin) that syncs; smart trainer (can rent); Zwift optional', train: 'TrainingPeaks plan, FTP test, Monday gym, Wednesday ski practice; Jan–May', race: 'Pit zone and race support; team kit included', url: SOHO_URL },
    { name: 'Flyers XC Comp', regLabel: 'Interest form', reg: FLYERS_FORM, club: 'Flyers', mine: true, disc: 'xc', loc: 'Lehi / north Utah County', ages: '14–18 (JV A, Fr A, Varsity)', cost: 50, costNote: '+ required team jersey; Southern Utah winter camp is an additional expense', lvl: 4, entry: 'Interest form; program confirmed before payment', req: 'XC mountain bike; Zwift setup for winter training (subscription + smart trainer); free TrainingPeaks account; heart rate monitor; power meter optional but ideal', train: 'Custom training plans, one weekday session from March, group Saturday rides; one team winter camp planned in Southern Utah', race: 'Local Utah to major national events; endurance and skills focused. Coaching at I-Cup and SoHo races, possibly WRS as well.', url: FLYERS_FORM },
    { name: 'Flyers XC Sport', regLabel: 'Interest form', reg: FLYERS_FORM, club: 'Flyers', mine: true, disc: 'xc', loc: 'Lehi / north Utah County', ages: '12–18', cost: 50, costNote: 'Covers insurance and club t-shirt', lvl: 1, entry: 'Interest form; no racing experience needed', train: 'Saturday morning rides in program groups', race: 'Racing optional', url: FLYERS_FORM },
    { name: 'Flyers Enduro', regLabel: null, reg: 'Opens Dec 1', club: 'Flyers', mine: true, disc: 'grav', loc: 'Lehi / north Utah County', ages: '10–18', cost: 150, costNote: 'Flat fee', lvl: 3, entry: 'Open; no evaluation ride', train: 'Enduro-focused sister program to Flyers XC; schedule TBD', race: 'Targets Youth Enduro Series races', url: 'https://www.flyerscycling.com' },
    { name: 'KCA Elite Development', regLabel: 'Get started', reg: 'https://konecnycyclingacademy.com', club: 'Konecny Cycling Academy', disc: 'xc', loc: 'Not stated on site', ages: 'Juniors to elite', cost: 3600, costText: '$400/mo', costNote: '3, 6 or 9-month plans; $3,600 for 9 months', lvl: 4, entry: 'Sign up online; built for athletes chasing national titles and UCI points', train: 'All-inclusive, high-touch individual coaching; long-term race development', race: 'Founded by elite XCO racer Lasse Konecny; 3–4 performance camps a year with GOAT Collective (details to come)', url: 'https://konecnycyclingacademy.com/about' },
    { name: 'KCA Generalized Coaching', regLabel: 'Get started', reg: 'https://konecnycyclingacademy.com', club: 'Konecny Cycling Academy', disc: 'xc', loc: 'Not stated on site', ages: 'Juniors to elite', cost: 2250, costText: '$250/mo', costNote: 'About $2,250 over 9 months; $150 one-time option also listed', lvl: 3, entry: 'Sign up online', train: 'Structured training plan with baseline coach communication', race: 'Same camps as Elite Development', url: 'https://konecnycyclingacademy.com' },
    { name: 'Bike Peddler Racing', regLabel: 'Apply', reg: 'https://form.jotform.com/262187340575057', club: 'Bike Peddler Racing', disc: 'xc', loc: 'Lehi / Pleasant Grove (shop)', ages: '15–22', cost: 1850, costNote: 'Per season; dues reinvested in team. DNA kit at cost', lvl: 4, entry: 'Application; JV or Varsity+ level with race results; limited spots', train: 'Two supported team camps early season; professional coaching and bike fit available', race: 'Local Utah to major national events; MTB and gravel. Pro mechanic at events, shop and sponsor support (Specialized, SRAM, Wahoo)', url: 'https://www.bikepeddlerutah.com/articles/bike-peddler-racing-pg297.htm' },
    { name: 'Maybird Cycling', regLabel: 'Register', reg: 'https://www.maybirdcycling.com/2026-registration', club: 'Maybird', disc: 'xc', loc: 'Wasatch Front (Salt Lake area)', ages: 'Juniors', cost: null, costNote: 'See 2026 Registration page', lvl: 3, entry: 'Online registration', train: 'Community-focused team founded 2017; check FAQ for schedule', race: 'Races I-Cup', url: 'https://www.maybirdcycling.com/2026-registration' },
    { name: 'Summit Bike Club', regLabel: 'Contact club', reg: 'https://summitbikeclub.org', club: 'Summit Bike Club', disc: 'xc', loc: 'Park City (Wasatch Front chapters)', ages: 'U13 to U23', cost: null, costNote: 'Site under construction', lvl: 5, entry: 'Contact club', train: 'Club (10–13) and Devo (14+) tiers historically; professional coaches', race: 'USA Cycling Center of Excellence; riders have raced nationals and Worlds', url: 'https://summitbikeclub.org' },
    { name: 'Aspire', regLabel: null, reg: 'Call (801) 520-4536', club: 'Aspire MTB', disc: 'both', loc: 'Herriman (rides Draper, Eagle Mtn)', ages: '6–18', cost: null, costNote: 'Contact (801) 520-4536', lvl: 2, entry: 'Ride groups open; XC team by application', train: 'Spring skill-based groups 1–3×/week; separate XC and Enduro teams', race: 'Support at local races; racing optional', url: 'https://www.trailforks.com/directory/16320' },
    { name: 'Outlaw Banditos', regLabel: 'Register', reg: 'https://registration.teamsnap.com/form/82530', club: 'Outlaw Bike Team', disc: 'grav', loc: 'Trailside, Solitude, Deer Valley', ages: '6+', cost: 1560, costNote: 'Lift passes not included', lvl: 1, entry: 'Register; capped at 10', train: 'Wednesdays 6–8pm from May; resort days at Solitude from June; ends mid-August', race: 'Entry point to Outlaw teams', url: 'https://www.outlawbiketeam.com/banditos' },
    { name: 'Outlaw Drifters', regLabel: 'Register (after eval)', reg: 'https://registration.teamsnap.com/form/82530', club: 'Outlaw Bike Team', disc: 'grav', loc: 'Wasatch resorts + Draper', ages: '9+', cost: 3100, costNote: 'Lift passes, winter camps extra', lvl: 3, entry: 'Evaluation session or video; 160mm FS bike and full armor required', train: 'Tue/Thu evenings + Sat, April–September; 6:1 athlete-to-coach; freeride camp in Oct', race: 'Utah Gravity Series, Mountain States Cup; invites to Pro DH Series', url: 'https://www.outlawbiketeam.com/drifters' },
    { name: 'Outlaw Nomads', regLabel: 'Register', reg: 'https://registration.teamsnap.com/form/40624', club: 'Outlaw Bike Team', disc: 'grav', loc: 'Deer Valley, Solitude, PCMR', ages: 'Juniors', cost: 3400, costNote: '$1,750 remote option', lvl: 4, entry: '15 Utah + 5 remote spots; 90% attendance; Cat 1 or working toward it', train: 'Tue/Thu/Sat April–September; year-round S&C; Woodward and COR off-season', race: 'Pro DH Series, Mountain States Cup; mechanic and team pit included', url: 'https://www.outlawbiketeam.com/nomads' },
    { name: 'Outlaw Mavericks / Factory', regLabel: null, reg: 'Invitation only', club: 'Outlaw Bike Team', disc: 'grav', loc: 'Utah + travel', ages: 'Juniors (Factory: U17 top 5%)', cost: null, costNote: 'Invite only; not posted', lvl: 5, entry: 'Invitation', train: 'Elite program preparing for World Cup', race: 'UCI World Series pathway (Outlaw Intense Racing)', url: 'https://www.outlawbiketeam.com' },
    { name: 'RaceKraft MTB', regLabel: null, reg: 'No public form; contact team', club: 'RaceKraft', disc: 'grav', loc: 'Park City / Salt Lake', ages: '~11 to pro', cost: null, costNote: 'Not posted', lvl: 4, entry: 'Contact; capped near 20 athletes', train: '6 coaches; small group mentorship; trains Deer Valley, Solitude', race: 'Downhill focus (started as enduro); ~15 raced 2026 Fox US Open', url: 'https://townlift.com/2026/09/local-mountain-bike-teams-gear-up-as-the-fox-us-open-comes-to-deer-valley/' },
];

type SortKey = 'name' | 'loc' | 'cost' | 'lvl';

const CSS = `
.cd{--bg:#f5f6f2;--surface:#fff;--ink:#1f2a24;--muted:#5d6b62;--line:#d9ddd4;--accent:#c4561b;--accent-soft:#f6e3d6;--xc:#2f6b4f;--xc-soft:#dcebe2;--grav:#7a3e8c;--grav-soft:#ece0f0;--pip:#d2d7cf;
  --display:var(--font-brand),'Barlow Condensed','Arial Narrow',sans-serif;
  max-width:1280px;margin:0 auto;padding:28px 16px 48px;display:grid;gap:20px;color:var(--ink);font-size:14px;line-height:1.5}
.cd *{box-sizing:border-box}
.cd header{display:grid;gap:6px;max-width:70ch}
.cd h1{font-family:var(--display);font-weight:700;font-size:clamp(30px,5vw,44px);line-height:1;letter-spacing:.01em;margin:0;text-wrap:balance;text-transform:uppercase}
.cd .lede{color:var(--muted);margin:0}
.cd .bar{display:flex;flex-wrap:wrap;gap:16px 24px;align-items:center}
.cd .group{display:flex;flex-wrap:wrap;gap:6px;align-items:center}
.cd .group>span{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-right:4px}
.cd button.chip{font:inherit;font-size:13px;border:1px solid var(--line);background:var(--surface);color:var(--ink);padding:5px 12px;border-radius:999px;cursor:pointer}
.cd button.chip[aria-pressed="true"]{background:var(--ink);color:var(--bg);border-color:var(--ink)}
.cd button.chip:focus-visible,.cd th button:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.cd .count{font-size:13px;color:var(--muted);margin-left:auto}
.cd .scroll{overflow-x:auto;border:1px solid var(--line);border-radius:10px;background:var(--surface)}
.cd table{border-collapse:collapse;width:100%;min-width:1100px;font-variant-numeric:tabular-nums}
.cd th,.cd td{text-align:left;vertical-align:top;padding:12px 14px;border-bottom:1px solid var(--line)}
.cd thead th{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);font-weight:600;background:var(--surface);position:sticky;top:0}
.cd th button{all:unset;cursor:pointer;display:inline-flex;gap:4px;align-items:center}
.cd th button::after{content:"↕";opacity:.45}
.cd th button[data-dir="asc"]::after{content:"↑";opacity:1}
.cd th button[data-dir="desc"]::after{content:"↓";opacity:1}
.cd tbody tr:last-child td{border-bottom:0}
.cd td.prog,.cd th.prog{position:sticky;left:0;background:var(--surface);min-width:190px;box-shadow:1px 0 0 var(--line)}
.cd .prog b{display:block;font-family:var(--display);font-size:19px;font-weight:700;letter-spacing:.01em;line-height:1.1}
.cd .disc{display:inline-block;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:2px 8px;border-radius:4px}
.cd .disc.xc{background:var(--xc-soft);color:var(--xc)}
.cd .disc.grav{background:var(--grav-soft);color:var(--grav)}
.cd .disc.both{background:var(--accent-soft);color:var(--accent)}
.cd .cost b{font-family:var(--display);font-size:20px;font-weight:700}
.cd .cost small{display:block;color:var(--muted);font-size:12px;max-width:22ch}
.cd .tbd{color:var(--muted);font-style:italic}
.cd .lvl{display:grid;gap:4px;min-width:110px}
.cd .pips{display:flex;gap:3px}
.cd .pips i{width:14px;height:6px;border-radius:2px;background:var(--pip)}
.cd .pips i.on{background:var(--accent)}
.cd .lvl span{font-size:12px;color:var(--muted)}
.cd td.wide{min-width:220px;max-width:300px}
.cd td a{color:var(--accent);text-underline-offset:2px}
.cd .notes{display:grid;gap:8px;max-width:75ch;color:var(--muted);font-size:13px}
.cd .notes h2{font-family:var(--display);text-transform:uppercase;font-size:18px;color:var(--ink);margin:8px 0 0;letter-spacing:.02em}
.cd .notes p{margin:0}
.cd .reg{min-width:130px}.cd .reg a{font-weight:600}.cd .reg small{display:block;color:var(--muted);font-size:11px}.cd .reg .tbd{font-size:13px}
.cd tr.grp td{background:var(--bg);font-family:var(--display);font-size:15px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding-block:8px;color:var(--muted)}
.cd tr.grp td.prog{background:var(--bg);color:var(--ink);font-size:17px}
.cd tr.grp td:not(.prog){font-family:inherit;font-size:12px;font-weight:500;letter-spacing:0;text-transform:none}
.cd .warn{display:inline-block;margin-top:4px;font-size:11px;font-weight:600;letter-spacing:.02em;text-transform:none;color:var(--accent);background:var(--accent-soft);padding:2px 8px;border-radius:4px}
.cd .warn.inline{margin:0 0 0 8px}
.cd .empty{padding:24px;color:var(--muted)}
`;

const hostname = (u: string) => {
    try { return new URL(u).hostname.replace(/^www\./, ''); } catch { return u; }
};

export default function ClubsDirectory() {
    const [disc, setDisc] = useState<'all' | 'xc' | 'grav'>('all');
    const [lvl, setLvl] = useState(0);
    const [sort, setSort] = useState<SortKey>('lvl');
    const [dir, setDir] = useState<'asc' | 'desc'>('desc');

    const toggleSort = (k: SortKey) => {
        if (sort === k) setDir(dir === 'asc' ? 'desc' : 'asc');
        else { setSort(k); setDir(k === 'lvl' ? 'desc' : 'asc'); }
    };

    const groups = useMemo(() => {
        const r = clubPrograms.filter(d => (disc === 'all' || d.disc === disc || d.disc === 'both') && d.lvl >= lvl);
        const m = dir === 'asc' ? 1 : -1;
        r.sort((a, b) => {
            if (sort === 'cost') {
                if (a.cost == null && b.cost == null) return 0;
                if (a.cost == null) return 1;
                if (b.cost == null) return -1;
                return (a.cost - b.cost) * m;
            }
            if (sort === 'lvl') return (a.lvl - b.lvl) * m || ((a.cost ?? 1e9) - (b.cost ?? 1e9));
            return a[sort].localeCompare(b[sort]) * m;
        });
        const best: Record<string, number> = {};
        r.forEach(d => { best[d.club] = Math.max(best[d.club] || 0, d.lvl); });
        const order = [...new Set(r.map(d => d.club))].sort((a, b) => (best[b] - best[a]) || a.localeCompare(b));
        return { total: r.length, list: order.map(c => [c, r.filter(d => d.club === c)] as const) };
    }, [disc, lvl, sort, dir]);

    const dirOf = (k: SortKey) => (sort === k ? dir : undefined);

    return (
        <div className="cd">
            <style>{CSS}</style>
            <header>
                <h1>Utah Junior MTB Clubs</h1>
                <p className="lede">Non-NICA club and development teams for youth riders, compared on cost, level, location and commitment. Fees are the published base for the 2026–27 season; camps, travel, race entries and extra kit usually cost more.</p>
            </header>

            <div className="bar" role="group" aria-label="Filters">
                <div className="group"><span>Discipline</span>
                    {([['all', 'All'], ['xc', 'XC'], ['grav', 'Gravity / DH / Enduro']] as const).map(([id, label]) => (
                        <button key={id} className="chip" aria-pressed={disc === id} onClick={() => setDisc(id)}>{label}</button>
                    ))}
                </div>
                <div className="group"><span>Level</span>
                    {([[0, 'Any'], [3, 'Competitive +'], [4, 'National +']] as const).map(([id, label]) => (
                        <button key={id} className="chip" aria-pressed={lvl === id} onClick={() => setLvl(id)}>{label}</button>
                    ))}
                </div>
                <div className="count">{groups.total} of {clubPrograms.length} programs</div>
            </div>

            <div className="scroll">
                <table>
                    <thead>
                        <tr>
                            <th className="prog"><button data-dir={dirOf('name')} onClick={() => toggleSort('name')}>Program</button></th>
                            <th>Discipline</th>
                            <th><button data-dir={dirOf('loc')} onClick={() => toggleSort('loc')}>Base</button></th>
                            <th>Ages</th>
                            <th><button data-dir={dirOf('cost')} onClick={() => toggleSort('cost')}>Annual fee</button></th>
                            <th><button data-dir={dirOf('lvl')} onClick={() => toggleSort('lvl')}>Level</button></th>
                            <th>Entry</th>
                            <th>Requirements</th>
                            <th>Training &amp; schedule</th>
                            <th>Racing &amp; extras</th>
                            <th>Register</th>
                        </tr>
                    </thead>
                    <tbody>
                        {groups.total === 0 && (
                            <tr><td colSpan={11} className="empty">No programs match these filters.</td></tr>
                        )}
                        {groups.list.map(([club, ds]) => (
                            <GroupRows key={club} club={club} ds={ds} />
                        ))}
                    </tbody>
                </table>
            </div>

            <section className="notes">
                <h2>Reading the matrix</h2>
                <p>Level runs 1 to 5: Recreational, Development, Competitive (local/regional racing, e.g. I-Cup or Utah Gravity Series), National (USA Cycling nationals, Pro XCT, Pro DH Series) and Elite (UCI juniors and World Cup pathway). It is a judgment based on each program&apos;s stated entry requirements and race calendar.</p>
                <p>&quot;Not posted&quot; means the fee wasn&apos;t on a public page. Maybird&apos;s site was rate-limiting requests, Summit Bike Club&apos;s site is under construction, and Aspire and RaceKraft don&apos;t publish prices. Those need a direct email.</p>
                <p>Deadlines: Accel&apos;s 2027 application window has closed (late applications page exists). Flyers Enduro registration opens December 1. Outlaw tuition is due December 31. VeloLove opens 2027 sign-ups this winter and is usually free. Rouleur may not field a team for 2027; its riders appear to be splitting off into other teams, so treat its fees and tiers as last season&apos;s. Team SoHo&apos;s posted fees and dates are from its 2026 season page (applications ran Oct 1 to Nov 24 last cycle); confirm 2027 details with the team.</p>
            </section>
        </div>
    );
}

function GroupRows({ club, ds }: { club: string; ds: readonly Program[] }) {
    return (
        <>
            <tr className="grp">
                <td className="prog">{club}</td>
                <td colSpan={10}>
                    {ds.length} program{ds.length > 1 ? 's' : ''} · {ds[0].loc}
                    {ds[0].status && (
                        <span className="warn inline">{ds[0].status}: posted fees are from 2026 and riders may be moving to other teams</span>
                    )}
                </td>
            </tr>
            {ds.map(d => (
                <tr key={d.name}>
                    <td className="prog">
                        <b>{d.name}</b>
                        {d.status && <span className="warn">{d.status}</span>}
                    </td>
                    <td><span className={`disc ${d.disc}`}>{DISC_LABEL[d.disc]}</span></td>
                    <td>{d.loc}</td>
                    <td>{d.ages}</td>
                    <td className="cost">
                        {d.cost == null
                            ? <span className="tbd">Not posted</span>
                            : d.cost === 0
                                ? <b>Free</b>
                                : <b>{d.costText || '$' + d.cost.toLocaleString('en-US')}</b>}
                        <small>{d.costNote}</small>
                    </td>
                    <td>
                        <div className="lvl">
                            <div className="pips">
                                {[1, 2, 3, 4, 5].map(i => <i key={i} className={i <= d.lvl ? 'on' : ''} />)}
                            </div>
                            <span>{LEVELS[d.lvl]}</span>
                        </div>
                    </td>
                    <td className="wide">{d.entry}</td>
                    <td className="wide">{d.req ?? <span className="tbd">Not listed</span>}</td>
                    <td className="wide">{d.train}</td>
                    <td className="wide">{d.race} <a href={d.url} target="_blank" rel="noopener">Source</a></td>
                    <td className="reg">
                        {d.regLabel
                            ? <><a href={d.reg} target="_blank" rel="noopener">{d.regLabel}</a><small>{hostname(d.reg)}</small></>
                            : <span className="tbd">{d.reg}</span>}
                    </td>
                </tr>
            ))}
        </>
    );
}
