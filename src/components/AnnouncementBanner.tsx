'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// We define the banner content and expiration date here
const BANNER_CONFIG = {
    text: "🎉 Thanks for a great 2026 season! 2027 season info will be coming out soon.",
    expirationDate: new Date('2027-04-01T00:00:00'), // Active through spring 2027
    linkHref: '/register',
    linkLabel: '2027 Updates →'
};

export default function AnnouncementBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only run on the client to avoid hydration mismatch with Dates
        const now = new Date();
        if (now < BANNER_CONFIG.expirationDate) {
            setIsVisible(true);
        }
    }, []);

    if (!isVisible) return null;

    return (
        <div style={{
            backgroundColor: 'rgb(var(--color-tertiary))',
            color: 'rgba(12, 8, 24, 0.9)',
            padding: '0.5rem 1rem',
            textAlign: 'center',
            fontWeight: '700',
            fontSize: '0.875rem',
            zIndex: 100,
            position: 'relative'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <span>{BANNER_CONFIG.text}</span>
                <Link href={BANNER_CONFIG.linkHref} style={{
                    color: 'rgba(12, 8, 24, 0.9)',
                    textDecoration: 'underline',
                    fontWeight: 800,
                    whiteSpace: 'nowrap'
                }}>{BANNER_CONFIG.linkLabel}</Link>
            </div>
        </div>
    );
}
