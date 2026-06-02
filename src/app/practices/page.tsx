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
        description: 'We ride here frequently. Most practices start from Hidden Hollow Elementary, but occasionally we use alternate trailheads.',
        locations: [
            {
                name: 'Hidden Hollow Elementary',
                googleMapsUrl: 'https://maps.app.goo.gl/tJJXSjfRFh6F7dGS7',
                appleMapsUrl: 'https://maps.apple/p/Z83ykMYjT0dWDG',
                directions: `Take Pony Express Parkway and Lehi-Fairfield Rd/E Pony Express Pkwy to Hidden Valley Pkwy in Eagle Mountain
12 min (6.0 mi)

Continue onto Saratoga Rd
0.9 mi

Continue onto Pony Express Parkway
0.6 mi

At the traffic circle, take the 2nd exit and stay on Pony Express Parkway
2.2 mi

Continue onto W 7200 N/Lehi-Fairfield Rd/E Pony Express Pkwy
Continue to follow Lehi-Fairfield Rd/E Pony Express Pkwy
2.3 mi

Drive to your destination
1 min (0.2 mi)

Turn left onto Hidden Valley Pkwy
240 ft

Turn right`,
            },
            {
                name: 'Hidden Hollow Trailhead',
                googleMapsUrl: 'https://maps.app.goo.gl/Dt3c69aMNeUmUccq8',
                appleMapsUrl: 'https://maps.apple.com/frame?center=40.351526,-111.988386&distance=488.744275&map=explore&span=0.002334,0.003289',
                directions: `Take Pony Express Parkway and Lehi-Fairfield Rd/E Pony Express Pkwy to Hidden Valley Pkwy in Eagle Mountain
12 min (6.0 mi)

Continue onto Saratoga Rd
0.9 mi

Continue onto Pony Express Parkway
0.6 mi

At the traffic circle, take the 2nd exit and stay on Pony Express Parkway
2.2 mi

Continue onto W 7200 N/Lehi-Fairfield Rd/E Pony Express Pkwy
Continue to follow Lehi-Fairfield Rd/E Pony Express Pkwy
2.3 mi

Drive to your destination
1 min (0.2 mi)

Turn left onto Hidden Valley Pkwy
0.1 mi

Continue past the school to the dirt parking area`,
            },
            {
                name: 'The Rock Pile',
                googleMapsUrl: 'https://maps.app.goo.gl/sU2gZLD4M4zxzjE47',
                appleMapsUrl: 'https://maps.apple.com/frame?center=40.343001,-111.976514&distance=564.181297&map=hybrid&span=0.002695,0.003796',
                directions: `Take Pony Express Parkway and Lehi-Fairfield Rd/E Pony Express Pkwy to Golden Eagle Rd in Eagle Mountain
15 min (7.5 mi)

Continue onto Saratoga Rd
0.9 mi

Continue onto Pony Express Parkway
0.6 mi

At the traffic circle, take the 2nd exit and stay on Pony Express Parkway
2.2 mi

Continue onto W 7200 N/Lehi-Fairfield Rd/E Pony Express Pkwy
Continue to follow Lehi-Fairfield Rd/E Pony Express Pkwy
3.8 mi

Turn left onto Golden Eagle Rd
0.2 mi

Turn left
250 ft`,
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
                directions: `Take I-15 N to UT-140 E/14600 S in Bluffdale. Take exit 288 from I-15 N
8 min (8.2 mi)

Head north on I-15 N
7.9 mi

Take exit 288 for UT-140/14600 S
0.3 mi

Take Traverse Ridge Rd to your destination in Draper
8 min (4.3 mi)

Keep right at the fork, follow signs for Draper and merge onto UT-140 E/14600 S
1.8 mi

Continue onto Traverse Ridge Rd
2.4 mi

Turn right onto Suncrest Dr
0.1 mi

Turn right
157 ft`,
            },
            {
                name: 'Peak View',
                googleMapsUrl: 'https://maps.app.goo.gl/fAyVQ6Tew6GsTGB96',
                appleMapsUrl: 'https://maps.apple/p/Irkp10nkfxTF_6',
                directions: `Take I-15 N to UT-140 E/14600 S in Bluffdale. Take exit 288 from I-15 N
8 min (8.2 mi)

Take Traverse Ridge Rd and Suncrest Dr to your destination in Draper
11 min (5.3 mi)

Merge onto UT-140 E/14600 S
1.8 mi

Continue onto Traverse Ridge Rd
2.3 mi

Turn left onto Suncrest Dr
0.4 mi

Turn left onto Traverse Terrace Dr
0.3 mi

Turn right onto Deer Ridge Dr
0.5 mi

Turn left
120 ft`,
            },
            {
                name: 'Hogs Hollow (Angels Gate)',
                googleMapsUrl: 'https://maps.app.goo.gl/5JSuXxhLJGjTD5ti9',
                appleMapsUrl: 'https://maps.apple.com/frame?center=40.464903,-111.805844&distance=1684.440043&map=hybrid&span=0.008045,0.011353',
                directions: `Take I-15 N to 12300 S in Draper. Take exit 291 from I-15 N
11 min (11.5 mi)

Head north on I-15 N
11.2 mi

Take exit 291 for 12300 S
0.3 mi

Take 1300 E and Pioneer Rd to your destination
8 min (3.6 mi)

Keep right at the fork, follow signs for Draper and merge onto 12300 S
1.0 mi

Turn right onto 1300 E
0.8 mi

Turn left onto Pioneer Rd
1.1 mi

Turn right onto 2000 E
0.5 mi

Turn left onto Hogs Hollow Rd
0.2 mi`,
            },
            {
                name: 'Deer Ridge',
                googleMapsUrl: 'https://maps.app.goo.gl/7HmvynNjeNA97raF6',
                appleMapsUrl: 'https://maps.apple/p/UEr2GavbFPLQKX',
                directions: `Take I-15 N to UT-140 E/14600 S in Bluffdale. Take exit 288 from I-15 N
8 min (8.2 mi)

Take Traverse Ridge Rd and Suncrest Dr to Deer Ridge Dr in Draper
10 min (5.1 mi)

Merge onto UT-140 E/14600 S
1.8 mi

Continue onto Traverse Ridge Rd
2.3 mi

Turn left onto Suncrest Dr
0.4 mi

Turn left onto Traverse Terrace Dr
0.3 mi

Turn right onto Deer Ridge Dr
0.3 mi`,
            },
            {
                name: 'Hidden Canyon',
                googleMapsUrl: 'https://maps.app.goo.gl/PipSLV1FZCNwyameA',
                appleMapsUrl: 'https://maps.apple.com/frame?center=40.466102,-111.875299&distance=537.173932&map=hybrid&span=0.002565,0.003621',
                directions: `Take I-15 N to UT-140 E/14600 S in Bluffdale. Take exit 288 from I-15 N
8 min (8.2 mi)

Take Traverse Ridge Rd and Bangerter Pkwy to your destination in Draper
7 min (3.2 mi)

Merge onto UT-140 E/14600 S
1.8 mi

Continue onto Traverse Ridge Rd
0.6 mi

Turn left onto Bangerter Pkwy
0.6 mi

Turn right onto Highland Dr
0.2 mi

Turn right
150 ft`,
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
                directions: `Take Redwood Rd to 2100 N/Mountain View Corridor
10 min (6.5 mi)

Head north on Redwood Rd
4.5 mi

Turn left onto 2100 N
2.0 mi

Follow Mountain View Corridor to Herriman Hwy in Herriman
12 min (9.2 mi)

Turn right onto Mountain View Corridor
9.2 mi

Turn left onto Herriman Hwy
0.8 mi

Continue onto Butterfield Canyon Rd
1.5 mi`,
            },
            {
                name: 'Yellow Fork',
                googleMapsUrl: 'https://maps.app.goo.gl/3xbmbLzhM5zZfJG69',
                appleMapsUrl: 'https://maps.apple/p/0Wm9JZ9wsPqz81',
                directions: `Take Redwood Rd to 2100 N/Mountain View Corridor
10 min (6.5 mi)

Head north on Redwood Rd
4.5 mi

Turn left onto 2100 N
2.0 mi

Follow Mountain View Corridor to Herriman Hwy in Herriman
12 min (9.2 mi)

Turn right onto Mountain View Corridor
9.2 mi

Turn left onto Herriman Hwy
0.8 mi

Turn left onto Rose Canyon Rd
2.5 mi`,
            },
            {
                name: 'Blackridge Reservoir',
                googleMapsUrl: 'https://maps.app.goo.gl/2EqpWbHYVJPydDir9',
                appleMapsUrl: 'https://maps.apple/p/9-GGTI7bGghjyZ',
                directions: `Take Redwood Rd to 2100 N/Mountain View Corridor
10 min (6.5 mi)

Follow Mountain View Corridor to 13400 S in Herriman
10 min (7.5 mi)

Turn right onto Mountain View Corridor
7.5 mi

Take Rosecrest Rd and Ashland Ridge Dr to your destination
5 min (2.0 mi)

Turn left onto 13400 S
0.5 mi

Turn left onto Rosecrest Rd
1.0 mi

Turn right onto Ashland Ridge Dr
0.5 mi`,
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
                directions: `Head east on Main St toward Center St
0.5 mi

Continue onto State St
1.2 mi

Continue onto US-89 S/State St
2.0 mi

Turn left onto UT-74 N/Alpine Hwy
2.5 mi

Turn right onto 100 S
0.5 mi

Turn left onto Grove Dr
1.0 mi

Continue straight onto dirt road to the trailhead`,
            },
            {
                name: 'Rodeo Grounds',
                googleMapsUrl: 'https://maps.app.goo.gl/uzD8kiTQe7TXVez16',
                appleMapsUrl: 'https://maps.apple.com/frame?center=40.478524,-111.750180&distance=531.400910&map=hybrid&span=0.002538,0.003582',
                directions: `Head east on Main St toward Center St
0.5 mi

Continue onto State St
1.2 mi

Continue onto US-89 S/State St
2.0 mi

Turn left onto UT-74 N/Alpine Hwy
3.5 mi

Turn right onto Main St
0.5 mi

Turn left onto Healy Blvd
0.3 mi`,
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
                directions: `Head east on Main St toward Center St
0.5 mi

Continue onto State St
1.2 mi

Continue onto US-89 S/State St
6.5 mi

Turn left onto 1300 W in Pleasant Grove
0.5 mi

Turn right onto 700 S
0.2 mi

Arrive at LDS Church parking lot`,
                description: 'We park at the nearby Church to avoid overcrowding the small trailhead parking.'
            },
            {
                name: 'Canyon Road Trailhead (Groups 1-6)',
                googleMapsUrl: 'https://maps.app.goo.gl/mCVwaKGFHYmQYYSE7',
                appleMapsUrl: 'https://maps.apple/p/dGc7.qQXk61TAU',
                directions: `Head east on Main St toward Center St
0.5 mi

Continue onto State St
1.2 mi

Continue onto US-89 S/State St
7.5 mi

Turn left onto 100 E/Canyon Rd
1.5 mi

Continue straight to stay on Canyon Rd
0.5 mi

Destination will be on the right`,
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
                directions: `Head east on Main St toward Center St
0.5 mi

Continue onto State St
1.2 mi

Continue onto US-89 S/State St
1.5 mi

Turn left onto UT-92 E/Timpanogos Hwy
9.5 mi

Continue up American Fork Canyon (fee area)
8.5 mi

Arrive at Summit Trailhead parking lot`,
            },
            {
                name: 'Round Valley Quinn\'s Trailhead (Park City)',
                googleMapsUrl: 'https://maps.app.goo.gl/wruvfMmr4mxsGTo99',
                appleMapsUrl: 'https://maps.apple/p/5XkLi.yuJMfdvV',
                directions: `Head east on Main St
0.5 mi

Take US-89 S and US-189/Provo Canyon Rd to US-40 W in Wasatch County
45 min (36.5 mi)

Follow US-40 W to UT-248 W in Summit County. Take exit 4 from US-40 W
15 min (14.2 mi)

Take Round Valley Way to your destination
2 min (0.5 mi)

Turn left onto UT-248 W
0.2 mi

Turn right onto Round Valley Way
0.3 mi`,
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
                                            <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
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
