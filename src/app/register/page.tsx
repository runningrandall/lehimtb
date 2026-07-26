import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
    title: 'Registration Closed | Lehi MTB Hub',
    description: 'Registration for the current Lehi MTB season is closed. Registration for the 2027 season will open in March/April 2027.',
};

export default function RegisterClosed() {
    return (
        <div className="container animate-fade-in" style={{ padding: 'var(--spacing-xl) 0' }}>

            {/* Header Banner */}
            <div style={{
                background: 'linear-gradient(135deg, rgb(var(--color-primary)), rgb(var(--color-primary-light)))',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--spacing-xl) var(--spacing-lg)',
                textAlign: 'center',
                color: 'white',
                marginBottom: 'var(--spacing-xl)',
                boxShadow: 'var(--shadow-purple)'
            }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏁</div>
                <h1 style={{ marginBottom: '0.75rem', fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>Registration is Closed</h1>
                <p style={{ fontSize: '1.25rem', opacity: 0.95, maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}>
                    Registration for the 2026 Lehi MTB season has officially closed.
                </p>
            </div>

            {/* Main Content & Next Steps */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>

                {/* Info Card */}
                <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid rgb(var(--color-tertiary))' }}>
                    <h2 style={{ marginBottom: '1rem', color: 'rgb(var(--color-primary))' }}>📅 Looking Ahead to 2027</h2>
                    <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgb(var(--text-muted))', marginBottom: '1.25rem' }}>
                        Registration for the <strong>2027 Lehi MTB season</strong> will open in <strong>March / April 2027</strong>.
                    </p>
                    <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'rgb(var(--text-muted))', marginBottom: '1.5rem' }}>
                        If you are a prospective rider (7th–12th grade in Lehi boundaries) or parent wanting to get involved, reach out below to get on our contact list for future updates and kickoff announcements!
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <Link href="/join" className="btn-silver" style={{ padding: '0.75rem 1.25rem', fontSize: '0.9rem', width: 'fit-content' }}>
                            Read Team FAQ &amp; Info →
                        </Link>
                        <Link href="/race-day" className="btn-accent" style={{ padding: '0.75rem 1.25rem', fontSize: '0.9rem', width: 'fit-content' }}>
                            Check Race Day Guide →
                        </Link>
                    </div>
                </div>

                {/* Contact Card */}
                <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid rgb(var(--color-primary))' }}>
                    <h2 style={{ marginBottom: '0.5rem', color: 'rgb(var(--color-primary))' }}>Get in Touch</h2>
                    <p className="text-muted" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                        Have questions about the team, upcoming events, or getting ready for next season? Send us a message and a coach will respond shortly.
                    </p>
                    <ContactForm />
                </div>

            </div>

        </div>
    );
}
