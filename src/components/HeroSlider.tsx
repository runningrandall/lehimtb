'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSlider() {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);

    const slideCount = 2;
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

            {/* ── Slide 2 shared dark BG ── */}
            <div style={{ position: 'absolute', inset: 0, opacity: active === 1 ? 1 : 0, transition: 'opacity 0.8s ease', zIndex: 0, background: 'rgba(12,8,24,0.85)' }}>
                <Image src="/images/state_tent_dinner.jpg" alt="Race Day Staging" fill style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.4, mixBlendMode: 'luminosity' }} />
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
                        <Link href="/register" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>Registration Info</Link>
                        <Link href="/join" className="btn-silver" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>Parent Info &amp; FAQ</Link>
                    </div>
                </div>

                {/* Slide 2: Upcoming Races & Race Day Central */}
                <div style={{ opacity: active === 1 ? 1 : 0, transform: active === 1 ? 'translateY(0)' : 'translateY(12px)', transition: 'opacity 0.8s ease, transform 0.8s ease', position: active === 1 ? 'relative' : 'absolute', top: 0, left: 0, right: 0, pointerEvents: active === 1 ? 'auto' : 'none' }}>
                    <p style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.8, marginBottom: '0.75rem', color: '#faff38' }}>Upcoming Races · 2026 Season</p>
                    <h1 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', marginBottom: '1rem', lineHeight: 1.1 }}>
                        Race Day Central —<br />
                        <span style={{ background: 'linear-gradient(90deg, #a855f7 0%, #faff38 60%, #c084fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Wave Schedules &amp; Info</span>
                    </h1>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
                        {[
                            { color: 'rgb(var(--color-primary))', text: 'Full Wave Schedule — HS & Jr Devo Categories' },
                            { color: 'rgb(var(--color-tertiary))', text: 'What to Expect: Staging, Pit Zone & Feed Rules' },
                            { color: 'rgba(255,255,255,0.7)', text: 'Arrival Times, Race Plate Setup & Spectator Info' },
                        ].map(row => (
                            <div key={row.text} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <span style={{ width: '4px', height: '1.2rem', borderRadius: '2px', background: row.color, flexShrink: 0 }} />
                                <span style={{ fontSize: '1.1rem', opacity: 0.95, fontWeight: 500 }}>{row.text}</span>
                            </div>
                        ))}
                    </div>
                    <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
                        <Link href="/race-day" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>Race Day Guide →</Link>
                        <Link href="/events" className="btn-silver" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>Race Schedule</Link>
                    </div>
                </div>

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
