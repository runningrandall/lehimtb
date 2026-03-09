import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'About Us | Lehi MTB Hub',
    description: 'Learn about the Lehi Mountain Biking community and our mission.',
};

export default function About() {
    return (
        <div className="container animate-fade-in" style={{ padding: 'var(--spacing-xl) 0' }}>
            <h1 style={{ marginBottom: 'var(--spacing-md)', textAlign: 'center' }}>About Lehi MTB</h1>

            <div style={{ position: 'relative', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: 'var(--spacing-lg)' }}>
                <Image src="/images/20210925_100358.jpg" alt="Lehi MTB Group" fill style={{ objectFit: 'cover' }} />
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.125rem', lineHeight: '1.8' }}>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>
                    Lehi MTB is a passionate community of cyclists dedicated to the sport of mountain biking. Our goal is to foster a safe, inclusive, and thrilling environment for riders of all skill levels.
                </p>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>
                    Established by local enthusiasts, we organize weekly rides, maintain the local trail network, and advocate for sustainable outdoor recreation spaces in Lehi and the surrounding areas.
                </p>
                <p>
                    Whether you're looking to shred challenging downhill tracks, enjoy a scenic cross-country loop, or just make some new friends who share your passion for the outdoors, Lehi MTB is the place for you.
                </p>
            </div>
        </div>
    );
}
