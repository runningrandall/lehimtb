import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Family Camp 2026 — Moab Edition | Lehi MTB Hub',
    description: 'Lehi MTB Family Camp 2026 in Moab — June 5–6, 2026 at Utah Raptor State Park. Schedule, activities, camp details, and gear list.',
};

type ScheduleItem = {
    time: string;
    title: string;
    detail?: string;
    accent: 'green' | 'red' | 'pink' | 'blue' | 'purple';
};

const fridaySchedule: ScheduleItem[] = [
    { time: '7a – 9a', title: 'Morning Ride', detail: 'Klonzo Trails', accent: 'green' },
    { time: '10a – 12p', title: 'Slick Rock Scramble', detail: 'Skills challenge on the iconic sandstone', accent: 'red' },
    { time: 'Noon', title: 'Lunch (on your own)', detail: 'Eat at camp or in town', accent: 'pink' },
    { time: '2p – 6p', title: 'Group Games', detail: 'Bike rodeo + yard games', accent: 'blue' },
    { time: '7p', title: 'Dessert Social', detail: 'Skit opener — bring something to share (BYOD)', accent: 'pink' },
    { time: 'After Dark', title: 'Night Ride', detail: 'Party laps under the stars', accent: 'green' },
];

const saturdaySchedule: ScheduleItem[] = [
    { time: 'Morning – 12p', title: 'Trail Rides', detail: 'Horsethief · Mag 7 · Dead Horse', accent: 'blue' },
    { time: 'Noon', title: 'Team Lunch — Walking Tacos', detail: 'The team provides Saturday lunch for everyone. Plan to be at camp for the team meal — no need to make your own.', accent: 'pink' },
    { time: '1p – 4p', title: 'Chill Time', detail: 'Nap, repair, hammock, regroup', accent: 'blue' },
    { time: '4p – 7p', title: 'Water Activity', detail: 'Moab Pool or Ken’s Lake', accent: 'red' },
    { time: 'After Dark', title: 'Night Hike', detail: 'Corona Arch under headlamps', accent: 'green' },
];

const accentColors: Record<ScheduleItem['accent'], string> = {
    green: 'rgb(28, 120, 65)',
    red: 'rgb(200, 50, 50)',
    pink: 'rgb(220, 80, 140)',
    blue: 'rgb(45, 90, 170)',
    purple: 'rgb(var(--color-primary))',
};

const skillsActivities = [
    { title: 'Slick Rock Ride Challenge', when: 'Friday', detail: 'Test your skills on Moab’s iconic sandstone.' },
    { title: 'Adventure Trail Riding', when: 'Saturday — early!', detail: 'Big-mileage rides on Horsethief, Mag 7, and Dead Horse.' },
    { title: 'Moab Race Course Loops', when: 'Open', detail: 'Pre-ride the NICA race course before next season.' },
    { title: 'Night Rides', when: 'Friday after dark', detail: 'Party laps with lights — bring your brightest headlamp.' },
];

const funActivities = [
    { title: 'Bike Rodeo & Group Games', detail: 'Hanging rings, marshmallow game, slackline, slingshots, water-cup obstacle course, and more.' },
    { title: 'Crafts for the Littles', detail: 'Kid-friendly crafts for siblings while the riders are out.' },
    { title: 'Dessert Social (Friday)', detail: 'BYOD — bring something to share. Snow cones, cotton candy, and Moab ice cream on tap.' },
    { title: '9-Square & Yard Games', detail: 'Corn hole, kubb, spike ball, slackline, volleyball — set up around camp all weekend.' },
    { title: 'Night Hike to Corona Arch', detail: 'Saturday after dark — headlamps required.' },
    { title: 'Water Activity', detail: 'Moab Pool or Ken’s Lake. Bring kayaks, SUPs, and water guns.' },
];

const campDetails = [
    {
        heading: 'Camp Layout',
        items: [
            'Camp is Fri–Sat; sites are reserved Thursday night through Sunday so you can arrive early and leave at your own pace',
            'Utah Raptor State Park — we have an entire loop to ourselves',
            'Showers, water, power. No sewer hookups',
            'Onsite restrooms open and available',
            'Team tents, tables, and bike racks provided',
            'Bring your own chairs',
        ],
    },
    {
        heading: 'Food (BYOF)',
        items: [
            'Team-provided: Saturday lunch — walking tacos at noon. The team feeds everyone, so come hungry and skip making your own.',
            'Everything else is BYOF — come prepared to feed yourself the rest of the weekend',
            'Two camp spots reserved for gathering, eating, and shade',
            'Bring cooking gear, food, and drinks',
            'BYOD — Bring Your Own Dessert to share Friday night',
        ],
    },
];

const packingList: { heading: string; items: string[] }[] = [
    {
        heading: 'Bike & Riding',
        items: [
            'Mountain bike — clean, lubed, and trail-ready',
            'Helmet (required) and gloves',
            'Team kit or riding jersey + shorts',
            'Riding shoes and socks',
            'Hydration pack or 2+ water bottles',
            'Repair kit: spare tube, pump or CO2, multi-tool, chain lube',
            'Bike light + helmet light for the Friday night ride',
            'Sunglasses or clear lenses for night ride',
        ],
    },
    {
        heading: 'Camping & Sleeping',
        items: [
            'Tent or RV (no sewer hookups onsite)',
            'Sleeping bag and pad',
            'Pillow',
            'Camp chairs',
            'Headlamp + spare batteries',
            'Lantern or string lights for your site',
            'Tarp or shade canopy (Moab sun is no joke)',
        ],
    },
    {
        heading: 'Clothing',
        items: [
            'Riding kit for two days (one to wash, one to wear)',
            'Casual clothes and a hoodie — desert nights get cool',
            'Closed-toe camp shoes',
            'Swimsuit and a towel for the water activity',
            'Pajamas / sleep clothes',
            'Hat and sunglasses',
        ],
    },
    {
        heading: 'Food & Kitchen',
        items: [
            'Breakfast and dinner ingredients (BYOF — bring your own food)',
            'Friday lunch (on your own)',
            'Saturday lunch is team-provided (walking tacos) — no need to pack it',
            'Cooking gear: stove, fuel, pans, utensils',
            'Cooler with ice',
            'Drinking water — bring extra',
            'Dessert to share Friday night (BYOD)',
            'Plates, cups, silverware, dish soap, trash bags',
            'Snacks — riding fuel and around-camp grazing',
        ],
    },
    {
        heading: 'Water Activity',
        items: [
            'Swimsuit and towel',
            'Water shoes or sandals',
            'Optional: SUP, kayak, or inflatable',
            'Optional: water guns and pool toys',
            'Sunscreen — reapply after the water',
        ],
    },
    {
        heading: 'Health & Safety',
        items: [
            'Sunscreen (high SPF) and lip balm',
            'Bug spray',
            'Personal first-aid kit and any meds',
            'Reusable water bottle for camp',
            'Phone charger / battery pack',
        ],
    },
];


const routesCollectionUrl = 'https://www.trailforks.com/collections/28076/';

type RouteDay = {
    day: string;
    description?: string;
    routes: {
        name: string;
        difficulty: 'Mild' | 'Medium' | 'Spicy' | 'Alternate';
        url: string;
        note?: string;
    }[];
};

const bikeRoutes: RouteDay[] = [
    {
        day: 'Day 1: Klonzo',
        routes: [
            { name: 'Mild Route', difficulty: 'Mild', url: 'https://www.trailforks.com/ridelog/planner/view/697607/' },
            { name: 'Medium Route', difficulty: 'Medium', url: 'https://www.trailforks.com/ridelog/planner/view/697631/' },
            { name: 'Spicy Route', difficulty: 'Spicy', url: 'https://www.trailforks.com/ridelog/planner/view/697615/' },
            { name: 'Klonzo North Loop', difficulty: 'Alternate', url: 'https://www.trailforks.com/route/klonzo-north-loop/' },
        ]
    },
    {
        day: 'Day 2: Navajo / Mag 7 / Dead Horse / Horsethief',
        routes: [
            { name: 'Spicy: Moab Rocks Stage 3 Short', difficulty: 'Spicy', url: 'https://www.trailforks.com/route/moab-rocks-stage-3-short/' },
            { name: 'Medium: Horsethief Navrocks Shuttle', difficulty: 'Medium', url: 'https://www.trailforks.com/route/horsethief-navrocks-shuttle/', note: 'Requires Shuttle' },
            { name: 'Mild: Dead Horse Route', difficulty: 'Mild', url: 'https://www.trailforks.com/route/dead-horse-route/' },
            { name: 'Mild: Alternate Planner', difficulty: 'Mild', url: 'https://www.trailforks.com/ridelog/planner/view/697640/' },
            { name: 'Alternate: Raptor Route Shuttle Drop', difficulty: 'Alternate', url: 'https://www.trailforks.com/route/raptor-route-shuttle-drop-eagle-eye-hawks-glide-falcon-flow/' },
            { name: 'Alternate: Porcupine Rim (Moab Rocks Stg 1)', difficulty: 'Alternate', url: 'https://www.trailforks.com/route/moab-rocks-2025-stage-1-porcupine-rim/' },
        ]
    },
    {
        day: 'Other Options',
        description: 'Great for night rides or extra laps.',
        routes: [
            { name: 'Night Ride / Alternate', difficulty: 'Alternate', url: 'https://www.trailforks.com/ridelog/planner/view/697695' }
        ]
    }
];

const difficultyColors: Record<RouteDay['routes'][0]['difficulty'], string> = {
    Mild: 'rgb(28, 120, 65)',       // Green
    Medium: 'rgb(45, 90, 170)',     // Blue
    Spicy: 'rgb(200, 50, 50)',      // Red
    Alternate: 'rgb(var(--color-primary))', // Purple
};

function ScheduleColumn({ day, items }: { day: string; items: ScheduleItem[] }) {
    return (
        <div className="glass-panel" style={{ padding: 'var(--spacing-lg)' }}>
            <h3 style={{ marginBottom: 'var(--spacing-md)', color: 'rgb(var(--color-primary))', fontSize: '1.5rem', borderBottom: '2px solid rgb(var(--color-tertiary))', paddingBottom: '0.5rem', letterSpacing: '0.05em' }}>
                {day}
            </h3>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {items.map((it) => (
                    <li key={it.title} style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: '1rem', alignItems: 'baseline' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.04em', color: 'rgb(var(--text-color))', opacity: 0.7, whiteSpace: 'nowrap' }}>{it.time}</span>
                        <div style={{ borderLeft: `3px solid ${accentColors[it.accent]}`, paddingLeft: '0.75rem' }}>
                            <p style={{ fontWeight: 700, color: accentColors[it.accent], marginBottom: '0.15rem', fontSize: '1rem' }}>{it.title}</p>
                            {it.detail && <p className="text-muted" style={{ fontSize: '0.85rem', margin: 0, lineHeight: 1.5 }}>{it.detail}</p>}
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default function FamilyCamp2026() {
    return (
        <div className="animate-fade-in">

            {/* Hero */}
            <div style={{
                background: 'linear-gradient(135deg, rgb(var(--color-primary)), rgb(var(--color-primary-light)))',
                color: 'white',
                padding: 'var(--spacing-xl) 0',
            }}>
                <div className="container">
                    <p style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.75, marginBottom: '0.5rem' }}>Lehi MTB Family Camp</p>
                    <h1 style={{ marginBottom: '0.75rem' }}>2026 — Moab Edition</h1>
                    <p style={{ opacity: 0.9, fontSize: '1.2rem', maxWidth: '720px', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                        Two days of riding, swimming, games, and time around camp with the Lehi MTB family. <Link href="https://maps.app.goo.gl/8XqvUuBDuWTiern4A" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'underline', fontWeight: 600 }}>Utah Raptor State Park</Link> · Moab.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem 2.5rem', marginTop: '1rem' }}>
                        <div>
                            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.75, marginBottom: '0.2rem' }}>Official Dates</p>
                            <p style={{ fontWeight: 700, fontSize: '1.05rem', margin: 0 }}>June 5–6, 2026 (Fri–Sat)</p>
                            <p style={{ fontSize: '0.8rem', opacity: 0.85, margin: 0 }}>Arrive Thu night, head home Sunday</p>
                        </div>
                        <div>
                            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.75, marginBottom: '0.2rem' }}>Location</p>
                            <p style={{ fontWeight: 700, fontSize: '1.05rem', margin: 0 }}>
                                <Link href="https://maps.app.goo.gl/8XqvUuBDuWTiern4A" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>Utah Raptor State Park</Link>
                            </p>
                            <p style={{ fontSize: '0.8rem', opacity: 0.85, margin: 0 }}>Tap to open in Google Maps · Private loop reserved for the team</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" style={{ padding: 'var(--spacing-xl) 0' }}>

                {/* Quick Nav */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: 'var(--spacing-xl)' }}>
                    <a href="#schedule" className="btn-silver" style={{ fontSize: '0.875rem' }}>Schedule</a>
                    <a href="#activities" className="btn-silver" style={{ fontSize: '0.875rem' }}>Activities</a>
                    <a href="#routes" className="btn-silver" style={{ fontSize: '0.875rem' }}>Bike Routes</a>
                    <a href="#camp-details" className="btn-silver" style={{ fontSize: '0.875rem' }}>Camp Details</a>
                    <a href="#what-to-bring" className="btn-silver" style={{ fontSize: '0.875rem' }}>What to Bring</a>
                </div>

                {/* Schedule */}
                <section id="schedule" style={{ marginBottom: 'var(--spacing-xl)', scrollMarginTop: '5rem' }}>
                    <h2 style={{ marginBottom: 'var(--spacing-md)', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>Schedule</h2>
                    <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                        Camp is officially <strong>Friday and Saturday, June 5–6</strong>. Most families come down Thursday night to settle in and stay through Sunday morning to make the drive easier — both are encouraged but not required. Friday leans into skills and the dessert social; Saturday is bigger trail rides, team lunch, and water in the afternoon. All times are loose — show up, ride, and roll with the group.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 'var(--spacing-md)' }}>
                        <ScheduleColumn day="Friday" items={fridaySchedule} />
                        <ScheduleColumn day="Saturday" items={saturdaySchedule} />
                    </div>
                </section>

                {/* Activities */}
                <section id="activities" style={{ marginBottom: 'var(--spacing-xl)', scrollMarginTop: '5rem' }}>
                    <h2 style={{ marginBottom: 'var(--spacing-md)', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>Activities</h2>

                    <h3 style={{ color: 'rgb(var(--color-primary))', fontSize: '1.2rem', marginBottom: '1rem' }}>Skills</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)' }}>
                        {skillsActivities.map((a) => (
                            <div key={a.title} className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderLeft: '4px solid rgb(var(--color-primary))' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                                    <h4 style={{ margin: 0, fontSize: '1.05rem', flex: '1 1 auto', minWidth: 0 }}>{a.title}</h4>
                                    <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'rgb(var(--color-primary))', padding: '0.15rem 0.5rem', borderRadius: 'var(--radius-sm)', background: 'rgba(87,43,158,0.08)', whiteSpace: 'nowrap', flexShrink: 0 }}>{a.when}</span>
                                </div>
                                <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: 1.55, margin: 0 }}>{a.detail}</p>
                            </div>
                        ))}
                    </div>

                    <h3 style={{ color: 'rgb(var(--color-primary))', fontSize: '1.2rem', marginBottom: '1rem' }}>Fun</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--spacing-md)' }}>
                        {funActivities.map((a) => (
                            <div key={a.title} className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderLeft: '4px solid rgb(var(--color-primary-light))' }}>
                                <h4 style={{ marginBottom: '0.5rem', fontSize: '1.05rem' }}>{a.title}</h4>
                                <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: 1.55, margin: 0 }}>{a.detail}</p>
                            </div>
                        ))}
                    </div>
                </section>

                
                {/* Bike Routes */}
                <section id="routes" style={{ marginBottom: 'var(--spacing-xl)', scrollMarginTop: '5rem' }}>
                    <h2 style={{ marginBottom: 'var(--spacing-md)', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>Bike Routes</h2>
                    <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                        We've curated a list of recommended routes for each day on Trailforks. Check out the <Link href={routesCollectionUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(var(--color-primary))', textDecoration: 'underline', fontWeight: 600 }}>full Trailforks collection</Link> to save them to your device.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
                        {bikeRoutes.map((dayPlan) => (
                            <div key={dayPlan.day} className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderLeft: '4px solid rgb(var(--color-secondary))' }}>
                                <h3 style={{ marginBottom: '0.5rem', color: 'rgb(var(--text-color))', fontSize: '1.3rem' }}>{dayPlan.day}</h3>
                                {dayPlan.description && <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>{dayPlan.description}</p>}
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-sm)' }}>
                                    {dayPlan.routes.map((route, i) => (
                                        <Link key={i} href={route.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)', transition: 'transform 0.2s, borderColor 0.2s' }} className="hover-lift">
                                                <div style={{ padding: '0.25rem 0.5rem', borderRadius: 'var(--radius-sm)', background: `${difficultyColors[route.difficulty]}`, color: 'white', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                                    {route.difficulty}
                                                </div>
                                                <div style={{ flex: 1, minWidth: 0 }}>
                                                    <p style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600, color: 'rgb(var(--text-color))', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{route.name}</p>
                                                    {route.note && <p style={{ margin: 0, fontSize: '0.8rem', color: 'rgb(200, 50, 50)', fontWeight: 600 }}>{route.note}</p>}
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Camp Details */}
                <section id="camp-details" style={{ marginBottom: 'var(--spacing-xl)', scrollMarginTop: '5rem' }}>
                    <h2 style={{ marginBottom: 'var(--spacing-md)', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>Camp Details</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-md)' }}>
                        {campDetails.map((section) => (
                            <div key={section.heading} className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid rgb(var(--color-primary))' }}>
                                <h3 style={{ marginBottom: '1rem', color: 'rgb(var(--color-primary))', fontSize: '1.2rem' }}>{section.heading}</h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                    {section.items.map((item, idx) => (
                                        <li key={idx} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.95rem', lineHeight: 1.55 }}>
                                            <span style={{ color: 'rgb(var(--color-primary))', flexShrink: 0 }}>✦</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* What to Bring */}
                <section id="what-to-bring" style={{ marginBottom: 'var(--spacing-xl)', scrollMarginTop: '5rem' }}>
                    <h2 style={{ marginBottom: 'var(--spacing-md)', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>What to Bring</h2>
                    <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                        A packing checklist for the weekend. Showers, water, and power are onsite at Utah Raptor State Park — there are no sewer hookups, so plan RVs accordingly. Bring more water than you think you need; Moab is hot and dry.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-md)' }}>
                        {packingList.map((section) => (
                            <div key={section.heading} className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderLeft: '4px solid rgb(var(--color-primary))' }}>
                                <h3 style={{ marginBottom: '1rem', color: 'rgb(var(--color-primary))', fontSize: '1.15rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                                    {section.heading}
                                </h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {section.items.map((item, idx) => (
                                        <li key={idx} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.9rem', lineHeight: 1.55 }}>
                                            <input type="checkbox" style={{ marginTop: '0.25rem', accentColor: 'rgb(var(--color-primary))', flexShrink: 0 }} aria-label={item} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: 1.7, marginTop: 'var(--spacing-md)', fontStyle: 'italic' }}>
                        Team-provided: <strong>Saturday team lunch (walking tacos)</strong>, plus tents, tables, bike racks, and group games gear. The team trailer covers communal supplies — these lists are for what each family brings.
                    </p>
                </section>

                {/* Questions / CTA */}
                <div style={{ marginTop: 'var(--spacing-xl)', padding: 'var(--spacing-lg)', background: 'rgba(87,43,158,0.05)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                    <h3 style={{ marginBottom: '0.5rem', fontSize: '1.15rem' }}>Questions?</h3>
                    <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
                        Message <strong>Andre Borba</strong> on TeamSnap for anything Family Camp related — logistics, food, gear, or last-minute changes.
                    </p>
                </div>

            </div>
        </div>
    );
}
