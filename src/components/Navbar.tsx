'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navGroups = [
    {
        label: 'Team',
        links: [
            { href: '/', label: 'Home' },
            { href: '/join', label: 'Join / FAQ' },
            { href: '/glossary', label: 'MTB Glossary' },
            { href: '/coaches', label: 'Coaches' },
            { href: '/kickoff', label: 'Kickoff Meeting' },
            { href: '/sponsors', label: 'Sponsors' },
            { href: 'https://voltcyclewear.com/pages/lehi-high-school', label: 'Team Store', external: true },
        ]
    },
    {
        label: 'Events',
        links: [
            { href: '/events', label: 'Race Schedule' },
            { href: '/gallery', label: 'Gallery' },
            { href: '/blog', label: 'Blog & News' },
        ]
    },
    {
        label: 'Training',
        links: [
            { href: '/training', label: 'Training Plans' },
            { href: '/join#practices', label: 'Practices' },
            { href: '/join#faq', label: 'FAQs' },
        ]
    },
    {
        label: 'More',
        links: [
            { href: '/brand', label: 'Brand Book' },
        ]
    }
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openGroup, setOpenGroup] = useState<string | null>(null);

    const toggleGroup = (label: string) => {
        setOpenGroup(prev => prev === label ? null : label);
    };

    return (
        <header className="site-header">
            <div className="container nav-container">

                {/* Brand */}
                <Link href="/" className="brand" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Image src="/images/lehi-mtb-logo.png" alt="Lehi MTB Logo" width={40} height={40} style={{ objectFit: 'contain' }} />
                    <span style={{
                        fontFamily: 'var(--font-brand)',
                        fontStyle: 'italic',
                        fontWeight: 800,
                        fontSize: '1.75rem',
                        letterSpacing: '-0.01em',
                        textTransform: 'uppercase',
                        color: 'rgb(var(--color-primary))',
                        textShadow: '1px 1px 0 rgba(192,196,210,0.7), 2px 2px 0 rgba(140,144,162,0.4)',
                    }}>Lehi MTB</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <ul className="nav-links" style={{ alignItems: 'center', fontSize: '0.9rem' }}>
                        {navGroups.map((group) => (
                            <li key={group.label} className="nav-group" style={{ position: 'relative' }}>
                                <button
                                    className="nav-link nav-group-btn"
                                    onClick={() => toggleGroup(group.label)}
                                    aria-expanded={openGroup === group.label}
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', padding: 0 }}
                                >
                                    {group.label}
                                    <span style={{ fontSize: '0.6rem', transition: 'transform 200ms', transform: openGroup === group.label ? 'rotate(180deg)' : 'none' }}>▼</span>
                                </button>

                                {openGroup === group.label && (
                                    <ul style={{
                                        position: 'absolute',
                                        top: 'calc(100% + 0.5rem)',
                                        left: 0,
                                        backgroundColor: 'rgb(var(--surface-main))',
                                        boxShadow: 'var(--shadow-lg)',
                                        borderRadius: 'var(--radius-md)',
                                        border: '1px solid var(--border-color)',
                                        padding: '0.5rem',
                                        listStyle: 'none',
                                        minWidth: '200px',
                                        zIndex: 200,
                                    }}>
                                        {group.links.map((link) => (
                                            <li key={link.href}>
                                                <Link
                                                    href={link.href}
                                                    target={link.external ? '_blank' : undefined}
                                                    className="nav-link"
                                                    onClick={() => setOpenGroup(null)}
                                                    style={{ display: 'block', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', whiteSpace: 'nowrap' }}
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                        <li>
                            <Link href="/sponsors" className="nav-link" style={{ fontWeight: 600 }}>Sponsors</Link>
                        </li>
                        <li>
                            <Link href="/gallery" className="nav-link" style={{ fontWeight: 600 }}>Gallery</Link>
                        </li>
                        <li>
                            <Link
                                href="https://registration.teamsnap.com/form/47629"
                                target="_blank"
                                className="btn-primary"
                                style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
                            >
                                Register Now
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    className="hamburger-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '0.5rem',
                        flexDirection: 'column',
                        gap: '5px',
                    }}
                >
                    <span style={{ display: 'block', width: '24px', height: '2px', backgroundColor: 'rgb(var(--text-main))', transition: 'all 200ms', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }}></span>
                    <span style={{ display: 'block', width: '24px', height: '2px', backgroundColor: 'rgb(var(--text-main))', opacity: menuOpen ? 0 : 1, transition: 'opacity 200ms' }}></span>
                    <span style={{ display: 'block', width: '24px', height: '2px', backgroundColor: 'rgb(var(--text-main))', transition: 'all 200ms', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }}></span>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    backgroundColor: 'rgb(var(--surface-main))',
                    borderTop: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow-lg)',
                    zIndex: 200,
                    padding: '1rem',
                }}>
                    {navGroups.map((group) => (
                        <div key={group.label} style={{ marginBottom: '1rem' }}>
                            <p style={{ fontWeight: 700, color: 'rgb(var(--color-primary))', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                                {group.label}
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                {group.links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            target={link.external ? '_blank' : undefined}
                                            className="nav-link"
                                            onClick={() => setMenuOpen(false)}
                                            style={{ display: 'block', padding: '0.5rem 0' }}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <Link
                        href="https://registration.teamsnap.com/form/47629"
                        target="_blank"
                        className="btn-primary"
                        style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
                        onClick={() => setMenuOpen(false)}
                    >
                        Register Now
                    </Link>
                </div>
            )}
        </header>
    );
}
