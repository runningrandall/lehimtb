import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Brand Book | Lehi MTB Hub',
    description: 'Official brand guidelines for the Lehi Mountain Bike team.',
};

export default function BrandBook() {
    return (
        <div className="container animate-fade-in" style={{ padding: 'var(--spacing-xl) 0' }}>
            <h1 style={{ marginBottom: 'var(--spacing-xs)' }}>
                <span className="text-gradient">Lehi MTB Brand Book</span>
            </h1>
            <p className="text-muted" style={{ marginBottom: 'var(--spacing-xl)', fontSize: '1.125rem' }}>
                Official guidelines for our visual identity. Use these consistently across all team materials, social media, and communications.
            </p>

            {/* Logomark */}
            <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h2 style={{ marginBottom: 'var(--spacing-md)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Logo</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-md)' }}>
                    <div className="glass-panel" style={{ padding: 'var(--spacing-xl)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-lg)' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/lehi-mtb-logo.png" alt="Lehi MTB Logo" style={{ maxWidth: '200px', maxHeight: '200px', objectFit: 'contain' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem' }}>
                        <p className="text-muted">Always maintain clear space around the logomark. Never stretch, recolor, or add effects to the logo itself.</p>
                        <p className="text-muted">Use the full-color version on light backgrounds and the reverse version on dark or colored backgrounds.</p>
                    </div>
                </div>
            </section>

            {/* Typography */}
            <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h2 style={{ marginBottom: 'var(--spacing-md)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Typography</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-md)' }}>
                    <div className="glass-panel" style={{ padding: 'var(--spacing-md)' }}>
                        <p className="text-muted" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Display / Brand Headlines</p>
                        <p style={{ fontFamily: 'var(--font-brand)', fontStyle: 'italic', fontWeight: 800, fontSize: '3rem', color: 'rgb(var(--color-primary))', textShadow: '1px 1px 0 rgba(192,196,210,0.7)' }}>Barlow Condensed</p>
                        <p className="text-muted" style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Bold Italic. Used for the brand name, major headlines, and impact statements.</p>
                    </div>
                    <div className="glass-panel" style={{ padding: 'var(--spacing-md)' }}>
                        <p className="text-muted" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Body / UI</p>
                        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.5rem', fontWeight: 600 }}>Inter</p>
                        <p className="text-muted" style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Used for body text, navigation, and UI elements. Clean and highly legible.</p>
                    </div>
                    <div className="glass-panel" style={{ padding: 'var(--spacing-md)' }}>
                        <p className="text-muted" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Subheadings / Sections</p>
                        <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700 }}>Outfit</p>
                        <p className="text-muted" style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Used for section headings and subheadings. Modern with a friendly geometric feel.</p>
                    </div>
                </div>
            </section>

            {/* Color Palette */}
            <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h2 style={{ marginBottom: 'var(--spacing-md)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Color Palette</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 'var(--spacing-sm)' }}>
                    <ColorSwatch name="Brand Purple" hex="#572b9e" rgb="87, 43, 158" description="Primary brand color. Use on headers, CTAs, and key UI elements." />
                    <ColorSwatch name="Deep Purple" hex="#421e7c" rgb="66, 30, 124" description="Hover/active state of primary. Slightly deeper." />
                    <ColorSwatch name="Light Purple" hex="#7846c8" rgb="120, 70, 200" description="Decorative accent, gradients, and highlights." />
                    <ColorSwatch name="Highlight Yellow" hex="#faff38" rgb="250, 255, 56" description="Sparingly for alerts, callouts, and special moments." dark />
                    <ColorSwatch name="Silver" hex="#c0c4d2" rgb="192, 196, 210" description="Neutral tone for borders, secondary text, and silver elements." dark />
                    <ColorSwatch name="Near-Black" hex="#0c0818" rgb="12, 8, 24" description="Body text and deep dark backgrounds." />
                </div>
            </section>

            {/* Buttons */}
            <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h2 style={{ marginBottom: 'var(--spacing-md)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Buttons & CTAs</h2>
                <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-md)', alignItems: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                        <button className="btn-primary">Primary</button>
                        <p className="text-muted" style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>Primary action</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <button className="btn-accent">Accent</button>
                        <p className="text-muted" style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>Secondary action</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <button className="btn-tertiary">Highlight</button>
                        <p className="text-muted" style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>Use sparingly!</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <button className="btn-silver">Silver</button>
                        <p className="text-muted" style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>Neutral/ghost</p>
                    </div>
                </div>
            </section>

            {/* Brand Values */}
            <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h2 style={{ marginBottom: 'var(--spacing-md)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Voice & Tone</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-md)' }}>
                    {[
                        { word: 'Inclusive', desc: 'We welcome riders of all ability levels.' },
                        { word: 'Energetic', desc: 'Bold, action-oriented, and forward-moving.' },
                        { word: 'Community-First', desc: 'We lift each other up on and off the trail.' },
                        { word: 'Authentic', desc: 'Real stories, real athletes, no corporate gloss.' },
                    ].map((v) => (
                        <div key={v.word} className="glass-panel" style={{ padding: 'var(--spacing-md)' }}>
                            <h3 style={{ color: 'rgb(var(--color-primary))', marginBottom: '0.5rem' }}>{v.word}</h3>
                            <p className="text-muted" style={{ fontSize: '0.9rem' }}>{v.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

function ColorSwatch({ name, hex, rgb, description, dark }: { name: string; hex: string; rgb: string; description: string; dark?: boolean }) {
    return (
        <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ backgroundColor: hex, height: '100px', display: 'flex', alignItems: 'flex-end', padding: '0.75rem' }}>
                <span style={{ color: dark ? '#0c0818' : '#fff', fontWeight: 700, fontSize: '0.875rem' }}>{hex}</span>
            </div>
            <div style={{ padding: '0.75rem', backgroundColor: 'rgb(var(--surface-main))', borderTop: '1px solid var(--border-color)' }}>
                <p style={{ fontWeight: 700, marginBottom: '0.25rem', fontSize: '0.9rem' }}>{name}</p>
                <p className="text-muted" style={{ fontSize: '0.75rem', marginBottom: '0.25rem' }}>rgb({rgb})</p>
                <p className="text-muted" style={{ fontSize: '0.75rem' }}>{description}</p>
            </div>
        </div>
    );
}
