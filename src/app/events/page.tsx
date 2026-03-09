import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Events & Races | Lehi MTB Hub',
    description: 'Join upcoming mountain biking events, races, and community rides.',
};

export default function Events() {
    return (
        <div className="container animate-fade-in" style={{ padding: 'var(--spacing-xl) 0' }}>
            <h1 style={{ marginBottom: 'var(--spacing-lg)' }}>2026 Race Schedule & Events</h1>

            <div className="glass-panel" style={{ padding: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-sm)' }}>
                    <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Race 1: Beaver Mountain</h2>
                    <span className="text-muted">Aug 22, 2026</span>
                </div>
                <p className="text-muted">Kicking off the season at Beaver Mountain!</p>
            </div>

            <div className="glass-panel" style={{ padding: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-sm)' }}>
                    <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Race 2: Richfield</h2>
                    <span className="text-muted">Sept 5, 2026</span>
                </div>
                <p className="text-muted">Heading down to Richfield for standard loop competition.</p>
            </div>

            <div className="glass-panel" style={{ padding: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-sm)' }}>
                    <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Race 3: Panguitch</h2>
                    <span className="text-muted">Sept 26, 2026</span>
                </div>
                <p className="text-muted">Scenic, beautiful, but a true test of stamina on the Panguitch trails.</p>
            </div>

            <div className="glass-panel" style={{ padding: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-sm)' }}>
                    <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Race 4: Herriman</h2>
                    <span className="text-muted">Oct 10, 2026</span>
                </div>
                <p className="text-muted">Close to home! The Herriman race tests cornering and speed.</p>
            </div>

            <div className="glass-panel" style={{ padding: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)', border: '2px solid rgb(var(--color-accent))' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-sm)' }}>
                    <h2 style={{ fontSize: '1.5rem', margin: 0, color: 'rgb(var(--color-accent))' }}>State Champs</h2>
                    <span className="text-muted">Oct 23-24, 2026</span>
                </div>
                <p className="text-muted">The season closer. Location is TBD, but get ready to bring the heat!</p>
            </div>
        </div>
    );
}
