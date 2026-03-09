import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: '2026 Season Kickoff Meeting | Lehi MTB Hub',
    description: 'Join us for the Lehi MTB 2026 season kickoff meeting on March 25th at Lehi High School.',
};

export default function Kickoff() {
    return (
        <div className="container animate-fade-in" style={{ padding: 'var(--spacing-xl) 0' }}>

            {/* Hero Banner */}
            <div style={{
                background: 'linear-gradient(135deg, rgb(var(--color-primary)), rgb(var(--color-primary-light)))',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--spacing-xl) var(--spacing-lg)',
                textAlign: 'center',
                color: 'white',
                marginBottom: 'var(--spacing-xl)',
                boxShadow: 'var(--shadow-purple)'
            }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🗓️</div>
                <h1 style={{ marginBottom: '0.5rem', fontSize: '3rem' }}>2026 Season Kickoff Meeting</h1>
                <p style={{ fontSize: '1.5rem', opacity: 0.9, fontWeight: 600 }}>March 25, 2026</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>

                {/* Schedule Card */}
                <div className="glass-panel" style={{ padding: 'var(--spacing-lg)' }}>
                    <h2 style={{ marginBottom: 'var(--spacing-md)', color: 'rgb(var(--color-primary))' }}>📅 Schedule</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(87, 43, 158, 0.08)', borderLeft: '4px solid rgb(var(--color-primary))' }}>
                            <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>6:00 PM — Returning Riders</p>
                            <p className="text-muted" style={{ fontSize: '0.9rem' }}>Check-in opens for all riders who were on the team last season.</p>
                        </div>
                        <div style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(250, 255, 56, 0.15)', borderLeft: '4px solid rgb(var(--color-tertiary))' }}>
                            <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>7:15 PM — New Riders</p>
                            <p className="text-muted" style={{ fontSize: '0.9rem' }}>Welcome session for riders joining Lehi MTB for the first time!</p>
                        </div>
                    </div>
                </div>

                {/* Location Card */}
                <div className="glass-panel" style={{ padding: 'var(--spacing-lg)' }}>
                    <h2 style={{ marginBottom: 'var(--spacing-md)', color: 'rgb(var(--color-primary))' }}>📍 Location</h2>
                    <p style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.5rem' }}>Lehi High School Auditorium</p>
                    <p className="text-muted" style={{ marginBottom: '1rem' }}>180 N 400 E, Lehi, UT 84043</p>
                    <Link
                        href="https://maps.google.com/?q=Lehi+High+School+180+N+400+E+Lehi+UT"
                        target="_blank"
                        className="btn-silver"
                        style={{ fontSize: '0.875rem' }}
                    >
                        Get Directions →
                    </Link>
                </div>

                {/* Kit Fit Card */}
                <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid rgb(var(--color-tertiary))' }}>
                    <h2 style={{ marginBottom: 'var(--spacing-md)', color: 'rgb(var(--color-primary))' }}>🧢 Kit Fitting</h2>
                    <p className="text-muted" style={{ marginBottom: '1rem' }}>
                        We will be doing <strong>kit fittings</strong> at this meeting! Bring your athlete and we will help them find the right size for their riding jersey, bib shorts, and optional accessories.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li style={{ display: 'flex', gap: '0.75rem' }}>
                            <span style={{ color: 'rgb(var(--color-primary))' }}>✓</span>
                            <span>Jersey sizing (all sizes available)</span>
                        </li>
                        <li style={{ display: 'flex', gap: '0.75rem' }}>
                            <span style={{ color: 'rgb(var(--color-primary))' }}>✓</span>
                            <span>Bib shorts and casual baggies</span>
                        </li>
                        <li style={{ display: 'flex', gap: '0.75rem' }}>
                            <span style={{ color: 'rgb(var(--color-primary))' }}>✓</span>
                            <span>Optional skin suit try-ons</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* What to Expect */}
            <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>
                <h2 style={{ marginBottom: 'var(--spacing-md)', color: 'rgb(var(--color-primary))' }}>What to Expect at the Meeting</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-md)' }}>
                    {[
                        { emoji: '📋', title: 'Registration Info', desc: 'Walk through the TeamSnap registration process and important deadlines.' },
                        { emoji: '👋', title: 'Meet the Coaches', desc: 'Get introduced to the full coaching staff and ride leaders.' },
                        { emoji: '🗓️', title: 'Practice Schedule', desc: 'Learn when, where, and how practices are run throughout the season.' },
                        { emoji: '💰', title: 'Fees & Costs', desc: "Full breakdown of team dues, NICA fees, and what's included." },
                    ].map((item) => (
                        <div key={item.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <span style={{ fontSize: '1.75rem' }}>{item.emoji}</span>
                            <div>
                                <p style={{ fontWeight: 700, marginBottom: '0.25rem' }}>{item.title}</p>
                                <p className="text-muted" style={{ fontSize: '0.875rem' }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div style={{ textAlign: 'center' }}>
                <p className="text-muted" style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.125rem' }}>
                    Ready to get started? Registration is open now.
                </p>
                <Link href="https://registration.teamsnap.com/form/47629" target="_blank" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                    Register for the 2026 Season
                </Link>
            </div>
        </div>
    );
}
