import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Trails | Lehi MTB Hub',
    description: 'Explore the best mountain biking trails in and around Lehi.',
};

export default function Trails() {
    return (
        <div className="container animate-fade-in" style={{ padding: 'var(--spacing-xl) 0' }}>
            <h1 style={{ marginBottom: 'var(--spacing-lg)' }}>Local Trails</h1>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-md)' }}>
                <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <div style={{ position: 'relative', height: '300px', width: '100%' }}>
                        <Image src="/images/IMG_1324.jpg" alt="Trail View" fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: 'var(--spacing-md)' }}>
                        <h2>Eagle Crest</h2>
                        <div style={{ display: 'flex', gap: 'var(--spacing-xs)', marginBottom: 'var(--spacing-sm)' }}>
                            <span style={{ padding: '0.25rem 0.5rem', background: 'rgb(var(--color-primary))', color: 'white', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }}>Intermediate</span>
                            <span style={{ padding: '0.25rem 0.5rem', background: 'rgba(var(--text-muted), 0.2)', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }}>12 Miles</span>
                        </div>
                        <p className="text-muted">A beautiful rolling trail with great views of the valley. Perfect for intermediate riders looking to build endurance.</p>
                    </div>
                </div>

                <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <div style={{ position: 'relative', height: '300px', width: '100%' }}>
                        <Image src="/images/IMG_1912.JPG" alt="Trail View" fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: 'var(--spacing-md)' }}>
                        <h2>Moose Hollow Loop</h2>
                        <div style={{ display: 'flex', gap: 'var(--spacing-xs)', marginBottom: 'var(--spacing-sm)' }}>
                            <span style={{ padding: '0.25rem 0.5rem', background: 'var(--color-accent)', color: 'white', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }}>Advanced</span>
                            <span style={{ padding: '0.25rem 0.5rem', background: 'rgba(var(--text-muted), 0.2)', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }}>8 Miles</span>
                        </div>
                        <p className="text-muted">Technical climbs and fast, rocky descents. Not for the faint of heart, but incredibly rewarding.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
