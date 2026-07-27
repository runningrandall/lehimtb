import type { Metadata } from 'next';
import Link from 'next/link';
import WaveScheduleTabs from './WaveScheduleTabs';

export const metadata: Metadata = {
    title: 'Race Day Central & Wave Schedule | Lehi MTB Hub',
    description: 'Complete 2026 race day guide, wave schedule with arrival times, wave meeting times, stage times, start times, bike prep checklist, pit zone etiquette, and Utah MTB resources.',
};

const helpfulLinks = [
    { name: 'What Category Am I In? (CPT Table)', url: 'https://my.raceresult.com/411620/' },
    { name: 'Race 1: Beaver Mountain Details', url: 'https://utahmtb.org/events/region-5-race-1/' },
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
                    Everything you need for race weekend: 2026 Wave Schedules, arrival times, wave meeting times, stage times, bike prep rules, pit zone etiquette, and Utah MTB resources.
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
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', background: 'rgba(255,255,255,0.2)', padding: '0.65rem 1.25rem', borderRadius: 'var(--radius-sm)' }}>
                        2026 Region 5 Wave Schedule
                    </span>
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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.875rem', marginTop: '0.75rem' }}>
                    <div style={{ padding: '0.875rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(87, 43, 158, 0.08)', border: '1px solid rgba(87, 43, 158, 0.15)' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgb(var(--color-primary))' }}>Step 1</span>
                        <p style={{ fontWeight: 700, fontSize: '1rem', margin: '0.2rem 0' }}>Arrival Time</p>
                        <p className="text-muted" style={{ fontSize: '0.825rem', margin: 0, lineHeight: 1.4 }}>
                            Arrive at venue <strong>1 to 1.5 hrs before</strong> your Wave Meeting to park &amp; head up.
                        </p>
                    </div>

                    <div style={{ padding: '0.875rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(236, 72, 153, 0.1)', border: '1px solid rgba(236, 72, 153, 0.25)' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#db2777' }}>Step 2</span>
                        <p style={{ fontWeight: 700, fontSize: '1rem', margin: '0.2rem 0', color: '#be185d' }}>Pit Zone Check-In</p>
                        <p className="text-muted" style={{ fontSize: '0.825rem', margin: 0, lineHeight: 1.4 }}>
                            Check in at the <strong>registration table in the pit zone</strong> immediately upon arrival.
                        </p>
                    </div>

                    <div style={{ padding: '0.875rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(180, 83, 9, 0.1)', border: '1px solid rgba(180, 83, 9, 0.25)' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#b45309' }}>Step 3</span>
                        <p style={{ fontWeight: 700, fontSize: '1rem', margin: '0.2rem 0', color: '#b45309' }}>Wave Meeting</p>
                        <p className="text-muted" style={{ fontSize: '0.825rem', margin: 0, lineHeight: 1.4 }}>
                            Mandatory team strategy briefing <strong>1 hour before</strong> start time at Pit Zone.
                        </p>
                    </div>

                    <div style={{ padding: '0.875rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#2563eb' }}>Step 4</span>
                        <p style={{ fontWeight: 700, fontSize: '1rem', margin: '0.2rem 0', color: '#1d4ed8' }}>Stage Time</p>
                        <p className="text-muted" style={{ fontSize: '0.825rem', margin: 0, lineHeight: 1.4 }}>
                            Report to staging <strong>15 minutes before</strong> start time for call-ups and line-up.
                        </p>
                    </div>

                    <div style={{ padding: '0.875rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#059669' }}>Step 5</span>
                        <p style={{ fontWeight: 700, fontSize: '1rem', margin: '0.2rem 0', color: '#047857' }}>Start Time</p>
                        <p className="text-muted" style={{ fontSize: '0.825rem', margin: 0, lineHeight: 1.4 }}>
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

                {/* Interactive Wave Schedule Section */}
                <WaveScheduleTabs />
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
                            <li><strong>Team Tools &amp; Pumps:</strong> The team will have tools and floor pumps available at the pit zone for last-minute adjustments, but riders should always have their own emergency repair kit (spare tube, tire levers, multi-tool, mini pump/CO2) ready on their bike or in their gear bag.</li>
                            <li><strong>Advance Maintenance Required:</strong> Riders and parents must ensure tubeless sealant is topped off, drivetrain is cleaned &amp; lubed, and brakes are in proper working order — <strong>ideally a week before race day</strong>, or at minimum the night before.</li>
                            <li><em>Avoid attempting to repair or tune a bike on race day — get all mechanical service done well in advance!</em></li>
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
                        <p style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(140, 120, 0)', marginBottom: '0.25rem' }}>Parents &amp; Athletes Guide</p>
                        <h2>Pro Tips to Make Race Day Easy &amp; Fun</h2>
                        <p className="text-muted" style={{ maxWidth: '680px', margin: '0 auto' }}>
                            A smooth race day starts with simple preparation ahead of time. Here is our insider guide for riders, parents, and spectating families:
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-md)' }}>
                        
                        {/* Night Before Prep */}
                        <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}>
                            <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>🎒</div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: 'rgb(var(--color-primary))' }}>Get Ready the Night Before</h3>
                            <p className="text-muted" style={{ fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                                Pack your kit, bibs, helmet, shoes, socks, water bottles, snacks, camp chairs, and sunscreen into your car the evening before. Morning departures become effortless.
                            </p>
                        </div>

                        {/* Bike Ready */}
                        <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}>
                            <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>🚲</div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: 'rgb(var(--color-primary))' }}>Bike 100% Ready to Roll</h3>
                            <p className="text-muted" style={{ fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                                Check sealant, inflate tires, clean &amp; lube drivetrain, check brakes, and zip-tie number plates the night before. Avoid race morning mechanical stress!
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
                                Pack a cooler with iced water, electrolyte drink mixes, bananas, stroopwafels, energy chews, and high-protein post-race snacks (chocolate milk, turkey wraps). Bring plenty of food for spectating family members too!
                            </p>
                        </div>

                        {/* Spectator Spots & Cheering */}
                        <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}>
                            <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>🔔</div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: 'rgb(var(--color-primary))' }}>Finding Great Viewing Spots</h3>
                            <p className="text-muted" style={{ fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                                Scope out course maps for high-elevation switchbacks, technical climbs, or serpentine turns where you can watch racers multiple times per lap. Bring cowbells, wear purple/gold, and <strong>never cross active race lines</strong>!
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
