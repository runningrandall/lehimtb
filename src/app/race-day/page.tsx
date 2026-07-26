import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Race Day Central & Wave Schedule | Lehi MTB Hub',
    description: 'Complete 2026 race day guide, wave schedule with arrival times, wave meeting times, stage times, start times, bike prep checklist, pit zone etiquette, and Utah MTB resources.',
};

const hsWaves = [
    {
        wave: 'Wave 1 - HS',
        arrivalTime: '6:30 AM',
        meetingTime: '7:00 AM',
        stageTime: '7:45 AM',
        startTime: '8:00 AM',
        categories: [
            { category: 'JVB Boys', time: '8:00 AM', laps: '2' },
            { category: 'JVC Boys', time: '8:05 AM', laps: '2' },
        ]
    },
    {
        wave: 'Wave 2 - HS',
        arrivalTime: '6:00 – 7:00 AM',
        meetingTime: '7:55 AM',
        stageTime: '8:40 AM',
        startTime: '8:55 AM',
        categories: [
            { category: 'JVA Boys', time: '8:55 AM', laps: '2 / 3' },
            { category: 'Fresh A Boys', time: '9:00 AM', laps: '2' },
        ]
    },
    {
        wave: 'Wave 3 - HS',
        arrivalTime: '7:40 – 8:10 AM',
        meetingTime: '9:10 AM',
        stageTime: '9:55 AM',
        startTime: '10:10 AM',
        categories: [
            { category: 'Varsity Boys', time: '10:10 AM', laps: '3 / 4' },
            { category: 'Varsity Girls', time: '10:15 AM', laps: '2 / 3' },
        ]
    },
    {
        wave: 'Wave 4 - HS',
        arrivalTime: '9:05 – 9:35 AM',
        meetingTime: '10:35 AM',
        stageTime: '11:20 AM',
        startTime: '11:35 AM',
        categories: [
            { category: 'JVA Girls', time: '11:35 AM', laps: '2' },
            { category: 'JVB Girls', time: '11:40 AM', laps: '2' },
            { category: 'JVC Girls', time: '11:45 AM', laps: '2' },
        ]
    },
    {
        wave: 'Wave 5 - HS',
        arrivalTime: '10:10 – 10:40 AM',
        meetingTime: '11:40 AM',
        stageTime: '12:25 PM',
        startTime: '12:40 PM',
        categories: [
            { category: 'Fresh B Boys', time: '12:40 PM', laps: '2' },
            { category: 'JV D Boys', time: '12:45 PM', laps: '2' },
        ]
    },
    {
        wave: 'Wave 6 - HS (Single Lap)',
        arrivalTime: '11:05 – 11:35 AM',
        meetingTime: '12:35 PM',
        stageTime: '1:20 PM',
        startTime: '1:35 PM',
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
        arrivalTime: '12:00 – 12:30 PM',
        meetingTime: '1:30 PM',
        stageTime: '2:15 PM',
        startTime: '2:30 PM',
        categories: [
            { category: 'Advanced Boys', time: '2:30 PM', laps: '1' },
            { category: 'Interm Boys 8', time: '2:35 PM', laps: '1' },
            { category: 'Interm Boys 7', time: '2:40 PM', laps: '1' },
        ]
    },
    {
        wave: 'Wave 8 - JD',
        arrivalTime: '12:40 – 1:10 PM',
        meetingTime: '2:10 PM',
        stageTime: '2:55 PM',
        startTime: '3:10 PM',
        categories: [
            { category: 'Advanced Girls', time: '3:10 PM', laps: '1' },
            { category: 'Intermediate Girls', time: '3:15 PM', laps: '1' },
            { category: 'Beginner Girls', time: '3:20 PM', laps: '1' },
        ]
    },
    {
        wave: 'Wave 9 - JD',
        arrivalTime: '1:20 – 1:50 PM',
        meetingTime: '2:50 PM',
        stageTime: '3:35 PM',
        startTime: '3:50 PM',
        categories: [
            { category: 'Beginner Boys 8', time: '3:50 PM', laps: '1' },
            { category: 'Beginner Boys 7', time: '3:55 PM', laps: '1' },
        ]
    },
];

const helpfulLinks = [
    { name: 'Region 5 Event Details & Venue Maps', url: 'https://utahmtb.org/event-category/region-5-races/' },
    { name: 'Utah League Official Handbook & Rules', url: 'https://utahmtb.org/' },
    { name: 'PitZone Registration & Results', url: 'https://pitzone.nationalmtb.org/' },
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
                <p style={{ fontSize: '1.2rem', opacity: 0.95, maxWidth: '750px', margin: '0 auto', lineHeight: 1.6 }}>
                    Everything you need for race weekend: 2026 Wave Schedules, arrival times, wave meeting times, stage times, bike prep rules, pit zone etiquette, and Utah MTB resources.
                </p>
                <p style={{ marginTop: '1rem', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', background: 'rgba(255,255,255,0.2)', display: 'inline-block', padding: '0.4rem 1rem', borderRadius: '999px' }}>
                    2026 Region 5 Wave Schedule · Subject to Change
                </p>
            </div>

            {/* Timing Sequence Summary Callout */}
            <div className="glass-panel" style={{
                padding: 'var(--spacing-lg)',
                marginBottom: 'var(--spacing-xl)',
                borderLeft: '5px solid rgb(var(--color-primary))',
                backgroundColor: 'rgba(87, 43, 158, 0.04)'
            }}>
                <h2 style={{ fontSize: '1.4rem', color: 'rgb(var(--color-primary))', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>⏰</span> Race Day Schedule Timeline Sequence
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '0.75rem' }}>
                    <div style={{ padding: '0.875rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(87, 43, 158, 0.08)', border: '1px solid rgba(87, 43, 158, 0.15)' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgb(var(--color-primary))' }}>Step 1</span>
                        <p style={{ fontWeight: 700, fontSize: '1.05rem', margin: '0.2rem 0' }}>Arrival Time</p>
                        <p className="text-muted" style={{ fontSize: '0.85rem', margin: 0, lineHeight: 1.4 }}>
                            Arrive at venue <strong>1 to 1.5 hrs before</strong> your Wave Meeting (e.g. 6:30 AM for Wave 1) to park, walk to pit zone &amp; prep.
                        </p>
                    </div>

                    <div style={{ padding: '0.875rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(180, 83, 9, 0.1)', border: '1px solid rgba(180, 83, 9, 0.25)' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#b45309' }}>Step 2</span>
                        <p style={{ fontWeight: 700, fontSize: '1.05rem', margin: '0.2rem 0', color: '#b45309' }}>Wave Meeting</p>
                        <p className="text-muted" style={{ fontSize: '0.85rem', margin: 0, lineHeight: 1.4 }}>
                            Mandatory team check-in <strong>1 hour before</strong> start time at the Lehi MTB Pit Zone.
                        </p>
                    </div>

                    <div style={{ padding: '0.875rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#2563eb' }}>Step 3</span>
                        <p style={{ fontWeight: 700, fontSize: '1.05rem', margin: '0.2rem 0', color: '#1d4ed8' }}>Stage Time</p>
                        <p className="text-muted" style={{ fontSize: '0.85rem', margin: 0, lineHeight: 1.4 }}>
                            Report to staging <strong>15 minutes before</strong> start time for call-ups and line-up.
                        </p>
                    </div>

                    <div style={{ padding: '0.875rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#059669' }}>Step 4</span>
                        <p style={{ fontWeight: 700, fontSize: '1.05rem', margin: '0.2rem 0', color: '#047857' }}>Start Time</p>
                        <p className="text-muted" style={{ fontSize: '0.85rem', margin: 0, lineHeight: 1.4 }}>
                            Official gun time for your category wave! Race hard, stay safe, and have fun.
                        </p>
                    </div>
                </div>

                <div style={{ marginTop: '1rem', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(87, 43, 158, 0.1)', border: '1px solid rgba(87, 43, 158, 0.2)' }}>
                    <p style={{ fontWeight: 700, fontSize: '0.95rem', color: 'rgb(var(--color-primary))', margin: 0 }}>
                        📣 Stay All Day &amp; Cheer On Teammates!
                    </p>
                    <p className="text-muted" style={{ fontSize: '0.875rem', margin: '0.25rem 0 0 0', lineHeight: 1.5 }}>
                        There is no bench on our team. We strongly encourage all families and riders to stay for the entire day and cheer on teammates across every wave!
                    </p>
                </div>
            </div>

            {/* Wave Schedule Section */}
            <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                    <h2>2026 Official Wave Schedule</h2>
                    <p className="text-muted">High School &amp; Junior Development timing: Arrival Time → Wave Meeting → Stage Time → Start Time.</p>
                </div>

                {/* Highly Noticeable Arrival & Cheering Notice */}
                <div style={{
                    background: 'linear-gradient(135deg, rgba(87,43,158,0.12), rgba(250,255,56,0.15))',
                    border: '2px solid rgb(var(--color-primary))',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.25rem 1.5rem',
                    marginBottom: 'var(--spacing-lg)',
                    boxShadow: 'var(--shadow-md)',
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start'
                }}>
                    <span style={{ fontSize: '2rem', lineHeight: 1 }}>📢</span>
                    <div>
                        <h3 style={{ fontSize: '1.15rem', color: 'rgb(var(--color-primary))', marginBottom: '0.4rem', fontWeight: 800 }}>
                            Important Notice: Arrival Times &amp; Full-Day Team Support
                        </h3>
                        <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'rgb(var(--text-main))', margin: 0 }}>
                            <strong>Arrival Time is a MINIMUM arrival requirement.</strong> We expect all riders and families to arrive on time and stay at the venue to cheer on their teammates across every wave. There is no bench on our team — having a loud Lehi cheer squad out on course for every wave makes an incredible difference!
                        </p>
                    </div>
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
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '720px' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid var(--border-color)', color: 'rgb(var(--color-primary))' }}>
                                    <th style={{ padding: '0.75rem 0.75rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Wave</th>
                                    <th style={{ padding: '0.75rem 0.75rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Category</th>
                                    <th style={{ padding: '0.75rem 0.75rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Min. Arrival Time</th>
                                    <th style={{ padding: '0.75rem 0.75rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Wave Meeting</th>
                                    <th style={{ padding: '0.75rem 0.75rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Stage Time</th>
                                    <th style={{ padding: '0.75rem 0.75rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Start Time</th>
                                    <th style={{ padding: '0.75rem 0.75rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Laps</th>
                                </tr>
                            </thead>
                            <tbody>
                                {hsWaves.map((w, waveIdx) => (
                                    w.categories.map((cat, idx) => {
                                        const isWaveEven = waveIdx % 2 === 0;
                                        const isLastCategoryInWave = idx === w.categories.length - 1;
                                        return (
                                            <tr
                                                key={cat.category}
                                                style={{
                                                    borderBottom: isLastCategoryInWave ? '2px solid rgba(87, 43, 158, 0.3)' : '1px dashed var(--border-color)',
                                                    backgroundColor: isWaveEven ? 'rgba(87, 43, 158, 0.07)' : 'rgba(255, 255, 255, 0.015)'
                                                }}
                                            >
                                                {idx === 0 && (
                                                    <td rowSpan={w.categories.length} style={{ padding: '0.75rem 0.75rem', fontWeight: 700, verticalAlign: 'middle', borderRight: '1px solid var(--border-color)', backgroundColor: isWaveEven ? 'rgba(87, 43, 158, 0.12)' : 'rgba(87, 43, 158, 0.05)' }}>
                                                        {w.wave}
                                                    </td>
                                                )}
                                                <td style={{ padding: '0.75rem 0.75rem', fontWeight: 600 }}>
                                                    {cat.category}
                                                    {cat.note && <span style={{ display: 'block', fontSize: '0.75rem', color: 'rgb(var(--text-muted))', fontWeight: 400 }}>*{cat.note}</span>}
                                                </td>
                                                {idx === 0 && (
                                                    <>
                                                        <td rowSpan={w.categories.length} style={{ padding: '0.75rem 0.75rem', fontWeight: 600, verticalAlign: 'middle', borderRight: '1px solid var(--border-color)', fontSize: '0.875rem' }}>
                                                            {w.arrivalTime}
                                                        </td>
                                                        <td rowSpan={w.categories.length} style={{ padding: '0.75rem 0.75rem', color: 'rgb(var(--color-primary))', fontWeight: 800, verticalAlign: 'middle', borderRight: '1px solid var(--border-color)', fontSize: '0.9rem' }}>
                                                            {w.meetingTime}
                                                        </td>
                                                        <td rowSpan={w.categories.length} style={{ padding: '0.75rem 0.75rem', color: '#2563eb', fontWeight: 700, verticalAlign: 'middle', borderRight: '1px solid var(--border-color)', fontSize: '0.875rem' }}>
                                                            {w.stageTime}
                                                        </td>
                                                    </>
                                                )}
                                                <td style={{ padding: '0.75rem 0.75rem', color: 'rgb(var(--color-primary))', fontWeight: 700 }}>{cat.time}</td>
                                                <td style={{ padding: '0.75rem 0.75rem', fontWeight: 600 }}>{cat.laps} {cat.laps === '1' ? 'Lap' : 'Laps'}</td>
                                            </tr>
                                        );
                                    })
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
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '720px' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid var(--border-color)', color: 'rgb(140, 120, 0)' }}>
                                    <th style={{ padding: '0.75rem 0.75rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Wave</th>
                                    <th style={{ padding: '0.75rem 0.75rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Category</th>
                                    <th style={{ padding: '0.75rem 0.75rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Min. Arrival Time</th>
                                    <th style={{ padding: '0.75rem 0.75rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Wave Meeting</th>
                                    <th style={{ padding: '0.75rem 0.75rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Stage Time</th>
                                    <th style={{ padding: '0.75rem 0.75rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Start Time</th>
                                    <th style={{ padding: '0.75rem 0.75rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Laps</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jdWaves.map((w, waveIdx) => (
                                    w.categories.map((cat, idx) => {
                                        const isWaveEven = waveIdx % 2 === 0;
                                        const isLastCategoryInWave = idx === w.categories.length - 1;
                                        return (
                                            <tr
                                                key={cat.category}
                                                style={{
                                                    borderBottom: isLastCategoryInWave ? '2px solid rgba(250, 255, 56, 0.4)' : '1px dashed var(--border-color)',
                                                    backgroundColor: isWaveEven ? 'rgba(250, 255, 56, 0.07)' : 'rgba(255, 255, 255, 0.015)'
                                                }}
                                            >
                                                {idx === 0 && (
                                                    <td rowSpan={w.categories.length} style={{ padding: '0.75rem 0.75rem', fontWeight: 700, verticalAlign: 'middle', borderRight: '1px solid var(--border-color)', backgroundColor: isWaveEven ? 'rgba(250, 255, 56, 0.14)' : 'rgba(250, 255, 56, 0.05)' }}>
                                                        {w.wave}
                                                    </td>
                                                )}
                                                <td style={{ padding: '0.75rem 0.75rem', fontWeight: 600 }}>{cat.category}</td>
                                                {idx === 0 && (
                                                    <>
                                                        <td rowSpan={w.categories.length} style={{ padding: '0.75rem 0.75rem', fontWeight: 600, verticalAlign: 'middle', borderRight: '1px solid var(--border-color)', fontSize: '0.875rem' }}>
                                                            {w.arrivalTime}
                                                        </td>
                                                        <td rowSpan={w.categories.length} style={{ padding: '0.75rem 0.75rem', color: 'rgb(var(--color-primary))', fontWeight: 800, verticalAlign: 'middle', borderRight: '1px solid var(--border-color)', fontSize: '0.9rem' }}>
                                                            {w.meetingTime}
                                                        </td>
                                                        <td rowSpan={w.categories.length} style={{ padding: '0.75rem 0.75rem', color: '#2563eb', fontWeight: 700, verticalAlign: 'middle', borderRight: '1px solid var(--border-color)', fontSize: '0.875rem' }}>
                                                            {w.stageTime}
                                                        </td>
                                                    </>
                                                )}
                                                <td style={{ padding: '0.75rem 0.75rem', color: 'rgb(140, 120, 0)', fontWeight: 700 }}>{cat.time}</td>
                                                <td style={{ padding: '0.75rem 0.75rem', fontWeight: 600 }}>{cat.laps} Lap</td>
                                            </tr>
                                        );
                                    })
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* What to Expect & Preparation Guide */}
            <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                    <h2>Essential Race Preparation &amp; Rules</h2>
                    <p className="text-muted">Guidance for riders, parents, bike maintenance, pit zone etiquette, and course pre-riding.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>

                    {/* Bike Maintenance & Floor Pump */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid rgb(var(--color-primary))' }}>
                        <h3 style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>🚲</span> Bike Maintenance &amp; Equipment
                        </h3>
                        <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><strong>Team Floor Pump:</strong> The team will provide a floor pump at the pit zone for last-minute tire pressure topping.</li>
                            <li><strong>Advance Maintenance Required:</strong> Riders and parents must ensure tubeless sealant is topped off, drivetrain is cleaned &amp; lubed, and brakes are in proper working order — <strong>ideally a week before race day</strong>, or at minimum the night before.</li>
                            <li><em>Do not attempt to tune or repair a bike on race morning!</em></li>
                            <li><strong>Race Plate:</strong> Securely zip-tie your number plate to handlebars. Do <em>not</em> bend, fold, or cut the barcode/timing chip.</li>
                        </ul>
                    </div>

                    {/* Pre-Ride Rules */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #8b5cf6' }}>
                        <h3 style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>🗺️</span> Pre-Ride Rules &amp; Schedule
                        </h3>
                        <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><strong>When to Pre-Ride:</strong> Official pre-ride takes place the <strong>week before the race</strong> or during designated league hours on <strong>Friday evening before race day</strong>.</li>
                            <li><strong>NEVER Pre-Ride Race Morning:</strong> Course pre-riding is strictly prohibited on Saturday morning before the race.</li>
                            <li><strong>Separate Pre-Ride Plate Required:</strong> Riders <strong>MUST wear a separate official pre-ride plate</strong> on their bike during all pre-ride laps.</li>
                            <li>All riders must wear a helmet and be fully registered with NICA.</li>
                        </ul>
                    </div>

                    {/* Parent & Family Pit Zone Etiquette */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #f59e0b' }}>
                        <h3 style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>⛺</span> Parent &amp; Pit Zone Etiquette
                        </h3>
                        <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><strong>Drop-Off &amp; Say Hello:</strong> Families are welcome to walk into the pit zone to drop off riders, say hello, and check in.</li>
                            <li><strong>Keep Pit Zone Uncrowded:</strong> Please do not stay hanging out in the rider pit zone area for extended periods unless you are actively volunteering. This keeps the zone focused and uncrowded for athletes and coaches.</li>
                            <li><strong>Get Out on Course:</strong> Parents are strongly encouraged to head out onto the course with cowbells to cheer!</li>
                        </ul>
                    </div>

                    {/* Post-Race Recovery & Hanging Out */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #10b981' }}>
                        <h3 style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>🎉</span> Post-Race Recovery &amp; Support
                        </h3>
                        <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li>After finishing your race, head back over to the team pit zone at your own pace.</li>
                            <li>Grab recovery drinks, fruit, and snacks, rehydrate, and celebrate with your coaches and teammates!</li>
                            <li>Once recovered, grab your cowbell and head out to cheer on the remaining waves!</li>
                        </ul>
                    </div>

                    {/* Staging Call-Ups */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid rgb(var(--color-primary))' }}>
                        <h3 style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>🏁</span> Staging &amp; Call-Ups
                        </h3>
                        <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><strong>Stage Time:</strong> Report to staging exactly <strong>15 minutes prior to your wave start time</strong>.</li>
                            <li>Call-ups are staged strictly by league points seeding and category call-up order.</li>
                            <li>Make sure your helmet is buckled and race plate is clean before entering staging.</li>
                        </ul>
                    </div>

                    {/* Useful Resources */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #ec4899' }}>
                        <h3 style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>🔗</span> Helpful League Resources
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.5rem' }}>
                            {helpfulLinks.map(link => (
                                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(var(--color-primary))', fontWeight: 600, fontSize: '0.9rem' }}>
                                    {link.name} ↗
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* Pro Tips Section: Making Race Day Easy & Stress-Free */}
            <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                <div className="glass-panel" style={{ padding: 'var(--spacing-xl)', borderTop: '4px solid rgb(var(--color-tertiary))', backgroundColor: 'rgba(250, 255, 56, 0.04)' }}>
                    <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                        <p style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(140, 120, 0)', marginBottom: '0.25rem' }}>Stress-Free Race Morning</p>
                        <h2>Pro Tips to Make Race Day Easy</h2>
                        <p className="text-muted" style={{ maxWidth: '650px', margin: '0 auto' }}>
                            A smooth race day starts with simple preparation ahead of time. Here is our recommended checklist for athletes and parents:
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--spacing-md)' }}>
                        <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}>
                            <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>🎒</div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: 'rgb(var(--color-primary))' }}>Get Ready the Night Before</h3>
                            <p className="text-muted" style={{ fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                                Pack your kit, bibs, helmet, shoes, socks, water bottles, snacks, camp chairs, and sunscreen into your car the evening before. Morning departures become effortless.
                            </p>
                        </div>

                        <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}>
                            <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>🚲</div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: 'rgb(var(--color-primary))' }}>Bike 100% Ready to Roll</h3>
                            <p className="text-muted" style={{ fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                                Check sealant, inflate tires, clean &amp; lube drivetrain, check brakes, and zip-tie number plates the night before. Avoid race morning mechanical stress!
                            </p>
                        </div>

                        <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}>
                            <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>📄</div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: 'rgb(var(--color-primary))' }}>Printed Schedule &amp; Phone Alarms</h3>
                            <p className="text-muted" style={{ fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                                Keep a printed copy of the Wave Schedule in your gear bag or car, and set phone alarms for your <strong>Wave Meeting (1 hr prior)</strong> and <strong>Stage Time (15 min prior)</strong>.
                            </p>
                        </div>

                        <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}>
                            <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>📍</div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: 'rgb(var(--color-primary))' }}>Offline Maps &amp; Travel Time</h3>
                            <p className="text-muted" style={{ fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                                Cell coverage at mountain venues can be spotty. Download offline venue directions and maps ahead of time so navigation is smooth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links Footer */}
            <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', textAlign: 'center', borderTop: '4px solid rgb(var(--color-primary))' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>View Season Events &amp; Venue Details</h3>
                <p className="text-muted" style={{ marginBottom: '1.25rem' }}>Check out venue locations, dates, and official Utah League race links.</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <Link href="/events" className="btn-primary">View Full Race Schedule →</Link>
                    <Link href="/join" className="btn-silver">Team FAQ &amp; Info</Link>
                </div>
            </div>

        </div>
    );
}
