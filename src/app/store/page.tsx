import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
    title: 'Team Store | Lehi MTB Hub',
    description: 'The official Lehi MTB Team Store is currently closed and will reopen next year (2027).',
};

export default function StorePage() {
    return (
        <div className="container animate-fade-in" style={{ padding: 'var(--spacing-xl) 0' }}>

            {/* Header Banner */}
            <div style={{
                background: 'linear-gradient(135deg, rgb(var(--color-primary)), rgb(192, 150, 240))',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--spacing-xl) var(--spacing-lg)',
                textAlign: 'center',
                color: 'white',
                marginBottom: 'var(--spacing-xl)',
                boxShadow: 'var(--shadow-purple)'
            }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛍️</div>
                <h1 style={{ marginBottom: '0.75rem', fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>Team Store is Closed</h1>
                <p style={{ fontSize: '1.25rem', opacity: 0.95, maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}>
                    The official 2026 kit ordering window has concluded and current orders are being manufactured.
                </p>
            </div>

            {/* Info Section */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>

                {/* Reopening Info Card */}
                <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid rgb(var(--color-tertiary))' }}>
                    <h2 style={{ marginBottom: '1rem', color: 'rgb(var(--color-primary))' }}>🛍️ Reopening Next Year (2027)</h2>
                    <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgb(var(--text-muted))', marginBottom: '1.25rem' }}>
                        The Lehi MTB team store powered by Volt Cyclewear will <strong>reopen next year (2027)</strong> for new team kits, secondary orders, and team fan gear.
                    </p>
                    <div style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(87, 43, 158, 0.08)', marginBottom: '1.5rem', borderLeft: '3px solid rgb(var(--color-primary))' }}>
                        <p style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.25rem' }}>Kit Delivery Info</p>
                        <p className="text-muted" style={{ fontSize: '0.875rem', margin: 0 }}>
                            Already placed an order? Kits are scheduled to arrive before the first official team race. Coaches will distribute gear at practice once delivered.
                        </p>
                    </div>
                    <Link href="/race-day" className="btn-accent" style={{ padding: '0.75rem 1.25rem', fontSize: '0.9rem', width: 'fit-content' }}>
                        View Race Day Guide →
                    </Link>
                </div>

                {/* Contact Card */}
                <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid rgb(var(--color-primary))' }}>
                    <h2 style={{ marginBottom: '0.5rem', color: 'rgb(var(--color-primary))' }}>Store &amp; Kit Questions?</h2>
                    <p className="text-muted" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                        If you missed the order window, have questions about sizing, or need spare gear, contact our team coaches using the form below.
                    </p>
                    <ContactForm />
                </div>

            </div>

        </div>
    );
}
