import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Practice Locations | Lehi MTB Hub',
    description: 'Meeting spots, trailheads, and directions for Lehi MTB practices.',
};

type Location = {
    name: string;
    googleMapsUrl?: string;
    appleMapsUrl?: string;
    directions: string;
    description?: string;
};

type Region = {
    region: string;
    description: string;
    locations: Location[];
};

const practiceRegions: Region[] = [
    {
        region: 'Eagle Mountain',
        description: 'We ride here frequently, especially leading up to our home race. Most practices start from Hidden Hollow Elementary, but occasionally we use alternate trailheads.',
        locations: [
            {
                name: 'Hidden Hollow Elementary',
                googleMapsUrl: 'https://maps.app.goo.gl/tJJXSjfRFh6F7dGS7',
                appleMapsUrl: 'https://maps.apple/p/Z83ykMYjT0dWDG',
                directions: 'Head west on Pioneer Crossing toward Eagle Mountain. Continue straight as it becomes Pony Express Pkwy. Turn left onto Hidden Hollow Dr and arrive at Hidden Hollow Elementary.',
            },
            {
                name: 'Hidden Hollow Trailhead',
                googleMapsUrl: 'https://maps.app.goo.gl/Dt3c69aMNeUmUccq8',
                appleMapsUrl: 'https://maps.apple.com/frame?center=40.351526,-111.988386&distance=488.744275&map=explore&span=0.002334,0.003289',
                directions: 'Head west on Pioneer Crossing, continuing onto Pony Express Pkwy. Turn left onto Hidden Hollow Dr, pass the elementary school, and continue to the dirt parking area at the trailhead.',
            },
            {
                name: 'The Rock Pile',
                googleMapsUrl: 'https://maps.app.goo.gl/sU2gZLD4M4zxzjE47',
                appleMapsUrl: 'https://maps.apple.com/frame?center=40.343001,-111.976514&distance=564.181297&map=hybrid&span=0.002695,0.003796',
                directions: 'Head west on Pioneer Crossing, continuing onto Pony Express Pkwy. Turn left onto Golden Eagle Rd, then turn left at the Rock Pile parking area.',
            }
        ]
    },
    {
        region: 'Corner Canyon (Draper)',
        description: 'A staple for our team practices with extensive trail networks. We utilize several different meeting spots depending on the day\'s ride plan.',
        locations: [
            {
                name: 'Potato Hill',
                googleMapsUrl: 'https://maps.app.goo.gl/Ki7YJGvTqH7Xegji9',
                appleMapsUrl: 'https://maps.apple/p/WIXJtJnDmcu-kN',
                directions: 'Take I-15 N to exit 288 (14600 S). Turn right (east) onto 14600 S, which becomes Traverse Ridge Rd. Follow Traverse Ridge Rd up the mountain, then turn right onto Suncrest Dr and immediately right into the Potato Hill Trailhead parking lot.',
            },
            {
                name: 'Peak View',
                googleMapsUrl: 'https://maps.app.goo.gl/fAyVQ6Tew6GsTGB96',
                appleMapsUrl: 'https://maps.apple/p/Irkp10nkfxTF_6',
                directions: 'Take I-15 N to exit 288 (14600 S). Head east on Traverse Ridge Rd. Turn left onto Suncrest Dr, then left onto Traverse Terrace Dr. Turn right onto Deer Ridge Dr and follow it to the end where you\'ll find the Peak View Trailhead.',
            },
            {
                name: 'Hogs Hollow (Angels Gate)',
                googleMapsUrl: 'https://maps.app.goo.gl/5JSuXxhLJGjTD5ti9',
                appleMapsUrl: 'https://maps.apple.com/frame?center=40.464903,-111.805844&distance=1684.440043&map=hybrid&span=0.008045,0.011353',
                directions: 'Take I-15 N to exit 291 (12300 S). Head east on 12300 S, which turns into 1300 E. Continue south, turn left onto Pioneer Rd. Turn right onto 2000 E, follow it south, and turn left onto Hogs Hollow Rd to reach the trailhead.',
            },
            {
                name: 'Deer Ridge',
                googleMapsUrl: 'https://maps.app.goo.gl/7HmvynNjeNA97raF6',
                appleMapsUrl: 'https://maps.apple/p/UEr2GavbFPLQKX',
                directions: 'Take I-15 N to exit 288 (14600 S). Head east up Traverse Ridge Rd. Turn left onto Suncrest Dr, left onto Traverse Terrace Dr, and right onto Deer Ridge Dr. The Deer Ridge Trailhead will be on your left before reaching Peak View.',
            },
            {
                name: 'Hidden Canyon',
                googleMapsUrl: 'https://maps.app.goo.gl/PipSLV1FZCNwyameA',
                appleMapsUrl: 'https://maps.apple.com/frame?center=40.466102,-111.875299&distance=537.173932&map=hybrid&span=0.002565,0.003621',
                directions: 'Take I-15 N to exit 288 (14600 S). Head east onto Traverse Ridge Rd. Turn left onto Bangerter Pkwy, then right onto Highland Dr. Turn right into the Hidden Canyon parking area.',
            }
        ]
    },
    {
        region: 'Herriman / Butterfield Area',
        description: 'Located on the west side of the Salt Lake Valley, we have a couple of different options we use for practices and time trials.',
        locations: [
            {
                name: 'Butterfield Canyon',
                googleMapsUrl: 'https://maps.app.goo.gl/yn8wacGBKaM34Td5A',
                appleMapsUrl: 'https://maps.apple/p/8AA5uXcce_eS0Y',
                directions: 'Head north on Redwood Rd (UT-68), turn left (west) onto 2100 N. Connect to Mountain View Corridor heading north. Exit onto Herriman Hwy heading west. Continue straight as it becomes Butterfield Canyon Rd to the parking area.',
            },
            {
                name: 'Yellow Fork',
                googleMapsUrl: 'https://maps.app.goo.gl/3xbmbLzhM5zZfJG69',
                appleMapsUrl: 'https://maps.apple/p/0Wm9JZ9wsPqz81',
                directions: 'Head north on Redwood Rd, turn left on 2100 N to Mountain View Corridor. Head north and exit at Herriman Hwy. Turn left (west) onto Herriman Hwy, then turn left onto Rose Canyon Rd. Follow Rose Canyon Rd up to the Yellow Fork Trailhead parking lot.',
            },
            {
                name: 'Blackridge Reservoir',
                googleMapsUrl: 'https://maps.app.goo.gl/2EqpWbHYVJPydDir9',
                appleMapsUrl: 'https://maps.apple/p/9-GGTI7bGghjyZ',
                directions: 'Head north on Redwood Rd, left on 2100 N to Mountain View Corridor. Head north to 13400 S and turn left (west). Turn left onto Rosecrest Rd, right onto Ashland Ridge Dr, and follow the signs to Blackridge Reservoir parking.',
            }
        ]
    },
    {
        region: 'Lambert Park (Alpine)',
        description: 'A smaller trail system tucked into the foothills of Alpine. We typically split into two different meeting locations due to parking constraints.',
        locations: [
            {
                name: 'South Trailhead',
                googleMapsUrl: 'https://maps.app.goo.gl/1QmGffxJb3vhp6yW9',
                appleMapsUrl: 'https://maps.apple/p/gxU6fKZyfM.IEb',
                directions: 'Head east on State St (US-89) into American Fork, then turn left (north) onto Alpine Hwy (UT-74) into Alpine. Turn right onto 100 S, then turn left onto Grove Dr. Follow Grove Dr north to the dirt road entrance for the South Trailhead.',
            },
            {
                name: 'Rodeo Grounds',
                googleMapsUrl: 'https://maps.app.goo.gl/uzD8kiTQe7TXVez16',
                appleMapsUrl: 'https://maps.apple.com/frame?center=40.478524,-111.750180&distance=531.400910&map=hybrid&span=0.002538,0.003582',
                directions: 'Head north on Alpine Hwy (UT-74) into Alpine. Turn right onto Main St, follow it as it curves, then turn left onto Healy Blvd. Continue straight to the Alpine Rodeo Grounds parking lot.',
            }
        ]
    },
    {
        region: 'Valley Vista (Pleasant Grove)',
        description: 'Another small trail system on the east side of Utah Valley. We leverage two trailheads to accommodate the whole team.',
        locations: [
            {
                name: 'Wade Springs (Groups 7-12)',
                googleMapsUrl: 'https://maps.app.goo.gl/MFDWA8HksXskoT8c9',
                appleMapsUrl: 'https://maps.apple.com/frame?center=40.378603,-111.727377&distance=1570.057836&map=hybrid&span=0.007499,0.010569',
                directions: 'Park at the LDS Church located at 1136 W 700 S, Pleasant Grove. Head east on State St (US-89), turn left onto 1300 W, then right onto 700 S to reach the church parking lot. We ride from the church to the Wade Springs trailhead.',
                description: 'We park at the nearby Church to avoid overcrowding the small trailhead parking.'
            },
            {
                name: 'Canyon Road Trailhead (Groups 1-6)',
                googleMapsUrl: 'https://maps.app.goo.gl/mCVwaKGFHYmQYYSE7',
                appleMapsUrl: 'https://maps.apple/p/dGc7.qQXk61TAU',
                directions: 'Head east on State St (US-89) into Pleasant Grove. Turn left onto 100 E, which becomes Canyon Rd. Continue up Canyon Rd toward the foothills until you reach the trailhead parking on your right.',
            }
        ]
    },
    {
        region: 'Other Locations',
        description: 'We meet at these locations far less often (maybe once or twice per year). We often encourage carpooling from Lehi High School for these farther rides.',
        locations: [
            {
                name: 'AF Canyon Summit Trailhead',
                googleMapsUrl: 'https://maps.app.goo.gl/BxsmhmXosP5mUPtt5',
                appleMapsUrl: 'https://maps.apple/p/CIJ6E~5CJUIKaI',
                directions: 'Head east on Timpanogos Hwy (UT-92) into American Fork Canyon. Pass the fee station and continue up the Alpine Loop Rd until you reach the Summit Trailhead parking lot at the top.',
            },
            {
                name: 'Round Valley Quinn\'s Trailhead (Park City)',
                googleMapsUrl: 'https://maps.app.goo.gl/wruvfMmr4mxsGTo99',
                appleMapsUrl: 'https://maps.apple/p/5XkLi.yuJMfdvV',
                directions: 'Head east on US-189 (Provo Canyon Rd) through Provo Canyon to Heber City. Turn left onto US-40 W towards Park City. Take the UT-248 exit, turn left towards Park City, then turn right onto Round Valley Way to reach the trailhead. Avoids I-15 and I-80.',
            }
        ]
    }
];

export default function PracticeLocations() {
    return (
        <div className="animate-fade-in">
            {/* Header */}
            <div style={{
                background: 'linear-gradient(135deg, rgb(var(--color-primary)), rgb(var(--color-primary-light)))',
                color: 'white',
                padding: 'var(--spacing-xl) 0',
            }}>
                <div className="container">
                    <p style={{ fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.75, marginBottom: '0.5rem' }}>Where We Ride</p>
                    <h1 style={{ marginBottom: '0.75rem' }}>Practice Locations</h1>
                    <p style={{ opacity: 0.9, fontSize: '1.125rem', maxWidth: '640px', lineHeight: 1.6 }}>
                        A complete guide to our meeting spots and trailheads. Driving directions are general guides starting from Lehi High School. 
                    </p>
                </div>
            </div>

            <div className="container" style={{ padding: 'var(--spacing-xl) 0' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
                    {practiceRegions.map((region) => (
                        <div key={region.region}>
                            <h2 style={{ marginBottom: '0.5rem', color: 'rgb(var(--color-primary))' }}>{region.region}</h2>
                            {region.description && (
                                <p className="text-muted" style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                                    {region.description}
                                </p>
                            )}

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--spacing-md)' }}>
                                {region.locations.map((loc) => (
                                    <div key={loc.name} className="glass-panel" style={{ padding: 'var(--spacing-lg)', display: 'flex', flexDirection: 'column' }}>
                                        <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{loc.name}</h3>
                                        
                                        {loc.description && (
                                            <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1rem', fontStyle: 'italic' }}>
                                                {loc.description}
                                            </p>
                                        )}

                                        <div style={{ marginBottom: '1.5rem', flexGrow: 1 }}>
                                            <p style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgb(var(--text-muted))', marginBottom: '0.25rem' }}>Directions from LHS</p>
                                            <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                                                {loc.directions}
                                            </p>
                                        </div>

                                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                                            {loc.googleMapsUrl && (
                                                <Link href={loc.googleMapsUrl} target="_blank" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                                    Google Maps
                                                </Link>
                                            )}
                                            {loc.appleMapsUrl && (
                                                <Link href={loc.appleMapsUrl} target="_blank" className="btn-silver" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 1.44C9.54 6.44 7.75 5 5.5 5 2 5 0 7.9 0 11.5c0 4.22 3 10.44 6 10.44 1.25 0 2.5-1.06 4-1.06z"></path><path d="M10 2c1 .5 2 2 2 3.5-1.5.5-3-1.5-3-3.5z"></path></svg>
                                                    Apple Maps
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', marginTop: 'var(--spacing-xl)', borderLeft: '4px solid rgb(var(--color-secondary))' }}>
                    <h2 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>Race Locations</h2>
                    <p className="text-muted" style={{ lineHeight: 1.6 }}>
                        In addition to our practice trailheads, we will have various race locations that we race and pre-ride at throughout the season. We will send specific locations, parking instructions, and pit zone details ahead of time for each race weekend via TeamSnap.
                    </p>
                </div>
            </div>
        </div>
    );
}
