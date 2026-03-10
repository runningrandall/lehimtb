import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Coaches | Lehi MTB Hub',
    description: 'Meet the dedicated coaching staff of the Lehi Mountain Bike team.',
};

const coaches = [
    {
        name: 'Steve Stringham',
        role: 'Head Coach',
        program: 'Lehi High School MTB',
        phone: '801-400-7886',
        email: 'spinordie@gmail.com',
        photo: '/images/coaches/steve_stringham.jpg',
        bio: 'Steve is the heart of Lehi MTB. With years of riding and coaching under his belt, he genuinely cares about every single kid on this team — not just how fast they ride, but who they\'re becoming. If you ever have a question or concern, Steve\'s your guy.',
        accent: 'rgb(var(--color-primary))',
    },
    {
        name: 'Randall Adams',
        role: 'Co-Head Coach',
        program: 'Lehi High School MTB',
        phone: '801-837-2016',
        email: 'rjadams96@gmail.com',
        photo: '/images/coaches/randall_adams.jpg',
        bio: 'Randall keeps the wheels turning behind the scenes — everything from practice planning and training structure to making sure every rider has what they need to succeed. He loves this sport and loves this team.',
        accent: 'rgb(var(--color-primary))',
    },
    {
        name: 'Aaron Wilkinson',
        role: 'Assistant Coach',
        program: 'Lehi High School MTB',
        phone: '801-427-2998',
        email: 'aaron.a.wilkinson@gmail.com',
        photo: '/images/coaches/aaron_wilkonson.jpg',
        bio: 'Aaron brings great energy to every practice. He\'s out there in the dirt with the riders, helping them push past their limits while keeping things fun. Ask him anything — he gives great advice and never makes you feel dumb for asking.',
        accent: 'rgb(var(--color-primary-light))',
    },
    {
        name: 'Andre Borba',
        role: 'Assistant Coach',
        program: 'Lehi High School MTB',
        phone: '801-884-2288',
        email: 'andrefuscoborba@gmail.com',
        photo: '/images/coaches/andre_borba.jpg',
        bio: 'Andre is the fun engine of this team. Not only can he ride but he\'s the one dreaming up and running our special events — including the beloved family camp that brings riders and families together off the bike. Lehi MTB is a community, and Andre makes sure it feels like one.',
        accent: 'rgb(var(--color-primary-light))',
    },
    {
        name: 'Devin Howell',
        role: 'GRiT Coach',
        program: 'Girls Riding Together (GRiT)',
        phone: '435-881-4992',
        email: 'demmahowell99@gmail.com',
        photo: '/images/coaches/Devin_Howell.jpg',
        bio: 'Devin leads our GRiT program and is an absolute champion for girls in the sport. She creates a space where every girl feels welcome, capable, and excited to ride — whether it\'s your first time on a trail or you\'re racing varsity.',
        accent: 'rgb(192, 150, 240)',
    },
];

export default function Coaches() {
    return (
        <div className="animate-fade-in">

            {/* Header */}
            <div style={{
                background: 'linear-gradient(135deg, rgb(var(--color-primary)), rgb(var(--color-primary-light)))',
                color: 'white',
                padding: 'var(--spacing-xl) 0',
                textAlign: 'center',
            }}>
                <div className="container">
                    <h1 style={{ marginBottom: '0.5rem' }}>Meet Our Coaches</h1>
                    <p style={{ opacity: 0.9, fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
                        Our coaches are passionate volunteers dedicated to fostering a safe, fun, and competitive environment for every rider.
                    </p>
                </div>
            </div>

            <div className="container" style={{ padding: 'var(--spacing-xl) 0' }}>

                {/* All Coaches — equal grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>
                    {coaches.map(coach => (
                        <CoachCard key={coach.name} coach={coach} />
                    ))}
                </div>

                {/* GRiT info + Ride Leader CTA */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid rgb(192, 150, 240)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <p style={{ fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(192, 150, 240)', marginBottom: '0.75rem' }}>Girls Riding Together</p>
                        <h3 style={{ marginBottom: '0.75rem' }}>About GRiT</h3>
                        <p className="text-muted" style={{ marginBottom: '1.25rem', lineHeight: 1.7 }}>
                            GRiT is a NICA initiative aimed at increasing female participation in mountain biking. All skill levels welcome!
                        </p>
                        <Link href="https://nationalmtb.org/grit" target="_blank" className="btn-accent" style={{ alignSelf: 'flex-start', fontSize: '0.875rem' }}>Learn More About GRiT</Link>
                    </div>

                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid rgb(var(--color-tertiary))', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <p style={{ fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(140,120,0)', marginBottom: '0.75rem' }}>Volunteers Needed</p>
                        <h3 style={{ marginBottom: '0.75rem' }}>Become a Ride Leader</h3>
                        <p className="text-muted" style={{ marginBottom: '1.25rem', lineHeight: 1.7 }}>
                            Our team runs entirely on parent volunteers. You don&apos;t need to be an expert — if you can ride a bike and love supporting kids, we need you!
                        </p>
                        <Link href="/join" className="btn-primary" style={{ alignSelf: 'flex-start' }}>Get Involved</Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

type Coach = typeof coaches[number];

function CoachCard({ coach }: { coach: Coach }) {
    const size = 160;
    return (
        <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: `4px solid ${coach.accent}`, display: 'flex', flexDirection: 'column' }}>
            {/* Photo — centered at top */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <div style={{ width: `${size}px`, height: `${size}px`, borderRadius: 'var(--radius-full)', overflow: 'hidden', border: `3px solid ${coach.accent}`, backgroundColor: 'rgba(87,43,158,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {coach.photo ? (
                        <Image
                            src={coach.photo}
                            alt={coach.name}
                            width={size}
                            height={size}
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                    ) : (
                        <span style={{ fontFamily: 'var(--font-brand)', fontStyle: 'italic', fontWeight: 800, fontSize: '2.5rem', color: coach.accent, lineHeight: 1 }}>
                            {coach.name.split(' ').map(n => n[0]).join('')}
                        </span>
                    )}
                </div>
            </div>

            {/* Name & Role — full width */}
            <div style={{ marginBottom: '1rem' }}>
                <h3 style={{ marginBottom: '0.2rem', fontSize: '1.2rem' }}>{coach.name}</h3>
                <p style={{ fontWeight: 700, color: coach.accent, marginBottom: '0.15rem', fontSize: '0.9rem' }}>{coach.role}</p>
                <p className="text-muted" style={{ fontSize: '0.8rem', marginBottom: '0.75rem' }}>{coach.program}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <a href={`tel:${coach.phone.replace(/-/g, '')}`} style={{ fontSize: '0.875rem', color: 'rgb(var(--color-primary))', fontWeight: 600 }}>
                        {coach.phone}
                    </a>
                    <a href={`mailto:${coach.email}`} style={{ fontSize: '0.875rem', color: 'rgb(var(--color-primary))', fontWeight: 600, wordBreak: 'break-all' }}>
                        {coach.email}
                    </a>
                </div>
            </div>

            {/* Bio */}
            <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: 1.7, borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginTop: 'auto' }}>
                {coach.bio}
            </p>
        </div>
    );
}
