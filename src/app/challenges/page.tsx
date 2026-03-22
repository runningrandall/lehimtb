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
    category: 'laps' | 'climbing' | 'trail' | 'routes' | 'endurance';
    trailforksUrl?: string;
};

const TRAILFORKS_REGION = 'https://www.trailforks.com/region/eagle-mountain-13896/';

const challenges: Challenge[] = [
    // — Lap Challenges —
    {
        name: 'The Warm-Up',
        description: '2 laps of the race course in a single practice. Just getting started.',
        rules: 'Both laps must be completed with your ride group during one practice session. No shortcuts.',
        tier: 'bronze',
        scope: 'single-practice',
        category: 'laps',
        trailforksUrl: TRAILFORKS_REGION,
    },
    {
        name: 'The Hat Trick',
        description: 'Complete 3 full laps of the Eagle Mountain race course in a single practice.',
        rules: 'All 3 laps must be completed with your ride group during one practice session. No shortcuts.',
        tier: 'bronze',
        scope: 'single-practice',
        category: 'laps',
        trailforksUrl: TRAILFORKS_REGION,
    },
    {
        name: 'The Quad Crusher',
        description: 'Survive 4 full laps of the race course in one practice. Your quads will remember this.',
        rules: 'All 4 laps completed with your ride group in a single practice. Walk breaks are allowed, but you must finish every lap.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'laps',
        trailforksUrl: TRAILFORKS_REGION,
    },
    {
        name: 'Famous Five',
        description: '5 laps. One practice. Legend status.',
        rules: 'Complete 5 full race course laps with your ride group in one practice. No lap may be skipped or shortened.',
        tier: 'gold',
        scope: 'single-practice',
        category: 'laps',
        trailforksUrl: TRAILFORKS_REGION,
    },

    // — Beginner Trail Laps (Radio Free Europe) —
    {
        name: 'Radio Star',
        description: '10 laps of the Radio Free Europe climb in a single practice. Spin city.',
        rules: 'All 10 laps must be completed with your ride group during one practice session. Full climb each lap.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'laps',
        trailforksUrl: 'https://www.trailforks.com/trails/radio-free-europe/',
    },
    {
        name: 'Broadcast Legend',
        description: '20 laps of Radio Free Europe. You own that climb now.',
        rules: 'All 20 laps must be completed with your ride group during one practice session. No partial laps count.',
        tier: 'legendary',
        scope: 'single-practice',
        category: 'laps',
        trailforksUrl: 'https://www.trailforks.com/trails/radio-free-europe/',
    },

    // — Climbing Challenges —
    {
        name: 'Cloud Chaser',
        description: 'Rack up 1,000 feet of climbing in a single practice at Eagle Mountain.',
        rules: 'Use a GPS device or app (Strava, Garmin, etc.) to verify elevation gain. Must be done with your ride group.',
        tier: 'bronze',
        scope: 'single-practice',
        category: 'climbing',
        trailforksUrl: TRAILFORKS_REGION,
    },
    {
        name: 'Oxygen Thief',
        description: '2,000 feet of climbing in one practice. The air gets thin up here.',
        rules: 'GPS-verified elevation. All climbing must happen during a single practice with your ride group.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'climbing',
        trailforksUrl: TRAILFORKS_REGION,
    },
    {
        name: 'Thin Air Society',
        description: '3,000 feet of vertical in a single practice. Welcome to the elite.',
        rules: 'GPS-verified. Must be completed with your ride group in a single practice session. Screenshot your Strava/Garmin summary.',
        tier: 'gold',
        scope: 'single-practice',
        category: 'climbing',
        trailforksUrl: TRAILFORKS_REGION,
    },
    {
        name: 'Everesting the Eagle',
        description: 'Accumulate 29,032 feet of climbing at Eagle Mountain over the season. Yes, that\'s the height of Everest.',
        rules: 'Total GPS-verified climbing across all Eagle Mountain practices during the season. Submit your season log.',
        tier: 'legendary',
        scope: 'multi-session',
        category: 'climbing',
        trailforksUrl: TRAILFORKS_REGION,
    },

    // — Trail Feature Challenges —
    {
        name: 'Turtle Power',
        description: 'Conquer Turtle Hill. Slow and steady doesn\'t apply here — just get to the top.',
        rules: 'Ride (not walk) the full Turtle Hill climb with your ride group. Witnesses required.',
        tier: 'bronze',
        scope: 'single-practice',
        category: 'trail',
        trailforksUrl: TRAILFORKS_REGION,
    },
    {
        name: 'The Snake Charmer',
        description: 'Complete Jake the Snake end-to-end. 3 miles of upper-intermediate singletrack along the southern ridge.',
        rules: 'Ride the full trail with your ride group in a single practice. Ride leader confirms completion.',
        tier: 'bronze',
        scope: 'single-practice',
        category: 'trail',
        trailforksUrl: 'https://www.trailforks.com/trails/jake-the-snake/',
    },
    {
        name: 'Living on the Edge',
        description: 'Complete the full Cliffside trail. Don\'t look down.',
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
    },
    {
        name: 'The Rattlesnake Run',
        description: 'Ride the most technical descent at Eagle Mountain without dabbing. Keep both feet on the pedals.',
        rules: 'No foot dabs allowed on the full descent. Must be completed with your ride group. Ride leader confirms a clean run.',
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
    },
    {
        name: 'The Triple Threat',
        description: 'Fistful of Dollars, Big Thunder, and 220 Loop — all in one practice. Three trails, zero quit.',
        rules: 'All three trails must be completed with your ride group during one practice session. Coach or ride leader verifies.',
        tier: 'gold',
        scope: 'single-practice',
        category: 'trail',
        trailforksUrl: 'https://www.trailforks.com/trails/fistful-of-dollars/',
    },
    {
        name: 'Summit Collector',
        description: 'Hit every major climb at Eagle Mountain in a single practice. All of them.',
        rules: 'All major climbs must be completed with your ride group during one practice session. Coach verifies completion.',
        tier: 'gold',
        scope: 'single-practice',
        category: 'trail',
        trailforksUrl: TRAILFORKS_REGION,
    },
    {
        name: 'The Full Eagle',
        description: 'Ride every rideable trail at Eagle Mountain in a single session. Leave nothing unridden.',
        rules: 'Must be completed with your ride group. Coach or ride leader confirms all trails were covered.',
        tier: 'legendary',
        scope: 'single-practice',
        category: 'trail',
        trailforksUrl: TRAILFORKS_REGION,
    },

    // — Route Challenges (8–16 miles) —

    // Bronze (8–10 mi, intro routes)
    {
        name: 'Hidden Hollow Explorer',
        description: 'Ride the full Hidden Hollow loop — 10 miles and 930 feet of climbing through the northern trail system.',
        rules: 'Complete the full Hidden Hollow recommended route with your ride group. GPS-verified distance.',
        tier: 'bronze',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/trails/hidden-hollow/',
    },
    {
        name: 'Space Dust Sampler',
        description: 'An easy-going ~8 mile intro route through the middle zone — Space Dust, Deer Tracks, Cracker Jack, and Supersonic.',
        rules: 'Complete the full route with your ride group. GPS-verified. Great for newer riders building confidence.',
        tier: 'bronze',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/trails/space-dust/',
    },
    {
        name: 'Hickman Hill Repeater',
        description: 'Warm up with 5–6 laps of the Hickman Hill beginner loops, then ride Creed south and Brass Monkey back. ~8 miles.',
        rules: 'Complete the full route with your ride group. GPS-verified.',
        tier: 'bronze',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/trails/creed/',
    },
    {
        name: 'Race Course Plus',
        description: 'The standard race course extended with Hidden Canyon and Cow Tracks access trails — ~9 miles as a full lariat from the parking area.',
        rules: 'Complete the full lariat route with your ride group. GPS-verified.',
        tier: 'bronze',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/route/eagle-mountain-uhscl-course/',
    },
    {
        name: 'The Prayer Flags Circuit',
        description: 'A loop centered on Prayer Flags hill — Deer Tracks, Treadstone, Backspacer, Cropduster, Roadrunner, and Bugs Bunny. ~8–9 miles.',
        rules: 'Complete the full circuit with your ride group. GPS-verified.',
        tier: 'bronze',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/trails/treadstone-prayer-flags/',
    },

    // Silver (10–12 mi, solid rides)
    {
        name: 'The Clockwise Sampler',
        description: 'The Eagle Mountain XC Sampler — 10.8 miles clockwise hitting a little bit of everything. 1,178 feet of climbing.',
        rules: 'Complete the full clockwise XC Sampler route with your ride group. GPS-verified.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: TRAILFORKS_REGION,
    },
    {
        name: 'The Looney Tunes Loop',
        description: 'Hit all the cartoon-named trails in one loop — Bugs Bunny, Roadrunner, Wile E Coyote, Jackrabbit, plus a Cropduster/Gunslinger side trip. ~10 miles.',
        rules: 'Must ride all five named trails with your ride group. GPS-verified.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/trails/bugs-bunny-627698/',
    },
    {
        name: 'Deadwood Double',
        description: 'Two laps of Deadwood with different return routes each time — first via Treadstone, second via Wile E Coyote. ~10 miles.',
        rules: 'Both full Deadwood laps must be completed with your ride group in a single practice. GPS-verified.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/trails/deadwood-27108/',
    },
    {
        name: 'The Creed-Nirvana Figure 8',
        description: 'A figure-8 through the northern trails — Hidden Canyon, Creed, Brass Monkey, Nirvana, Given to Fly, Supersonic, and Cracker Jack. ~9 miles.',
        rules: 'Complete the full figure-8 with your ride group. GPS-verified.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/trails/nirvana-111485/',
    },
    {
        name: 'The Nirvana Express',
        description: 'Hidden Hollow to Nirvana to Given to Fly and back — roughly 12 miles through the best of the northern trails.',
        rules: 'Must hit Hidden Hollow, Nirvana, and Given to Fly in a single practice with your ride group. GPS-verified.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/trails/given-to-fly/',
    },
    {
        name: 'Jake the Snake Explorer',
        description: 'Ride out to Jake the Snake (3 mi one-way) and back through the Prayer Flags connector trails. ~10 miles round trip.',
        rules: 'Must ride the full Jake the Snake trail with your ride group. GPS-verified.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/trails/jake-the-snake/',
    },
    {
        name: 'The Eastwood Explorer',
        description: 'A full tour of the south — Treadstone, Deadwood, the 411 climb, Eastwood descent, Wile E Coyote, and Jackrabbit. ~11 miles.',
        rules: 'Must ride 411 and Eastwood with your ride group. GPS-verified.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/trails/eastwood/',
    },
    {
        name: 'The Ridgeline Rambler',
        description: 'Hidden Canyon to Rock-a-Billy, Cow Tracks, Ridgeline, Big Thunder, then out through Bugs Bunny and Roadrunner. ~8 miles of rolling Lake Mountain terrain.',
        rules: 'Complete the full route with your ride group. GPS-verified.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/trails/ridgeline-hidden-hollow/',
    },
    {
        name: 'The Backspacer Express',
        description: 'Supersonic up to Prayer Flags, Backspacer and Cropduster corridor south, Gunslinger, then return through Given to Fly and Creed. ~10 miles.',
        rules: 'Complete the full route with your ride group. GPS-verified.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/trails/crop-duster/',
    },

    // Gold (12–16 mi, big days)
    {
        name: 'The Cropduster Corridor',
        description: 'Supersonic to Prayer Flags, Backspacer-Cropduster-Gunslinger corridor, through the race course trails, return via Deadwood and Treadstone. ~12 miles.',
        rules: 'Must hit Cropduster, Gunslinger, and Deadwood with your ride group. GPS-verified.',
        tier: 'gold',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/trails/gunslinger-155374/',
    },
    {
        name: 'The Wile E Coyote Connector',
        description: 'A big clockwise loop — Cow Tracks, Bugs Bunny, Roadrunner, Wile E Coyote, Deadwood, Treadstone, Prayer Flags, Nirvana back north. ~12 miles.',
        rules: 'Must hit Wile E Coyote and Nirvana with your ride group. GPS-verified.',
        tier: 'gold',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/trails/wile-e-coyote/',
    },
    {
        name: 'Beggar\'s Canyon Run',
        description: 'Venture into the less-traveled Beggar\'s Canyon, then loop through Deadwood, Treadstone, Supersonic, and Cropduster. ~11 miles of adventure.',
        rules: 'Must ride Beggar\'s Canyon with your ride group. GPS-verified.',
        tier: 'gold',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/trails/beggar-s-canyon-585622/',
    },
    {
        name: 'The North-South Traverse',
        description: 'Hidden Hollow to Treadstone to Deadwood and back — roughly 14 miles connecting the northern and southern trail systems.',
        rules: 'Must ride through Hidden Hollow, Treadstone, and Deadwood areas in a single practice. GPS-verified.',
        tier: 'gold',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/trails/deadwood-27108/',
    },
    {
        name: 'The Grand Tour',
        description: 'Hidden Hollow through Treadstone and out to the Lake Mountain trails — 16+ miles connecting three trail zones.',
        rules: 'Must pass through all three zones (Hidden Hollow, Treadstone/Prayer Flags, Lake Mountain) in a single practice. GPS-verified.',
        tier: 'gold',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: TRAILFORKS_REGION,
    },

    // Legendary (15+ mi, all-in)
    {
        name: 'The Full Monty',
        description: 'Hit every major XC trail zone in one ride — Lake Mountain slopes, race course trails, 411/Eastwood, full Deadwood-Treadstone spine, Prayer Flags, and the Nirvana/Creed corridor. ~15–16 miles.',
        rules: 'Must pass through all major zones with your ride group. Coach verifies. GPS-verified.',
        tier: 'legendary',
        scope: 'single-practice',
        category: 'routes',
        trailforksUrl: 'https://www.trailforks.com/route/the-best-of-eagle-mountain/',
    },

    // — Endurance Challenges (Season-Long, Cumulative Group Miles) —
    {
        name: 'Fledgling',
        description: 'Your ride group logs 100 cumulative miles at Eagle Mountain over the season. That\'s showing up and putting in work.',
        rules: 'Each practice counts once as the group\'s GPS-verified mileage (not per rider). ~12 practices averaging about 8–9 miles each.',
        tier: 'bronze',
        scope: 'multi-session',
        category: 'endurance',
        trailforksUrl: TRAILFORKS_REGION,
    },
    {
        name: 'Century Club',
        description: '150 cumulative group miles at Eagle Mountain. Your group is pushing past the average.',
        rules: 'Each practice counts once as the group\'s GPS-verified mileage. ~12 practices averaging 12–13 miles each.',
        tier: 'silver',
        scope: 'multi-session',
        category: 'endurance',
        trailforksUrl: TRAILFORKS_REGION,
    },
    {
        name: 'Soaring Eagle',
        description: '200 cumulative group miles. Your ride group doesn\'t do short days.',
        rules: 'Each practice counts once as the group\'s GPS-verified mileage. Requires consistently pushing into 16+ mile practices.',
        tier: 'gold',
        scope: 'multi-session',
        category: 'endurance',
        trailforksUrl: TRAILFORKS_REGION,
    },
    {
        name: 'Iron Eagle',
        description: '300 cumulative group miles. Your ride group is relentless.',
        rules: 'Each practice counts once as the group\'s GPS-verified mileage. Averaging 25 miles per practice — this one takes serious commitment.',
        tier: 'legendary',
        scope: 'multi-session',
        category: 'endurance',
        trailforksUrl: TRAILFORKS_REGION,
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
    endurance: 'Endurance Challenges',
};

const categoryDescriptions: Record<Challenge['category'], string> = {
    laps: 'How many laps can your group crush in one practice?',
    climbing: 'Earn your elevation. Every foot counts.',
    trail: 'Specific trails and features to conquer.',
    routes: 'Longer rides in the 8–16 mile range. Explore the full trail system.',
    endurance: 'Season-long cumulative group miles. Each practice counts once — your group\'s total mileage for that ride.',
};

const categories: Challenge['category'][] = ['laps', 'climbing', 'trail', 'routes', 'endurance'];

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
                        Push your limits with your ride group. Complete challenges, earn tiers, and prove you&apos;ve got what it takes. Every challenge must be completed with your ride group — no solo runs count.
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
                            Use Strava or your GPS device for climbing and mileage challenges. Submit completions through the form below — your coach will verify.
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
                                                {challenge.trailforksUrl && (
                                                    <a
                                                        href={challenge.trailforksUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{ display: 'inline-block', marginTop: '0.5rem', fontSize: '0.8rem', fontWeight: 600, color: 'rgb(var(--color-primary))' }}
                                                    >
                                                        View on Trailforks →
                                                    </a>
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
                        Completed a challenge? Submit it here. Your ride leader or coach will verify, and your name goes on the board. Include a Strava link or screenshot for climbing and mileage challenges.
                    </p>
                    <p className="text-muted" style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.9rem', fontStyle: 'italic' }}>
                        Submission form coming soon — stay tuned!
                    </p>
                </div>

            </div>
        </div>
    );
}
