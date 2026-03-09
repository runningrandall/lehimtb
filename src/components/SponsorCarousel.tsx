import Image from 'next/image';
import Link from 'next/link';

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

export default function SponsorCarousel() {
    const sponsors = sponsorImages.map((src, idx) => ({
        name: `Sponsor ${idx}`,
        node: <Image src={`/images/sponsors/${src}`} alt={`Sponsor ${idx}`} width={180} height={180} style={{ objectFit: 'contain' }} />
    }));

    sponsors.push({
        name: 'Become a Sponsor',
        node: <Link href="/sponsors" style={{ textDecoration: 'none' }}><h3 style={{ margin: 0, color: 'rgb(var(--color-primary))' }}>Become a Sponsor!</h3></Link>
    });

    // We duplicate the array to create the seamless infinite scrolling effect
    const repeatedSponsors = [...sponsors, ...sponsors];

    return (
        <div className="marquee-container">
            <div className="marquee-content" style={{ animationDuration: '60s' }}>
                {repeatedSponsors.map((sponsor, idx) => (
                    <div key={`sponsor-${idx}`} className="sponsor-logo-box">
                        {sponsor.node}
                    </div>
                ))}
            </div>
        </div>
    );
}
