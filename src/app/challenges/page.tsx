import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Eagle Mountain Challenges | Lehi MTB Hub',
    description: 'Gamified riding challenges at Eagle Mountain for Lehi MTB ride groups. Earn bragging rights and push your limits.',
};

type Challenge = {
    name: string;
    description: string;
    rules: string;
    tier: 'bronze' | 'silver' | 'gold' | 'legendary';
    scope: 'single-practice' | 'multi-session';
    category: 'laps' | 'climbing' | 'trail' | 'routes' | 'endurance' | 'skills';
    trailforksUrl?: string;
    trailforksRouteId?: number;
    trailforksTrailId?: number;
};

const TRAILFORKS_REGION = 'https://www.trailforks.com/region/eagle-mountain-13896/';

const challenges: Challenge[] = [
    // — Lap Challenges —
    {
        name: 'First Lap',
        description: 'Complete 1 full lap of the Eagle Mountain race course. Your first lap is a big deal.',
        rules: 'Must be completed with your ride group during one practice session. No shortcuts.',
        tier: 'bronze',
        scope: 'single-practice',
        category: 'laps',
    },
    {
        name: 'The Warm-Up',
        description: '2 laps of the race course in a single practice. Building that race day rhythm.',
        rules: 'Both laps must be completed with your ride group during one practice session. No shortcuts.',
        tier: 'bronze',
        scope: 'single-practice',
        category: 'laps',
    },
    {
        name: 'The Hat Trick',
        description: 'Complete 3 full laps of the Eagle Mountain race course in a single practice.',
        rules: 'All 3 laps must be completed with your ride group during one practice session. No shortcuts.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'laps',
    },
    {
        name: 'Radio Star',
        description: '10 laps of the Radio Free Europe climb in a single practice. Spin city.',
        rules: 'All 10 laps must be completed with your ride group during one practice session. Full climb each lap.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'laps',
    },
    {
        name: 'The Quad Crusher',
        description: 'Take on 4 full laps of the race course in one practice. Your quads will remember this.',
        rules: 'All 4 laps completed with your ride group in a single practice. Walk breaks are allowed, but you must finish every lap.',
        tier: 'gold',
        scope: 'single-practice',
        category: 'laps',
    },
    {
        name: 'Famous Five',
        description: '5 laps. One practice. Legend status.',
        rules: 'Complete 5 full race course laps with your ride group in one practice. No lap may be skipped or shortened.',
        tier: 'legendary',
        scope: 'single-practice',
        category: 'laps',
    },
    {
        name: 'Broadcast Legend',
        description: '20 laps of Radio Free Europe. You own that climb now.',
        rules: 'All 20 laps must be completed with your ride group during one practice session. No partial laps count.',
        tier: 'legendary',
        scope: 'single-practice',
        category: 'laps',
    },

    // — Climbing Challenges —
    {
        name: 'First Ascent',
        description: '500 feet of climbing in a single practice at Eagle Mountain. Your legs are warming up.',
        rules: 'Must be done with your ride group. Ride leader verifies.',
        tier: 'bronze',
        scope: 'single-practice',
        category: 'climbing',
    },
    {
        name: 'Cloud Chaser',
        description: 'Rack up 1,000 feet of climbing in a single practice at Eagle Mountain.',
        rules: 'Must be done with your ride group. Ride leader verifies.',
        tier: 'bronze',
        scope: 'single-practice',
        category: 'climbing',
    },
    {
        name: 'Oxygen Thief',
        description: '2,000 feet of climbing in one practice. The air gets thin up here.',
        rules: 'All climbing must happen during a single practice with your ride group. Ride leader verifies.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'climbing',
    },
    {
        name: 'Thin Air Society',
        description: '3,000 feet of vertical in a single practice. You\'ve earned every foot of this.',
        rules: 'Must be completed with your ride group in a single practice session. Ride leader verifies.',
        tier: 'gold',
        scope: 'single-practice',
        category: 'climbing',
    },
    {
        name: 'Above the Clouds',
        description: '4,000 feet of climbing in a single practice. You\'re not just riding — you\'re ascending.',
        rules: 'Must be completed with your ride group in a single practice session. Ride leader verifies.',
        tier: 'legendary',
        scope: 'single-practice',
        category: 'climbing',
    },
    {
        name: 'Everesting the Eagle',
        description: 'Accumulate 29,032 feet of climbing at Eagle Mountain over the season. Yes, that\'s the height of Everest.',
        rules: 'Total climbing across all Eagle Mountain practices during the season. Ride leader tracks.',
        tier: 'legendary',
        scope: 'multi-session',
        category: 'climbing',
    },

    // — Trail Feature Challenges —
    {
        name: 'The Snake Charmer',
        description: 'Complete Jake the Snake end-to-end. 3 miles of upper-intermediate singletrack along the southern ridge.',
        rules: 'Ride the full trail with your ride group in a single practice. Ride leader verifies.',
        tier: 'bronze',
        scope: 'single-practice',
        category: 'trail',
        trailforksUrl: 'https://www.trailforks.com/trails/jake-the-snake/',
        trailforksTrailId: 7101,
    },
    {
        name: 'Deadwood Drifter',
        description: 'Ride the full Deadwood trail end-to-end. The most popular trail at Eagle Mountain for a reason.',
        rules: 'Complete the full Deadwood trail with your ride group in a single practice. Ride leader verifies.',
        tier: 'bronze',
        scope: 'single-practice',
        category: 'trail',
        trailforksUrl: 'https://www.trailforks.com/trails/deadwood-27108/',
        trailforksTrailId: 27108,
    },
    {
        name: 'Cracker Jack Snack',
        description: 'Ride Cracker Jack into Supersonic and back. A quick out-and-back through the middle zone.',
        rules: 'Both trails must be completed with your ride group in a single practice. Ride leader verifies.',
        tier: 'bronze',
        scope: 'single-practice',
        category: 'trail',
        trailforksUrl: 'https://www.trailforks.com/trails/cracker-jack-353346/',
        trailforksTrailId: 353346,
    },
    {
        name: 'Turtle Power',
        description: 'Take on the full Turtle Hill climb. Keep those pedals turning all the way to the top.',
        rules: 'Ride the full Turtle Hill climb with your ride group. Ride leader verifies.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'trail',
        trailforksUrl: TRAILFORKS_REGION,
    },
    {
        name: 'Living on the Edge',
        description: 'Complete the full Cliffside trail. Great views along the way.',
        rules: 'Ride the entirety of Cliffside with your ride group in a single practice.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'trail',
        trailforksUrl: TRAILFORKS_REGION,
    },
    {
        name: 'Fistful of Guts',
        description: 'Ride Fistful of Dollars — expert-level rock steeps that\'ll test your nerve.',
        rules: 'Complete the full trail with your ride group. Ride leader confirms. Walk sections are OK but you must attempt every feature.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'trail',
        trailforksUrl: 'https://www.trailforks.com/trails/fistful-of-dollars/',
        trailforksTrailId: 210160,
    },
    {
        name: 'Thunder Road',
        description: 'Climb the entire doubletrack to Big Thunder without putting a foot down. Steady effort, big payoff.',
        rules: 'No foot dabs on the full doubletrack climb. Must be completed with your ride group in a single practice. Ride leader confirms a clean run.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'trail',
        trailforksUrl: TRAILFORKS_REGION,
    },
    {
        name: 'Cow Tracks to the Top',
        description: 'Clear Cow Tracks and the Ridgeline climb without putting a foot down. Pure pedal power.',
        rules: 'No foot dabs on either trail. Both must be ridden back-to-back with your ride group in a single practice. Ride leader confirms a clean run.',
        tier: 'gold',
        scope: 'single-practice',
        category: 'trail',
        trailforksUrl: 'https://www.trailforks.com/trails/cow-tracks/',
        trailforksTrailId: 25499,
    },
    {
        name: 'Ridgeline Runner',
        description: 'Ride the entire Ridgeline trail without putting a foot down. Every pedal stroke counts.',
        rules: 'No foot dabs on the full Ridgeline trail. Must be completed with your ride group in a single practice. Ride leader confirms a clean run.',
        tier: 'gold',
        scope: 'single-practice',
        category: 'trail',
        trailforksUrl: TRAILFORKS_REGION,
    },
    {
        name: 'The Triple Threat',
        description: 'Fistful of Dollars, Big Thunder, and 220 — all in one practice. Three trails, zero quit.',
        rules: 'All three trails must be completed with your ride group during one practice session. Ride leader verifies.',
        tier: 'gold',
        scope: 'single-practice',
        category: 'trail',
        trailforksUrl: 'https://www.trailforks.com/trails/fistful-of-dollars/',
        trailforksTrailId: 210160,
    },
    {
        name: 'Summit Collector',
        description: 'Hit every major climb at Eagle Mountain in a single practice. All of them.',
        rules: 'All major climbs must be completed with your ride group during one practice session. Ride leader verifies.',
        tier: 'gold',
        scope: 'single-practice',
        category: 'trail',
        trailforksUrl: TRAILFORKS_REGION,
    },
    {
        name: 'The Full Eagle',
        description: 'Ride every rideable trail at Eagle Mountain in a single session. Leave nothing unridden.',
        rules: 'Must be completed with your ride group. Ride leader verifies.',
        tier: 'legendary',
        scope: 'single-practice',
        category: 'trail',
        trailforksUrl: TRAILFORKS_REGION,
    },

    // — Route Challenges —
    // All routes link to actual Trailforks routes at Mountain Ranch Bike Park / Eagle Mountain

    // Bronze (short routes & multi-lap)
    {
        name: 'Up Down Around',
        description: 'The Up Down Around loop — 4 miles, 657 feet of climbing. Supersonic, Creed, and Treadstone Connect. Perfect when you have about an hour.',
        rules: 'Complete the full route with your ride group. Ride leader verifies.',
        tier: 'bronze',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/route/up-down-around-loop/',
        trailforksRouteId: 7138,
    },
    {
        name: 'Best Short Loop',
        description: 'The best short loop from the bike park — 7 miles, 1,060 feet of climbing. Action-packed with Rock-a-Billy, Brass Monkey, and 220.',
        rules: 'Complete the full route with your ride group. Ride leader verifies.',
        tier: 'bronze',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/route/best-short-loop-from-bike-park/',
        trailforksRouteId: 25322,
    },
    {
        name: 'Scout\'s Honor',
        description: 'The Boy Scout Merit Badge 8-miler — 8 miles, 831 feet of climbing. Starts easy on dirt road, then hits Jackrabbit, Deadwood, and Billy Idol.',
        rules: 'Complete the full route with your ride group. Ride leader verifies.',
        tier: 'bronze',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/route/boy-scout-merit-badge-8-mile-uc/',
        trailforksRouteId: 3216,
    },
    {
        name: 'Winter Blues Buster',
        description: 'The EaMo Winter Blues route — 8 miles, 1,168 feet of climbing. Hits the trails that become rideable first in the system.',
        rules: 'Complete the full route with your ride group. Ride leader verifies.',
        tier: 'bronze',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/route/eamo-winter-blues/',
        trailforksRouteId: 26097,
    },
    {
        name: 'EaMo 8 Miler',
        description: 'The EaMo 8 Miler from the bike park — 8 miles, 1,010 feet of climbing. Includes Deadwood, Roadrunner, and Ridgeline.',
        rules: 'Complete the full route with your ride group. Ride leader verifies.',
        tier: 'bronze',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/route/eamo-8-miler-from-bike-park/',
        trailforksRouteId: 18513,
    },

    // Silver (10–12 mi)
    {
        name: 'Lehi MTB Purple',
        description: 'The Lehi MTB Purple loop — 10 miles, 1,174 feet of climbing. Jackrabbit, Deadwood, Roadrunner. Great flow in either direction.',
        rules: 'Complete the full route with your ride group. Ride leader verifies.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/route/alta-mtb-purple/',
        trailforksRouteId: 3730,
    },
    {
        name: 'Purple Mountains Majesty',
        description: 'A great way to experience some of the best Eagle Mountain singletrack — 11 miles, 1,206 feet. Jackrabbit, Deadwood, Billy Idol. Best ridden clockwise.',
        rules: 'Complete the full route with your ride group. Ride leader verifies.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/route/purple-mountains-majesty/',
        trailforksRouteId: 6424,
    },
    {
        name: 'No Eagles Were Found',
        description: 'The "No Eagles Were Found" loop — 11 miles, 1,180 feet. Deadwood, Billy Idol, Rock-a-Billy Access.',
        rules: 'Complete the full route with your ride group. Ride leader verifies.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/route/no-eagles-were-found/',
        trailforksRouteId: 9974,
    },
    {
        name: 'The Highlight Reel',
        description: '12-mile highlight of Eagle Mountain (minus the blacks) — 1,622 feet of climbing. All the best trails without the expert-level features.',
        rules: 'Complete the full route with your ride group. Ride leader verifies.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/route/12-mile-highlight-of-eagle-mountain-minus-the-blacks/',
        trailforksRouteId: 21697,
    },
    {
        name: 'Triple Race',
        description: 'Three laps of the EaMo NICA Race Course — 18 miles, ~1,557 feet of climbing. Race day intensity times three.',
        rules: 'All three laps must be completed with your ride group in a single practice. Ride leader verifies.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/route/eamo-nica-race-course/',
        trailforksRouteId: 38682,
    },

    // Gold (13–16 mi)
    {
        name: 'The Best Of',
        description: 'The Best Of Eagle Mountain — 13 miles, 1,529 feet. Deer Tracks, Cow Tracks, Cougar Tracks, and more. The best of everything in one loop.',
        rules: 'Complete the full route with your ride group. Ride leader verifies.',
        tier: 'gold',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/route/the-best-of/',
        trailforksRouteId: 17070,
    },
    {
        name: 'Tour of Eagle Mnt',
        description: 'Tour of Eagle Mountain — 13 miles, 1,704 feet of climbing. Prayer Flags, 411, Fistful of Dollars, Rock-a-Billy. A full tour.',
        rules: 'Complete the full route with your ride group. Ride leader verifies.',
        tier: 'gold',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/route/tour-of-eagle-mnt/',
        trailforksRouteId: 32889,
    },
    {
        name: 'Nirvana, Back, Race and Coyote',
        description: 'Nirvana, Backspacer, Race Course, and Wile E Coyote with Treadstone and Supersonic back — 13 miles, 1,361 feet. Samples most trails in 90–120 minutes.',
        rules: 'Complete the full route with your ride group. Ride leader verifies.',
        tier: 'gold',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/route/nirvana-back-race-and-coyote-with-tread-and-supersonic-back/',
        trailforksRouteId: 10117,
    },
    {
        name: 'Save the Clock Tower',
        description: 'Save the Clock Tower — 15 miles of intermediate riding.',
        rules: 'Complete the full route with your ride group. Ride leader verifies.',
        tier: 'gold',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/route/save-the-clock-tower/',
        trailforksRouteId: 6441,
    },
    {
        name: 'Tour De Emo',
        description: 'Tour De Emo — 16 miles, 2,197 feet of climbing. A full intro to the intermediate trails including Fistful of Dollars as your first black diamond.',
        rules: 'Complete the full route with your ride group. Ride leader verifies.',
        tier: 'gold',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/route/tour-de-emo/',
        trailforksRouteId: 56300,
    },

    // Legendary (19+ mi)
    {
        name: 'The Best of Eagle Mountain',
        description: 'The Best of Eagle Mountain — 19 miles, 2,652 feet of climbing, 61 trails. The definitive Eagle Mountain ride.',
        rules: 'Complete the full route with your ride group. Ride leader verifies.',
        tier: 'legendary',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/route/the-best-of-eagle-mountain/',
        trailforksRouteId: 6453,
    },
    {
        name: 'Tour of Eagle Mountain',
        description: 'Tour of Eagle Mountain — 21 miles, 2,496 feet of climbing. A sampling of every trail in the system, including technical features.',
        rules: 'Complete the full route with your ride group. Ride leader verifies.',
        tier: 'legendary',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/route/tour-of-eagle-mountain/',
        trailforksRouteId: 22151,
    },
    {
        name: 'Eagle Mountain 29er',
        description: 'The Eagle Mountain 29er — 29 miles, 4,535 feet of climbing. Covers the majority of popular trails. The ultimate endurance test.',
        rules: 'Complete the full route with your ride group. Ride leader verifies.',
        tier: 'legendary',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/route/eagle-mountain-29er/',
        trailforksRouteId: 18903,
    },

    // — Skills Challenges —
    {
        name: 'Pump It Up',
        description: 'Complete a full paved pump track session. Generate speed without pedaling.',
        rules: 'Attend an organized pump track session with your ride group. Ride leader verifies.',
        tier: 'bronze',
        scope: 'single-practice',
        category: 'skills',
    },
    {
        name: 'Corner Pocket',
        description: 'Complete a cornering clinic. Flat turns, berms, off-camber — rail them all.',
        rules: 'Attend a coach-led cornering clinic with your ride group. Ride leader verifies.',
        tier: 'bronze',
        scope: 'single-practice',
        category: 'skills',
    },
    {
        name: 'Brake Check',
        description: 'Complete a braking skills session. Front/rear balance, modulation, and emergency stops.',
        rules: 'Attend a coach-led braking clinic with your ride group. Ride leader verifies.',
        tier: 'bronze',
        scope: 'single-practice',
        category: 'skills',
    },
    {
        name: 'Pace Setter',
        description: 'Lead your ride group for a full trail segment. Set the pace, pick the lines, keep it smooth.',
        rules: 'Must lead from the front for an entire trail segment during practice. Ride leader verifies.',
        tier: 'bronze',
        scope: 'single-practice',
        category: 'skills',
    },
    {
        name: 'Body English',
        description: 'Complete an attack position clinic. Heels down, elbows out, eyes forward.',
        rules: 'Attend a coach-led body position clinic with your ride group. Ride leader verifies.',
        tier: 'bronze',
        scope: 'single-practice',
        category: 'skills',
    },
    {
        name: 'Switchback Ninja',
        description: 'Clean 10 switchbacks in a row without dabbing. Tight turns, smooth exits.',
        rules: 'Must be consecutive switchbacks on a single trail with your ride group. Ride leader verifies a clean run.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'skills',
    },
    {
        name: 'Rock Steady',
        description: 'Complete a rock garden skills session. Pick your line and commit.',
        rules: 'Attend a coach-led rock garden clinic with your ride group. Ride leader verifies.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'skills',
    },
    {
        name: 'Fix It Yourself',
        description: 'Fix a flat trailside during a practice. Tube or plug — either counts.',
        rules: 'Must be done during a practice ride with your ride group. Ride leader confirms you handled it.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'skills',
    },
    {
        name: 'Trackstand',
        description: 'Hold a trackstand for 10 seconds. Balance, focus, zero movement.',
        rules: 'Must be demonstrated during a practice with your ride group. Ride leader verifies.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'skills',
    },
    {
        name: 'Statue',
        description: 'Hold a trackstand for 1 full minute. Total control.',
        rules: 'Must be demonstrated during a practice with your ride group. Ride leader times and verifies.',
        tier: 'gold',
        scope: 'single-practice',
        category: 'skills',
    },
    {
        name: 'Snack Captain',
        description: 'Bring a trail snack to share with your ride group at a practice. Fueling the team is a skill too.',
        rules: 'Bring enough for your whole ride group. Ride leader verifies the good vibes.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'skills',
    },
    {
        name: 'Trail Boss',
        description: 'Complete 3 hours of trail building or maintenance. Give back to the trails you ride.',
        rules: 'Must be an organized trail day. Ride leader or trail day coordinator verifies hours.',
        tier: 'gold',
        scope: 'multi-session',
        category: 'skills',
    },
    {
        name: 'Wrench Time',
        description: 'Complete a bike maintenance clinic — chain care, brake adjustment, or wheel truing.',
        rules: 'Attend a coach-led or shop-led maintenance session. Ride leader verifies.',
        tier: 'gold',
        scope: 'single-practice',
        category: 'skills',
    },
    {
        name: 'Teammate Assist',
        description: 'Help a teammate fix a mechanical issue on the trail. Flats, chains, derailleurs — whatever it takes.',
        rules: 'Must be during a practice ride with your ride group. Ride leader confirms you helped.',
        tier: 'gold',
        scope: 'single-practice',
        category: 'skills',
    },
    {
        name: 'Skills Master',
        description: 'Complete all bronze and silver skills challenges in a single season. The complete rider.',
        rules: 'All bronze and silver skills challenges must be verified by ride leaders during the same season.',
        tier: 'legendary',
        scope: 'multi-session',
        category: 'skills',
    },

    // — Endurance Challenges (Season-Long, Cumulative Group Miles) —
    {
        name: 'Fledgling',
        description: 'Your ride group logs 100 cumulative miles at Eagle Mountain over the season. That\'s showing up and putting in work.',
        rules: 'Each practice counts once as the group\'s mileage (not per rider). ~12 practices averaging about 8–9 miles each. Ride leader tracks.',
        tier: 'bronze',
        scope: 'multi-session',
        category: 'endurance',
    },
    {
        name: 'Century Club',
        description: '150 cumulative group miles at Eagle Mountain. Your group is building serious mileage.',
        rules: 'Each practice counts once as the group\'s mileage. ~12 practices averaging 12–13 miles each. Ride leader tracks.',
        tier: 'silver',
        scope: 'multi-session',
        category: 'endurance',
    },
    {
        name: 'Soaring Eagle',
        description: '200 cumulative group miles. Your ride group goes big every practice.',
        rules: 'Each practice counts once as the group\'s mileage. Requires consistently pushing into 16+ mile practices. Ride leader tracks.',
        tier: 'gold',
        scope: 'multi-session',
        category: 'endurance',
    },
    {
        name: 'Iron Eagle',
        description: '300 cumulative group miles. Your ride group is relentless. This one requires riding to and from practices to complete.',
        rules: 'Each practice counts once as the group\'s mileage — including rides to and from the trailhead. Ride leader tracks.',
        tier: 'legendary',
        scope: 'multi-session',
        category: 'endurance',
    },
];

const tierConfig = {
    bronze: { label: 'Bronze', color: '#cd7f32', bg: 'rgba(205,127,50,0.1)', border: 'rgba(205,127,50,0.3)' },
    silver: { label: 'Silver', color: '#a0a4b0', bg: 'rgba(160,164,176,0.1)', border: 'rgba(160,164,176,0.3)' },
    gold: { label: 'Gold', color: '#d4a017', bg: 'rgba(212,160,23,0.1)', border: 'rgba(212,160,23,0.3)' },
    legendary: { label: 'Legendary', color: 'rgb(var(--color-primary))', bg: 'rgba(87,43,158,0.1)', border: 'rgba(87,43,158,0.3)' },
};

const categoryLabels: Record<Challenge['category'], string> = {
    laps: 'Lap Challenges',
    climbing: 'Climbing Challenges',
    trail: 'Trail Challenges',
    routes: 'Route Challenges',
    skills: 'Skills Challenges',
    endurance: 'Endurance Challenges',
};

const categoryDescriptions: Record<Challenge['category'], string> = {
    laps: 'How many laps can your group crush in one practice?',
    climbing: 'Earn your elevation. Every foot counts.',
    trail: 'Specific trails and features to conquer.',
    routes: 'Longer rides in the 4–29 mile range. Explore the full trail system.',
    skills: 'Clinics, maintenance, teamwork, and giving back. Become a complete rider.',
    endurance: 'Season-long cumulative group miles. Each practice counts once — your group\'s total mileage for that ride.',
};

const categories: Challenge['category'][] = ['laps', 'climbing', 'trail', 'routes', 'skills', 'endurance'];

export default function Challenges() {
    return (
        <div className="animate-fade-in">

            {/* Header */}
            <div style={{
                background: 'linear-gradient(135deg, rgb(var(--color-primary)), rgb(var(--color-primary-light)))',
                color: 'white',
                padding: 'var(--spacing-xl) 0',
            }}>
                <div className="container">
                    <p style={{ fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.75, marginBottom: '0.5rem' }}>Eagle Mountain</p>
                    <h1 style={{ marginBottom: '0.75rem' }}>Trail Challenges</h1>
                    <p style={{ opacity: 0.9, fontSize: '1.125rem', maxWidth: '640px', lineHeight: 1.6 }}>
                        Challenge yourself and your ride group. Complete challenges, earn tiers, and see what you can accomplish together. Every challenge is completed with your ride group.
                    </p>
                </div>
            </div>

            <div className="container" style={{ padding: 'var(--spacing-xl) 0' }}>

                {/* How It Works */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
                    <div className="glass-panel" style={{ padding: 'var(--spacing-md)', borderTop: '4px solid #cd7f32' }}>
                        <h3 style={{ marginBottom: '0.5rem' }}>Ride Group Required</h3>
                        <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                            All challenges must be completed during an official practice with your ride group (Groups 1–12). Your ride leader or coach confirms completion.
                        </p>
                    </div>
                    <div className="glass-panel" style={{ padding: 'var(--spacing-md)', borderTop: '4px solid #d4a017' }}>
                        <h3 style={{ marginBottom: '0.5rem' }}>Earn Your Tier</h3>
                        <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                            Challenges are ranked <strong>Bronze</strong>, <strong>Silver</strong>, <strong>Gold</strong>, and <strong style={{ color: 'rgb(var(--color-primary))' }}>Legendary</strong>. Start where you are and work your way up.
                        </p>
                    </div>
                    <div className="glass-panel" style={{ padding: 'var(--spacing-md)', borderTop: '4px solid rgb(var(--color-primary))' }}>
                        <h3 style={{ marginBottom: '0.5rem' }}>Track & Submit</h3>
                        <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                            Your ride leader verifies completion. Submit completions through the form below to get on the board.
                        </p>
                    </div>
                </div>

                {/* Challenge Categories */}
                {categories.map((cat) => {
                    const items = challenges.filter((c) => c.category === cat);
                    return (
                        <section key={cat} style={{ marginBottom: 'var(--spacing-xl)' }}>
                            <h2 style={{ marginBottom: '0.25rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>
                                {categoryLabels[cat]}
                            </h2>
                            <p className="text-muted" style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.95rem' }}>
                                {categoryDescriptions[cat]}
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                                {items.map((challenge) => {
                                    const tier = tierConfig[challenge.tier];
                                    return (
                                        <div
                                            key={challenge.name}
                                            className="glass-panel"
                                            style={{
                                                padding: 'var(--spacing-md) var(--spacing-lg)',
                                                borderLeft: `4px solid ${tier.color}`,
                                                display: 'flex',
                                                gap: '1.5rem',
                                                alignItems: 'flex-start',
                                                flexWrap: 'wrap',
                                            }}
                                        >
                                            <div style={{ flex: 1, minWidth: '260px' }}>
                                                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                                                    <span style={{
                                                        padding: '0.2rem 0.6rem',
                                                        fontSize: '0.7rem',
                                                        fontWeight: 800,
                                                        letterSpacing: '0.08em',
                                                        textTransform: 'uppercase',
                                                        borderRadius: 'var(--radius-sm)',
                                                        background: tier.bg,
                                                        color: tier.color,
                                                        border: `1px solid ${tier.border}`,
                                                    }}>
                                                        {tier.label}
                                                    </span>
                                                    <span style={{
                                                        padding: '0.2rem 0.6rem',
                                                        fontSize: '0.7rem',
                                                        fontWeight: 700,
                                                        borderRadius: 'var(--radius-sm)',
                                                        background: 'rgba(var(--text-muted), 0.1)',
                                                        color: 'rgb(var(--text-muted))',
                                                    }}>
                                                        {challenge.scope === 'multi-session' ? 'Season' : 'Single Practice'}
                                                    </span>
                                                </div>
                                                <h3 style={{ marginBottom: '0.35rem' }}>{challenge.name}</h3>
                                                <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '0.5rem' }}>
                                                    {challenge.description}
                                                </p>
                                                <p style={{ fontSize: '0.8rem', color: 'rgb(var(--text-muted))', fontStyle: 'italic' }}>
                                                    {challenge.rules}
                                                </p>
                                                {(challenge.trailforksUrl || challenge.trailforksRouteId || challenge.trailforksTrailId) && (
                                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                                                        {challenge.trailforksUrl && (
                                                            <a
                                                                href={challenge.trailforksUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgb(var(--color-primary))' }}
                                                            >
                                                                View on Trailforks →
                                                            </a>
                                                        )}
                                                        {challenge.trailforksRouteId && (
                                                            <a
                                                                href={`trailforks://goto/route/${challenge.trailforksRouteId}`}
                                                                style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgb(var(--color-primary))' }}
                                                            >
                                                                Open in App →
                                                            </a>
                                                        )}
                                                        {challenge.trailforksTrailId && (
                                                            <a
                                                                href={`trailforks://goto/trail/${challenge.trailforksTrailId}`}
                                                                style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgb(var(--color-primary))' }}
                                                            >
                                                                Open in App →
                                                            </a>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    );
                })}

                {/* Tracking / Submit Section */}
                <div className="glass-panel" style={{ padding: 'var(--spacing-xl)', borderTop: '4px solid rgb(var(--color-primary))', marginTop: 'var(--spacing-lg)' }}>
                    <h2 style={{ marginBottom: '0.5rem' }}>Submit a Challenge Completion</h2>
                    <p className="text-muted" style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '640px' }}>
                        Completed a challenge? Submit it here. Your ride leader verifies, and your name goes on the board.
                    </p>
                    <p className="text-muted" style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.9rem', fontStyle: 'italic' }}>
                        Submission form coming soon — stay tuned!
                    </p>
                </div>

            </div>
        </div>
    );
}
