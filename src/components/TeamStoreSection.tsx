'use client';

import { useEffect, useState } from 'react';
import { isKitRevealed } from '@/lib/kitReveal';

const kitItems = [
    { name: 'Ion Jersey', label: 'Race Kit', img: 'https://voltcyclewear.com/cdn/shop/files/2026_Lehi_HS_Jersey_Front.png?v=1772236515', href: 'https://voltcyclewear.com/collections/lehi-high-school-2026/products/ion-jersey-lehi-high-school-2026?store=Lehi+High+School&page_handle=lehi-high-school' },
    { name: 'Shop Shirt', label: 'Casual Wear', img: 'https://voltcyclewear.com/cdn/shop/files/Lehi26RLShopshirtfront.png?v=1772651558', href: 'https://voltcyclewear.com/collections/lehi-high-school-2026/products/shop-shirt-ride-leader?store=Lehi+High+School&page_handle=lehi-high-school' },
    { name: 'Force Vest', label: 'Training', img: 'https://voltcyclewear.com/cdn/shop/files/2026LehiHSVestFront.png?v=1772241888', href: 'https://voltcyclewear.com/collections/lehi-high-school-2026/products/force-vest-26?store=Lehi+High+School&page_handle=lehi-high-school' },
    { name: 'Zip Up Hoodie', label: 'Fan Gear', img: 'https://voltcyclewear.com/cdn/shop/files/2026_Lehi_HS_Hoodie_Zip_Front.png?v=1772236852', href: 'https://voltcyclewear.com/collections/lehi-high-school-2026/products/zip-up-hoodie-lehi-high-school-2026?store=Lehi+High+School&page_handle=lehi-high-school' },
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
                    <p style={{ fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(var(--color-primary))', marginBottom: '0.5rem' }}>2026 Season</p>
                    <h2>Team Store</h2>
                    <p className="text-muted">Rep the squad. Gear up with the official 2026 Lehi MTB kit — designed by Volt Cyclewear.</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)' }}>
                    {kitItems.map(item => (
                        <a key={item.name} href={item.href} target="_blank" style={{ textDecoration: 'none', display: 'block' }}>
                            <div className="glass-panel" style={{ overflow: 'hidden', borderTop: '3px solid rgb(var(--color-primary))' }}>
                                <div style={{ background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', aspectRatio: '1' }}>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                                <div style={{ padding: '0.875rem 1rem' }}>
                                    <p style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgb(var(--color-primary))', marginBottom: '0.2rem' }}>{item.label}</p>
                                    <p style={{ fontWeight: 700, fontSize: '1rem', color: 'rgb(var(--text-main))' }}>{item.name}</p>
                                    <p style={{ fontSize: '0.8rem', color: 'rgb(var(--color-primary))', fontWeight: 600, marginTop: '0.4rem' }}>Shop →</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                <div style={{ textAlign: 'center' }}>
                    <a href="https://voltcyclewear.com/pages/lehi-high-school" target="_blank" className="btn-primary" style={{ padding: '0.875rem 2rem', fontSize: '1rem' }}>
                        View All Items in the Store
                    </a>
                </div>
            </div>
        </section>
    );
}
