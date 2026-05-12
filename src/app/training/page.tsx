import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Training | Lehi MTB Hub',
    description: 'Training resources for Lehi MTB riders, including NICA Training Peaks plans.',
};

const plans = [
    {
        name: '2026 NICA Season Training Plan - Region 5',
        url: 'https://www.trainingpeaks.com/training-plans/cycling/mountain-biking/tp-631515/2026-utah-nica-mtb-season-training-plan',
        description: 'The full 21 week season, from June 1st to the State race in October. Structured to peak for the Region 5 championship and Utah State Championship.',
        tag: 'In-Season',
        tagColor: 'rgb(var(--color-primary-light))',
    },
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

const trainingTipsData = [
    {
        title: 'Why We Train',
        color: 'rgb(var(--color-primary))',
        items: [
            { title: 'Training beats talent.', desc: 'Consistent riders pass naturally fast riders by mid-season.' },
            { title: 'Train smart, race well.', desc: 'The goal isn\'t to suffer the most — it\'s to be ready when it counts.' },
            { title: 'Build the engine now.', desc: 'The fitness you build all summer is the fitness you race on in fall.' }
        ]
    },
    {
        title: 'The Three Training Zones',
        color: 'rgb(var(--color-primary))',
        items: [
            { title: 'Easy (Zone 2):', desc: 'Can hold a full conversation. Builds your aerobic base. This is most of your riding.' },
            { title: 'Medium (Tempo/Threshold):', desc: 'Short sentences only. Builds race-pace strength.' },
            { title: 'Hard (Intervals):', desc: 'One or two words. Builds top-end power. Short doses, big effect.' },
            { title: 'Easy days easy, hard days hard.', desc: 'Mushy middle = slow gains and burnout.' }
        ]
    },
    {
        title: 'Building a Week',
        color: 'rgb(var(--color-primary))',
        items: [
            { title: '2–3 team rides + 1–2 solo rides.', desc: 'Mix of easy spins, skill work, and one harder session.' },
            { title: 'One real rest day.', desc: 'Adaptation happens when you rest, not when you ride.' },
            { title: 'Skills count as training.', desc: 'Cornering, braking, and line choice make you faster than fitness alone.' },
            { title: '10% rule:', desc: 'Don\'t jump weekly volume by more than ~10% — that\'s how injuries start.' }
        ]
    },
    {
        title: 'Fuel, Sleep, Recover',
        color: 'rgb(var(--color-primary))',
        items: [
            { title: 'Eat before you ride.', desc: 'Skipping breakfast = bonking by mile 8.' },
            { title: 'Carbs on the bike.', desc: 'Anything over 75 minutes? Bring food. 30–60g carbs/hour.' },
            { title: 'Hydrate early.', desc: 'If you\'re thirsty, you\'re already behind. Add electrolytes when it\'s hot.' },
            { title: 'Sleep is free watts.', desc: '8–9 hours. No exceptions in race weeks.' },
            { title: 'Refuel within 30 min', desc: 'after hard rides — protein + carbs.' }
        ]
    },
    {
        title: 'Head Game',
        color: 'rgb(var(--color-primary))',
        items: [
            { title: 'Process over outcome.', desc: 'Focus on the next corner, not the finish line.' },
            { title: 'Bad days happen.', desc: 'One ugly workout doesn\'t define your season.' },
            { title: 'Compare to yesterday\'s you,', desc: 'not the rider next to you.' },
            { title: 'Have fun.', desc: 'Riders who enjoy training keep training. That\'s the whole game.' }
        ]
    },
    {
        title: 'Start Doing',
        color: 'rgb(var(--color-primary))',
        items: [
            { title: 'Pick a consistent bedtime', desc: 'and stick to it each night.' },
            { title: 'Do one ride at a true easy pace', desc: '— fully conversational the whole time.' },
            { title: 'Practice one skill', desc: 'for 10 minutes before or after a team ride.' },
            { title: 'Check in with a coach', desc: 'if something feels off — pain, fatigue, or burnout.' }
        ]
    }
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

                {/* Training Tips */}
                <h2 style={{ marginBottom: 'var(--spacing-md)', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>Training Tips</h2>
                <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                    <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                        Review our essential training tips, covering off-season strategies, expectations, and nutrition to help you prepare for the upcoming season.
                        <br />
                        <a href="/lehi-mtb-training-talk.pdf" download="Lehi_MTB_Training_101.pdf" style={{ color: 'rgb(var(--color-primary))', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.5rem' }}>
                            Download as PDF
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        </a>
                    </p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--spacing-md)' }}>
                        {trainingTipsData.map((section) => (
                            <div key={section.title} className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderLeft: `4px solid ${section.color}` }}>
                                <h3 style={{ marginBottom: '1rem', color: section.color, fontSize: '1.2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                                    {section.title}
                                </h3>
                                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {section.items.map((item, index) => (
                                        <li key={index} style={{ fontSize: '0.95rem', lineHeight: 1.6, display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                                            <span style={{ color: section.color, marginTop: '2px', fontSize: '1.1rem' }}>✦</span>
                                            <div>
                                                <strong style={{ color: 'rgb(var(--text-color))' }}>{item.title}</strong>{' '}
                                                <span className="text-muted">{item.desc}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

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
                            Use coupon code <strong style={{ color: 'rgb(var(--color-secondary))' }}>LEHIMTB</strong> at checkout on any of the plans below to get it at no cost. Plans are normally over $50 — the code makes them free for our riders.
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
