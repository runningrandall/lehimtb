import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Sponsors | Lehi MTB Hub',
    description: 'Thank you to the generous sponsors of the Lehi Mountain Bike Team. Learn how to become a partner for 2026.',
};

const sponsorImages = [
    "3561994_orig.jpg",
    "9845998_orig.jpg",
    "champion-electric-logo-cmyk-page-001_orig.jpg",
    "e-adams-media_orig.png",
    "geneva_orig.jpg",
    "jbp-vertical-cmyk_1_orig.jpg",
    "jones-excavating_1_orig.png",
    "ogden-flooring-design_orig.png",
    "robinson-home-builders_orig.jpg",
    "ryanbottdds-logo_orig.png",
    "s-l_1_orig.png",
    "salisbury-plumbing_orig.png",
    "schedmd_orig.jpg",
    "servpro-of-provo-logo_orig.png",
    "sunroc_orig.jpg",
    "thurgood-construction-services_orig.jpg",
    "tiho-designs_orig.png",
    "trek-logo-location-american-fork-red_orig.png",
    "wwclyde_orig.jpg"
];

const tiers = [
    {
        level: 'Large Corporate Sponsor',
        amount: '$5,000+',
        color: 'rgb(var(--color-tertiary))',
        textDark: true,
        perks: [
            'Prime placement of large logo on team jersey',
            'Logo on sponsor banner, website, etc.',
            'Recognition at team events',
            'Team poster & Pool Party invitation',
            'Design input on jerseys for large, multi-year sponsors',
            'Option: Team jersey or (3) Team Hats & Socks',
        ],
    },
    {
        level: 'Corporate Sponsor',
        amount: '$2,500',
        color: 'rgb(var(--color-primary))',
        perks: [
            'Placement of large logo on team jersey',
            'Logo on sponsor banner, website, etc.',
            'Team poster & Pool Party invitation',
            'Option: Team jersey or (2) Team Hat & Socks',
        ],
    },
    {
        level: 'Platinum Sponsor',
        amount: '$1,000',
        color: 'rgb(var(--color-primary-light))',
        perks: [
            'Placement of large logo on team jersey',
            'Logo on sponsor banner, website, etc.',
            'Team poster & Pool Party invitation',
            'Option: Team jersey or Team Hat & Socks',
        ],
    },
    {
        level: 'Purple Sponsor',
        amount: '$750',
        color: 'rgb(192, 150, 240)',
        perks: [
            'Placement of company logo on team jersey',
            'Logo on sponsor banner, website',
            'Team photo & Pool Party invitation',
        ],
    },
    {
        level: 'Pioneer Sponsor',
        amount: 'Below $750',
        color: 'rgb(var(--color-silver))',
        textDark: true,
        perks: [
            'Logo on sponsor banner, website',
            'Team photo & Pool Party invitation',
        ],
    },
];

export default function Sponsors() {
    return (
        <div className="animate-fade-in">

            {/* Hero */}
            <div style={{
                background: 'linear-gradient(135deg, rgb(var(--color-primary)), rgb(var(--color-primary-light)))',
                color: 'white',
                padding: 'var(--spacing-xl) 0',
                textAlign: 'center',
            }}>
                <div className="container">
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>Become a 2026 Team Partner</h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 2rem auto', opacity: 0.9 }}>
                        The Lehi High School Mountain Bike team is one of the top high school mountain biking clubs in Utah.
                        Every penny of sponsorship goes directly to the team.
                    </p>
                    <Link href="#become-a-sponsor" className="btn-tertiary" style={{ fontSize: '1.1rem', padding: '0.9rem 2rem' }}>
                        Sponsor the Team →
                    </Link>
                </div>
            </div>

            <div className="container" style={{ padding: 'var(--spacing-xl) 0' }}>

                {/* About Section */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--spacing-xl)', marginBottom: 'var(--spacing-xl)', alignItems: 'start' }}>

                    <div>
                        <h2 style={{ marginBottom: '1rem' }}>About the Team</h2>
                        <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                            Our focus is to instill a love of mountain biking and wellness in our youth. Our teams are all-inclusive
                            and provide a place for youth to find friendship, self-confidence, and learn dedication.
                        </p>
                        <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                            We are a volunteer organization without school support. To successfully run a team, we need financial support.
                            We want to promote your business as our Mountain Bike Team Partner for 2026!
                        </p>
                        <p className="text-muted" style={{ lineHeight: '1.8' }}>
                            Donations are welcome in <strong>cash or kind goods</strong> (sponsored race lunches, tents, equipment, etc.)
                        </p>

                        {/* Team Stats */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
                            {[
                                ['105+', 'Riders'],
                                ['Top Team', 'in Utah'],
                                ['Largest', 'NICA League in US'],
                                ['7,300+', 'NICA Athletes'],
                            ].map(([stat, label]) => (
                                <div key={label} className="glass-panel" style={{ padding: '1rem', textAlign: 'center' }}>
                                    <p style={{ fontWeight: 800, fontSize: '1.5rem', color: 'rgb(var(--color-primary))' }}>{stat}</p>
                                    <p className="text-muted" style={{ fontSize: '0.8rem' }}>{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 style={{ marginBottom: '1rem' }}>5 Core Values</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {['Strong Body', 'Strong Mind', 'Strong Character', 'All Inclusive', 'Total Equality'].map((v, i) => (
                                <div key={v} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', background: 'rgba(87,43,158,0.06)', borderLeft: '3px solid rgb(var(--color-primary))' }}>
                                    <span style={{ fontWeight: 700, color: 'rgb(var(--color-primary))', fontSize: '1.1rem', minWidth: '1.5rem' }}>{i + 1}</span>
                                    <span style={{ fontWeight: 600 }}>{v}</span>
                                </div>
                            ))}
                        </div>

                        <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>2026 Race Schedule</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {[
                                ['Aug 22', 'Beaver Mountain'],
                                ['Sept 5', 'Richfield'],
                                ['Sept 19', 'Panguitch'],
                                ['Sept 26', 'Region: Herriman'],
                                ['Oct TBD', 'State Championships'],
                            ].map(([date, event]) => (
                                <div key={event} style={{ display: 'flex', gap: '1rem', padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}>
                                    <span style={{ fontWeight: 700, color: 'rgb(var(--color-primary))', minWidth: '80px' }}>{date}</span>
                                    <span className="text-muted">{event}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sponsorship Tiers */}
                <div id="become-a-sponsor" style={{ marginBottom: 'var(--spacing-xl)', scrollMarginTop: '80px' }}>
                    <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                        <h2>2026 Sponsorship Levels</h2>
                        <p className="text-muted">
                            ⭐ A donation of <strong>$1,500 or more waives team fees for one rider!</strong>
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-md)' }}>
                        {tiers.map((tier) => (
                            <div key={tier.level} className="glass-panel" style={{ padding: 'var(--spacing-md)', borderTop: `4px solid ${tier.color}`, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ background: tier.color, color: tier.textDark ? 'rgba(12,8,24,0.9)' : 'white', padding: '0.5rem 1rem', borderRadius: 'var(--radius-sm)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '1rem', textAlign: 'center' }}>
                                    {tier.amount}
                                </div>
                                <h3 style={{ marginBottom: '1rem' }}>{tier.level}</h3>
                                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                                    {tier.perks.map((perk) => (
                                        <li key={perk} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.9rem' }}>
                                            <span style={{ color: tier.color === 'rgb(192, 150, 240)' ? 'rgb(var(--color-primary))' : tier.color === 'rgb(var(--color-silver))' ? 'rgb(var(--color-primary))' : tier.color, fontWeight: 700, marginTop: '2px', flexShrink: 0 }}>✓</span>
                                            <span className="text-muted">{perk}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact / How to Sponsor */}
                <div className="glass-panel" style={{ padding: 'var(--spacing-xl)', marginBottom: 'var(--spacing-xl)', textAlign: 'center', borderTop: '4px solid rgb(var(--color-tertiary))' }}>
                    <h2 style={{ marginBottom: '0.5rem' }}>Ready to Partner With Us?</h2>
                    <p className="text-muted" style={{ marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        Email your logo in vector format (.ai files preferred) along with your sponsorship level to one of our coaches:
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                        <div>
                            <p style={{ fontWeight: 700 }}>Steve Stringham — Co-Head Coach</p>
                            <p className="text-muted">801-400-7886</p>
                            <a href="mailto:spinordie@gmail.com" style={{ color: 'rgb(var(--color-primary))', fontWeight: 600 }}>spinordie@gmail.com</a>
                        </div>
                        <div>
                            <p style={{ fontWeight: 700 }}>Randall Adams — Co-Head Coach</p>
                            <p className="text-muted">801-837-2016</p>
                            <a href="mailto:rjadams96@gmail.com" style={{ color: 'rgb(var(--color-primary))', fontWeight: 600 }}>rjadams96@gmail.com</a>
                        </div>
                    </div>
                    <div style={{ marginTop: '2rem' }}>
                        <Link
                            href="/2026 Lehi Sponsorship Letter.pdf"
                            target="_blank"
                            className="btn-primary"
                            style={{ marginRight: '1rem' }}
                        >
                            Download Sponsorship Letter (PDF)
                        </Link>
                    </div>
                </div>

                {/* Current Sponsors Grid */}
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                    <h2>Our 2025 Sponsors</h2>
                    <p className="text-muted">We are incredibly grateful for the support of our local community!</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
                    {sponsorImages.map((src, idx) => (
                        <div key={idx} className="glass-panel" style={{ padding: 'var(--spacing-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '160px' }}>
                            <Image src={`/images/sponsors/${src}`} alt={`Sponsor ${idx}`} width={180} height={100} style={{ objectFit: 'contain', maxHeight: '100px' }} />
                        </div>
                    ))}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '160px', border: '2px dashed rgb(var(--color-primary))' }}>
                        <h3 style={{ color: 'rgb(var(--color-primary))', textAlign: 'center', marginBottom: '0.5rem' }}>Your Business Here!</h3>
                        <p className="text-muted" style={{ textAlign: 'center', fontSize: '0.875rem' }}>Contact a coach to become a sponsor.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
