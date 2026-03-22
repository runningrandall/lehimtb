import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
    title: 'Join & FAQ | Lehi MTB Hub',
    description: 'Everything you need to know about joining the Lehi Mountain Biking team.',
};

const faqs = [
    {
        q: 'Who can join the team?',
        a: 'Anyone in school (or home-schooled) that is in the 9th–12th grades, boy or girl, living in the Lehi High School boundaries. If you are a 7th or 8th grader, you join the Junior Development team (JD) which has 3 races. 9th–12th graders are on the High School team (HS) with 5 races. There is no bench — everyone rides every practice and every race.',
    },
    {
        q: 'When do sign-ups open?',
        a: 'Exact dates vary each year, but sign-ups are in late March or early April. There is a youth and parent kickoff meeting to answer general questions and complete registration.',
    },
    {
        q: 'What do I need to join?',
        a: 'An interest in riding a bike, having fun, and dedication to team practices. You will also need a bicycle and helmet. If you do not have means to get a bike, see the question below about scholarships — don\'t let finances stop you.',
    },
    {
        q: 'Where and when are practices?',
        a: 'Between April and May we hold about 8 practices focused on skills, nutrition, fun, and safety. From June 1–Oct 31 the team rides 2–3 times per week. Monday and Thursday evenings are 2 hours; Saturday morning practices can run 4–5 hours. We primarily ride Corner Canyon (Draper area), Herriman, and the Eagle Mountain race course, plus occasional Saturday rides to AF Canyon, Heber, Park City, etc.',
    },
    {
        q: 'Who supervises practices?',
        a: 'Head coaches and ride leaders are with the kids at all times. We generally have one adult leader for every 6–7 youth. Coaches are all trained in safety, skills, and wilderness first aid, including concussion protocols.',
    },
    {
        q: 'What does it cost?',
        a: 'Team Fees: $350 (includes team kit, skilled instruction, 1 practice/week thru May 31, then 2–3/week June 1–Nov 5, team registration fees, equipment and supplies, team banquet main course, race day food, and shop discounts). NICA & Utah League fees: $400/HS (covers 5 races, paid in PitZone). Total: approximately $750/HS, not including travel, bike, and gear.',
    },
    {
        q: 'Are there bike discounts or scholarships?',
        a: 'Yes! We have sponsorship from Trek Bike Shop in American Fork providing 20%+ off new bikes with a coach\'s signature. You can also find deals at ksl.com. The Utah League also offers scholarships and loaner bikes to students in need — applications are accepted July 15–August 6. Please don\'t let finances determine participation; contact a coach to see what can be arranged.',
    },
    {
        q: 'Can I reduce my team fees?',
        a: 'Yes! You can reduce team fees through sponsorship. For every $1 a student-athlete secures from a sponsor, they receive 20% off their team fees ($500 sponsorship = $100 off). A $1,500 total sponsorship effectively covers the full High School team fees. Sponsors receive logo placement on jerseys and banners, a team picture, year-end banquet invite, and more.',
    },
    {
        q: 'What are ride leaders and how do I become one?',
        a: 'A ride leader is a parent or volunteer who supports group rides. It requires about 60–75 minutes of online training and a $65 league registration. You do not need to be fast — just willing to learn and help the kids stay safe and have fun. We love having parents involved!',
    },
    {
        q: 'What volunteer commitments are required?',
        a: 'A parent must volunteer once with the league AND once with the team per season, per rider. Riders must also complete a minimum of 3 hours of trail building/maintenance in order to race. New riders must attend at least 2 skills training sessions.',
    },
    {
        q: 'Is mountain biking safe?',
        a: 'As with all activities there is always some risk of injury. All coaches are trained and certified to teach safe riding practices and are certified in first aid including concussion training. The league also provides secondary insurance in the event of an accident.',
    },
    {
        q: 'We\'re volunteers?',
        a: 'Yes — we are a 100% volunteer organization. Coaches do not get paid. They do it all for the love of the sport and the kids. Because of this, we need families to volunteer to help the team run smoothly.',
    },
];

export default function JoinAndFAQ() {
    return (
        <div className="container animate-fade-in" style={{ padding: 'var(--spacing-xl) 0' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                <h1>Join the Team</h1>
                <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto var(--spacing-sm) auto' }}>
                    Ready to ride? We welcome all skill levels living within the Lehi High School boundaries!
                </p>
                <Link href="https://registration.teamsnap.com/form/47629" target="_blank" className="btn-primary" style={{ padding: '0.75rem 2rem' }}>
                    Register Now (TeamSnap)
                </Link>
                <Link href="https://pitzone.nationalmtb.org/" target="_blank" className="btn-silver" style={{ padding: '0.6rem 1.5rem', marginTop: '0.75rem', fontSize: '0.9rem' }}>
                    NICA PitZone Registration →
                </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
                <div className="glass-panel" style={{ padding: 'var(--spacing-md)' }}>
                    <h3>Registration Checklist</h3>
                    <ol style={{ paddingLeft: '1.5rem', marginTop: 'var(--spacing-sm)', color: 'rgb(var(--text-muted))', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        <li>Attend the kickoff meeting to get questions answered.</li>
                        <li>Complete Team online registration by April 13 (<a href="https://registration.teamsnap.com/form/47629" target="_blank" style={{ color: 'rgb(var(--color-primary))', fontWeight: 600 }}>TeamSnap</a>).</li>
                        <li><a href="https://pitzone.nationalmtb.org/" target="_blank" style={{ color: 'rgb(var(--color-primary))', fontWeight: 600 }}>Register with the Utah NICA League PitZone</a> by April 13 and pay $400 league fee.</li>
                        <li>Accept TeamSnap invite and download the app.</li>
                        <li>Pay $350 Team Dues by April 13 via Venmo @lehimtb or check to Lehi MTB.</li>
                        <li>Get fitted for a team kit (jersey, shorts, etc.).</li>
                        <li>Order kit through the <a href="https://voltcyclewear.com/pages/lehi-high-school" target="_blank" style={{ color: 'rgb(var(--color-primary))', fontWeight: 600 }}>Team Store</a>.</li>
                        <li>Sponsorship money &amp; logos due by April 15.</li>
                    </ol>
                </div>

                <div className="glass-panel" style={{ padding: 'var(--spacing-md)' }}>
                    <h3>Parent Responsibilities</h3>
                    <ul style={{ paddingLeft: '1.5rem', marginTop: 'var(--spacing-sm)', color: 'rgb(var(--text-muted))', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        <li>Provide transportation to and from practices (or carpool).</li>
                        <li>Volunteer once with the league AND once with the team per season, per rider.</li>
                        <li>Rider must complete a minimum of 3 hours of trail building/maintenance to race.</li>
                        <li>New riders must attend at minimum 2 Skills training sessions.</li>
                        <li>Communicate attendance if rider must miss practice.</li>
                        <li>Support a positive and fun environment!</li>
                    </ul>
                </div>
            </div>

            <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>Frequently Asked Questions</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                {faqs.map((faq) => (
                    <div key={faq.q} className="glass-panel" style={{ padding: 'var(--spacing-md)' }}>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{faq.q}</h3>
                        <p className="text-muted" style={{ lineHeight: 1.7 }}>{faq.a}</p>
                    </div>
                ))}
            </div>

            <div className="glass-panel" style={{ padding: 'var(--spacing-xl)', marginTop: 'var(--spacing-xl)', borderTop: '4px solid rgb(var(--color-primary))' }}>
                <h2 style={{ marginBottom: '0.5rem' }}>Still have questions?</h2>
                <p className="text-muted" style={{ marginBottom: 'var(--spacing-lg)', fontSize: '0.95rem' }}>
                    Send us a message and a coach will get back to you. You can also check out the <Link href="/glossary" style={{ color: 'rgb(var(--color-primary))', fontWeight: 600 }}>MTB Glossary</Link> for definitions of common terms.
                </p>
                <ContactForm />
            </div>
        </div>
    );
}
