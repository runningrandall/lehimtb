import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Blog | Lehi MTB Hub',
    description: 'The latest news, race reports, and updates from the Lehi Mountain Bike team.',
};

export default function Blog() {
    return (
        <div className="container animate-fade-in" style={{ padding: 'var(--spacing-xl) 0' }}>
            <h1 style={{ marginBottom: 'var(--spacing-md)' }}>Team Updates & News</h1>
            <p className="text-muted" style={{ marginBottom: 'var(--spacing-xl)', fontSize: '1.125rem' }}>
                Stay up to date with the latest race reports, team announcements, and trail stories.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
                {/* Example Blog Post */}
                <article className="glass-panel" style={{ padding: 'var(--spacing-lg)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                        <h2 style={{ margin: 0, color: 'rgb(var(--color-primary))' }}>2026 Season Kickoff Meeting Announced</h2>
                        <span className="text-muted" style={{ fontSize: '0.875rem', fontWeight: '500', backgroundColor: 'rgb(var(--surface-dark))', padding: '0.25rem 0.5rem', borderRadius: 'var(--radius-sm)' }}>March 1, 2026</span>
                    </div>
                    <p className="text-muted" style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                        It's that time of year again! We are gearing up for the 2026 NICA season and couldn't be more excited.
                        Our kickoff meeting will be held on March 25th in the High School auditorium. Returning riders meet at 6:15 PM, and new riders meet at 7:15 PM.
                        We will cover registration, essential gear, practice schedules, and introduce the coaching staff. See you there!
                    </p>
                    <Link href="#" className="btn-accent" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Read More</Link>
                </article>

                {/* Example Blog Post */}
                <article className="glass-panel" style={{ padding: 'var(--spacing-lg)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                        <h2 style={{ margin: 0 }}>Trail Maintenance Day Success</h2>
                        <span className="text-muted" style={{ fontSize: '0.875rem', fontWeight: '500', backgroundColor: 'rgb(var(--surface-dark))', padding: '0.25rem 0.5rem', borderRadius: 'var(--radius-sm)' }}>October 15, 2025</span>
                    </div>
                    <p className="text-muted" style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                        A huge thank you to all the student-athletes, parents, and coaches who came out to Eagle Mountain for our fall trail maintenance day.
                        We successfully repaired weather ruts on over 3 miles of singletrack and built a new rock drain to prevent future erosion.
                        Stewardship is a core pillar of our team, and you all proved why!
                    </p>
                    <Link href="#" className="btn-accent" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Read More</Link>
                </article>
            </div>
        </div>
    );
}
