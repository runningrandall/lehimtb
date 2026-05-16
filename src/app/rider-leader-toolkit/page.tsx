import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Rider Leader Toolkit | Lehi MTB Hub',
    description: 'Resources for Lehi MTB ride leaders — emergency action plans, common routes, and NICA best practices for running a group.',
};

const emergencyActionPlans = [
    {
        title: 'Eagle Mountain',
        url: 'https://docs.google.com/document/d/1ITziqdpyUPxFM12JUalZ7pU9j66y-uuc9_Pl5YNWSck/edit?usp=drive_link',
    },
    {
        title: 'Corner Canyon',
        url: 'https://docs.google.com/document/d/1XQQtdzTITkJJvMjs9kqTq5eh0tJ0T8iV/edit?usp=drive_link',
    },
    {
        title: 'Butterfield',
        url: 'https://docs.google.com/document/d/1vgj95GpCWVirUPtbKUTWkx-CuYkLjA1LEWijk8NmSK0/edit?usp=drive_link',
    },
    {
        title: 'American Fork Canyon',
        url: 'https://docs.google.com/document/d/1aU7ZKf4FD_tKo9owVOov8rrYO0AtMRlB/edit?usp=drive_link',
    },
    {
        title: 'Park City',
        url: 'https://docs.google.com/document/d/1ZWFuaoWD3qUEwBG8Im-T_MwcShPewaZf/edit?usp=drive_link',
    },
    {
        title: 'Valley Vista',
        url: 'https://docs.google.com/document/d/1EPA6Z3hpcKv5wuQPKrVKwzotH5WQO3MDVLARc31xIlA/edit?usp=drive_link',
    },
];

type RouteLevel = 'Green' | 'Blue' | 'Black';

type Route = {
    name: string;
    url: string;
    miles: number;
    level: RouteLevel;
};

type RouteArea = {
    area: string;
    location: string;
    color: string;
    trailforksRegionUrl: string;
    trailforksRoutesUrl: string;
    routes: Route[];
};

const routeAreas: RouteArea[] = [
    {
        area: 'Eagle Mountain',
        location: 'Cedar Pass Ranch / Mountain Ranch Bike Park',
        color: 'rgb(var(--color-primary))',
        trailforksRegionUrl: 'https://www.trailforks.com/region/eagle-mountain-13896/',
        trailforksRoutesUrl: 'https://www.trailforks.com/region/eagle-mountain-13896/routes/',
        routes: [
            { name: 'MRHS Time Trial', url: 'https://www.trailforks.com/route/mrhs-time-trial/', miles: 4, level: 'Green' },
            { name: 'Eagle MT "Green" 5 mile Loop', url: 'https://www.trailforks.com/route/eagle-mt--green--5-mile-loop/', miles: 5, level: 'Green' },
            { name: 'Boy Scout Merit Badge 8 Mile', url: 'https://www.trailforks.com/route/boy-scout-merit-badge-8-mile-uc/', miles: 8, level: 'Blue' },
            { name: 'EaMo Winter Blues', url: 'https://www.trailforks.com/route/eamo-winter-blues/', miles: 8, level: 'Blue' },
            { name: 'Alta MTB Purple', url: 'https://www.trailforks.com/route/alta-mtb-purple/', miles: 10, level: 'Blue' },
            { name: 'Purple Mountains Majesty', url: 'https://www.trailforks.com/route/purple-mountains-majesty/', miles: 11, level: 'Blue' },
            { name: 'Jakarta Lollypop Loop', url: 'https://www.trailforks.com/route/jakarta-lollypop-loop/', miles: 6, level: 'Black' },
        ],
    },
    {
        area: 'Lambert Park',
        location: 'Alpine',
        color: 'rgb(var(--color-primary))',
        trailforksRegionUrl: 'https://www.trailforks.com/region/lambert-park/',
        trailforksRoutesUrl: 'https://www.trailforks.com/region/lambert-park/routes/',
        routes: [
            { name: 'Lambert Park Rodeo Collection', url: 'https://www.trailforks.com/route/lambert-park-rodeo-collection/', miles: 4, level: 'Blue' },
            { name: 'Ruin the Rodeo', url: 'https://www.trailforks.com/route/ruin-the-rodeo/', miles: 5, level: 'Blue' },
            { name: 'Rodeo, Middle, Spring Loop (JHS)', url: 'https://www.trailforks.com/route/jhs-lambert--rodeo-middle-spring-loop-2018/', miles: 7, level: 'Blue' },
            { name: 'Hog Hollow to Three Falls East', url: 'https://www.trailforks.com/route/hog-hollow-to-three-falls-east/', miles: 9, level: 'Blue' },
            { name: 'Three Hog View Loop', url: 'https://www.trailforks.com/route/three-hog-view-loop/', miles: 10, level: 'Blue' },
            { name: '13 mile Lambert Park Route', url: 'https://www.trailforks.com/routepopular/101734061/', miles: 13, level: 'Blue' },
        ],
    },
    {
        area: 'Corner Canyon',
        location: 'Draper',
        color: 'rgb(var(--color-primary))',
        trailforksRegionUrl: 'https://www.trailforks.com/region/corner-canyon/',
        trailforksRoutesUrl: 'https://www.trailforks.com/region/corner-canyon/routes/',
        routes: [
            { name: 'RushBSTAnns', url: 'https://www.trailforks.com/route/rushbstanns/', miles: 6, level: 'Green' },
            { name: 'Upper Draper Loop', url: 'https://www.trailforks.com/route/upper-draper-loop/', miles: 8, level: 'Green' },
            { name: 'Corner Canyon Cruise', url: 'https://www.trailforks.com/route/corner-canyon-cruise/', miles: 7, level: 'Blue' },
            { name: 'Corner Canyon Classic', url: 'https://www.trailforks.com/route/corner-canyon-classic/', miles: 8, level: 'Blue' },
            { name: 'Canyon Hollow → Jacob\'s Ladder → Rush', url: 'https://www.trailforks.com/route/canyon-hollow-to-jacob-s-ladder-to-rush/', miles: 11, level: 'Blue' },
            { name: 'Ann\'s, Jacob\'s Ladder & Rush Loop', url: 'https://www.trailforks.com/route/anns-jacobs-ladder--rush-loop/', miles: 11, level: 'Blue' },
            { name: '14 mile Corner Canyon Route', url: 'https://www.trailforks.com/routepopular/71330681/', miles: 14, level: 'Blue' },
        ],
    },
    {
        area: 'Valley Vista',
        location: 'Saratoga Springs',
        color: 'rgb(var(--color-primary-light))',
        trailforksRegionUrl: 'https://www.trailforks.com/region/valley-vista-14899/',
        trailforksRoutesUrl: 'https://www.trailforks.com/region/valley-vista-14899/routes/',
        routes: [
            { name: 'Valley Vista Loop Beginner', url: 'https://www.trailforks.com/route/valley-vista-loop-beginner/', miles: 4, level: 'Blue' },
            { name: 'Valley Vista Loop Beginner Plus', url: 'https://www.trailforks.com/route/valley-vista-loop-beginner-plus/', miles: 5, level: 'Blue' },
            { name: 'Curse of the Black Pit', url: 'https://www.trailforks.com/route/curse-of-the-black-pit/', miles: 7, level: 'Blue' },
            { name: 'Master Blaster', url: 'https://www.trailforks.com/route/master-blaster/', miles: 11, level: 'Blue' },
            { name: 'VV-8', url: 'https://www.trailforks.com/route/vv8/', miles: 8, level: 'Black' },
            { name: 'Grove Creek to Timpooneke', url: 'https://www.trailforks.com/route/grove-creek-to-timpooneke/', miles: 10, level: 'Black' },
        ],
    },
    {
        area: 'Butterfield Canyon',
        location: 'Herriman',
        color: 'rgb(var(--color-primary))',
        trailforksRegionUrl: 'https://www.trailforks.com/region/butterfield-canyon-60604/',
        trailforksRoutesUrl: 'https://www.trailforks.com/region/butterfield-canyon-60604/routes/',
        routes: [
            { name: 'NICA Butterfield Race Course', url: 'https://www.trailforks.com/route/nica-butterfield-race-course/', miles: 6, level: 'Green' },
            { name: 'Butterfield NICA Course 2024', url: 'https://www.trailforks.com/route/butterfield-nica-course-2024/', miles: 6, level: 'Green' },
            { name: 'Butterfield with Bolt & Juniper', url: 'https://www.trailforks.com/route/butterfield-with-bolt--juniper/', miles: 7, level: 'Green' },
            { name: 'Butterfield Perimeter Route', url: 'https://www.trailforks.com/route/butterfield-perimeter-route/', miles: 8, level: 'Green' },
        ],
    },
    {
        area: 'Yellow Fork',
        location: 'Rose Canyon / Herriman',
        color: 'rgb(var(--color-primary))',
        trailforksRegionUrl: 'https://www.trailforks.com/region/yellow-fork/',
        trailforksRoutesUrl: 'https://www.trailforks.com/region/yellow-fork/routes/',
        routes: [
            { name: 'Yellow Fork', url: 'https://www.trailforks.com/route/yellow-fork/', miles: 6, level: 'Blue' },
            { name: 'Yellow Fork Canyon', url: 'https://www.trailforks.com/route/yellow-fork-canyon/', miles: 7, level: 'Blue' },
            { name: '14 mile Yellow Fork All-Mountain Route', url: 'https://www.trailforks.com/routepopular/73137325/', miles: 14, level: 'Blue' },
        ],
    },
    {
        area: 'Park City',
        location: 'Round Valley',
        color: 'rgb(var(--color-primary-light))',
        trailforksRegionUrl: 'https://www.trailforks.com/region/round-valley/',
        trailforksRoutesUrl: 'https://www.trailforks.com/region/round-valley/routes/',
        routes: [
            { name: 'P-Dog Loop', url: 'https://www.trailforks.com/route/pdog-loop/', miles: 5, level: 'Green' },
            { name: 'Lost Prospector Loop', url: 'https://www.trailforks.com/route/lost-prospector-loop/', miles: 5, level: 'Blue' },
            { name: 'Green Group 6/23', url: 'https://www.trailforks.com/route/green-group-6-23/', miles: 8, level: 'Blue' },
            { name: 'Round Valley Super 8', url: 'https://www.trailforks.com/route/round-valley-super-8/', miles: 9, level: 'Blue' },
            { name: 'Round Valley — Old Ranch Route', url: 'https://www.trailforks.com/route/round-valley-old-ranch-route/', miles: 10, level: 'Blue' },
            { name: 'Long Loop — RV Race', url: 'https://www.trailforks.com/route/long-loop-rv-race/', miles: 12, level: 'Blue' },
        ],
    },
    {
        area: 'American Fork Canyon',
        location: 'Tibble Fork area',
        color: 'rgb(var(--color-primary))',
        trailforksRegionUrl: 'https://www.trailforks.com/region/american-fork-canyon/',
        trailforksRoutesUrl: 'https://www.trailforks.com/region/american-fork-canyon/routes/',
        routes: [
            { name: 'Joy Loop', url: 'https://www.trailforks.com/route/joy-loop/', miles: 7, level: 'Blue' },
            { name: 'Fatbike Prime Route', url: 'https://www.trailforks.com/route/fatbike-prime-route/', miles: 9, level: 'Blue' },
            { name: 'Ridge / Overlook / South Fork Little Deer Creek', url: 'https://www.trailforks.com/route/lower-summit-trailhead-ridge-to-overlook-back-to-south-fork-little-deer-creek/', miles: 9, level: 'Blue' },
            { name: 'AF Canyon Base Loop', url: 'https://www.trailforks.com/route/af-canyon-base-loop/', miles: 13, level: 'Blue' },
            { name: 'Bear Canyon & 252 from Alpine Loop Summit', url: 'https://www.trailforks.com/route/bear-canyon-and-252-from-alpine-loop-summit-lot/', miles: 13, level: 'Blue' },
            { name: 'Big AF Ride', url: 'https://www.trailforks.com/route/big-af-ride/', miles: 14, level: 'Blue' },
            { name: 'Ridge Loop from Tibble', url: 'https://www.trailforks.com/route/ridge-loop-from-tibble/', miles: 10, level: 'Black' },
        ],
    },
];

const levelStyles: Record<RouteLevel, { bg: string; fg: string; label: string }> = {
    Green: { bg: 'rgba(45, 160, 95, 0.12)', fg: 'rgb(28, 120, 65)', label: 'Green' },
    Blue: { bg: 'rgba(60, 110, 200, 0.12)', fg: 'rgb(35, 80, 160)', label: 'Blue' },
    Black: { bg: 'rgba(30, 30, 30, 0.12)', fg: 'rgb(20, 20, 20)', label: 'Black' },
};

type Tool = {
    name: string;
    url: string;
    category: 'Safety' | 'Maps' | 'Weather' | 'League' | 'Races' | 'Communication' | 'Logistics';
    description: string;
};

const tools: Tool[] = [
    {
        name: 'what3words',
        url: 'https://what3words.com/',
        category: 'Safety',
        description: 'Every 3 m × 3 m square in the world has a unique three-word address. Use it to share your exact location with 911 or another coach when there is no street address — invaluable on trails.',
    },
    {
        name: 'Trailforks',
        url: 'https://www.trailforks.com/apps/',
        category: 'Maps',
        description: 'Trail maps, GPS navigation, route library, and trail status. The Pro tier unlocks offline maps — worth it before any AF Canyon, Park City, or Lambert Park ride.',
    },
    {
        name: 'OpenSnow',
        url: 'https://opensnow.com/',
        category: 'Weather',
        description: 'Hyper-local mountain weather, hourly forecasts, and lightning. Coaches use it before every practice — if conditions look unsafe, we will cancel and announce on TeamSnap. Riders, watch your notifications.',
    },
    {
        name: 'TrailSync',
        url: 'https://trailsync.org/',
        category: 'Logistics',
        description: 'Ride leader check-in and team ride log. Used to track who is leading, who showed up, and where each group rode.',
    },
    {
        name: 'NICA PitZone',
        url: 'https://pitzone.nationalmtb.org/',
        category: 'League',
        description: 'NICA registration, waivers, coach licensing, SafeSport, and team rosters. Keep your coach status current — you can\'t lead a sanctioned ride if it lapses.',
    },
    {
        name: 'Utah League — Region 5',
        url: 'https://utahmtb.org/region-races/',
        category: 'Races',
        description: 'Utah League race schedule, race courses, and results. Subscribe to the Region 5 calendar feed from the events page to stay current on race dates and venues.',
    },
    {
        name: 'TeamSnap',
        url: 'https://www.teamsnap.com/',
        category: 'Communication',
        description: 'Practice schedules, attendance, and team messaging. Where riders and parents see ride times, meeting locations, and last-minute changes.',
    },
];

const toolCategoryColor: Record<Tool['category'], string> = {
    Safety: 'rgb(180, 30, 50)',
    Maps: 'rgb(28, 120, 65)',
    Weather: 'rgb(35, 80, 160)',
    League: 'rgb(var(--color-primary))',
    Races: 'rgb(var(--color-primary))',
    Communication: 'rgb(var(--color-primary-light))',
    Logistics: 'rgb(120, 90, 30)',
};

const abcdeChecklist = [
    { letter: 'A', word: 'Air', description: 'Check tire pressure. Squeeze each tire — should feel firm. Top off with a pump if needed.' },
    { letter: 'B', word: 'Brakes', description: 'Squeeze both levers. Pads should engage well before the lever hits the bar. Spin each wheel — no rub.' },
    { letter: 'C', word: 'Cranks & Chain', description: 'Wiggle crank arms — no play. Chain should be clean, lubed, and shifting smoothly.' },
    { letter: 'D', word: 'Drop & Drivetrain', description: 'Lift the bike a few inches and drop it. Listen for rattles. Shift through all gears.' },
    { letter: 'E', word: 'Everything Else', description: 'Helmet on and buckled. Bottles full. Tools, tube, snacks. Phone charged. Anything loose?' },
];

const bestPractices = [
    {
        title: 'Pre-Ride Safety Checks',
        color: 'rgb(var(--color-primary))',
        items: [
            { title: 'ABCDE bike check', desc: 'Every rider, every ride. No exceptions.' },
            { title: 'Helmet check', desc: 'Strap buckled, two fingers between strap and chin, no more than two fingers above eyebrows.' },
            { title: 'Water check', desc: 'Show me your water. Minimum one full bottle or hydration pack. More for long or hot rides.' },
            { title: 'Snack check', desc: 'Anything over 60–75 minutes — riders should have something to eat on the bike.' },
            { title: 'Phone check', desc: 'At least one rider in each group (besides the leader) has a charged phone.' },
        ],
    },
    {
        title: 'Group Structure',
        color: 'rgb(var(--color-primary))',
        items: [
            { title: 'Lead and sweep', desc: 'One coach/leader at the front sets pace, one at the back ensures no one is left behind.' },
            { title: 'Ride at the pace of the slowest rider', desc: 'Never drop a rider. The group is only as fast as its slowest member.' },
            { title: 'Regroup at every junction', desc: 'Stop and wait at any trail intersection until everyone is together.' },
            { title: 'Count check', desc: 'Count heads at the start, at every regroup, and at the end. Out loud.' },
            { title: '6:1 ratio max', desc: 'Per NICA guidelines — no more than 6 riders per coach/ride leader.' },
        ],
    },
    {
        title: 'On the Trail',
        color: 'rgb(var(--color-primary))',
        items: [
            { title: 'Call out hazards', desc: '"Rock!", "Rut!", "Hiker up!" — pass info up and down the line.' },
            { title: 'Yield appropriately', desc: 'Bikes yield to hikers and horses. Downhill yields to uphill (unless they wave you through).' },
            { title: 'Announce passing', desc: '"On your left!" — and give people time to react before passing.' },
            { title: 'No headphones', desc: 'Riders need to hear hazards, calls, and other trail users.' },
            { title: 'Stay on the trail', desc: 'No cutting switchbacks, no creating new lines. We ride where we\'re welcome because we ride right.' },
        ],
    },
    {
        title: 'Pace & Effort',
        color: 'rgb(var(--color-primary))',
        items: [
            { title: 'Conversational pace by default', desc: 'Most team riding should be Zone 2 — able to hold a conversation. Save intensity for structured intervals.' },
            { title: 'Stop for skills', desc: 'Hit a tricky corner or feature? Stop, demo, and let riders try it twice. Skills count as training.' },
            { title: 'Mind the back of the pack', desc: 'If the lead is pulling away, ease up. Use climbs and tough sections as natural regroup points.' },
            { title: 'Water breaks', desc: 'Every 30–45 minutes minimum. Don\'t wait until someone is thirsty — that\'s already behind.' },
        ],
    },
    {
        title: 'If Something Goes Wrong',
        color: 'rgb(var(--color-primary))',
        items: [
            { title: 'Read the Emergency Action Plan', desc: 'Know the EAP for your trail system before the ride. Each trailhead has its own.' },
            { title: 'Stop and assess', desc: 'Don\'t move an injured rider unless they\'re in further danger. Check for responsiveness, breathing, bleeding.' },
            { title: 'Stay calm and lead', desc: 'The other riders take their cues from you. Calm voice, clear instructions.' },
            { title: 'Call for help early', desc: 'When in doubt, call. 911 first if serious. Then notify Steve or Randall.' },
            { title: 'Stay with the rider', desc: 'Send another adult or the most responsible rider for help if needed — but never leave an injured rider alone.' },
        ],
    },
    {
        title: 'Mindset & Culture',
        color: 'rgb(var(--color-primary))',
        items: [
            { title: 'Every rider matters', desc: 'The back of the pack matters just as much as the front. Encourage, don\'t shame.' },
            { title: 'Make it fun', desc: 'Riders who enjoy practice come back. Hard work is fine — misery is not.' },
            { title: 'Praise effort, not just speed', desc: 'Cleaning a tough climb, pushing through a hard day, trying a new feature — all worth celebrating.' },
            { title: 'You set the tone', desc: 'Ride leaders model the culture. How you treat the slowest rider becomes how the team treats them.' },
        ],
    },
];

export default function RiderLeaderToolkit() {
    return (
        <div className="animate-fade-in">

            {/* Header */}
            <div style={{
                background: 'linear-gradient(135deg, rgb(var(--color-primary)), rgb(var(--color-primary-light)))',
                color: 'white',
                padding: 'var(--spacing-xl) 0',
            }}>
                <div className="container">
                    <p style={{ fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.75, marginBottom: '0.5rem' }}>Coach & Volunteer Resources</p>
                    <h1 style={{ marginBottom: '0.75rem' }}>Rider Leader Toolkit</h1>
                    <p style={{ opacity: 0.9, fontSize: '1.125rem', maxWidth: '720px', lineHeight: 1.6 }}>
                        Everything you need to lead a safe, fun, and well-run team ride. Bookmark this page — review the EAPs and best practices before every season, and check route ideas when you&apos;re planning a practice.
                    </p>
                </div>
            </div>

            <div className="container" style={{ padding: 'var(--spacing-xl) 0' }}>

                {/* Quick nav */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: 'var(--spacing-xl)' }}>
                    <a href="#emergency-action-plans" className="btn-silver" style={{ fontSize: '0.875rem' }}>Emergency Action Plans</a>
                    <a href="#routes" className="btn-silver" style={{ fontSize: '0.875rem' }}>Common Routes</a>
                    <a href="#tools" className="btn-silver" style={{ fontSize: '0.875rem' }}>Tools & Apps</a>
                    <a href="#best-practices" className="btn-silver" style={{ fontSize: '0.875rem' }}>Best Practices</a>
                    <a href="#abcde" className="btn-silver" style={{ fontSize: '0.875rem' }}>ABCDE Bike Check</a>
                </div>

                {/* Emergency Action Plans */}
                <section id="emergency-action-plans" style={{ marginBottom: 'var(--spacing-xl)', scrollMarginTop: '5rem' }}>
                    <h2 style={{ marginBottom: 'var(--spacing-md)', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>Emergency Action Plans</h2>
                    <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                        Every trail system we ride has its own EAP — emergency contacts, nearest hospital, trailhead addresses, and meeting points for first responders. <strong>Read the relevant EAP before you lead a ride at that location.</strong> Have it accessible (downloaded or bookmarked) on your phone.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-md)' }}>
                        {emergencyActionPlans.map((eap) => (
                            <div key={eap.url} className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderLeft: '4px solid rgb(var(--color-primary))', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-full)', background: 'rgba(87,43,158,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(var(--color-primary))" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                            <polyline points="14 2 14 8 20 8"></polyline>
                                        </svg>
                                    </div>
                                    <h3 style={{ fontSize: '1.05rem', margin: 0 }}>{eap.title}</h3>
                                </div>
                                <Link href={eap.url} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ alignSelf: 'flex-start', fontSize: '0.875rem' }}>
                                    Open EAP →
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: 'var(--spacing-md)', padding: 'var(--spacing-md)', background: 'rgba(220, 53, 69, 0.08)', border: '1px solid rgba(220, 53, 69, 0.3)', borderRadius: 'var(--radius-md)' }}>
                        <p style={{ fontWeight: 700, marginBottom: '0.4rem', color: 'rgb(180, 30, 50)' }}>In a serious emergency: call 911 first.</p>
                        <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
                            Then notify <a href="tel:8014007886" style={{ color: 'rgb(var(--color-primary))', fontWeight: 600 }}>Steve Stringham (801-400-7886)</a> and <a href="tel:8018372016" style={{ color: 'rgb(var(--color-primary))', fontWeight: 600 }}>Randall Adams (801-837-2016)</a>.
                        </p>
                    </div>
                </section>

                {/* Common Routes */}
                <section id="routes" style={{ marginBottom: 'var(--spacing-xl)', scrollMarginTop: '5rem' }}>
                    <h2 style={{ marginBottom: 'var(--spacing-md)', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>Common Routes</h2>
                    <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                        Popular Trailforks routes for the spots we ride most. Each route is 3&ndash;25 miles &mdash; click through for the full map, elevation, and turn-by-turn directions. Match the route to the group: newer riders on Green/short Blue, race team on bigger Blue and Black loops.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 'var(--spacing-md)' }}>
                        {routeAreas.map((area) => (
                            <div key={area.area} className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderLeft: `4px solid ${area.color}`, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.6rem' }}>
                                    <h3 style={{ marginBottom: '0.2rem', color: area.color, fontSize: '1.2rem' }}>{area.area}</h3>
                                    <p className="text-muted" style={{ fontSize: '0.85rem', margin: 0 }}>{area.location}</p>
                                </div>
                                {area.routes.length > 0 ? (
                                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                                        {area.routes.map((route) => {
                                            const lv = levelStyles[route.level];
                                            return (
                                                <li key={route.url} style={{ fontSize: '0.95rem', lineHeight: 1.4 }}>
                                                    <Link href={route.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.6rem', padding: '0.45rem 0.6rem', borderRadius: 'var(--radius-sm)', textDecoration: 'none', color: 'rgb(var(--text-color))', background: 'rgba(87,43,158,0.04)' }}>
                                                        <span style={{ fontWeight: 600, flex: 1, minWidth: 0 }}>{route.name}</span>
                                                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', whiteSpace: 'nowrap', flexShrink: 0 }}>
                                                            <span className="text-muted" style={{ fontSize: '0.8rem', fontWeight: 500 }}>{route.miles} mi</span>
                                                            <span style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.05em', color: lv.fg, padding: '0.15rem 0.45rem', borderRadius: 'var(--radius-sm)', background: lv.bg }}>{lv.label}</span>
                                                        </span>
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                ) : (
                                    <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: 1.6, flex: 1, margin: 0 }}>
                                        No suggested routes published on Trailforks yet &mdash; browse the trail map and pick a loop that fits your group.
                                    </p>
                                )}
                                <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)', display: 'flex', flexWrap: 'wrap', gap: '0.75rem 1rem' }}>
                                    <Link href={area.trailforksRoutesUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: area.color, textDecoration: 'none' }}>
                                        All routes →
                                    </Link>
                                    <Link href={area.trailforksRegionUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: area.color, textDecoration: 'none' }}>
                                        Region map →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: 1.7, marginTop: 'var(--spacing-md)', fontStyle: 'italic' }}>
                        Routes are suggestions, not prescriptions. Adapt to weather, group skill, and how riders are feeling that day. Distances and difficulty pulled from Trailforks; verify trail status before you ride.
                    </p>
                </section>

                {/* Tools & Apps */}
                <section id="tools" style={{ marginBottom: 'var(--spacing-xl)', scrollMarginTop: '5rem' }}>
                    <h2 style={{ marginBottom: 'var(--spacing-md)', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>Tools & Apps</h2>
                    <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                        The handful of apps and sites every ride leader should have installed and bookmarked. Set these up before your first practice — not on the trailhead.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-md)' }}>
                        {tools.map((tool) => {
                            const catColor = toolCategoryColor[tool.category];
                            return (
                                <div key={tool.url} className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderLeft: `4px solid ${catColor}`, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '0.5rem' }}>
                                        <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{tool.name}</h3>
                                        <span style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: catColor, padding: '0.2rem 0.55rem', borderRadius: 'var(--radius-sm)', background: 'rgba(87,43,158,0.06)', whiteSpace: 'nowrap' }}>{tool.category}</span>
                                    </div>
                                    <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: 1.6, margin: 0, flex: 1 }}>{tool.description}</p>
                                    <Link href={tool.url} target="_blank" rel="noopener noreferrer" style={{ alignSelf: 'flex-start', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: catColor, textDecoration: 'none' }}>
                                        Open →
                                    </Link>
                                </div>
                            );
                        })}
                    </div>

                    <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: 1.7, marginTop: 'var(--spacing-md)', fontStyle: 'italic' }}>
                        Bonus: keep a basic first-aid reference (Red Cross First Aid app or saved PDF), the EAP for your trail downloaded, and your phone charged before every ride.
                    </p>
                </section>

                {/* ABCDE Bike Check */}
                <section id="abcde" style={{ marginBottom: 'var(--spacing-xl)', scrollMarginTop: '5rem' }}>
                    <h2 style={{ marginBottom: 'var(--spacing-md)', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>The ABCDE Bike Check</h2>
                    <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                        Run this with riders before every ride. It takes 60 seconds and prevents most mechanical issues on the trail. Have the riders do it themselves — they should know their bikes.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--spacing-md)' }}>
                        {abcdeChecklist.map((step) => (
                            <div key={step.letter} className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid rgb(var(--color-primary))', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <div style={{
                                    fontFamily: 'var(--font-brand)',
                                    fontStyle: 'italic',
                                    fontWeight: 800,
                                    fontSize: '3rem',
                                    lineHeight: 1,
                                    color: 'rgb(var(--color-primary))',
                                }}>
                                    {step.letter}
                                </div>
                                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{step.word}</h3>
                                <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Best Practices */}
                <section id="best-practices" style={{ marginBottom: 'var(--spacing-xl)', scrollMarginTop: '5rem' }}>
                    <h2 style={{ marginBottom: 'var(--spacing-md)', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>Running Your Group — NICA Best Practices</h2>
                    <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                        These are the habits that keep our team safe and make team rides feel like team rides — not a race to the front. Internalize them. They become second nature after a season.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 'var(--spacing-md)' }}>
                        {bestPractices.map((section) => (
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
                </section>

                {/* Questions CTA */}
                <div style={{ marginTop: 'var(--spacing-xl)', padding: 'var(--spacing-lg)', background: 'rgba(87,43,158,0.05)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                    <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Want to become a ride leader, or have questions?</p>
                    <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
                        Reach out to <a href="mailto:spinordie@gmail.com" style={{ color: 'rgb(var(--color-primary))', fontWeight: 600 }}>Steve Stringham</a> or <a href="mailto:rjadams96@gmail.com" style={{ color: 'rgb(var(--color-primary))', fontWeight: 600 }}>Randall Adams</a>. NICA also offers free online courses and in-person clinics — every minute spent training pays off on the trail.
                    </p>
                </div>

            </div>
        </div>
    );
}
