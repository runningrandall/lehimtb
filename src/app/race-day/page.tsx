import type { Metadata } from 'next';
import Link from 'next/link';
import WaveScheduleTabs from './WaveScheduleTabs';

export const metadata: Metadata = {
    title: 'State Championship Central & Wave Schedule | Lehi MTB Hub',
    description: 'Complete 2026 Utah State Championship race day guide, Friday & Saturday wave schedules, St. George venue logistics, rider call-ups, pre-ride times, packing checklists, and cheer info.',
};

const helpfulLinks = [
    { name: 'Official State Championship Flyer (Canva)', url: 'https://www.canva.com/design/DAHT4TTKJ28/3WT2bsFaFP_mV5na50XTGw/view?embed' },
    { name: 'League Volunteer Sign-Up (Mandatory)', url: 'https://crew.mockletdesign.com/s/0041bf25f7a1931da7' },
    { name: 'State Championship Details (St. George)', url: 'https://utahmtb.org/events/state-championships/' },
    { name: 'What Category Am I In? (CPT Table)', url: 'https://my.raceresult.com/411620/' },
    { name: 'PitZone Registration & Results', url: 'https://pitzone.nationalmtb.org/' },
];

export default function RaceDayCentral() {
    return (
        <div className="container animate-fade-in" style={{ padding: 'var(--spacing-xl) 0' }}>

            {/* Header Banner */}
            <div style={{
                background: 'linear-gradient(135deg, rgb(var(--color-primary)), #db2777)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--spacing-xl) var(--spacing-lg)',
                textAlign: 'center',
                color: 'white',
                marginBottom: 'var(--spacing-xl)',
                boxShadow: 'var(--shadow-purple)'
            }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏆</div>
                <h1 style={{ marginBottom: '0.75rem', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>State Championship Central</h1>
                <p style={{ fontSize: '1.2rem', opacity: 0.95, maxWidth: '750px', margin: '0 auto', lineHeight: 1.6 }}>
                    Everything you need for the 2026 Utah State Championship weekend in St. George: Friday &amp; Saturday wave schedules, pre-ride times, vehicle gate hours, and packing checklists.
                </p>
                <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a
                        href="https://www.canva.com/design/DAHT4TTKJ28/3WT2bsFaFP_mV5na50XTGw/view?embed"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-accent"
                        style={{ fontSize: '0.9rem', padding: '0.65rem 1.25rem' }}
                    >
                        📄 Official State Race Flyer (Canva) ↗
                    </a>
                    <a
                        href="https://crew.mockletdesign.com/s/0041bf25f7a1931da7"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontSize: '0.875rem',
                            fontWeight: 700,
                            background: 'rgba(255,255,255,0.25)',
                            color: 'white',
                            padding: '0.65rem 1.25rem',
                            borderRadius: 'var(--radius-sm)',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem'
                        }}
                    >
                        🚴 League Volunteer Sign-Up (Mandatory) ↗
                    </a>
                    <a
                        href="https://utahmtb.org/events/state-championships/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontSize: '0.875rem',
                            fontWeight: 700,
                            background: 'rgba(255,255,255,0.2)',
                            color: 'white',
                            padding: '0.65rem 1.25rem',
                            borderRadius: 'var(--radius-sm)',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem'
                        }}
                    >
                        🌐 Utah League State Event Page ↗
                    </a>
                    <a
                        href="https://my.raceresult.com/411620/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontSize: '0.875rem',
                            fontWeight: 700,
                            background: 'rgba(255,255,255,0.2)',
                            color: 'white',
                            padding: '0.65rem 1.25rem',
                            borderRadius: 'var(--radius-sm)',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem'
                        }}
                    >
                        What Category Am I In? (CPT Table) ↗
                    </a>
                </div>
            </div>

            {/* Featured Championship Banner (2026 Utah State Championship) */}
            <div className="glass-panel" style={{
                padding: 'var(--spacing-lg)',
                marginBottom: 'var(--spacing-xl)',
                borderTop: '5px solid #ec4899',
                background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.08), rgba(87, 43, 158, 0.05))'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.75rem' }}>
                    <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#be185d', background: 'rgba(236,72,153,0.12)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                            2026 UTAH STATE CHAMPIONSHIP · HIGH SCHOOL ONLY (GRADES 9–12)
                        </span>
                        <h2 style={{ fontSize: '1.65rem', margin: '0.4rem 0 0.2rem 0' }}>Friday, Oct 23 &amp; Saturday, Oct 24, 2026 · St. George, UT</h2>
                        <p style={{ margin: '0.4rem 0 0 0', fontWeight: 700, color: 'rgb(var(--color-primary))', fontSize: '0.95rem' }}>
                            📍 Venue: St. George, Utah · Red Rock Championship Courses · 2-Day Finale Crowning Male &amp; Female Champions in Every Category!
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <a
                            href="https://www.canva.com/design/DAHT4TTKJ28/3WT2bsFaFP_mV5na50XTGw/view?embed"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-accent"
                            style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
                        >
                            📄 Canva State Flyer ↗
                        </a>
                        <a
                            href="https://crew.mockletdesign.com/s/0041bf25f7a1931da7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-silver"
                            style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
                        >
                            🚴 League Volunteer Sign-Up ↗
                        </a>
                        <a
                            href="https://utahmtb.org/events/state-championships/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-silver"
                            style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
                        >
                            🌐 Utah MTB Event Page ↗
                        </a>
                    </div>
                </div>

                {/* State Championship Key Highlights Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '0.75rem',
                    margin: '1rem 0'
                }}>
                    <div style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(236,72,153,0.08)', border: '1px solid rgba(236,72,153,0.2)' }}>
                        <strong style={{ color: '#be185d', fontSize: '0.85rem', display: 'block' }}>🚵 PRE-RIDE SCHEDULE</strong>
                        <span style={{ fontSize: '0.85rem', color: 'rgb(var(--text-main))' }}>
                            Thursday 3:00–6:00 PM (plates req). Friday opens 20 mins post-race until 6:00 PM for Saturday racers.
                        </span>
                    </div>

                    <div style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)' }}>
                        <strong style={{ color: '#7c3aed', fontSize: '0.85rem', display: 'block' }}>🎉 FRIDAY DJ DANCE PARTY</strong>
                        <span style={{ fontSize: '0.85rem', color: 'rgb(var(--text-main))' }}>
                            Podiums at 5:30 PM, followed by the DJ Dance Party 6:30–8:00 PM! Pit Zone open until 8:00 PM for team dinners.
                        </span>
                    </div>

                    <div style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}>
                        <strong style={{ color: '#047857', fontSize: '0.85rem', display: 'block' }}>🏆 SATURDAY PODIUMS &amp; SPIRIT</strong>
                        <span style={{ fontSize: '0.85rem', color: 'rgb(var(--text-main))' }}>
                            Full Saturday podium ceremonies &amp; League Spirit Award Ceremony at ~6:30 PM after course cleanup.
                        </span>
                    </div>

                    <div style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
                        <strong style={{ color: '#dc2626', fontSize: '0.85rem', display: 'block' }}>🚫 NO VENUE CAMPING</strong>
                        <span style={{ fontSize: '0.85rem', color: 'rgb(var(--text-main))' }}>
                            There is NO camping allowed at the state venue. Please arrange local hotel lodging in St. George.
                        </span>
                    </div>
                </div>

                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'rgb(var(--text-muted))', margin: 0 }}>
                    Qualified High School student-athletes (Grades 9–12) from all Utah regions gather in St. George for the pinnacle event of the season. <strong>Junior Development (JD) does not race at the State Championship.</strong> Call-ups are based on overall series point accumulation from the season.
                </p>
            </div>

            {/* Critical Race Rules Banner */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1rem',
                marginBottom: 'var(--spacing-xl)'
            }}>
                <div style={{
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(239, 68, 68, 0.08)',
                    border: '2px solid #ef4444',
                    display: 'flex',
                    gap: '0.75rem',
                    alignItems: 'center'
                }}>
                    <span style={{ fontSize: '1.75rem' }}>🚫</span>
                    <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#dc2626', display: 'block' }}>Strict League Rule</span>
                        <strong style={{ fontSize: '1rem', color: '#dc2626' }}>NO DOGS Allowed at Venue</strong>
                        <p className="text-muted" style={{ fontSize: '0.825rem', margin: '0.15rem 0 0 0', lineHeight: 1.4 }}>
                            Per Utah League policy, dogs are strictly prohibited at all race venues and pit zones for rider safety.
                        </p>
                    </div>
                </div>

                <div style={{
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(239, 68, 68, 0.08)',
                    border: '2px solid #ef4444',
                    display: 'flex',
                    gap: '0.75rem',
                    alignItems: 'center'
                }}>
                    <span style={{ fontSize: '1.75rem' }}>🏕️</span>
                    <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#dc2626', display: 'block' }}>Venue Policy</span>
                        <strong style={{ fontSize: '1rem', color: '#dc2626' }}>NO Camping at Venue</strong>
                        <p className="text-muted" style={{ fontSize: '0.825rem', margin: '0.15rem 0 0 0', lineHeight: 1.4 }}>
                            There is strictly NO camping permitted at the state venue. Plan on hotel lodging in St. George.
                        </p>
                    </div>
                </div>

                <div style={{
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(245, 158, 11, 0.08)',
                    border: '2px solid #f59e0b',
                    display: 'flex',
                    gap: '0.75rem',
                    alignItems: 'center'
                }}>
                    <span style={{ fontSize: '1.75rem' }}>⏱️</span>
                    <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#b45309', display: 'block' }}>Safety Cut-Off</span>
                        <strong style={{ fontSize: '1rem', color: '#b45309' }}>Strict Lap Cut-Offs</strong>
                        <p className="text-muted" style={{ fontSize: '0.825rem', margin: '0.15rem 0 0 0', lineHeight: 1.4 }}>
                            Riders must meet lap cut-off times (45m for 2-lap waves; 70–80m for Varsity) or they will be pulled from course.
                        </p>
                    </div>
                </div>

                <div style={{
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(239, 68, 68, 0.08)',
                    border: '2px solid #ef4444',
                    display: 'flex',
                    gap: '0.75rem',
                    alignItems: 'center'
                }}>
                    <span style={{ fontSize: '1.75rem' }}>🚗</span>
                    <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#dc2626', display: 'block' }}>Vehicle Gate Hours</span>
                        <strong style={{ fontSize: '1rem', color: '#dc2626' }}>Pit Zone Closes at 8:00 AM</strong>
                        <p className="text-muted" style={{ fontSize: '0.825rem', margin: '0.15rem 0 0 0', lineHeight: 1.4 }}>
                            Pit Zone opens at 6:45 AM and closes strictly at 8:00 AM until the final racer crosses the line.
                        </p>
                    </div>
                </div>

                <div style={{
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(59, 130, 246, 0.08)',
                    border: '2px solid #3b82f6',
                    display: 'flex',
                    gap: '0.75rem',
                    alignItems: 'center'
                }}>
                    <span style={{ fontSize: '1.75rem' }}>🚵</span>
                    <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#2563eb', display: 'block' }}>Course Access</span>
                        <strong style={{ fontSize: '1rem', color: '#1d4ed8' }}>Pre-Ride Plates Required</strong>
                        <p className="text-muted" style={{ fontSize: '0.825rem', margin: '0.15rem 0 0 0', lineHeight: 1.4 }}>
                            Official pre-ride plates must be mounted on bikes for all racers and coaches entering the course.
                        </p>
                    </div>
                </div>
            </div>

            {/* Timing Sequence Summary Callout */}
            <div className="glass-panel" style={{
                padding: 'var(--spacing-lg)',
                marginBottom: 'var(--spacing-xl)',
                borderLeft: '5px solid #ec4899',
                backgroundColor: 'rgba(236, 72, 153, 0.04)'
            }}>
                <h2 style={{ fontSize: '1.4rem', color: '#be185d', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>⏰</span> Race Day Schedule Timeline Sequence
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '0.75rem', marginTop: '0.75rem' }}>
                    <div style={{ padding: '0.875rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(87, 43, 158, 0.08)', border: '1px solid rgba(87, 43, 158, 0.15)' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgb(var(--color-primary))' }}>Step 1</span>
                        <p style={{ fontWeight: 700, fontSize: '0.95rem', margin: '0.2rem 0' }}>Arrival Time</p>
                        <p className="text-muted" style={{ fontSize: '0.8rem', margin: 0, lineHeight: 1.4 }}>
                            Morning waves arrive by <strong>6:45–7:30 AM</strong> (Pit Zone closes at 8:00 AM!). Afternoon waves arrive <strong>1.5 hrs</strong> prior.
                        </p>
                    </div>

                    <div style={{ padding: '0.875rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(236, 72, 153, 0.1)', border: '1px solid rgba(236, 72, 153, 0.25)' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#db2777' }}>Step 2</span>
                        <p style={{ fontWeight: 700, fontSize: '0.95rem', margin: '0.2rem 0', color: '#be185d' }}>Pit Zone Check-In</p>
                        <p className="text-muted" style={{ fontSize: '0.8rem', margin: 0, lineHeight: 1.4 }}>
                            Check in at the <strong>Lehi team check-in table in pit zone</strong> immediately upon arrival to get your staging number marked.
                        </p>
                    </div>

                    <div style={{ padding: '0.875rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(180, 83, 9, 0.1)', border: '1px solid rgba(180, 83, 9, 0.25)' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#b45309' }}>Step 3</span>
                        <p style={{ fontWeight: 700, fontSize: '0.95rem', margin: '0.2rem 0', color: '#b45309' }}>Wave Meeting (10m)</p>
                        <p className="text-muted" style={{ fontSize: '0.8rem', margin: 0, lineHeight: 1.4 }}>
                            Mandatory team briefing at Pit Zone <strong>1 hour before</strong> start time (lasts 10 mins).
                        </p>
                    </div>

                    <div style={{ padding: '0.875rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#059669' }}>Step 4</span>
                        <p style={{ fontWeight: 700, fontSize: '0.95rem', margin: '0.2rem 0', color: '#047857' }}>Warm-Up (30m)</p>
                        <p className="text-muted" style={{ fontSize: '0.8rem', margin: 0, lineHeight: 1.4 }}>
                            Structured <strong>30-minute warm-up ride</strong> to elevate heart rate and get legs primed.
                        </p>
                    </div>

                    <div style={{ padding: '0.875rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#2563eb' }}>Step 5</span>
                        <p style={{ fontWeight: 700, fontSize: '0.95rem', margin: '0.2rem 0', color: '#1d4ed8' }}>Stage Time (15m)</p>
                        <p className="text-muted" style={{ fontSize: '0.8rem', margin: 0, lineHeight: 1.4 }}>
                            Report to staging <strong>15 minutes before</strong> start time at your designated Gate (Gate 1, 2, or 3).
                        </p>
                    </div>

                    <div style={{ padding: '0.875rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(236, 72, 153, 0.12)', border: '1px solid rgba(236, 72, 153, 0.3)' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#be185d' }}>Step 6</span>
                        <p style={{ fontWeight: 700, fontSize: '0.95rem', margin: '0.2rem 0', color: '#be185d' }}>Start Time</p>
                        <p className="text-muted" style={{ fontSize: '0.8rem', margin: 0, lineHeight: 1.4 }}>
                            Official gun time for your split wave! Race hard, stay safe, and represent Lehi!
                        </p>
                    </div>
                </div>

                <div style={{ marginTop: '1rem', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(236, 72, 153, 0.1)', border: '1px solid rgba(236, 72, 153, 0.25)' }}>
                    <p style={{ fontWeight: 700, fontSize: '0.95rem', color: '#be185d', margin: 0 }}>
                        📣 Stay All Day &amp; Cheer On Teammates!
                    </p>
                    <p className="text-muted" style={{ fontSize: '0.875rem', margin: '0.25rem 0 0 0', lineHeight: 1.5 }}>
                        There is no bench on our team. We strongly encourage all families and riders to stay for both days, line the course with cowbells, and cheer on teammates across every wave!
                    </p>
                </div>
            </div>

            {/* Wave Schedule Section */}
            <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                    <h2>2026 Utah State Championship Wave Schedules</h2>
                    <p className="text-muted">High School championship waves for Friday (Waves 1–6) and Saturday (Waves 7–12).</p>
                </div>

                {/* Interactive Wave Schedule Section */}
                <WaveScheduleTabs />
            </section>

            {/* Food, Hospitality & Volunteer Section */}
            <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                    <h2>Food, Hospitality &amp; Volunteering</h2>
                    <p className="text-muted">How we fuel our riders, support the team, and make race weekend run smoothly.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--spacing-lg)' }}>

                    {/* Food & Hospitality Panel */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #10b981' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>🍎</span>
                            <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Team Food &amp; Snacks</h3>
                        </div>
                        <p style={{ fontSize: '0.9rem', color: 'rgb(var(--color-primary))', fontWeight: 700, margin: '0 0 0.75rem 0' }}>
                            ✨ The team provides food and snacks so parents are free to volunteer and cheer!
                        </p>
                        <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                            <li><strong>Riders &amp; Volunteers:</strong> Snacks are available all day. Lunch is served from <strong>10:00 AM – 2:00 PM</strong> at the Lehi team tent.</li>
                            <li><strong>Families &amp; Spectators:</strong> Please bring your own meals, drinks, and snacks for spectating throughout the weekend.</li>
                            <li><strong>Leftovers Policy:</strong> After <strong>2:00 PM</strong>, once all riders have eaten, anyone (families/siblings) is welcome to grab leftover lunch — just check with a volunteer first!</li>
                        </ul>
                    </div>

                    {/* Volunteering Panel */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #ec4899' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>🤝</span>
                            <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Volunteer Opportunities</h3>
                        </div>
                        <p style={{ fontSize: '0.9rem', color: 'rgb(var(--text-muted))', margin: '0 0 0.75rem 0' }}>
                            We need your help to make championship weekend run smoothly! Anyone who volunteers for the day (League or Team) is welcome to eat lunch with the team.
                        </p>
                        <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                            <li>
                                <strong>League Volunteers (Mandatory):</strong> State Championship requires volunteers across course marshaling, staging, feed zone, and venue management. <a href="https://crew.mockletdesign.com/s/0041bf25f7a1931da7" target="_blank" rel="noopener noreferrer" style={{ color: '#be185d', fontWeight: 700 }}>Sign up on the League Volunteer Portal ↗</a>
                            </li>
                            <li>
                                <strong>Lehi Team Volunteers (Coming Soon):</strong> The Lehi team volunteer schedule (Feed Zone hydration handoffs, tent support, and athlete hospitality) is currently being finalized. Check back soon for the sign-up link!
                            </li>
                            <li>
                                <strong>Pit Zone Setup:</strong> Thursday afternoon (3:00 PM – 5:00 PM).
                            </li>
                            <li>
                                <strong>Pit Zone Takedown:</strong> Saturday evening following the final wave and podium ceremonies.
                            </li>
                        </ul>
                        <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                            <a
                                href="https://crew.mockletdesign.com/s/0041bf25f7a1931da7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-accent"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.875rem', padding: '0.5rem 1.15rem' }}
                            >
                                🚴 League Volunteer Sign-Up ↗
                            </a>
                            <span style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                fontSize: '0.875rem',
                                padding: '0.5rem 1.15rem',
                                borderRadius: 'var(--radius-sm)',
                                backgroundColor: 'rgba(236,72,153,0.1)',
                                border: '1px dashed #ec4899',
                                color: '#be185d',
                                fontWeight: 600
                            }}>
                                🙋 Lehi Team Sign-Up: Coming Soon
                            </span>
                            <a
                                href="https://www.canva.com/design/DAHT4TTKJ28/3WT2bsFaFP_mV5na50XTGw/view?embed"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-silver"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.875rem', padding: '0.5rem 1.15rem' }}
                            >
                                📄 League State Flyer ↗
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            {/* What to Bring Checklist Section */}
            <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                    <h2>What to Bring: Race Weekend Checklists</h2>
                    <p className="text-muted">Double-check your gear bag and vehicle the night before traveling to St. George.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--spacing-lg)' }}>

                    {/* Rider Checklist */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid rgb(var(--color-primary))' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>🚴</span>
                            <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Rider Checklist</h3>
                        </div>
                        <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.8, fontSize: '0.9rem' }}>
                            <li>Official Lehi MTB Race Kit (Jersey &amp; Bibs/Shorts)</li>
                            <li>Official League Number Plate &amp; Pre-Ride Plate (mounted with zip ties)</li>
                            <li>Certified Mountain Bike Helmet (no cracks or damage)</li>
                            <li>Cycling Shoes, Socks &amp; Gloves</li>
                            <li>Eye Protection (Sunglasses / Clear Lenses)</li>
                            <li>2x Filled Water Bottles or Hydration Pack with Electrolytes</li>
                            <li>Pre-Race Nutrition (Bananas, Stroopwafels, Energy Chews)</li>
                            <li>Warm Layers (Morning desert temps can be in the 40s–50s °F)</li>
                            <li>Post-Race Casual Clothes &amp; Comfortable Shoes</li>
                            <li>Bike Multi-tool, Hand Pump/CO2, Spare Tube &amp; Tire Levers</li>
                        </ul>
                    </div>

                    {/* Spectator & Family Checklist */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #f59e0b' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>📣</span>
                            <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Family &amp; Spectator Checklist</h3>
                        </div>
                        <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.8, fontSize: '0.9rem' }}>
                            <li>Pop-Up Canopy Tent or Shade Umbrellas for Venue</li>
                            <li>Camp Chairs for Course Spectating</li>
                            <li>Sunscreen (SPF 30+) &amp; Lip Balm</li>
                            <li>Cowbells &amp; Noise Makers (Cheer loud for Lehi!)</li>
                            <li>Cooler with Extra Water, Drinks, and Lunch</li>
                            <li>Portable Phone Charger / Power Bank</li>
                            <li>Sturdy Hiking/Walking Shoes for Course Viewing</li>
                            <li>Dust Buffs / Bandanas / Sunglasses for trail dust</li>
                            <li>Trash Bags (Pack it in, pack it out — Leave No Trace!)</li>
                            <li>Warm Jackets for Morning &amp; Light Clothes for Afternoon</li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* Helpful Links Grid */}
            <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>
                    <h2>Official Resources &amp; Quick Links</h2>
                    <p className="text-muted">Direct links to State Championship portals, volunteer forms, and league results.</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem' }}>
                    {helpfulLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-panel"
                            style={{
                                padding: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                textDecoration: 'none',
                                color: 'rgb(var(--text-main))',
                                fontWeight: 600,
                                fontSize: '0.9rem',
                                transition: 'all 0.2s ease',
                                borderLeft: '4px solid #ec4899',
                            }}
                        >
                            <span>{link.name}</span>
                            <span style={{ color: '#be185d', fontWeight: 700, marginLeft: '0.5rem' }}>↗</span>
                        </a>
                    ))}
                </div>
            </section>

            {/* Quick Links Footer */}
            <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', textAlign: 'center', borderTop: '4px solid #ec4899' }}>
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
