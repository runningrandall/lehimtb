'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { isKitRevealed } from '@/lib/kitReveal';

const kitItems = [
    { name: 'Ion Jersey', label: 'Race Kit', img: 'https://voltcyclewear.com/cdn/shop/files/2026_Lehi_HS_Jersey_Front.png?v=1772236515' },
    { name: 'Shop Shirt', label: 'Casual Wear', img: 'https://voltcyclewear.com/cdn/shop/files/Lehi26RLShopshirtfront.png?v=1772651558' },
    { name: 'Force Vest', label: 'Training', img: 'https://voltcyclewear.com/cdn/shop/files/2026LehiHSVestFront.png?v=1772241888' },
    { name: 'Zip Up Hoodie', label: 'Fan Gear', img: 'https://voltcyclewear.com/cdn/shop/files/2026_Lehi_HS_Hoodie_Zip_Front.png?v=1772236852' },
];

export default function TeamStoreSection() {
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        setRevealed(isKitRevealed());
    }, []);

    if (!revealed) return null;

    return (
        <section id="store" style={{ padding: 'var(--spacing-xl) 0', background: 'linear-gradient(180deg, rgb(var(--surface-main)) 0%, rgba(87,43,158,0.06) 100%)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                    <p style={{ fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(var(--color-primary))', marginBottom: '0.5rem' }}>Team Gear</p>
                    <h2>Team Store (Closed)</h2>
                    <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        The official 2026 store is currently closed while orders are processed. The team store will reopen next year (2027)!
                    </p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)' }}>
                    {kitItems.map(item => (
                        <div key={item.name} className="glass-panel" style={{ overflow: 'hidden', borderTop: '3px solid rgb(var(--color-primary))' }}>
                            <div style={{ background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', aspectRatio: '1' }}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </div>
                            <div style={{ padding: '0.875rem 1rem' }}>
                                <p style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgb(var(--color-primary))', marginBottom: '0.2rem' }}>{item.label}</p>
                                <p style={{ fontWeight: 700, fontSize: '1rem', color: 'rgb(var(--text-main))' }}>{item.name}</p>
                                <p style={{ fontSize: '0.8rem', color: 'rgb(var(--text-muted))', fontWeight: 500, marginTop: '0.4rem' }}>Reopens 2027</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ textAlign: 'center' }}>
                    <Link href="/store" className="btn-primary" style={{ padding: '0.875rem 2rem', fontSize: '1rem' }}>
                        Store Status &amp; Updates →
                    </Link>
                </div>
            </div>
        </section>
    );
}
