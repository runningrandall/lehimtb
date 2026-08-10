import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Events & Races | Lehi MTB Hub',
    description: 'Join upcoming mountain biking events, races, regional championships, and state finals for Lehi MTB.',
};

const races = [
    {
        name: 'Race 1: Beaver Mountain',
        date: 'Aug 22, 2026',
        location: 'Beaver Mountain Ski Area · Logan Canyon, UT',
        desc: 'Kicking off the 2026 Region 5 season in high-elevation pine trails at Beaver Mountain!',
        link: 'https://utahmtb.org/events/region-5-race-1/',
        badge: 'Race 1',
    },
    {
        name: 'Race 2: Richfield',
        date: 'Sept 5, 2026',
        location: 'Richfield Trails · Richfield, UT',
        desc: 'Fast, flowing singletrack loop competition with scenic red rock vistas.',
        link: 'https://utahmtb.org/events/region-5-race-2/',
        badge: 'Race 2',
    },
    {
        name: 'Race 3: Panguitch',
        date: 'Sept 26, 2026',
        location: 'Panguitch Trails · Panguitch, UT',
        desc: 'Beautiful, high-desert course that tests endurance, pacing, and technical bike handling.',
        link: 'https://utahmtb.org/events/region-5-race-3/',
        badge: 'Race 3',
    },
    {
        name: 'Race 4: Region 5 Championship (Herriman)',
        date: 'Oct 10, 2026',
        location: 'Herriman Trails · Herriman, UT',
        desc: 'The Region 5 Regional Championship! Close to home — cornering, speed, and overall regional standings on the line. (High School Only - Grades 9–12)',
        link: 'https://utahmtb.org/events/region-5-race-4/',
        badge: 'HS ONLY · Regional Championship',
    },
    {
        name: 'State Championship: St. George',
        date: 'Oct 23–24, 2026',
        location: 'St. George, UT',
        desc: 'The season finale state championship bringing together qualified High School racers from across Utah for two days of epic red-rock racing in St. George. (High School Only - Grades 9–12)',
        link: 'https://utahmtb.org/events/state-championships/',
        badge: 'HS ONLY · State Championship',
    },
    {
        name: 'NICA Western Regional Championship',
        date: 'Post-Season 2026',
        location: 'Western Region Venue',
        desc: 'The NICA Western Regional Championship featuring top high school mountain bike athletes from across the Western United States. (High School Only - Grades 9–12)',
        link: 'https://events.nationalmtb.org/regionals/western',
        badge: 'HS ONLY · NICA Regionals',
    },
];

const resources = [
    {
        title: 'What Category Am I In? (CPT Table)',
        desc: 'Check the official Utah League Category Placement Table (CPT) to look up your category assignment.',
        link: 'https://my.raceresult.com/411620/',
    },
    {
        title: 'Region 5 Events & Schedule',
        desc: 'Official Region 5 race schedules, course maps, venue parking, and camping info.',
        link: 'https://utahmtb.org/event-category/region-5-races/',
    },
    {
        title: 'State Championship Details',
        desc: 'State Championship schedules, course maps, and spectator guidelines for St. George.',
        link: 'https://utahmtb.org/events/state-championships/',
    },
    {
        title: 'NICA Western Regionals',
        desc: 'Western Regional Championship details, event schedules, and qualification info.',
        link: 'https://events.nationalmtb.org/regionals/western',
    },
    {
        title: 'PitZone Registration & Results',
        desc: 'Manage athlete profile, check registration status, and access live timing & race results.',
        link: 'https://pitzone.nationalmtb.org/',
    },
    {
        title: 'League Race Day Flyer (Canva)',
        desc: 'Official Utah High School Cycling League race day schedule, map, and volunteer sign-up flyer.',
        link: 'https://www.canva.com/design/DAHPeBRJepA/S68VWdEL5Rt0yAu5qf31Qg/view?utm_content=DAHPeBRJepA&utm_campaign=designshare&utm_medium=embeds&utm_source=link#1',
    },
    {
        title: 'Lehi MTB Race Day Guide',
        desc: 'Detailed wave meeting times, arrival checklist, pit zone etiquette, and bike prep tips.',
        link: '/race-day',
    },
];

export default function Events() {
    return (
        <div className="container animate-fade-in" style={{ padding: 'var(--spacing-xl) 0' }}>
            
            {/* Race Day Central Banner */}
            <div className="glass-panel" style={{
                padding: 'var(--spacing-lg)',
                marginBottom: 'var(--spacing-xl)',
                background: 'linear-gradient(135deg, rgba(87,43,158,0.12), rgba(59,130,246,0.12))',
                borderLeft: '5px solid rgb(var(--color-primary))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
            }}>
                <div>
                    <span style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(var(--color-primary))' }}>2026 Wave Schedule Available</span>
                    <h2 style={{ fontSize: '1.75rem', margin: '0.25rem 0' }}>Race Day Guide &amp; Wave Schedules</h2>
                    <p className="text-muted" style={{ margin: 0, fontSize: '0.95rem' }}>
                        View full start times for High School &amp; Jr Devo waves, staging instructions, and race weekend advice.
                    </p>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <a href="https://my.raceresult.com/411620/" target="_blank" rel="noopener noreferrer" className="btn-accent" style={{ whiteSpace: 'nowrap', fontSize: '0.875rem' }}>
                        What Category Am I In? (CPT) ↗
                    </a>
                    <Link href="/race-day" className="btn-primary" style={{ whiteSpace: 'nowrap', fontSize: '0.875rem' }}>
                        Race Day Guide →
                    </Link>
                </div>
            </div>

            <h1 style={{ marginBottom: 'var(--spacing-sm)' }}>2026 Season Schedule &amp; Events</h1>
            <p className="text-muted" style={{ marginBottom: 'var(--spacing-lg)', maxWidth: '700px' }}>
                Lehi High School MTB competes in Region 5 of the Utah High School Cycling League. Check details and external league resources for each race venue.
            </p>

            {/* Race List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
                {races.map((r) => (
                    <div key={r.name} className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderLeft: r.badge.includes('State') ? '5px solid rgb(var(--color-accent))' : r.badge.includes('Regional') ? '5px solid #3b82f6' : '3px solid rgb(var(--color-primary))' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <div>
                                <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: r.badge.includes('State') ? 'rgb(var(--color-accent))' : 'rgb(var(--color-primary))', display: 'inline-block', marginBottom: '0.2rem' }}>
                                    {r.badge}
                                </span>
                                <h2 style={{ fontSize: '1.5rem', margin: 0 }}>{r.name}</h2>
                                <p style={{ fontSize: '0.9rem', color: 'rgb(var(--color-primary))', fontWeight: 600, marginTop: '0.2rem' }}>{r.location}</p>
                            </div>
                            <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'rgb(var(--text-main))', background: 'rgba(255,255,255,0.06)', padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-sm)' }}>
                                {r.date}
                            </span>
                        </div>
                        <p className="text-muted" style={{ marginBottom: '1rem', lineHeight: 1.6 }}>{r.desc}</p>
                        <a href={r.link} target="_blank" rel="noopener noreferrer" className="btn-silver" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', display: 'inline-block' }}>
                            League Event Details &amp; Venue Map ↗
                        </a>
                    </div>
                ))}
            </div>

            {/* Helpful Resources Section */}
            <section className="glass-panel" style={{ padding: 'var(--spacing-xl)', borderTop: '4px solid rgb(var(--color-primary))' }}>
                <h2 style={{ marginBottom: '0.5rem' }}>Rider &amp; Parent Resources</h2>
                <p className="text-muted" style={{ marginBottom: 'var(--spacing-lg)', fontSize: '0.95rem' }}>
                    Quick access to official league guidelines, results, and team documentation.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--spacing-md)' }}>
                    {resources.map((res) => (
                        <div key={res.title} style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(87, 43, 158, 0.05)', border: '1px solid var(--border-color)' }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: 'rgb(var(--color-primary))' }}>{res.title}</h3>
                            <p className="text-muted" style={{ fontSize: '0.875rem', marginBottom: '1rem', lineHeight: 1.5 }}>{res.desc}</p>
                            {res.link.startsWith('/') ? (
                                <Link href={res.link} style={{ color: 'rgb(var(--color-primary))', fontWeight: 700, fontSize: '0.875rem' }}>
                                    Open Guide →
                                </Link>
                            ) : (
                                <a href={res.link} target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(var(--color-primary))', fontWeight: 700, fontSize: '0.875rem' }}>
                                    Visit Resource ↗
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
