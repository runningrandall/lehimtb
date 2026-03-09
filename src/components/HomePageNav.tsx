import Link from 'next/link';

const sections = [
    { href: '#why', label: 'Why Lehi MTB?' },
    { href: '#programs', label: 'Programs' },
    { href: '#benefits', label: 'Benefits' },
    { href: '#coaches', label: 'Coaches' },
    { href: '#ride-leaders', label: 'Ride Leaders' },
    { href: '#captains', label: 'Captains' },
    { href: '#sponsors', label: 'Sponsors' },
    { href: '#faq', label: 'Quick FAQs' },
];

export default function HomePageNav() {
    return (
        <nav className="section-nav" aria-label="On this page">
            {sections.map((s) => (
                <Link key={s.href} href={s.href} className="section-nav-link">
                    {s.label}
                </Link>
            ))}
        </nav>
    );
}
