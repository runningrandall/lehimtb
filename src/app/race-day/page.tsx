import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Race Day Central & Wave Schedule | Lehi MTB Hub',
    description: 'Complete 2026 race day guide, wave schedule, staging guidelines, pit zone etiquette, and preparation checklist for Lehi MTB riders and families.',
};

const hsWaves = [
    {
        wave: 'Wave 1 - HS',
        time: '8:00 AM',
        categories: [
            { category: 'JVB Boys', time: '8:00 AM', laps: '2' },
            { category: 'JVC Boys', time: '8:05 AM', laps: '2' },
        ]
    },
    {
        wave: 'Wave 2 - HS',
        time: '8:55 AM',
        categories: [
            { category: 'JVA Boys', time: '8:55 AM', laps: '2 / 3' },
            { category: 'Fresh A Boys', time: '9:00 AM', laps: '2' },
        ]
    },
    {
        wave: 'Wave 3 - HS',
        time: '10:10 AM',
        categories: [
            { category: 'Varsity Boys', time: '10:10 AM', laps: '3 / 4' },
            { category: 'Varsity Girls', time: '10:15 AM', laps: '2 / 3' },
        ]
    },
    {
        wave: 'Wave 4 - HS',
        time: '11:35 AM',
        categories: [
            { category: 'JVA Girls', time: '11:35 AM', laps: '2' },
            { category: 'JVB Girls', time: '11:40 AM', laps: '2' },
            { category: 'JVC Girls', time: '11:45 AM', laps: '2' },
        ]
    },
    {
        wave: 'Wave 5 - HS',
        time: '12:40 PM',
        categories: [
            { category: 'Fresh B Boys', time: '12:40 PM', laps: '2' },
            { category: 'JV D Boys', time: '12:45 PM', laps: '2' },
        ]
    },
    {
        wave: 'Wave 6 - HS (Single Lap)',
        time: '1:35 PM',
        categories: [
            { category: 'JVE Boys', time: '1:35 PM', laps: '1' },
            { category: 'Fresh C Boys', time: '1:38 PM', laps: '1' },
            { category: 'JVD Girls', time: '1:41 PM', laps: '1' },
            { category: 'Adventure*', time: '1:45 PM', laps: '1', note: 'Non-competitive, no race medals awarded' },
            { category: 'Adaptive', time: '1:45 PM', laps: '1' },
        ]
    },
];

const jdWaves = [
    {
        wave: 'Wave 7 - JD',
        time: '2:30 PM',
        categories: [
            { category: 'Advanced Boys', time: '2:30 PM', laps: '1' },
            { category: 'Interm Boys 8', time: '2:35 PM', laps: '1' },
            { category: 'Interm Boys 7', time: '2:40 PM', laps: '1' },
        ]
    },
    {
        wave: 'Wave 8 - JD',
        time: '3:10 PM',
        categories: [
            { category: 'Advanced Girls', time: '3:10 PM', laps: '1' },
            { category: 'Intermediate Girls', time: '3:15 PM', laps: '1' },
            { category: 'Beginner Girls', time: '3:20 PM', laps: '1' },
        ]
    },
    {
        wave: 'Wave 9 - JD',
        time: '3:50 PM',
        categories: [
            { category: 'Beginner Boys 8', time: '3:50 PM', laps: '1' },
            { category: 'Beginner Boys 7', time: '3:55 PM', laps: '1' },
        ]
    },
];

export default function RaceDayCentral() {
    return (
        <div className="container animate-fade-in" style={{ padding: 'var(--spacing-xl) 0' }}>

            {/* Header Banner */}
            <div style={{
                background: 'linear-gradient(135deg, rgb(var(--color-primary)), #3b82f6)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--spacing-xl) var(--spacing-lg)',
                textAlign: 'center',
                color: 'white',
                marginBottom: 'var(--spacing-xl)',
                boxShadow: 'var(--shadow-purple)'
            }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏆</div>
                <h1 style={{ marginBottom: '0.75rem', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>Race Day Central</h1>
                <p style={{ fontSize: '1.2rem', opacity: 0.95, maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
                    Everything you need for race weekend: 2026 Wave Schedules, staging times, pit zone etiquette, and what to expect on race day.
                </p>
                <p style={{ marginTop: '1rem', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', background: 'rgba(255,255,255,0.2)', display: 'inline-block', padding: '0.4rem 1rem', borderRadius: '999px' }}>
                    2026 Wave Schedule · Subject to Change
                </p>
            </div>

            {/* Wave Schedule Section */}
            <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                    <h2>2026 Official Wave Schedule</h2>
                    <p className="text-muted">High School &amp; Junior Development wave timing and lap counts.</p>
                </div>

                {/* High School Waves Table */}
                <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', marginBottom: 'var(--spacing-lg)', borderTop: '4px solid rgb(var(--color-primary))' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                        <div>
                            <span style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(var(--color-primary))' }}>Morning &amp; Afternoon</span>
                            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>High School Waves (Waves 1–6)</h3>
                        </div>
                        <div style={{ background: 'rgba(87, 43, 158, 0.1)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(87, 43, 158, 0.2)' }}>
                            <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'rgb(var(--color-primary))' }}>HS Podiums: 2:45 PM – 3:00 PM</span>
                        </div>
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '550px' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid var(--border-color)', color: 'rgb(var(--color-primary))' }}>
                                    <th style={{ padding: '0.75rem 1rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Wave</th>
                                    <th style={{ padding: '0.75rem 1rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Category</th>
                                    <th style={{ padding: '0.75rem 1rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Start Time</th>
                                    <th style={{ padding: '0.75rem 1rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Laps</th>
                                </tr>
                            </thead>
                            <tbody>
                                {hsWaves.map((w) => (
                                    w.categories.map((cat, idx) => (
                                        <tr key={cat.category} style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: idx % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                                            {idx === 0 && (
                                                <td rowSpan={w.categories.length} style={{ padding: '0.75rem 1rem', fontWeight: 700, verticalAlign: 'middle', borderRight: '1px solid var(--border-color)', backgroundColor: 'rgba(87, 43, 158, 0.04)' }}>
                                                    {w.wave}
                                                </td>
                                            )}
                                            <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>
                                                {cat.category}
                                                {cat.note && <span style={{ display: 'block', fontSize: '0.75rem', color: 'rgb(var(--text-muted))', fontWeight: 400 }}>*{cat.note}</span>}
                                            </td>
                                            <td style={{ padding: '0.75rem 1rem', color: 'rgb(var(--color-primary))', fontWeight: 700 }}>{cat.time}</td>
                                            <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>{cat.laps} {cat.laps === '1' ? 'Lap' : 'Laps'}</td>
                                        </tr>
                                    ))
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Jr Devo Waves Table */}
                <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid rgb(var(--color-tertiary))' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                        <div>
                            <span style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(140, 120, 0)' }}>Late Afternoon</span>
                            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Junior Development Waves (Waves 7–9)</h3>
                        </div>
                        <div style={{ background: 'rgba(250, 255, 56, 0.2)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(250, 255, 56, 0.4)' }}>
                            <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'rgb(120, 100, 0)' }}>JD Podiums: 5:00 PM – 5:30 PM</span>
                        </div>
                    </div>

                    <p className="text-muted" style={{ fontSize: '0.85rem', marginBottom: '1rem', fontStyle: 'italic' }}>
                        *Note: No 1/2 laps for Advanced Jr Devos. All JD categories ride 1 full lap.
                    </p>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '550px' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid var(--border-color)', color: 'rgb(140, 120, 0)' }}>
                                    <th style={{ padding: '0.75rem 1rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Wave</th>
                                    <th style={{ padding: '0.75rem 1rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Category</th>
                                    <th style={{ padding: '0.75rem 1rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Start Time</th>
                                    <th style={{ padding: '0.75rem 1rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Laps</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jdWaves.map((w) => (
                                    w.categories.map((cat, idx) => (
                                        <tr key={cat.category} style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: idx % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                                            {idx === 0 && (
                                                <td rowSpan={w.categories.length} style={{ padding: '0.75rem 1rem', fontWeight: 700, verticalAlign: 'middle', borderRight: '1px solid var(--border-color)', backgroundColor: 'rgba(250, 255, 56, 0.05)' }}>
                                                    {w.wave}
                                                </td>
                                            )}
                                            <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>{cat.category}</td>
                                            <td style={{ padding: '0.75rem 1rem', color: 'rgb(140, 120, 0)', fontWeight: 700 }}>{cat.time}</td>
                                            <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>{cat.laps} Lap</td>
                                        </tr>
                                    ))
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* What to Expect on Race Day Guide */}
            <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                    <h2>What to Expect on Race Day</h2>
                    <p className="text-muted">Essential guide for riders, parents, and supporters.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>

                    {/* Arrival & Staging */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid rgb(var(--color-primary))' }}>
                        <h3 style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>⏰</span> Arrival &amp; Staging
                        </h3>
                        <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><strong>Arrive 1 to 1.5 hours before</strong> your wave start time to ensure parking, pit check-in, bike check, and warm-up.</li>
                            <li><strong>Staging Call-Up:</strong> Staging opens <strong>15 minutes prior</strong> to your wave start. Do not be late for call-ups!</li>
                            <li>Call-ups are staged by category order and league points seeding.</li>
                        </ul>
                    </div>

                    {/* Race Plate & Bike Prep */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid rgb(var(--color-tertiary))' }}>
                        <h3 style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>🚲</span> Race Plate &amp; Bike Setup
                        </h3>
                        <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><strong>Race Number Plate:</strong> Securely fasten to front handlebars. Do <em>not</em> cut, bend, or fold the timing chip/barcode.</li>
                            <li>Inspect tires, chain, and shift cables the night before race day.</li>
                            <li>Bring a floor pump, spare tube, chain tool, and multi-tool to the venue.</li>
                        </ul>
                    </div>

                    {/* Nutrition & Hydration */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #10b981' }}>
                        <h3 style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>💧</span> Hydration &amp; Nutrition
                        </h3>
                        <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li>Begin hydration 48 hours prior to race day.</li>
                            <li>Fill bottles with water or electrolyte mix before arriving at venue.</li>
                            <li>For multi-lap races, bottle hand-offs occur exclusively in the designated League Feed Zone.</li>
                            <li>Head to the team pit zone immediately after your race for recovery food &amp; drinks!</li>
                        </ul>
                    </div>

                    {/* Team Pit Zone Etiquette */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #f59e0b' }}>
                        <h3 style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>⛺</span> Team Pit Zone Etiquette
                        </h3>
                        <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li>The Lehi MTB Pit Zone is home base for riders and families — come hang out!</li>
                            <li>Keep gear organized and pick up trash before leaving.</li>
                            <li>No riding bikes through the Pit Zone walking corridors.</li>
                            <li>Cheer loudly for every Lehi rider out on course!</li>
                        </ul>
                    </div>

                    {/* Pre-Ride Guidelines */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #8b5cf6' }}>
                        <h3 style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>🗺️</span> Course Pre-Ride Rules
                        </h3>
                        <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li>Pre-ride is only permitted during official league pre-ride window (usually Friday afternoon or early Saturday morning).</li>
                            <li>All riders MUST wear a helmet and have their assigned race plate attached.</li>
                            <li>Never pre-ride backward on the race course.</li>
                        </ul>
                    </div>

                    {/* Spectator & Parent Info */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #ec4899' }}>
                        <h3 style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>🔔</span> Spectator &amp; Family Info
                        </h3>
                        <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li>Cowbells, noise makers, and loud cheer squads are encouraged!</li>
                            <li>Never cross course tape or step onto active race lines.</li>
                            <li>Parents are required to volunteer at least once per season with the league and team.</li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* Quick Links Footer */}
            <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', textAlign: 'center', borderTop: '4px solid rgb(var(--color-primary))' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>Want to see the full venue locations &amp; dates?</h3>
                <p className="text-muted" style={{ marginBottom: '1.25rem' }}>View the full season event schedule with maps and location details.</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <Link href="/events" className="btn-primary">View Race Schedule →</Link>
                    <Link href="/join" className="btn-silver">Team FAQ &amp; Info</Link>
                </div>
            </div>

        </div>
    );
}
