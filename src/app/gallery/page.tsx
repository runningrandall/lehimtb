import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Media Gallery | Lehi MTB Hub',
    description: 'Photos and videos of the Lehi Mountain Bike team in action.',
};

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

const photoAlbums = [
    {
        title: '2025 State Championship',
        url: 'https://photos.google.com/share/AF1QipM4uonF6xY0zTSSb5idXNApub6KbCmrLIOBBCsvCc8YjRSP3dDzYaEys-SgFy6KLw?key=NG41WS16aWEwWURQTW5UNjRyUDR6dDRnWS1RUm9B',
        emoji: '🏆',
        description: 'Photos from the 2025 NICA Utah State Championships.',
    },
    {
        title: '2025 Richfield Race',
        url: 'https://photos.google.com/share/AF1QipOJLvFxzCT0ZkttAOj-wDaD6e5HHGMLuEhHnwGLs04vbB1xoQSg_e0P4bARYCFtVQ?key=bWNLaHhRTjJib1pDTGc2Vks5SUQtSnFoS3NRSk1B',
        emoji: '🚵',
        description: 'Race day photos from the 2025 Richfield event.',
    },
    {
        title: '2025 Snowbasin Race',
        url: 'https://photos.google.com/share/AF1QipOAswhGSAHhEeb2rmsbwaPLgJKJwMSVfGbHuhbRuZZJ2sHJNhmu5uqy3iq57CXwEQ?key=cGVBUUpfNmRXZldQRjhmWWxpUzF5OHYzcktwVFBB',
        emoji: '⛰️',
        description: 'Action shots from the beautiful 2025 Snowbasin race.',
    },
];

export default function Gallery() {
    const [featuredVideo, ...otherVideos] = videos;

    return (
        <div className="animate-fade-in">

            {/* Page Header */}
            <div style={{
                background: 'linear-gradient(135deg, rgb(var(--color-primary)), rgb(var(--color-primary-light)))',
                color: 'white',
                padding: 'var(--spacing-xl) 0',
                textAlign: 'center',
            }}>
                <div className="container">
                    <h1 style={{ marginBottom: '0.5rem' }}>Team Gallery</h1>
                    <p style={{ opacity: 0.9, fontSize: '1.125rem' }}>Videos and photo albums from our races, practices, and season highlights.</p>
                </div>
            </div>

            <div className="container" style={{ padding: 'var(--spacing-xl) 0' }}>

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
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/images/sponsors/e-adams-media_orig.png"
                        alt="E.Adams Media"
                        style={{ height: '50px', objectFit: 'contain' }}
                    />
                    <div>
                        <p style={{ fontWeight: 700, marginBottom: '0.2rem' }}>Videos proudly produced by E.Adams Media</p>
                        <p className="text-muted" style={{ fontSize: '0.875rem' }}>
                            Our season recap videos are made possible by the talented team at E.Adams Media — a proud Lehi MTB sponsor.
                        </p>
                    </div>
                </div>

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
                        }}>NEW</span>
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
                    <h2 style={{ marginBottom: 'var(--spacing-md)', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>More Videos</h2>
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

                {/* Photo Albums */}
                <div>
                    <h2 style={{ marginBottom: 'var(--spacing-md)', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>📸 Photo Albums</h2>
                    <p className="text-muted" style={{ marginBottom: 'var(--spacing-lg)' }}>Click any album to view the full gallery on Google Photos.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-md)' }}>
                        {photoAlbums.map((album) => (
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
                                }}>
                                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{album.emoji}</div>
                                    <h3 style={{ marginBottom: '0.5rem', color: 'rgb(var(--color-primary))' }}>{album.title}</h3>
                                    <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>{album.description}</p>
                                    <span style={{
                                        display: 'inline-block',
                                        padding: '0.4rem 1rem',
                                        borderRadius: 'var(--radius-full)',
                                        border: '1px solid rgb(var(--color-primary))',
                                        color: 'rgb(var(--color-primary))',
                                        fontSize: '0.875rem',
                                        fontWeight: 600,
                                    }}>Open Album →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
