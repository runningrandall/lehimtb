import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Team Photos & Media Gallery | Lehi MTB Hub',
    description: 'Official 2026 race photo libraries, season recap videos, and Google Photos galleries for the Lehi Mountain Bike team.',
};

interface PhotoAlbum {
    title: string;
    race?: string;
    url: string;
    emoji: string;
    description: string;
    badge?: string;
    image?: string;
}

const photoAlbums2026: PhotoAlbum[] = [
    {
        title: 'Team Photos 2026',
        race: 'Full Team · 2026',
        url: 'https://photos.app.goo.gl/bp1bxFvERHorQzne6',
        emoji: '📸',
        image: '/images/team_photos_2026.jpg',
        description: 'Official 2026 team photos, rider portraits, plaque pictures, and group shots.',
        badge: 'Team Photos',
    },
    {
        title: 'Herriman Regional Championship',
        race: 'Race 4 · Oct 10, 2026',
        url: 'https://photos.app.goo.gl/CrBujAxm1TTsbX8p7',
        emoji: '🏆',
        description: 'Race day action shots, finish line celebrations, and podium awards from the Region 5 Championship at Herriman Trails.',
        badge: 'Race 4',
    },
    {
        title: 'Panguitch Race',
        race: 'Race 3 · Sept 26, 2026',
        url: 'https://photos.app.goo.gl/MdTZjCtaeDFDqL7dA',
        emoji: '🏜️',
        description: 'High-desert racing action, technical singletrack climbs, and loud team cheer squads at Panguitch.',
        badge: 'Race 3',
    },
    {
        title: 'Richfield Race',
        race: 'Race 2 · Sept 5, 2026',
        url: 'https://photos.app.goo.gl/MdTZjCtaeDFDqL7dA',
        emoji: '🌄',
        description: 'Fast, flowing singletrack race photos and rider highlights from the scenic Richfield event.',
        badge: 'Race 2',
    },
    {
        title: 'Beaver Mountain Race',
        race: 'Race 1 · Aug 22, 2026',
        url: 'https://photos.app.goo.gl/e3iDhxoYzQbuy15o8',
        emoji: '🌲',
        description: 'Season opener action shots and mountain vistas from the high-elevation pine trails at Beaver Mountain.',
        badge: 'Race 1',
    },
];

const photoAlbums2025: PhotoAlbum[] = [
    {
        title: '2025 State Championship',
        race: 'State Finals',
        url: 'https://photos.google.com/share/AF1QipM4uonF6xY0zTSSb5idXNApub6KbCmrLIOBBCsvCc8YjRSP3dDzYaEys-SgFy6KLw?key=NG41WS16aWEwWURQTW5UNjRyUDR6dDRnWS1RUm9B',
        emoji: '🥇',
        description: 'Photos from the 2025 NICA Utah State Championships in St. George.',
        badge: '2025 State',
    },
    {
        title: '2025 Richfield Race',
        race: 'Race 2',
        url: 'https://photos.google.com/share/AF1QipOJLvFxzCT0ZkttAOj-wDaD6e5HHGMLuEhHnwGLs04vbB1xoQSg_e0P4bARYCFtVQ?key=bWNLaHhRTjJib1pDTGc2Vks5SUQtSnFoS3NRSk1B',
        emoji: '🚵',
        description: 'Race day photos from the 2025 Richfield event.',
        badge: '2025 Race 2',
    },
    {
        title: '2025 Snowbasin Race',
        race: 'Race 1',
        url: 'https://photos.google.com/share/AF1QipOAswhGSAHhEeb2rmsbwaPLgJKJwMSVfGbHuhbRuZZJ2sHJNhmu5uqy3iq57CXwEQ?key=cGVBUUpfNmRXZldQRjhmWWxpUzF5OHYzcktwVFBB',
        emoji: '⛰️',
        description: 'Action shots from the beautiful 2025 Snowbasin race.',
        badge: '2025 Race 1',
    },
];

const videos = [
    {
        id: 'XicI0iQv4ac',
        title: '2025 Season Recap',
        description: 'Highlights from an incredible 2025 NICA season.',
        featured: true,
    },
    {
        id: '3do5oYF8LnI',
        title: '2024 Season Recap',
        description: 'A look back at the 2024 racing season.',
    },
    {
        id: 'iIg3anZV544',
        title: '2024 Year-End Video',
        description: 'Year-end highlights and memorable moments from 2024.',
    },
    {
        id: 'HiImFdSzgyk',
        title: '2023 State & Season Recap',
        description: 'Reliving the 2023 state championship and season highlights.',
    },
    {
        id: 'SYiO_4III08',
        title: '2018 Sponsor Video',
        description: 'See why local businesses love sponsoring Lehi MTB.',
    },
];

export default function Gallery() {
    const [featuredVideo, ...otherVideos] = videos;

    return (
        <div className="animate-fade-in">

            {/* Page Header */}
            <div style={{
                background: 'linear-gradient(135deg, rgb(var(--color-primary)), #3b82f6)',
                color: 'white',
                padding: 'var(--spacing-xl) 0',
                textAlign: 'center',
            }}>
                <div className="container">
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📸</div>
                    <h1 style={{ marginBottom: '0.5rem', fontSize: 'clamp(2.2rem, 5vw, 3.2rem)' }}>Team Photos &amp; Media Gallery</h1>
                    <p style={{ opacity: 0.95, fontSize: '1.15rem', maxWidth: '750px', margin: '0 auto 1.25rem auto' }}>
                        Browse official Google Photos albums from our 2026 races, download high-res rider pictures, and watch season recap videos.
                    </p>
                    <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="#photo-albums" className="btn-accent" style={{ fontSize: '0.9rem', padding: '0.55rem 1.25rem' }}>
                            📸 2026 Race Photos
                        </a>
                        <a href="#videos" style={{
                            fontSize: '0.9rem',
                            fontWeight: 700,
                            background: 'rgba(255,255,255,0.2)',
                            color: 'white',
                            padding: '0.55rem 1.25rem',
                            borderRadius: 'var(--radius-sm)',
                            textDecoration: 'none',
                        }}>
                            🎬 Season Videos
                        </a>
                    </div>
                </div>
            </div>

            <div className="container" style={{ padding: 'var(--spacing-xl) 0' }}>

                {/* 2026 Photo Albums Section */}
                <section id="photo-albums" style={{ marginBottom: 'var(--spacing-xl)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '0.75rem', marginBottom: 'var(--spacing-md)', paddingBottom: '0.5rem', borderBottom: '2px solid var(--border-color)' }}>
                        <div>
                            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgb(var(--color-primary))' }}>
                                CURRENT SEASON
                            </span>
                            <h2 style={{ margin: '0.2rem 0 0 0', fontSize: '1.85rem' }}>📸 2026 Race Photo Libraries</h2>
                        </div>
                        <p className="text-muted" style={{ margin: 0, fontSize: '0.9rem' }}>
                            Click any album to view and download high-resolution photos on Google Photos.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 'var(--spacing-md)' }}>
                        {photoAlbums2026.map((album) => (
                            <Link
                                key={album.title}
                                href={album.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                            >
                                <div className="glass-panel" style={{
                                    padding: 'var(--spacing-lg)',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    borderTop: '4px solid rgb(var(--color-primary))',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                }}>
                                    <div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                                            <span style={{
                                                backgroundColor: 'rgba(87, 43, 158, 0.1)',
                                                color: 'rgb(var(--color-primary))',
                                                fontSize: '0.75rem',
                                                fontWeight: 800,
                                                padding: '0.2rem 0.6rem',
                                                borderRadius: 'var(--radius-full)',
                                                letterSpacing: '0.05em',
                                            }}>
                                                {album.badge}
                                            </span>
                                            <span style={{ fontSize: '0.75rem', color: 'rgb(var(--text-muted))', fontWeight: 600 }}>
                                                {album.race}
                                            </span>
                                        </div>

                                        {album.image ? (
                                            <div style={{
                                                position: 'relative',
                                                width: '100%',
                                                aspectRatio: '3 / 2',
                                                borderRadius: 'var(--radius-sm)',
                                                overflow: 'hidden',
                                                marginBottom: '0.75rem',
                                                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                            }}>
                                                <Image
                                                    src={album.image}
                                                    alt={album.title}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    style={{ objectFit: 'cover' }}
                                                />
                                            </div>
                                        ) : (
                                            <div style={{ fontSize: '2.75rem', marginBottom: '0.75rem' }}>{album.emoji}</div>
                                        )}
                                        <h3 style={{ marginBottom: '0.4rem', color: 'rgb(var(--color-primary))', fontSize: '1.25rem' }}>
                                            {album.title}
                                        </h3>
                                        <p className="text-muted" style={{ fontSize: '0.875rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                                            {album.description}
                                        </p>
                                    </div>

                                    <div>
                                        <span style={{
                                            display: 'inline-block',
                                            padding: '0.5rem 1.15rem',
                                            borderRadius: 'var(--radius-sm)',
                                            backgroundColor: 'rgb(var(--color-primary))',
                                            color: 'white',
                                            fontSize: '0.875rem',
                                            fontWeight: 700,
                                            boxShadow: 'var(--shadow-purple)',
                                            transition: 'opacity 0.2s ease',
                                        }}>
                                            Open Google Photos Album ↗
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Video Production Credit */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    padding: '1rem 1.5rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'rgba(87, 43, 158, 0.04)',
                    marginBottom: 'var(--spacing-xl)',
                    flexWrap: 'wrap',
                }}>
                    <Image
                        src="/images/sponsors/e-adams-media_orig.png"
                        alt="E.Adams Media"
                        width={120}
                        height={50}
                        style={{ height: '50px', width: 'auto', objectFit: 'contain' }}
                    />
                    <div>
                        <p style={{ fontWeight: 700, marginBottom: '0.2rem' }}>Videos proudly produced by E.Adams Media</p>
                        <p className="text-muted" style={{ fontSize: '0.875rem', margin: 0 }}>
                            Our season recap videos are made possible by the talented team at E.Adams Media — a proud Lehi MTB sponsor.
                        </p>
                    </div>
                </div>

                {/* Videos Section */}
                <section id="videos">
                    {/* Featured Video */}
                    <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: 'var(--spacing-md)' }}>
                            <h2 style={{ margin: 0 }}>🎬 Featured: {featuredVideo.title}</h2>
                            <span style={{
                                backgroundColor: 'rgb(var(--color-tertiary))',
                                color: 'rgba(12,8,24,0.9)',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                padding: '0.2rem 0.6rem',
                                borderRadius: 'var(--radius-full)',
                            }}>SEASON HIGHLIGHT</span>
                        </div>
                        <p className="text-muted" style={{ marginBottom: '1rem' }}>{featuredVideo.description}</p>
                        <div style={{
                            position: 'relative',
                            paddingBottom: '56.25%',
                            height: 0,
                            borderRadius: 'var(--radius-lg)',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-purple)',
                        }}>
                            <iframe
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                                src={`https://www.youtube.com/embed/${featuredVideo.id}`}
                                title={featuredVideo.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>

                    {/* More Videos */}
                    <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                        <h2 style={{ marginBottom: 'var(--spacing-md)', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>More Team Videos</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--spacing-md)' }}>
                            {otherVideos.map((video) => (
                                <div key={video.id}>
                                    <div style={{
                                        position: 'relative',
                                        paddingBottom: '56.25%',
                                        height: 0,
                                        borderRadius: 'var(--radius-md)',
                                        overflow: 'hidden',
                                        boxShadow: 'var(--shadow-md)',
                                        marginBottom: '0.75rem',
                                    }}>
                                        <iframe
                                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                                            src={`https://www.youtube.com/embed/${video.id}`}
                                            title={video.title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                    <h3 style={{ marginBottom: '0.25rem', fontSize: '1rem' }}>{video.title}</h3>
                                    <p className="text-muted" style={{ fontSize: '0.875rem' }}>{video.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 2025 Photo Archive */}
                <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                    <h2 style={{ marginBottom: 'var(--spacing-md)', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>
                        📁 2025 Photo Archive
                    </h2>
                    <p className="text-muted" style={{ marginBottom: 'var(--spacing-lg)' }}>Previous season photo galleries from the 2025 Utah League races.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-md)' }}>
                        {photoAlbums2025.map((album) => (
                            <Link
                                key={album.title}
                                href={album.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                            >
                                <div className="glass-panel" style={{
                                    padding: 'var(--spacing-lg)',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    borderTop: '4px solid #3b82f6',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                }}>
                                    <div>
                                        {album.image ? (
                                            <div style={{
                                                position: 'relative',
                                                width: '100%',
                                                aspectRatio: '3 / 2',
                                                borderRadius: 'var(--radius-sm)',
                                                overflow: 'hidden',
                                                marginBottom: '0.75rem',
                                            }}>
                                                <Image
                                                    src={album.image}
                                                    alt={album.title}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    style={{ objectFit: 'cover' }}
                                                />
                                            </div>
                                        ) : (
                                            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{album.emoji}</div>
                                        )}
                                        <h3 style={{ marginBottom: '0.5rem', color: '#2563eb' }}>{album.title}</h3>
                                        <p className="text-muted" style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>{album.description}</p>
                                    </div>
                                    <div>
                                        <span style={{
                                            display: 'inline-block',
                                            padding: '0.4rem 1rem',
                                            borderRadius: 'var(--radius-sm)',
                                            border: '1px solid #3b82f6',
                                            color: '#2563eb',
                                            fontSize: '0.875rem',
                                            fontWeight: 600,
                                        }}>
                                            Open 2025 Album ↗
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}
