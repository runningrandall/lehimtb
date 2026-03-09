import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Training | Lehi MTB Hub',
    description: 'Training resources for Lehi MTB riders, including NICA Training Peaks plans.',
};

const plans = [
    {
        name: 'NICA Off-Season Training Plan',
        url: 'https://www.trainingpeaks.com/training-plans/cycling/mountain-biking/tp-594610/nica-off-season-training-plan',
        description: 'Keep fitness sharp between seasons. Structured off-season work to build an aerobic base and maintain strength heading into the new year.',
        tag: 'Off-Season',
        tagColor: 'rgb(var(--color-primary-light))',
    },
    {
        name: 'NICA Winter Training Plan',
        url: 'https://www.trainingpeaks.com/training-plans/cycling/mountain-biking/tp-528148/nica-winter-training',
        description: 'Cold months, real gains. This winter plan keeps riders on track with structured indoor and weather-friendly sessions.',
        tag: 'Winter',
        tagColor: 'rgb(192, 150, 240)',
    },
    {
        name: '2025 NICA Season Training Plan',
        url: 'https://www.trainingpeaks.com/training-plans/cycling/mountain-biking/tp-543088/2025-utah-nica-mtb-season-training-plan',
        description: 'The official Utah NICA in-season training plan, built to peak for race day. Periodized to align with the Utah NICA race schedule.',
        tag: 'In-Season',
        tagColor: 'rgb(var(--color-primary))',
    },
];

export default function Training() {
    return (
        <div className="animate-fade-in">

            {/* Header */}
            <div style={{
                background: 'linear-gradient(135deg, rgb(var(--color-primary)), rgb(var(--color-primary-light)))',
                color: 'white',
                padding: 'var(--spacing-xl) 0',
            }}>
                <div className="container">
                    <p style={{ fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.75, marginBottom: '0.5rem' }}>Athlete Resources</p>
                    <h1 style={{ marginBottom: '0.75rem' }}>Training</h1>
                    <p style={{ opacity: 0.9, fontSize: '1.125rem', maxWidth: '640px', lineHeight: 1.6 }}>
                        We use Training Peaks to structure and share training plans for our riders. Whether it&apos;s the off-season, winter, or race season — there&apos;s a plan to keep you moving forward.
                    </p>
                </div>
            </div>

            <div className="container" style={{ padding: 'var(--spacing-xl) 0' }}>

                {/* What is Training Peaks */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 'var(--spacing-xl)', marginBottom: 'var(--spacing-xl)', alignItems: 'start' }}>
                    <div>
                        <h2 style={{ marginBottom: '1rem' }}>What is Training Peaks?</h2>
                        <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                            Training Peaks is a professional training platform used by coaches and athletes around the world. Our coaches use it to share structured training plans built specifically for NICA athletes.
                        </p>
                        <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                            With Training Peaks you can follow a day-by-day plan, log your rides, track your fitness, and see your progress over time. It works on your phone and integrates with popular devices like Garmin and Wahoo.
                        </p>
                        <Link href="https://www.trainingpeaks.com/" target="_blank" className="btn-primary">
                            Visit Training Peaks →
                        </Link>
                    </div>

                    {/* Coupon code callout */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid rgb(var(--color-tertiary))' }}>
                        <p style={{ fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(140,120,0)', marginBottom: '0.75rem' }}>Free for Lehi Riders</p>
                        <h2 style={{ marginBottom: '0.75rem', fontSize: '1.75rem' }}>Get the Plan Free</h2>
                        <p className="text-muted" style={{ marginBottom: '1.5rem', lineHeight: 1.7 }}>
                            Use coupon code <strong style={{ color: 'rgb(var(--color-secondary))' }}>LEHIMTB</strong> at checkout on any of the plans below to get it at no cost. Plans are normally $10–$20 — the code makes them free for our riders.
                        </p>
                        <div style={{
                            display: 'inline-block',
                            padding: '0.6rem 1.5rem',
                            background: 'rgb(var(--color-tertiary))',
                            color: 'rgba(12,8,24,0.9)',
                            borderRadius: 'var(--radius-sm)',
                            fontFamily: 'var(--font-brand)',
                            fontStyle: 'italic',
                            fontWeight: 800,
                            fontSize: '1.75rem',
                            letterSpacing: '0.05em',
                        }}>
                            LEHIMTB
                        </div>
                    </div>
                </div>

                {/* Plans */}
                <h2 style={{ marginBottom: 'var(--spacing-md)', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>Training Plans</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                    {plans.map((plan) => (
                        <div key={plan.name} className="glass-panel" style={{ padding: 'var(--spacing-lg)', display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap', borderLeft: `4px solid ${plan.tagColor}` }}>
                            <div style={{ flex: 1, minWidth: '260px' }}>
                                <p style={{ fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: plan.tagColor, marginBottom: '0.4rem' }}>{plan.tag}</p>
                                <h3 style={{ marginBottom: '0.5rem' }}>{plan.name}</h3>
                                <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>{plan.description}</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start', flexShrink: 0 }}>
                                <Link href={plan.url} target="_blank" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
                                    View Plan →
                                </Link>
                                <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgb(var(--text-muted))' }}>
                                    Use code <span style={{ color: 'rgb(var(--color-secondary))', fontWeight: 800 }}>LEHIMTB</span> for free
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Questions CTA */}
                <div style={{ marginTop: 'var(--spacing-xl)', padding: 'var(--spacing-lg)', background: 'rgba(87,43,158,0.05)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                    <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Questions about training?</p>
                    <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                        Reach out to <a href="mailto:rjadams96@gmail.com" style={{ color: 'rgb(var(--color-primary))', fontWeight: 600 }}>Randall Adams</a> or <a href="mailto:spinordie@gmail.com" style={{ color: 'rgb(var(--color-primary))', fontWeight: 600 }}>Steve Stringham</a> — they can help you pick the right plan and get it set up.
                    </p>
                </div>

            </div>
        </div>
    );
}
