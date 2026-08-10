import type { Metadata } from 'next';
import Link from 'next/link';
import WaveScheduleTabs from './WaveScheduleTabs';

export const metadata: Metadata = {
    title: 'Race Day Central & Wave Schedule | Lehi MTB Hub',
    description: 'Complete 2026 race day guide, wave schedules, Beaver Mountain race details, rider rosters, arrival times, food & volunteering info, packing checklists, and Utah MTB resources.',
};

const helpfulLinks = [
    { name: 'What Category Am I In? (CPT Table)', url: 'https://my.raceresult.com/411620/' },
    { name: 'League Race Day Flyer (Canva)', url: 'https://www.canva.com/design/DAHPeBRJepA/S68VWdEL5Rt0yAu5qf31Qg/view?utm_content=DAHPeBRJepA&utm_campaign=designshare&utm_medium=embeds&utm_source=link#1' },
    { name: 'Race 1: Beaver Mountain Details', url: 'https://utahmtb.org/events/region-5-race-1/' },
    { name: 'Beaver Mountain Ski Resort Map', url: 'https://maps.app.goo.gl/LKMnbNCQzTJquKsi8' },
    { name: 'Race 2: Richfield Details', url: 'https://utahmtb.org/events/region-5-race-2/' },
    { name: 'Race 3: Panguitch Details', url: 'https://utahmtb.org/events/region-5-race-3/' },
    { name: 'Race 4: Region 5 Championship (Herriman)', url: 'https://utahmtb.org/events/region-5-race-4/' },
    { name: 'State Championship Details (St. George)', url: 'https://utahmtb.org/events/state-championships/' },
    { name: 'NICA Western Regional Championship', url: 'https://events.nationalmtb.org/regionals/western' },
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
                    Everything you need for race weekend: 2026 Wave Schedules, arrival times, wave meeting times, bike prep rules, food &amp; volunteering, packing checklists, and venue guides.
                </p>
                <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a
                        href="https://my.raceresult.com/411620/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-accent"
                        style={{ fontSize: '0.9rem', padding: '0.65rem 1.25rem' }}
                    >
                        What Category Am I In? (CPT Table) ↗
                    </a>
                    <a
                        href="https://www.canva.com/design/DAHPeBRJepA/S68VWdEL5Rt0yAu5qf31Qg/view?utm_content=DAHPeBRJepA&utm_campaign=designshare&utm_medium=embeds&utm_source=link#1"
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
                        📄 League Race Day Flyer ↗
                    </a>
                </div>
            </div>

            {/* Featured Next Race Banner (Beaver Mountain) */}
            <div className="glass-panel" style={{
                padding: 'var(--spacing-lg)',
                marginBottom: 'var(--spacing-xl)',
                borderTop: '5px solid #2563eb',
                background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.08), rgba(87, 43, 158, 0.05))'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.75rem' }}>
                    <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#2563eb', background: 'rgba(37,99,235,0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                            REGION 5 · RACE 1
                        </span>
                        <h2 style={{ fontSize: '1.6rem', margin: '0.4rem 0 0.2rem 0' }}>Saturday, August 22, 2026 · Beaver Mountain Ski Resort</h2>
                        <p style={{ margin: 0, fontWeight: 700, color: '#dc2626', fontSize: '0.95rem' }}>
                            📍 Location Notice: Beaver Mountain is near Logan in Logan Canyon close to Bear Lake — (Note: NOT Beaver City in southern Utah!).
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <a
                            href="https://maps.app.goo.gl/LKMnbNCQzTJquKsi8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-silver"
                            style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
                        >
                            🗺️ Google Maps Directions ↗
                        </a>
                        <a
                            href="https://utahmtb.org/events/region-5-race-1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-silver"
                            style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
                        >
                            🌐 Utah MTB Event Page ↗
                        </a>
                    </div>
                </div>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'rgb(var(--text-muted))', margin: 0 }}>
                    Welcome to a true alpine race course! Prepare to hike around a beautiful ski resort venue. Families are invited, and High School riders are highly encouraged to stay and cheer for their teammates all day long.
                </p>
            </div>

            {/* Critical Race Rules Banner */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
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
                        <strong style={{ fontSize: '1rem', color: '#dc2626' }}>NO DOGS Allowed at Any Races</strong>
                        <p className="text-muted" style={{ fontSize: '0.825rem', margin: '0.15rem 0 0 0', lineHeight: 1.4 }}>
                            Per Utah League policy, dogs are strictly prohibited at all race venues and pit zones for rider safety.
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
                        <strong style={{ fontSize: '1rem', color: '#b45309' }}>45-Minute Lap 1 Cut-Off</strong>
                        <p className="text-muted" style={{ fontSize: '0.825rem', margin: '0.15rem 0 0 0', lineHeight: 1.4 }}>
                            Riders must finish Lap 1 in under 45 minutes, or they will be pulled from course for rider safety.
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
                    <span style={{ fontSize: '1.75rem' }}>⚡</span>
                    <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#2563eb', display: 'block' }}>New for 2026</span>
                        <strong style={{ fontSize: '1rem', color: '#1d4ed8' }}>Morning Start (8:00 AM)</strong>
                        <p className="text-muted" style={{ fontSize: '0.825rem', margin: '0.15rem 0 0 0', lineHeight: 1.4 }}>
                            Races now start at 8:00 AM. HS races may start earlier or condense if afternoon weather rolls in!
                        </p>
                    </div>
                </div>
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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '0.75rem', marginTop: '0.75rem' }}>
                    <div style={{ padding: '0.875rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(87, 43, 158, 0.08)', border: '1px solid rgba(87, 43, 158, 0.15)' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgb(var(--color-primary))' }}>Step 1</span>
                        <p style={{ fontWeight: 700, fontSize: '0.95rem', margin: '0.2rem 0' }}>Arrival Time</p>
                        <p className="text-muted" style={{ fontSize: '0.8rem', margin: 0, lineHeight: 1.4 }}>
                            Wave 1 by <strong>6:45 AM</strong>, Wave 2 by <strong>7:30 AM</strong>, Waves 3–6 by <strong>7:45 AM</strong> to cheer and support teammates.
                        </p>
                    </div>

                    <div style={{ padding: '0.875rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(236, 72, 153, 0.1)', border: '1px solid rgba(236, 72, 153, 0.25)' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#db2777' }}>Step 2</span>
                        <p style={{ fontWeight: 700, fontSize: '0.95rem', margin: '0.2rem 0', color: '#be185d' }}>Pit Zone Check-In</p>
                        <p className="text-muted" style={{ fontSize: '0.8rem', margin: 0, lineHeight: 1.4 }}>
                            Check in at the <strong>Lehi check-in table in pit zone</strong> immediately upon arrival to get your staging number marked.
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
                            Structured <strong>30-minute warm-up ride</strong> to elevate heart rate and get legs ready.
                        </p>
                    </div>

                    <div style={{ padding: '0.875rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#2563eb' }}>Step 5</span>
                        <p style={{ fontWeight: 700, fontSize: '0.95rem', margin: '0.2rem 0', color: '#1d4ed8' }}>Stage Time</p>
                        <p className="text-muted" style={{ fontSize: '0.8rem', margin: 0, lineHeight: 1.4 }}>
                            Report to staging <strong>15 minutes before</strong> start time for call-ups and line-up.
                        </p>
                    </div>

                    <div style={{ padding: '0.875rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(87, 43, 158, 0.1)', border: '1px solid rgba(87, 43, 158, 0.2)' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgb(var(--color-primary))' }}>Step 6</span>
                        <p style={{ fontWeight: 700, fontSize: '0.95rem', margin: '0.2rem 0', color: 'rgb(var(--color-primary))' }}>Start Time</p>
                        <p className="text-muted" style={{ fontSize: '0.8rem', margin: 0, lineHeight: 1.4 }}>
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
                            <strong>Arrival Time is a MINIMUM arrival requirement based on your specific wave schedule.</strong> We expect all riders and families to arrive on time and stay at the venue to cheer on their teammates across every wave. There is no bench on our team — having a loud Lehi cheer squad out on course for every wave makes an incredible difference!
                        </p>
                    </div>
                </div>

                {/* Interactive Wave Schedule Section */}
                <WaveScheduleTabs />
            </section>

            {/* Food, Hospitality & Volunteer Section */}
            <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                    <h2>Food, Hospitality &amp; Volunteering</h2>
                    <p className="text-muted">How we fuel our riders, support the team, and make race day run smoothly.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--spacing-lg)' }}>

                    {/* Food & Hospitality Panel */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #10b981' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>🍎</span>
                            <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Team Food &amp; Snacks (New for 2026)</h3>
                        </div>
                        <p style={{ fontSize: '0.9rem', color: 'rgb(var(--color-primary))', fontWeight: 700, margin: '0 0 0.75rem 0' }}>
                            ✨ New for 2026: The team is purchasing all food and snacks so parents are free to volunteer and cheer!
                        </p>
                        <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                            <li><strong>Riders &amp; Volunteers:</strong> Snacks are available all day. Lunch is served from <strong>10:00 AM – 2:00 PM</strong> at the team tent.</li>
                            <li><strong>Families &amp; Spectators:</strong> Please bring your own food, drinks, and snacks, as race days are long!</li>
                            <li><strong>Leftovers Policy:</strong> After <strong>2:00 PM</strong>, once all riders have eaten, anyone (families/siblings) is welcome to grab leftover lunch — just check with a volunteer first!</li>
                        </ul>
                    </div>

                    {/* Volunteering Panel */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid rgb(var(--color-primary))' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>🤝</span>
                            <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Volunteer Opportunities</h3>
                        </div>
                        <p style={{ fontSize: '0.9rem', color: 'rgb(var(--text-muted))', margin: '0 0 0.75rem 0' }}>
                            We need your help to make race day happen! Anyone who volunteers for the day (League or Team) is welcome to eat lunch with the team.
                        </p>
                        <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                            <li>
                                <strong>League Volunteers (Mandatory):</strong> Every family must volunteer with the League at least once per season, per rider. Lehi MTB must provide <strong>26 volunteers</strong> for each race. <a href="https://www.canva.com/design/DAHPeBRJepA/S68VWdEL5Rt0yAu5qf31Qg/view?utm_content=DAHPeBRJepA&utm_campaign=designshare&utm_medium=embeds&utm_source=link#1" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(var(--color-primary))', fontWeight: 700 }}>Sign up on the Flyer ↗</a>
                            </li>
                            <li>
                                <strong>Team Volunteers:</strong> Feed Zone (hydration handoff), Tent/Food, Staging &amp; Pitzone. Look for the Sign-Up Genius link sent the week prior.
                            </li>
                            <li>
                                <strong>Pitzone Setup:</strong> Friday, <strong>4:00 PM – 5:00 PM</strong> (High School Team).
                            </li>
                            <li>
                                <strong>Pitzone Takedown:</strong> ~<strong>4:00 PM</strong> after all races start (Junior Development Team).
                            </li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* What to Bring Checklist Section */}
            <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                    <h2>What to Bring: Race Day Packing Checklists</h2>
                    <p className="text-muted">Double-check your gear bag and vehicle the night before.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--spacing-lg)' }}>

                    {/* Rider Checklist */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid rgb(var(--color-primary))' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>🚴</span>
                            <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Rider Checklist</h3>
                        </div>
                        <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem' }}>
                            <li>🏷️ <strong>Label All Gear (Put Names on Everything!):</strong> Use a permanent marker on helmet, shoes, gloves, sunglasses, water bottles, tools, and jackets!</li>
                            <li>✅ <strong>Team Kit:</strong> Lehi Jersey &amp; Bibs/Shorts</li>
                            <li>✅ <strong>Bike &amp; Gear:</strong> Tuned bike, helmet (mandatory), shoes, gloves, eyewear</li>
                            <li>✅ <strong>Hydration &amp; Sun:</strong> Water bottles, electrolyte mix &amp; sunscreen</li>
                            <li>✅ <strong>Repair Kit:</strong> Mounted kit with tube/bacon strips, CO2/mini-pump, multi-tool</li>
                            <li>✅ <strong>Race Plates:</strong> Put on handlebars early! <em>($10 replacement fee for lost plates)</em></li>
                            <li>✅ <strong>Post-Race Clothes:</strong> Warm change of weather-appropriate clothes &amp; socks</li>
                            <li>✅ <strong>Camp Chair:</strong> For relaxing in pit zone between cheering sessions</li>
                        </ul>
                    </div>

                    {/* Family Checklist */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #f59e0b' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>👨‍👩‍👧‍👦</span>
                            <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Family &amp; Spectator Checklist</h3>
                        </div>
                        <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem' }}>
                            <li>✅ <strong>Shade &amp; Seating:</strong> Shade tent, pop-up canopy, or umbrellas + camp chairs</li>
                            <li>✅ <strong>Food &amp; Drinks:</strong> Family cooler with water, electrolyte drinks, lunch, and snacks</li>
                            <li>✅ <strong>Sun &amp; Dust Prep:</strong> SPF 30+ sunscreen, sunglasses, hats, dust buffs/masks</li>
                            <li>✅ <strong>Walking Footwear:</strong> Sturdy trail walking shoes for hiking ski hill slopes</li>
                            <li>✅ <strong>Layered Clothing:</strong> Warm jackets for morning chill; cool layers for midday</li>
                            <li>✅ <strong>Viewing Tools:</strong> Cameras, phone battery power banks, binoculars</li>
                            <li>✅ <strong>Cheer Gear:</strong> Cowbells, noisemakers, purple/gold gear, and loud cheering voices!</li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* Media, Results & Looking Ahead */}
            <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>

                    {/* Media & Photos */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #8b5cf6' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>📸</span>
                            <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Race Photos &amp; Media</h3>
                        </div>
                        <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'rgb(var(--text-muted))', margin: 0 }}>
                            Please upload your race photos to our shared Google album right after the race (link sent via TeamSnap). A huge thank you to our volunteer photographers, <strong>Ethan Adams</strong> and <strong>Wells Holmes</strong>!
                        </p>
                    </div>

                    {/* Results & Podiums */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #10b981' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>🏅</span>
                            <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Results &amp; Podiums (2:45 PM)</h3>
                        </div>
                        <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'rgb(var(--text-muted))', margin: 0 }}>
                            All results are posted live via a link on TeamSnap prior to the first race. Physical printouts will also be posted near the finish line. High School podiums take place at <strong>2:45 PM</strong>.
                        </p>
                    </div>

                    {/* Looking Ahead */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #ec4899' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>🗓️</span>
                            <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Looking Ahead</h3>
                        </div>
                        <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.6, margin: 0, fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                            <li><strong>State Championship:</strong> Oct 23–24 in St. George (2-day event). Details at <a href="http://www.utahmtb.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(var(--color-primary))', fontWeight: 600 }}>utahmtb.org ↗</a></li>
                            <li><strong>Year-End Awards:</strong> Tentatively scheduled for <strong>November 3</strong>. Watch TeamSnap for updates!</li>
                            <li><strong>Questions?</strong> Reach out directly to coaches Steve, Randall, Aaron, or Andre.</li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* Essential Race Preparation & Rules */}
            <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                    <h2>Race Day Guidelines &amp; Pit Etiquette</h2>
                    <p className="text-muted">Guidance for riders, parents, bike maintenance, pit zone etiquette, and course pre-riding.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>

                    {/* Pit Zone Friday Setup & Saturday Take-Down Volunteers */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #ec4899', backgroundColor: 'rgba(236, 72, 153, 0.04)' }}>
                        <h3 style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#be185d' }}>
                            <span>⛺</span> Pit Zone Friday Setup &amp; Saturday Take-Down
                        </h3>
                        <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><strong>Friday Pit Zone Setup:</strong> Parents and HS team members are needed on Friday afternoon (4:00 PM – 5:00 PM) to help set up team tents, tables, food prep stations, and team banners. Many hands make fast work!</li>
                            <li><strong>Saturday Pit Zone Take Down:</strong> The Junior Development (JD) team and parent volunteers are assigned to take down the Pit Zone tent on Saturday afternoon around <strong>4:00 PM</strong> after all races start. Please stop by the tent to lend a hand!</li>
                            <li><strong>Sign-Up Genius:</strong> A volunteer sign-up link is sent out via TeamSnap during race week. Parents who volunteer for team or league duties are invited to eat lunch with the team!</li>
                        </ul>
                    </div>

                    {/* Arrival, Check-In & Race Plates */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #3b82f6' }}>
                        <h3 style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>📋</span> Arrival, Lehi Tent Check-In &amp; Number Plates
                        </h3>
                        <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><strong>Expect Venue Delays:</strong> With thousands of participants, traffic and parking delays take 30+ minutes. Plan extra time to park, unload bikes, and walk up to the Pit Zone.</li>
                            <li><strong>Check In Immediately:</strong> Report directly to the Lehi tent check-in table upon arrival so coaches know your rider is on site.</li>
                            <li><strong>Staging Numbering:</strong> Every rider will get their staging number printed on their arm at check-in (required for staging call-ups).</li>
                            <li><strong>Race Plates &amp; Bibs:</strong> Pick up your race plate and jersey bib at Beaver Mountain (first race) at the check-in table. Keep them in your car for the rest of the season! $10 replacement fee if lost.</li>
                            <li><strong>Bib Pinning:</strong> Bibs are pinned to a specific side of the jersey (announced the morning of the race).</li>
                            <li><strong>MANDATORY HELMET RULE:</strong> Riders <strong>MUST ALWAYS WEAR a helmet</strong> whenever they are on a bike — otherwise the team faces severe penalties!</li>
                        </ul>
                    </div>

                    {/* Bike Maintenance & Equipment */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid rgb(var(--color-primary))' }}>
                        <h3 style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>🚲</span> Bike Tune-Up &amp; Equipment Checklist
                        </h3>
                        <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><strong>Schedule Shop Service Early:</strong> Have your bike tuned up by a local bike shop (Trek, Ari, or Utah Mountain Biking) <strong>a week before race day</strong>. Never perform major repairs or adjustments on race morning!</li>
                            <li><strong>Pre-Ride Safety Check:</strong> Check tire pressure, lube drivetrain, top off tubeless sealant, and inspect brake pads before leaving home.</li>
                            <li><strong>Emergency Repair Kit:</strong> Riders should carry spare tubes, tire levers, multi-tool, and mini pump/CO2 injector.</li>
                            <li><strong>LABEL ALL GEAR (PUT NAMES ON IT!):</strong> Put your athlete's first and last name in permanent marker on helmets, sunglasses, gloves, shoes, water bottles, tire pumps, and jackets! In a busy pit zone with hundreds of athletes and identical team kits, labeled gear always finds its way home.</li>
                            <li><strong>Cold Weather Layers:</strong> Mountain venues can be chilly in the morning — bring warm coats and layers, but don't race in bulky heavy coats.</li>
                        </ul>
                    </div>

                    {/* Pre-Ride Rules, Camping & Carpooling */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #8b5cf6' }}>
                        <h3 style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>🗺️</span> Pre-Ride Rules, Camping &amp; Carpooling
                        </h3>
                        <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><strong>Check TeamSnap for All Events:</strong> All pre-rides, camps, practice schedules, and team events are posted on TeamSnap. Always check TeamSnap for exact dates, times, locations, and updates!</li>
                            <li><strong>Weekend Pre-Ride:</strong> Official pre-rides take place the weekend before the race (or 2 weeks prior for Panguitch due to the Soldier Hollow UCI race).</li>
                            <li><strong>Friday Camping &amp; Night Ride:</strong> Families often camp out on Friday night before pre-ride weekend and do a fun night ride. <em>Must bring your own bike light!</em></li>
                            <li><strong>Saturday Carpooling:</strong> Riders can catch carpools Saturday morning departing from Lehi High School.</li>
                            <li><strong>Friday Pre-Ride Hours:</strong> The course is open Friday evening before race day (typically 3:00 PM – 7:00 PM).</li>
                            <li><strong>STRICT RULE - Pre-Ride Plates Required:</strong> Riders <strong>MUST wear a separate official pre-ride plate</strong> provided by coaches during pre-rides. ONLY registered riders and ride leaders are permitted on course. Pre-riding on Saturday race morning is strictly prohibited.</li>
                        </ul>
                    </div>

                    {/* Parent & Family Pit Zone Etiquette */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #f59e0b' }}>
                        <h3 style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>🚫</span> Parent Checklist &amp; Pit Zone Etiquette
                        </h3>
                        <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><strong>STRICT RULE - NO RIDING BIKES IN PIT ZONE:</strong> Nobody (riders, parents, or siblings) may ride bikes inside the Pit Zone. Bikes MUST be walked. Violations result in team penalties!</li>
                            <li><strong>Keep Rider Tent Area Clear:</strong> Due to space constraints, only riders and designated team volunteers (food committee &amp; staging) may hang out inside the tent. Parents can drop off, say hi, and take quick photos.</li>
                            <li><strong>Establish Base Camp:</strong> Bring camp chairs, robust walking shoes, shade umbrellas/canopies, sunscreen, and plenty of water/snacks right off the track.</li>
                            <li><strong>Cheer Across Every Wave:</strong> Cheer at staging, the start line, course switchbacks, and the finish line!</li>
                        </ul>
                    </div>

                    {/* Staging, Warm-Up & Finish Line Volunteers */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #10b981' }}>
                        <h3 style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>🏁</span> Staging, Warm-Up &amp; Finish Line Volunteers
                        </h3>
                        <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><strong>Wave Strategy Meeting:</strong> Coaches conduct a mandatory 10-minute wave meeting 1 hour before start time to cover course strategy and key tips.</li>
                            <li><strong>Warm-Up (30m):</strong> Ride leaders guide groups through 30-minute warm-up efforts outside the Pit Zone.</li>
                            <li><strong>Staging &amp; Call-Ups:</strong> Line up 15 minutes prior. Top 10 called by name, followed by arm numbers. Must have handlebar race plate to enter chute.</li>
                            <li><strong>Finish Line Volunteer Zone:</strong> The area past the finish line is strictly managed by finish line volunteers and coaches for racer safety.</li>
                            <li><strong>Finish Line Volunteers:</strong> A Finish Line Volunteer will "catch" each rider as they cross the finish line, check their condition, provide cold water and seating, and walk them out to parents.</li>
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
                        <p style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(140, 120, 0)', marginBottom: '0.25rem' }}>Parents &amp; Athletes Guide</p>
                        <h2>Pro Tips to Make Race Day Easy &amp; Fun</h2>
                        <p className="text-muted" style={{ maxWidth: '680px', margin: '0 auto' }}>
                            A smooth race day starts with simple preparation ahead of time. Here is our insider guide for riders, parents, and spectating families:
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-md)' }}>
                        
                        {/* Day Before Prep */}
                        <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}>
                            <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>🎒</div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: 'rgb(var(--color-primary))' }}>Get Ready &amp; Put Names on Gear!</h3>
                            <p className="text-muted" style={{ fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                                Pack your kit, bibs, helmet, shoes, socks, water bottles, snacks, camp chairs, and sunscreen the day before. <strong>Make sure your rider's name is written clearly on every piece of gear</strong> so nothing gets lost in the pit zone!
                            </p>
                        </div>

                        {/* Bike Ready */}
                        <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}>
                            <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>🚲</div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: 'rgb(var(--color-primary))' }}>Bike 100% Ready to Roll</h3>
                            <p className="text-muted" style={{ fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                                Check sealant, inflate tires, clean &amp; lube drivetrain, check brakes, and zip-tie number plates the day before. Avoid race morning mechanical stress!
                            </p>
                        </div>

                        {/* Sunscreen, Shade & Weather */}
                        <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}>
                            <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>🧴</div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: 'rgb(var(--color-primary))' }}>Sunscreen, Shade &amp; Weather</h3>
                            <p className="text-muted" style={{ fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                                Utah venues (Beaver, Richfield, Panguitch, Herriman) feature intense high-desert sun. Apply SPF 30+ early at home, bring pop-up canopies or shade umbrellas, lip balm with SPF, sunglasses, and cooling towels. Morning temps can be chilly — bring layers!
                            </p>
                        </div>

                        {/* Food, Snacks & Hydration */}
                        <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}>
                            <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>🍎</div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: 'rgb(var(--color-primary))' }}>Food, Snacks &amp; Cooler Setup</h3>
                            <p className="text-muted" style={{ fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                                Pack a cooler with iced water, electrolyte drink mixes, bananas, stroopwafels, energy chews, and high-protein post-race snacks. Bring plenty of food for spectating family members too!
                            </p>
                        </div>

                        {/* Spectator Spots & Cheering */}
                        <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}>
                            <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>🔔</div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: 'rgb(var(--color-primary))' }}>Finding Great Viewing Spots</h3>
                            <p className="text-muted" style={{ fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                                Scope out course maps for high-elevation switchbacks, technical climbs, or serpentine turns where you can watch racers multiple times per lap. Bring cowbells, wear purple or Lehi team gear, and <strong>never cross active race lines</strong>!
                            </p>
                        </div>

                        {/* Post-Race Pickup & Pit Zone Meetup */}
                        <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}>
                            <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>🏁</div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: 'rgb(var(--color-primary))' }}>Post-Race Racer Pickup Point</h3>
                            <p className="text-muted" style={{ fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                                Set a clear rule: after crossing the finish line, riders head straight to the <strong>Team Pit Zone recovery tent</strong> for drinks, cool-down, and checking in with coaches before meeting up with parents.
                            </p>
                        </div>

                        {/* Schedule & Phone Alarms */}
                        <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}>
                            <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>📄</div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: 'rgb(var(--color-primary))' }}>Printed Schedule &amp; Phone Alarms</h3>
                            <p className="text-muted" style={{ fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                                Keep a printed copy of the Wave Schedule in your car, and set phone alarms for your <strong>Wave Meeting (1 hr prior)</strong> and <strong>Stage Time (15 min prior)</strong> so timing is effortless.
                            </p>
                        </div>

                        {/* Battery, Offline Maps & Trail Comfort */}
                        <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}>
                            <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>🔋</div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: 'rgb(var(--color-primary))' }}>Battery Banks &amp; Trail Comfort</h3>
                            <p className="text-muted" style={{ fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                                Cell signal search at mountain venues drains phone batteries fast — bring portable power banks. Wear sturdy trail shoes for hiking up hillsides, bring dust buffs/masks, wet wipes, and trash bags to leave no trace.
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
