import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Join & FAQ | Lehi MTB Hub',
    description: 'Everything you need to know about joining the Lehi Mountain Biking team.',
};

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
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
                <div className="glass-panel" style={{ padding: 'var(--spacing-md)' }}>
                    <h3>Registration Checklist</h3>
                    <ol style={{ paddingLeft: '1.5rem', marginTop: 'var(--spacing-sm)', color: 'rgb(var(--text-muted))' }}>
                        <li>Complete Team online registration (TeamSnap).</li>
                        <li>Register with the Utah NICA League Pitzone.</li>
                        <li>Pay League Fee ($390/HS) through Pitzone.</li>
                        <li>Pay Team Dues ($350) via Venmo @lehimtb or check.</li>
                        <li>Get fitted for a team kit & order through the Team Store.</li>
                        <li>Submit any sponsorship money & logos to lower team fees!</li>
                    </ol>
                </div>

                <div className="glass-panel" style={{ padding: 'var(--spacing-md)' }}>
                    <h3>Parent Responsibilities</h3>
                    <ul style={{ paddingLeft: '1.5rem', marginTop: 'var(--spacing-sm)', color: 'rgb(var(--text-muted))' }}>
                        <li>Provide transportation to and from practices.</li>
                        <li>Volunteer 1x with the league AND 1x with the team per season.</li>
                        <li>Rider must complete 3 hours of trail building/maintenance to race.</li>
                        <li>Communicate attendance if rider must miss practice.</li>
                        <li>Support a positive and fun environment!</li>
                    </ul>
                </div>
            </div>

            <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>Frequently Asked Questions</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                <div className="glass-panel" style={{ padding: 'var(--spacing-md)' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Who can join the team?</h3>
                    <p className="text-muted">Anyone in school (or home-schooled) in the 9th-12th grades living in the Lehi High School boundaries can join the high school (HS) team. 7th or 8th graders join the Junior Development (JD) team. There is no bench, everyone rides every practice and every race.</p>
                </div>

                <div className="glass-panel" style={{ padding: 'var(--spacing-md)' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>When and where are practices?</h3>
                    <p className="text-muted">Between April and May, we focus on skills and safety. From June 1-Oct 31, we hold 2-3 practices a week. Weekday practices are typically 2 hours, and Saturday morning practices can go 4-5 hours. We ride primarily in Corner Canyon, Herriman, and Eagle Mountain.</p>
                </div>

                <div className="glass-panel" style={{ padding: 'var(--spacing-md)' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Are there bike discounts or scholarships?</h3>
                    <p className="text-muted">Yes! We have sponsorship from the Trek Bike shop in American Fork providing 20%+ off new bikes. Also, the Utah League offers scholarships and "loaner" bikes to students in need. Please don't let finances limit your participation; contact a coach for arrangements.</p>
                </div>

                <div className="glass-panel" style={{ padding: 'var(--spacing-md)' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Can I lower my team fees?</h3>
                    <p className="text-muted">Yes. You can reduce team fees by securing sponsorships! For every $1 a student-athlete secures, they receive 20% off their team fees. They also get company logo placement on jerseys and banners. A $1500 sponsorship essentially refunds the High School team fees.</p>
                </div>
            </div>
        </div>
    );
}
