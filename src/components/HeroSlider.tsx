'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { isKitRevealed } from '@/lib/kitReveal';

const KIT_STORE = 'https://voltcyclewear.com/pages/lehi-high-school';

const kitItems = [
    {
        name: 'Ion Jersey',
        img: 'https://voltcyclewear.com/cdn/shop/files/2026_Lehi_HS_Jersey_Front.png?v=1772236515',
        href: 'https://voltcyclewear.com/collections/lehi-high-school-2026/products/ion-jersey-lehi-high-school-2026?store=Lehi+High+School&page_handle=lehi-high-school',
    },
    {
        name: 'Shop Shirt',
        img: 'https://voltcyclewear.com/cdn/shop/files/Lehi26RLShopshirtfront.png?v=1772651558',
        href: 'https://voltcyclewear.com/collections/lehi-high-school-2026/products/shop-shirt-ride-leader?store=Lehi+High+School&page_handle=lehi-high-school',
    },
    {
        name: 'Force Vest',
        img: 'https://voltcyclewear.com/cdn/shop/files/2026LehiHSVestFront.png?v=1772241888',
        href: 'https://voltcyclewear.com/collections/lehi-high-school-2026/products/force-vest-26?store=Lehi+High+School&page_handle=lehi-high-school',
    },
    {
        name: 'Zip Up Hoodie',
        img: 'https://voltcyclewear.com/cdn/shop/files/2026_Lehi_HS_Hoodie_Zip_Front.png?v=1772236852',
        href: 'https://voltcyclewear.com/collections/lehi-high-school-2026/products/zip-up-hoodie-lehi-high-school-2026?store=Lehi+High+School&page_handle=lehi-high-school',
    },
];

export default function HeroSlider() {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);
    const [kitRevealed, setKitRevealed] = useState(false);

    useEffect(() => {
        setKitRevealed(isKitRevealed());
    }, []);

    const slideCount = kitRevealed ? 3 : 2;
    const next = useCallback(() => setActive(a => (a + 1) % slideCount), [slideCount]);

    useEffect(() => {
        if (paused) return;
        const t = setInterval(next, 6000);
        return () => clearInterval(t);
    }, [paused, next, slideCount]);

    return (
        <section
            id="why"
            className="hero"
            style={{ position: 'relative', overflow: 'hidden', minHeight: '80vh', display: 'flex', alignItems: 'center', color: 'white' }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* ── Slide 1 BG: Team photo ── */}
            <div style={{ position: 'absolute', inset: 0, opacity: active === 0 ? 1 : 0, transition: 'opacity 0.8s ease', zIndex: 0 }}>
                <Image src="/images/LEHI MTB 2026 team-41.jpg" alt="Lehi MTB Team" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(12,8,24,0.92), rgba(87,43,158,0.35))' }} />
            </div>

            {/* ── Slide 2 & 3 shared dark BG ── */}
            <div style={{ position: 'absolute', inset: 0, opacity: active > 0 ? 1 : 0, transition: 'opacity 0.8s ease', zIndex: 0, background: 'rgba(12,8,24,0.7)' }}>
                <Image src="/images/state_tent_dinner.jpg" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.45, mixBlendMode: 'luminosity' }} />
            </div>

            {/* ── Content ── */}
            <div className="container" style={{ position: 'relative', zIndex: 1, padding: 'var(--spacing-xl) 0', width: '100%' }}>

                {/* Slide 1: Main hero */}
                <div style={{ opacity: active === 0 ? 1 : 0, transform: active === 0 ? 'translateY(0)' : 'translateY(12px)', transition: 'opacity 0.8s ease, transform 0.8s ease', position: active === 0 ? 'relative' : 'absolute', top: 0, left: 0, right: 0, pointerEvents: active === 0 ? 'auto' : 'none' }}>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', marginBottom: '1rem', lineHeight: 1.1 }}>
                        Friends. Fun. <br />
                        <span style={{ background: 'linear-gradient(90deg, #a855f7 0%, #faff38 45%, #c084fc 75%, #7c3aed 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Riding Together.</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '650px', marginBottom: '1.5rem', opacity: 0.9, lineHeight: 1.6 }}>
                        We build community through mountain biking — training hard, racing well, and creating lifelong friendships. Open to 9th–12th graders.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0', marginBottom: '2rem', opacity: 0.8 }}>
                        {['Strong Body', 'Strong Mind', 'Strong Character', 'All Inclusive', 'Total Equality'].map((v, i, arr) => (
                            <span key={v} style={{ fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.02em', color: 'white' }}>
                                {v}{i < arr.length - 1 && <span style={{ margin: '0 0.6rem', opacity: 0.4 }}>·</span>}
                            </span>
                        ))}
                    </div>
                    <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
                        <Link href="https://registration.teamsnap.com/form/47629" target="_blank" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>Join the Team</Link>
                        <Link href="/join" className="btn-silver" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>Parent Info &amp; FAQ</Link>
                    </div>
                </div>

                {/* Slide 2: Kickoff event */}
                <div style={{ opacity: active === 1 ? 1 : 0, transform: active === 1 ? 'translateY(0)' : 'translateY(12px)', transition: 'opacity 0.8s ease, transform 0.8s ease', position: active === 1 ? 'relative' : 'absolute', top: 0, left: 0, right: 0, pointerEvents: active === 1 ? 'auto' : 'none' }}>
                    <p style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.7, marginBottom: '0.75rem' }}>Coming Up · March 25, 2026</p>
                    <h1 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', marginBottom: '1rem', lineHeight: 1.1 }}>
                        2026 Season<br />
                        <span style={{ background: 'linear-gradient(90deg, #a855f7 0%, #faff38 60%, #c084fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Kickoff Meeting</span>
                    </h1>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
                        {[
                            { color: 'rgb(var(--color-primary))', text: '6:15 PM — Returning Riders' },
                            { color: 'rgb(var(--color-tertiary))', text: '7:15 PM — New Riders' },
                            { color: 'rgba(255,255,255,0.4)', text: 'Lehi High School Auditorium · 180 N 400 E' },
                        ].map(row => (
                            <div key={row.text} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <span style={{ width: '4px', height: '1.2rem', borderRadius: '2px', background: row.color, flexShrink: 0 }} />
                                <span style={{ fontSize: '1.1rem', opacity: 0.95, fontWeight: row.color === 'rgba(255,255,255,0.4)' ? 400 : 600 }}>{row.text}</span>
                            </div>
                        ))}
                    </div>
                    <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
                        <Link href="/kickoff" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>Full Details</Link>
                        <Link href="https://registration.teamsnap.com/form/47629" target="_blank" className="btn-silver" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>Register Now</Link>
                    </div>
                </div>

                {/* Slide 3: Kit Reveal — only after reveal date */}
                {kitRevealed && (
                    <div style={{ opacity: active === 2 ? 1 : 0, transform: active === 2 ? 'translateY(0)' : 'translateY(12px)', transition: 'opacity 0.8s ease, transform 0.8s ease', position: active === 2 ? 'relative' : 'absolute', top: 0, left: 0, right: 0, pointerEvents: active === 2 ? 'auto' : 'none' }}>
                        <p style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.7, marginBottom: '0.75rem' }}>2026 Season · Now Available</p>
                        <h1 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', marginBottom: '1.25rem', lineHeight: 1.1 }}>
                            Kit Reveal —<br />
                            <span style={{ background: 'linear-gradient(90deg, #a855f7 0%, #faff38 60%, #c084fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Shop Your Gear</span>
                        </h1>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem', marginBottom: '1.5rem', maxWidth: '520px' }}>
                            {kitItems.map(item => (
                                <a key={item.name} href={item.href} target="_blank" style={{ textDecoration: 'none', display: 'block' }}>
                                    <div style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s ease' }}
                                        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                                        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px' }} />
                                    </div>
                                    <p style={{ fontSize: '0.7rem', fontWeight: 600, textAlign: 'center', marginTop: '0.3rem', opacity: 0.85, textDecoration: 'none' }}>{item.name}</p>
                                </a>
                            ))}
                        </div>
                        <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
                            <a href={KIT_STORE} target="_blank" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>Shop the Store</a>
                        </div>
                    </div>
                )}
            </div>

            {/* ── Slide dots ── */}
            <div style={{ position: 'absolute', bottom: '1.5rem', left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: '0.5rem', zIndex: 2 }}>
                {Array.from({ length: slideCount }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => { setActive(i); setPaused(true); }}
                        aria-label={`Slide ${i + 1}`}
                        style={{ width: active === i ? '1.75rem' : '0.5rem', height: '0.5rem', borderRadius: '999px', border: 'none', cursor: 'pointer', background: active === i ? 'white' : 'rgba(255,255,255,0.4)', transition: 'all 0.3s ease', padding: 0 }}
                    />
                ))}
            </div>
        </section>
    );
}
