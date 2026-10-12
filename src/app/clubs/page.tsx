import type { Metadata } from 'next';
import Link from 'next/link';
import ClubsDirectory from './ClubsDirectory';

export const metadata: Metadata = {
    title: 'Utah MTB Clubs & Development Teams | Lehi MTB Hub',
    description: 'Comprehensive comparison matrix of youth and junior mountain bike club teams in Utah. Compare disciplines (XC, Enduro, DH), competition levels, tuition, and deadlines.',
};

export default function ClubsPage() {
    return (
        <main className="clubs-page" style={{ minHeight: '100vh', paddingBottom: 'var(--spacing-xl)' }}>
            
            {/* Hero Header */}
            <section style={{
                background: 'linear-gradient(180deg, rgba(87, 43, 158, 0.08) 0%, rgba(255, 255, 255, 0) 100%)',
                padding: '3rem 1rem 2rem',
                textAlign: 'center',
                borderBottom: '1px solid rgba(87, 43, 158, 0.08)',
                marginBottom: '2rem'
            }}>
                <div style={{ maxWidth: '860px', margin: '0 auto' }}>
                    
                    {/* Badge */}
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        backgroundColor: 'rgba(87, 43, 158, 0.1)',
                        color: 'rgb(var(--color-primary-dark))',
                        padding: '0.35rem 0.85rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '1rem'
                    }}>
                        <span>🚵‍♂️</span> Non-NICA Youth Cycling Opportunities
                    </div>

                    <h1 style={{
                        fontFamily: 'var(--font-brand)',
                        fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        letterSpacing: '-0.01em',
                        lineHeight: 1.05,
                        color: 'rgb(var(--color-primary))',
                        marginBottom: '1rem'
                    }}>
                        Utah MTB Clubs
                    </h1>

                    <p style={{
                        fontSize: '1.15rem',
                        lineHeight: 1.55,
                        color: 'var(--color-text-muted-light)',
                        maxWidth: '720px',
                        margin: '0 auto 1.5rem'
                    }}>
                        Explore youth club and development teams across Utah &mdash; compared on cost, competition level, location, and commitment. Perfect for spring skill development, regional racing, and preparing for the fall high school season.
                    </p>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '0.75rem',
                        flexWrap: 'wrap',
                        fontSize: '0.9rem'
                    }}>
                        <Link
                            href="/training"
                            style={{
                                color: 'rgb(var(--color-primary))',
                                textDecoration: 'none',
                                fontWeight: 600,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.3rem'
                            }}
                        >
                            ← Back to Lehi Training
                        </Link>
                        <span style={{ color: 'rgba(0,0,0,0.3)' }}>•</span>
                        <Link
                            href="/join#faq"
                            style={{
                                color: 'rgb(var(--color-primary))',
                                textDecoration: 'none',
                                fontWeight: 600
                            }}
                        >
                            Frequently Asked Questions
                        </Link>
                    </div>

                </div>
            </section>

            {/* Interactive Directory / Matrix */}
            <ClubsDirectory />

        </main>
    );
}
