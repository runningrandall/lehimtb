import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'MTB Glossary | Lehi MTB Hub',
    description: 'The Lehi MTB Bible — everything you need to know about high school mountain bike racing with the Lehi Mountain Bike Team.',
};

const sections = [
    {
        title: 'Organizations & League',
        accent: 'rgb(var(--color-primary))',
        terms: [
            { term: 'NICA', def: 'National Interscholastic Cycling Association. A non-profit youth development organization that establishes interscholastic mountain biking programs for middle school and high school students across the United States. It provides a structured framework for teams, coaches, and races, promoting both competitive cycling and personal development. You register with NICA and pay them a registration fee that covers all your races.' },
            { term: 'Utah Mountain Bike League', def: 'The regional league within NICA that oversees and manages mountain biking programs, races, and activities specifically within the state of Utah. They set the rules, schedule, and manage logistics for the Utah race season.' },
            { term: 'Region', def: 'The Utah league consists of 6 regions. Lehi is in Region 5 with Skyridge, Lone Peak, Wasatch, Nebo, and more. Regions have a director that works with coaches. Each region can consist of multiple divisions. Lehi is in Division 1, which means we compete with the biggest schools in the state.' },
        ],
    },
    {
        title: 'Registration & Admin',
        accent: 'rgb(var(--color-primary-light))',
        terms: [
            { term: 'PitZone', def: 'The web portal (pitzone.nationalmtb.org) for parents, coaches, and riders to register and access resources provided by the league. Coaches can invite you to the PitZone after you register with the team. You pay your $390 league fee here.' },
            { term: 'TeamSnap', def: 'The app used for team event calendar, communications, attendance, and more. VERY IMPORTANT — you will get all practice times, cancellations, and news through TeamSnap. Download it on your phone.' },
            { term: 'Registration', def: 'You must register with both the team and the league. Team registration is completed via the TeamSnap web link. League registration is completed within PitZone.' },
        ],
    },
    {
        title: 'Costs & Finances',
        accent: 'rgb(192, 150, 240)',
        terms: [
            { term: 'Team Fees', def: '$350. Includes: team kit (jersey, bib short, t-shirt, hat), skilled instruction, 1 practice/week through May 31 then 2–3 practices/week from June 1–November 5, team registration fees, equipment and supplies, team banquet (main course), race day food, and shop discounts.' },
            { term: 'League Fees', def: '$390/HS, paid in PitZone. Goes to NICA for races and running the league. Covers all 5 races for the season.' },
            { term: 'Sponsorship & Fundraising', def: 'Sponsorship involves securing financial or in-kind support from local businesses or individuals. For every $1 a student-athlete brings in, they receive a 20% discount on team fees. A $1,000 sponsorship = $200 off team fees, up to your total team fee amount. Sponsors receive logo placement on jerseys and banners, team picture, year-end banquet invite, and more.' },
        ],
    },
    {
        title: 'Kit & Equipment',
        accent: 'rgb(var(--color-accent))',
        terms: [
            { term: 'Race Kit', def: 'The team uniform, typically including the team jersey, bibs (shorts with straps over your shoulders), and sometimes other apparel like socks or jackets. It\'s a cycling kit designed to be tight fitting. You do not normally wear underwear beneath the bibs. It can feel awkward at first, but once you\'re at practice and races you\'ll see everyone wearing them.' },
            { term: 'Kit Fit', def: 'You come try on the kit before ordering to make sure it fits correctly. Kits and sizing can be tricky, especially bibs — highly recommended to try before you buy.' },
            { term: 'Bikes', def: 'Riders need a mountain bike in good working condition suitable for the terrain. A "Walmart" type bike is generally not suitable for a full season of riding. See a local bike shop (Trek AF, Utah Mountain Biking, ARI, or others) or talk to a coach. Trek offers discounts to riders. You can also find good used deals on ksl.com — ask a coach for help identifying a good bike.' },
            { term: 'Bike Accessories', def: 'Gloves, cycling shoes, eye protection, water bottles, hydration packs, repair kits, and pumps enhance the riding experience. HELMETS ARE MANDATORY AT ALL TIMES ON A BIKE — a good helmet with concussion prevention (MIPS, WaveCel, etc.) is ideal. Check Virginia Tech\'s helmet ratings for guidance.' },
            { term: 'Bike Maintenance', def: 'Regular maintenance keeps bikes running smoothly and safely — cleaning, lubricating, adjusting components, and performing repairs. Coaches can point you in the right direction.' },
        ],
    },
    {
        title: 'Practices & Training',
        accent: 'rgb(var(--color-primary))',
        terms: [
            { term: 'Practices', def: 'Regularly scheduled sessions where riders train and develop skills under coaches. Practices involve drills, endurance rides, intervals, skills training, and course pre-rides. We normally ride Monday and Thursday evenings, plus some Saturdays. We encourage riders to attend as consistently as possible.' },
            { term: 'Practice Groups', def: 'Riders are divided into smaller groups based on skill level for more focused instruction and personalized coaching. Lehi is large enough to have up to 12 distinct groups, though they sometimes merge based on who shows up and available ride leaders.' },
            { term: 'Skills', def: 'The various techniques required for mountain biking — bike handling, positioning, cornering, climbing, descending, navigating obstacles, and maintaining balance. Coaches work with riders to develop these skills. We normally have at least a couple of dedicated skills practices at the beginning of the year.' },
            { term: 'Time Trials', def: 'A race format where individual riders compete against the clock, started at intervals and timed. We use time trials to assign appropriate practice groups based on ability. Everyone is WELCOME — no one is cut. It\'s about having fun and improving against yourself.' },
            { term: 'Adventure Rides', def: 'Less structured, often longer rides designed for riders to explore new trails, build camaraderie, and enjoy mountain biking. We often venture to places like Park City.' },
            { term: 'Pre-Ride', def: 'When a rider rides an upcoming race course before the race to learn it and be faster on race day. The team often organizes pre-rides the week before an event.' },
            { term: 'Trail Work & Volunteer Hours', def: 'Our team requires riders to contribute a minimum of 3–4 volunteer hours to trail maintenance and construction each season. This helps preserve and improve the trails we use for practices and races.' },
        ],
    },
    {
        title: 'Volunteers & Leadership',
        accent: 'rgb(var(--color-primary-light))',
        terms: [
            { term: 'Ride Leaders', def: 'Parents, coaches, or designated volunteers who lead group rides during practices or events. They ensure group safety, set the pace, and navigate the trails. WE WELCOME RIDE LEADERS OF ALL ABILITIES. You do not need to be fast — just willing to learn and help kids stay safe. Requires about 60–75 minutes of online training and a $65 league registration.' },
            { term: 'Volunteers', def: 'Individuals who dedicate their time to support the team — coaching, event organization, race day activities, fundraising, equipment maintenance, trail work, or other tasks. Volunteers are crucial to our success. One parent per rider must volunteer once at a league race and once at a team event per season. The league cannot run a race without hundreds of volunteers.' },
        ],
    },
    {
        title: 'Racing',
        accent: 'rgb(192, 150, 240)',
        terms: [
            { term: 'Races', def: 'Organized competitive events where riders race each other. NICA races typically follow a cross-country format with mass starts in waves based on ability. EVERYONE RACES — there is no bench. If racing makes your child nervous, talk to a coach. We won\'t force anyone, but we will encourage taking on the challenge.' },
            { term: 'Race Categories', def: 'Riders are divided into categories based on ability and gender for fair competition. Categories: Varsity (Boys & Girls), JVA–JVC (Boys & Girls), JVD–JVE (Boys only), Single Lap Rider/SLR (Boys & Girls), Freshman A/B/C (Boys only). Freshman Girls ride in Varsity–JVC categories due to fewer girls racing. Adaptive categories may also be available.' },
            { term: 'Race Day', def: 'The day of a race event — includes warm up, staging, the race itself, and post-race activities like awards ceremonies. The team sets up a tent and provides food and support. More detailed race day info is available from coaches.' },
            { term: 'State Race', def: 'The culminating race event, bringing together the top riders from across Utah in all regions to compete for championship titles in their categories. Riders must qualify to attend. Lehi has an outstanding state championship history.' },
            { term: 'End of Year Banquet', def: 'A celebratory event at the end of the season recognizing riders, coaches, and volunteers. Awards are presented and the season is celebrated. It\'s a highlight of the year for the whole team community.' },
        ],
    },
];

export default function Glossary() {
    return (
        <div className="animate-fade-in">
            {/* Header */}
            <div style={{
                background: 'linear-gradient(135deg, rgb(var(--color-primary)), rgb(var(--color-primary-light)))',
                color: 'white',
                padding: 'var(--spacing-xl) 0',
            }}>
                <div className="container">
                    <p style={{ fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.75, marginBottom: '0.5rem' }}>Reference Guide</p>
                    <h1 style={{ marginBottom: '0.75rem' }}>MTB Glossary</h1>
                    <p style={{ opacity: 0.9, fontSize: '1.1rem', maxWidth: '640px', lineHeight: 1.7 }}>
                        The Lehi MTB Bible — everything you need to know about high school mountain bike racing with the Lehi team. New to the sport? Start here.
                    </p>
                </div>
            </div>

            <div className="container" style={{ padding: 'var(--spacing-xl) 0' }}>

                {/* Who are we */}
                <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)', borderLeft: '4px solid rgb(var(--color-primary))' }}>
                    <h2 style={{ marginBottom: '0.75rem' }}>Who Are We?</h2>
                    <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                        We are a non-profit, volunteer-run organization that provides a safe and fun environment for high school athletes to ride and race mountain bikes. Our coaches are not paid — they do it for the love of the sport and the kids.
                    </p>
                    <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link href="/join" className="btn-primary" style={{ fontSize: '0.875rem' }}>Register Now</Link>
                        <Link href="/coaches" className="btn-silver" style={{ fontSize: '0.875rem' }}>Meet the Coaches</Link>
                    </div>
                </div>

                {/* Term sections */}
                {sections.map((section) => (
                    <div key={section.title} style={{ marginBottom: 'var(--spacing-xl)' }}>
                        <h2 style={{ marginBottom: 'var(--spacing-md)', paddingBottom: '0.5rem', borderBottom: `2px solid ${section.accent}` }}>
                            {section.title}
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                            {section.terms.map((item) => (
                                <div key={item.term} className="glass-panel" style={{ padding: 'var(--spacing-md)', borderLeft: `3px solid ${section.accent}` }}>
                                    <p style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.4rem', color: section.accent }}>{item.term}</p>
                                    <p className="text-muted" style={{ lineHeight: 1.75, fontSize: '0.95rem' }}>{item.def}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Bottom CTA */}
                <div style={{ textAlign: 'center', padding: 'var(--spacing-lg)', background: 'rgba(87,43,158,0.05)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                    <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Ready to ride?</p>
                    <p className="text-muted" style={{ marginBottom: '1.25rem', fontSize: '0.95rem' }}>Check out our full <Link href="/join" style={{ color: 'rgb(var(--color-primary))', fontWeight: 600 }}>Join & FAQ page</Link> or reach out to a coach.</p>
                    <Link href="/join" className="btn-primary" style={{ padding: '0.75rem 2rem' }}>Join the Team</Link>
                </div>
            </div>
        </div>
    );
}
