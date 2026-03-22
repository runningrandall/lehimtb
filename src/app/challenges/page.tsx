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
    category: 'laps' | 'climbing' | 'trail' | 'endurance';
};

const challenges: Challenge[] = [
    // — Lap Challenges —
    {
        name: 'The Warm-Up',
        description: '2 laps of the race course in a single practice. Just getting started.',
        rules: 'Both laps must be completed with your ride group during one practice session. No shortcuts.',
        tier: 'bronze',
        scope: 'single-practice',
        category: 'laps',
    },
    {
        name: 'The Hat Trick',
        description: 'Complete 3 full laps of the Eagle Mountain race course in a single practice.',
        rules: 'All 3 laps must be completed with your ride group during one practice session. No shortcuts.',
        tier: 'bronze',
        scope: 'single-practice',
        category: 'laps',
    },
    {
        name: 'The Quad Crusher',
        description: 'Survive 4 full laps of the race course in one practice. Your quads will remember this.',
        rules: 'All 4 laps completed with your ride group in a single practice. Walk breaks are allowed, but you must finish every lap.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'laps',
    },
    {
        name: 'Famous Five',
        description: '5 laps. One practice. Legend status.',
        rules: 'Complete 5 full race course laps with your ride group in one practice. No lap may be skipped or shortened.',
        tier: 'gold',
        scope: 'single-practice',
        category: 'laps',
    },

    // — Beginner Trail Laps (Radio Free Europe) —
    {
        name: 'Radio Star',
        description: '10 laps of the Radio Free Europe climb in a single practice. Spin city.',
        rules: 'All 10 laps must be completed with your ride group during one practice session. Full climb each lap.',
        tier: 'silver',
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
        name: 'Cloud Chaser',
        description: 'Rack up 1,000 feet of climbing in a single practice at Eagle Mountain.',
        rules: 'Use a GPS device or app (Strava, Garmin, etc.) to verify elevation gain. Must be done with your ride group.',
        tier: 'bronze',
        scope: 'single-practice',
        category: 'climbing',
    },
    {
        name: 'Oxygen Thief',
        description: '2,000 feet of climbing in one practice. The air gets thin up here.',
        rules: 'GPS-verified elevation. All climbing must happen during a single practice with your ride group.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'climbing',
    },
    {
        name: 'Thin Air Society',
        description: '3,000 feet of vertical in a single practice. Welcome to the elite.',
        rules: 'GPS-verified. Must be completed with your ride group in a single practice session. Screenshot your Strava/Garmin summary.',
        tier: 'gold',
        scope: 'single-practice',
        category: 'climbing',
    },
    {
        name: 'Everesting the Eagle',
        description: 'Accumulate 29,032 feet of climbing at Eagle Mountain over the season. Yes, that\'s the height of Everest.',
        rules: 'Total GPS-verified climbing across all Eagle Mountain practices during the season. Submit your season log.',
        tier: 'legendary',
        scope: 'multi-session',
        category: 'climbing',
    },

    // — Trail Feature Challenges —
    {
        name: 'Turtle Power',
        description: 'Conquer Turtle Hill. Slow and steady doesn\'t apply here — just get to the top.',
        rules: 'Ride (not walk) the full Turtle Hill climb with your ride group. Witnesses required.',
        tier: 'bronze',
        scope: 'single-practice',
        category: 'trail',
    },
    {
        name: 'Living on the Edge',
        description: 'Complete the full Cliffside trail. Don\'t look down.',
        rules: 'Ride the entirety of Cliffside with your ride group in a single practice.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'trail',
    },
    {
        name: 'The Rattlesnake Run',
        description: 'Ride the most technical descent at Eagle Mountain without dabbing. Keep both feet on the pedals.',
        rules: 'No foot dabs allowed on the full descent. Must be completed with your ride group. Ride leader confirms a clean run.',
        tier: 'silver',
        scope: 'single-practice',
        category: 'trail',
    },
    {
        name: 'Summit Collector',
        description: 'Hit every major climb at Eagle Mountain in a single practice. All of them.',
        rules: 'All major climbs must be completed with your ride group during one practice session. Coach verifies completion.',
        tier: 'gold',
        scope: 'single-practice',
        category: 'trail',
    },
    {
        name: 'The Full Eagle',
        description: 'Ride every rideable trail at Eagle Mountain in a single session. Leave nothing unridden.',
        rules: 'Must be completed with your ride group. Coach or ride leader confirms all trails were covered.',
        tier: 'legendary',
        scope: 'single-practice',
        category: 'trail',
    },

    // — Endurance Challenges (Season-Long, Cumulative Group Miles) —
    {
        name: 'Fledgling',
        description: 'Your ride group logs 100 cumulative miles at Eagle Mountain over the season. That\'s showing up and putting in work.',
        rules: 'Each practice counts once as the group\'s GPS-verified mileage (not per rider). ~12 practices averaging about 8–9 miles each.',
        tier: 'bronze',
        scope: 'multi-session',
        category: 'endurance',
    },
    {
        name: 'Century Club',
        description: '150 cumulative group miles at Eagle Mountain. Your group is pushing past the average.',
        rules: 'Each practice counts once as the group\'s GPS-verified mileage. ~12 practices averaging 12–13 miles each.',
        tier: 'silver',
        scope: 'multi-session',
        category: 'endurance',
    },
    {
        name: 'Soaring Eagle',
        description: '200 cumulative group miles. Your ride group doesn\'t do short days.',
        rules: 'Each practice counts once as the group\'s GPS-verified mileage. Requires consistently pushing into 16+ mile practices.',
        tier: 'gold',
        scope: 'multi-session',
        category: 'endurance',
    },
    {
        name: 'Iron Eagle',
        description: '300 cumulative group miles. Your ride group is relentless.',
        rules: 'Each practice counts once as the group\'s GPS-verified mileage. Averaging 25 miles per practice — this one takes serious commitment.',
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
    endurance: 'Endurance Challenges',
};

const categoryDescriptions: Record<Challenge['category'], string> = {
    laps: 'How many laps can your group crush in one practice?',
    climbing: 'Earn your elevation. Every foot counts.',
    trail: 'Specific trails and features to conquer.',
    endurance: 'Season-long cumulative group miles. Each practice counts once — your group\'s total mileage for that ride.',
};

const categories: Challenge['category'][] = ['laps', 'climbing', 'trail', 'endurance'];

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
                                                    {challenge.scope === 'multi-session' && (
                                                        <span style={{
                                                            padding: '0.2rem 0.6rem',
                                                            fontSize: '0.7rem',
                                                            fontWeight: 700,
                                                            borderRadius: 'var(--radius-sm)',
                                                            background: 'rgba(var(--text-muted), 0.1)',
                                                            color: 'rgb(var(--text-muted))',
                                                        }}>
                                                            Season-Long
                                                        </span>
                                                    )}
                                                </div>
                                                <h3 style={{ marginBottom: '0.35rem' }}>{challenge.name}</h3>
                                                <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '0.5rem' }}>
                                                    {challenge.description}
                                                </p>
                                                <p style={{ fontSize: '0.8rem', color: 'rgb(var(--text-muted))', fontStyle: 'italic' }}>
                                                    {challenge.rules}
                                                </p>
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
