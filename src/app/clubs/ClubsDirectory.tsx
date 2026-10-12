'use client';

import { useState, useMemo, Fragment } from 'react';
import Link from 'next/link';

export type Discipline = 'XC' | 'Enduro' | 'Gravity / DH' | 'Multi-Discipline';
export type LevelNumber = 1 | 2 | 3 | 4 | 5;

export interface ClubProgram {
    id: string;
    club: string;
    programName: string;
    discipline: Discipline;
    level: LevelNumber;
    levelLabel: string;
    ages: string;
    location: string;
    baseTuition: string;
    costCategory: 'free-low' | 'moderate' | 'high' | 'inquire';
    costNote?: string;
    entryRequirements: string;
    trainingSchedule: string;
    racingExtras: string;
    registrationUrl: string;
    registrationLabel: string;
    deadline?: string;
    urgentDeadline?: boolean;
    statusNote?: string;
    highlight?: boolean;
    description: string;
}

export const clubProgramsData: ClubProgram[] = [
    {
        id: 'lehi-mtb-spring',
        club: 'Lehi MTB',
        programName: 'Spring Skills & Fitness Prep',
        discipline: 'XC',
        level: 2,
        levelLabel: 'Level 2 · Development',
        ages: 'Ages 12–18 (Grades 7–12)',
        location: 'Lehi / Northern Utah County (Eagle Mtn, Corner Canyon, Lambert Park)',
        baseTuition: '$150 flat',
        costCategory: 'free-low',
        costNote: 'Flat fee covers spring practices, coach guidance & insurance',
        entryRequirements: 'None! Open to all Lehi riders; just a positive attitude and willingness to learn.',
        trainingSchedule: 'Spring group rides & skill clinics (March–May), progressive fitness sessions prior to summer NICA kickoff.',
        racingExtras: 'Local fun races, team time-trials, seamless conditioning for the Utah High School fall season.',
        registrationUrl: '/join',
        registrationLabel: 'Join Lehi MTB',
        statusNote: 'Official Lehi team offseason program',
        highlight: true,
        description: 'Our team\'s spring development and fitness training program designed to keep Lehi riders rolling before the official summer NICA season starts.'
    },
    {
        id: 'flyers-xc-comp',
        club: 'Flyers XC Club',
        programName: 'Comp Team',
        discipline: 'XC',
        level: 4,
        levelLabel: 'Level 3–4 · Competitive / National Prep',
        ages: 'Ages 14–18 (High School)',
        location: 'Draper / Corner Canyon & Utah County / Eagle Mountain',
        baseTuition: '$50 base fee',
        costCategory: 'free-low',
        costNote: '$50 fee covers insurance & t-shirt; Comp team riders also purchase a team race jersey',
        entryRequirements: 'For JV A, Freshman A, and Varsity racers. Requires willingness to follow structured workouts and race regionally.',
        trainingSchedule: 'Multi-day structured spring practices, interval blocks, technical trail intervals, race prep sessions.',
        racingExtras: 'Spring Intermountain Cup (I-Cup) race support, team pits, feed zone guidance, Nationals preparation.',
        registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfdWlQVLMHGxxa3ARksTK8Dyr5KpuG47HtnG4XCTnYIp1muug/viewform?usp=sharing',
        registrationLabel: 'Flyers XC Sign-Up Form',
        deadline: 'Spring Registration Open',
        description: 'High-performance cross-country race squad coached by experienced local staff, focusing on high-speed trail mastery, I-Cup podiums, and NICA leadership.'
    },
    {
        id: 'flyers-xc-sport',
        club: 'Flyers XC Club',
        programName: 'Sport Team',
        discipline: 'XC',
        level: 2,
        levelLabel: 'Level 2 · Development',
        ages: 'Ages 12–18 (Grades 7–12)',
        location: 'Draper / Corner Canyon & Utah County',
        baseTuition: '$50 base fee',
        costCategory: 'free-low',
        costNote: 'Includes insurance & team t-shirt; racing is completely optional',
        entryRequirements: 'Comfortable on intermediate singletrack trails. Open to riders seeking skill advancement without high-pressure racing.',
        trainingSchedule: 'Weekly coached group rides focusing on bike handling, cornering, climbing efficiency, and trail camaraderie.',
        racingExtras: 'Optional participation in local spring events; great bridge into competitive NICA racing.',
        registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfdWlQVLMHGxxa3ARksTK8Dyr5KpuG47HtnG4XCTnYIp1muug/viewform?usp=sharing',
        registrationLabel: 'Flyers XC Sign-Up Form',
        deadline: 'Spring Registration Open',
        description: 'Developmental cross-country program centered on bike confidence, group riding etiquette, fitness, and pure fun on the trails.'
    },
    {
        id: 'flyers-enduro',
        club: 'Lake Mountain / Flyers Enduro',
        programName: 'Youth Enduro Team',
        discipline: 'Enduro',
        level: 3,
        levelLabel: 'Level 3–4 · Competitive Enduro',
        ages: 'Grades 8–12 (Ages 13–18)',
        location: 'Corner Canyon, Eagle Mountain, American Fork Canyon',
        baseTuition: 'Published at reg (~$400–$800)',
        costCategory: 'moderate',
        costNote: 'Full season training, coaching, and shuttle sessions (kit and race entries separate)',
        entryRequirements: 'Solid intermediate-to-advanced bike handling skills; dedicated trail/enduro full-suspension bike & full-face helmet.',
        trainingSchedule: 'January through August comprehensive season; winter conditioning followed by spring technical descents, jumps, and drops.',
        racingExtras: 'Utah Gravity Series, Youth Enduro events, shuttle days, timed stage practice runs.',
        registrationUrl: 'https://flyersenduro.com',
        registrationLabel: 'flyersenduro.com',
        deadline: 'Registration opens Dec 1',
        urgentDeadline: true,
        description: 'Premier youth gravity and enduro squad in Utah County, specializing in aggressive descending, line selection, drops, and timed stage racing.'
    },
    {
        id: 'velolove-youth',
        club: 'VeloLove Junior Racing',
        programName: 'Youth Devo',
        discipline: 'XC',
        level: 1,
        levelLabel: 'Level 1–2 · Recreational & Devo',
        ages: 'Ages 8–13',
        location: 'Salt Lake Valley & Utah County',
        baseTuition: 'Free / Nominal',
        costCategory: 'free-low',
        costNote: 'Volunteer-driven 501(c)(3) model with free or nominal participation fees',
        entryRequirements: 'Open to youth riders eager to ride trails; basic bike in good working condition.',
        trainingSchedule: 'Spring and summer group rides with volunteer mentors; fundamentals of shifting, braking, balance, and fun.',
        racingExtras: 'Introductory local youth races, family trail days, community bike outings.',
        registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc4Toh0mCqZMg53zPMvVJ0hTb4rIeFM7HLIVWmZ_BqFUSv8xQ/viewform?usp=send_form',
        registrationLabel: 'VeloLove Interest Form',
        deadline: 'Sign-ups open this winter',
        description: 'Community-rooted grassroots cycling club making mountain biking accessible and joyful for young kids and developing riders.'
    },
    {
        id: 'velolove-comp',
        club: 'VeloLove Junior Racing',
        programName: 'Comp Team',
        discipline: 'XC',
        level: 3,
        levelLabel: 'Level 3 · Competitive',
        ages: 'Ages 12–16',
        location: 'Salt Lake Valley & Utah County',
        baseTuition: 'Free / Nominal',
        costCategory: 'free-low',
        costNote: 'Free base coaching; riders cover USAC license, race fees, and jersey',
        entryRequirements: 'Prior trail experience, fitness foundation, commitment to scheduled team practices.',
        trainingSchedule: 'Structured weeknight workouts, pacing exercises, hill repeats, and technical trail drills.',
        racingExtras: 'Intermountain Cup (I-Cup) circuit participation and regional youth XC events.',
        registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc4Toh0mCqZMg53zPMvVJ0hTb4rIeFM7HLIVWmZ_BqFUSv8xQ/viewform?usp=send_form',
        registrationLabel: 'VeloLove Interest Form',
        deadline: 'Sign-ups open this winter',
        description: 'Low-cost competitive cross-country team designed to introduce young athletes to regional racing without financial barriers.'
    },
    {
        id: 'velolove-elite',
        club: 'VeloLove Junior Racing',
        programName: 'Elite Team',
        discipline: 'XC',
        level: 4,
        levelLabel: 'Level 4 · National Pathway',
        ages: 'Ages 14–18',
        location: 'Salt Lake Valley & Utah County',
        baseTuition: 'Free / Nominal',
        costCategory: 'free-low',
        costNote: 'Coaching provided freely; travel, lodging & USAC race entries self-funded',
        entryRequirements: 'Podium-focused competitive junior racers; coach interview/approval.',
        trainingSchedule: 'Advanced endurance blocks, structured intervals, race strategy analysis, group pacelines.',
        racingExtras: 'Targeting I-Cup overall titles, Soldier Hollow Pro XCT, and USA Cycling Nationals.',
        registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc4Toh0mCqZMg53zPMvVJ0hTb4rIeFM7HLIVWmZ_BqFUSv8xQ/viewform?usp=send_form',
        registrationLabel: 'VeloLove Interest Form',
        deadline: 'Sign-ups open this winter',
        description: 'Elite training wing of VeloLove fostering junior talent for regional and national podium contention with passionate volunteer mentorship.'
    },
    {
        id: 'accel-inhouse',
        club: 'Accel Cycling',
        programName: 'In-House Coached Team',
        discipline: 'XC',
        level: 5,
        levelLabel: 'Level 4–5 · National & Elite',
        ages: 'Ages 13–18, U23 & Pro',
        location: 'St. George & Salt Lake City / Regional Hubs',
        baseTuition: '$2,800 / year',
        costCategory: 'high',
        costNote: 'Includes dedicated ACCEL in-house coach training plan, 2x full kits, helmet, gloves, warmers, race-day support',
        entryRequirements: 'Strict application and cycling resume evaluation. Proven competitive race results; interview required.',
        trainingSchedule: 'Year-round tailored TrainingPeaks regimen, heart rate/power analysis, team training camps, skill clinics.',
        racingExtras: 'Full neutral race-day pits, mechanic support, Pro XCT, USA Cycling Nationals, and UCI Junior World Cup pathway.',
        registrationUrl: 'https://accelcycling.net/apply.html',
        registrationLabel: 'Accel Late Applications',
        deadline: 'Primary closed; Late Apps portal open',
        urgentDeadline: true,
        statusNote: 'Primary 2027 window closed; submit late application inquiry immediately if interested.',
        description: 'One of the nation\'s top junior and U23 development powerhouses, preparing elite mountain bike racers for national titles and international competition.'
    },
    {
        id: 'accel-outside',
        club: 'Accel Cycling',
        programName: 'Outside Coached Team',
        discipline: 'XC',
        level: 4,
        levelLabel: 'Level 4–5 · National & Elite',
        ages: 'Ages 13–18, U23 & Pro',
        location: 'St. George & Salt Lake City / Regional Hubs',
        baseTuition: '$2,200 / year',
        costCategory: 'high',
        costNote: 'For riders working with an approved external coach; includes 2x full kits, gear package, team camp access & pit support',
        entryRequirements: 'Approved external coach plus competitive resume review and team acceptance.',
        trainingSchedule: 'Collaborative coaching with athlete\'s personal coach, plus mandatory team camps and skills clinics.',
        racingExtras: 'Complete team race day tent, feed support, mechanical assistance at major national calendar races.',
        registrationUrl: 'https://accelcycling.net/apply.html',
        registrationLabel: 'Accel Late Applications',
        deadline: 'Primary closed; Late Apps portal open',
        urgentDeadline: true,
        description: 'Allows athletes who already work with private endurance coaches to wear the Accel colors and benefit from top-tier national race support.'
    },
    {
        id: 'outlaw-nomads',
        club: 'Outlaw Mountain Bike Team',
        programName: 'Nomads (Gravity / DH Pathway)',
        discipline: 'Gravity / DH',
        level: 4,
        levelLabel: 'Level 4 · National Gravity Pathway',
        ages: 'Ages 10+ (Youth & Juniors)',
        location: 'Salt Lake, Utah & Summit Counties (Deer Valley, Solitude, Park City, St. George)',
        baseTuition: 'Tuition tier by age (~$2,200–$3,500)',
        costCategory: 'high',
        costNote: 'Tuition due Dec 31; bike park passes, travel trips & race entries additional',
        entryRequirements: 'Dedicated gravity riders committed to downhill racing; proven bike park handling and jump mastery.',
        trainingSchedule: 'Intensive downhill training, freeride progression, bike park laps, Southern Utah spring trips, physical & mental conditioning.',
        racingExtras: 'Utah Gravity Series, Downhill Southeast, USAC National DH Championships, Pro DH series.',
        registrationUrl: 'https://outlawbiketeam.com',
        registrationLabel: 'outlawbiketeam.com',
        deadline: 'Tuition due December 31',
        urgentDeadline: true,
        description: 'Renowned youth gravity powerhouse built by Tyson Henrie, developing disciplined athletes in downhill racing, air awareness, and high-speed bike control.'
    },
    {
        id: 'outlaw-drifters',
        club: 'Outlaw Mountain Bike Team',
        programName: 'Drifters (Intermediate Gravity)',
        discipline: 'Gravity / DH',
        level: 3,
        levelLabel: 'Level 2–3 · Gravity Development',
        ages: 'Ages 9+',
        location: 'Wasatch Front & Summit County',
        baseTuition: 'Base tuition varies by age',
        costCategory: 'moderate',
        costNote: 'Tuition due Dec 31; focuses on progression from foundational bike skills',
        entryRequirements: 'Intermediate bike park experience, trail bike or downhill bike, full-face helmet and armor.',
        trainingSchedule: 'Weekly coached freeride sessions, pump track drills, cornering speed, drop technique, jump transitions.',
        racingExtras: 'Local gravity races, fun jams, progression sessions.',
        registrationUrl: 'https://outlawbiketeam.com',
        registrationLabel: 'outlawbiketeam.com',
        deadline: 'Tuition due December 31',
        urgentDeadline: true,
        description: 'The step up from Banditos into serious gravity progression, refining essential body mechanics for high-speed technical terrain.'
    },
    {
        id: 'outlaw-mavericks',
        club: 'Outlaw Mountain Bike Team',
        programName: 'Mavericks (Elite World Cup Pathway)',
        discipline: 'Gravity / DH',
        level: 5,
        levelLabel: 'Level 5 · Elite World Cup',
        ages: 'Ages 14–18 (Invite Only)',
        location: 'Utah & Global World Cup Circuits',
        baseTuition: 'Custom Elite Contract',
        costCategory: 'high',
        costNote: 'Full factory development pathway, international logistics and pro sponsorships',
        entryRequirements: 'Invite-only; national championship podium winners and international UCI junior contenders.',
        trainingSchedule: 'Full-time athlete regimentation, physiological testing, video review, factory equipment tuning.',
        racingExtras: 'UCI Mountain Bike World Series Junior Downhill, USAC Pro DH, Red Bull events.',
        registrationUrl: 'https://outlawbiketeam.com',
        registrationLabel: 'outlawbiketeam.com',
        deadline: 'Contact Coach directly',
        description: 'Top-tier junior gravity squad producing professional downhill racers and World Cup podium contenders.'
    },
    {
        id: 'rouleur-national',
        club: 'Rouleur Devo',
        programName: 'National Team',
        discipline: 'XC',
        level: 5,
        levelLabel: 'Level 4–5 · National / Elite',
        ages: 'Ages 15–18, U23 & Pro',
        location: 'Salt Lake City / Wasatch Front',
        baseTuition: '$3,900 (Prior Season)',
        costCategory: 'high',
        costNote: 'Prior season fee; 2027 program status uncertain as riders transition to other clubs',
        entryRequirements: '2–3 years local racing experience plus participation in national or international UCI level events.',
        trainingSchedule: 'Comprehensive high-performance coaching, team training camps (St. George, California), physiological tracking.',
        racingExtras: 'USA Cycling Nationals, Pro XCT calendar, team tent support, bike mechanics, team kits.',
        registrationUrl: 'https://rouleurdevo.org/pages/team-memberships',
        registrationLabel: 'rouleurdevo.org',
        statusNote: 'Status Note: 2027 team structure is uncertain/splitting. Information provided as historical benchmark.',
        description: 'Established Salt Lake development team with a rich history of national junior championships. Currently evaluating 2027 operations.'
    },
    {
        id: 'rouleur-race',
        club: 'Rouleur Devo',
        programName: 'Race Team',
        discipline: 'XC',
        level: 3,
        levelLabel: 'Level 3 · Competitive Regional',
        ages: 'Ages 13–18',
        location: 'Salt Lake City / Wasatch Front',
        baseTuition: '$1,800–$2,500 (Prior Season)',
        costCategory: 'high',
        costNote: 'Prior season fee; 2027 team status uncertain',
        entryRequirements: 'Prior mountain bike racing experience and commitment to regional race schedule.',
        trainingSchedule: 'Weekly coached group workouts, threshold training, technical line choice, spring base miles.',
        racingExtras: 'Intermountain Cup (I-Cup) team race support and coaching on course.',
        registrationUrl: 'https://rouleurdevo.org/pages/team-memberships',
        registrationLabel: 'rouleurdevo.org',
        statusNote: 'Status Note: 2027 team structure is uncertain/splitting.',
        description: 'Regional cross-country racing squad focused on local series dominance and preparing high school athletes for top varsity placements.'
    },
    {
        id: 'rouleur-devo',
        club: 'Rouleur Devo',
        programName: 'Devo Team',
        discipline: 'XC',
        level: 2,
        levelLabel: 'Level 2 · Development',
        ages: 'Ages 10–14',
        location: 'Salt Lake City / Wasatch Front',
        baseTuition: '$1,000–$1,400 (Prior Season)',
        costCategory: 'moderate',
        costNote: 'Prior season fee; 2027 team status uncertain',
        entryRequirements: 'Enthusiastic young riders comfortable on singletrack trail systems.',
        trainingSchedule: 'Coached skills sessions, group trail rides, bike handling confidence, team games.',
        racingExtras: 'Fun introduction to local youth races and fun rides.',
        registrationUrl: 'https://rouleurdevo.org/pages/team-memberships',
        registrationLabel: 'rouleurdevo.org',
        statusNote: 'Status Note: 2027 team structure is uncertain/splitting.',
        description: 'Youth development squad teaching foundational mountain biking mechanics, trail stewardship, and endurance basics.'
    },
    {
        id: 'maybird-cycling',
        club: 'Maybird Cycling',
        programName: 'Youth & Junior Development',
        discipline: 'XC',
        level: 3,
        levelLabel: 'Level 2–3 · Devo & Competitive',
        ages: 'Youth & Juniors (Ages 10–18+)',
        location: 'Millcreek / Salt Lake Valley & Park City',
        baseTuition: 'Not posted publicly',
        costCategory: 'inquire',
        costNote: 'Tuition not published online; contact program directly for current season rates',
        entryRequirements: 'Grouped by age and ability; welcoming to both new racers and seasoned athletes.',
        trainingSchedule: 'Structured spring weeknight group rides (scheduled to wrap up just as high school NICA season begins in June/July).',
        racingExtras: 'Intermountain Cup (I-Cup) participation, gravel adventures, cyclocross crossover.',
        registrationUrl: 'https://maybirdcycling.com',
        registrationLabel: 'maybirdcycling.com',
        deadline: 'Contact via website',
        description: 'Founded by Dan Draper and sons in 2017 to provide dedicated spring training and technical coaching that directly complements the Utah NICA experience.'
    },
    {
        id: 'summit-bike-club',
        club: 'Summit Bike Club',
        programName: 'Junior Devo & Regional Teams (U12, U15, U19, Enduro)',
        discipline: 'Multi-Discipline',
        level: 4,
        levelLabel: 'Level 2–4 · Devo to National',
        ages: 'Ages 8–18 (U12, U15, U19)',
        location: 'Park City, Soldier Hollow & Wasatch Back',
        baseTuition: 'Not posted publicly',
        costCategory: 'inquire',
        costNote: 'Website currently under construction / updating for upcoming season',
        entryRequirements: 'Age-appropriate grouping; passion for outdoor sports and trail riding.',
        trainingSchedule: 'Coached practices across Park City trail systems and Soldier Hollow; comprehensive endurance and technical skill blocks.',
        racingExtras: 'Hosts Soldier Hollow Bike Festival / Pro XCT; supports local I-Cup and USA Cycling national races.',
        registrationUrl: 'https://summitbikeclub.com',
        registrationLabel: 'summitbikeclub.com',
        deadline: 'Check website / Inquire',
        description: '501(c)(3) junior development organization in Park City running structured XC and Enduro pathways from elementary youth through national championship contenders.'
    },
    {
        id: 'aspire-mtb',
        club: 'Aspire Junior Cycling (DiscoverMTB)',
        programName: 'Aspire Jr, Race & Enduro Teams',
        discipline: 'Multi-Discipline',
        level: 3,
        levelLabel: 'Level 1–3 · Rec, Devo & Enduro',
        ages: 'Ages 6–18 (Elementary to High School)',
        location: 'Herriman, Draper, Eagle Mountain & South Salt Lake County',
        baseTuition: 'Not posted publicly',
        costCategory: 'inquire',
        costNote: 'Fees vary by tier (Jr vs Race vs Enduro); contact coaches for season pricing',
        entryRequirements: 'Bike in good working order; grouped by skill and age brackets.',
        trainingSchedule: 'Spring multi-day weekly practices led by trained coaches; technical handling, singletrack confidence, and stamina.',
        racingExtras: 'Precursor pipeline for NICA riders; optional spring race entries and team events.',
        registrationUrl: 'https://discovermtb.com',
        registrationLabel: 'discovermtb.com',
        deadline: 'Spring Registration Openings',
        description: 'Dynamic south-valley youth program offering three distinct tracks: Aspire Jr (fundamentals for ages 6+), Aspire Race (XC endurance), and Aspire Enduro (gravity & drops).'
    },
    {
        id: 'racekraft-mtb',
        club: 'RaceKraft MTB',
        programName: 'Gravity Development Team',
        discipline: 'Gravity / DH',
        level: 4,
        levelLabel: 'Level 3–4 · Competitive Gravity / DH',
        ages: 'Ages 11–18 (Capped select squad of ~12 riders)',
        location: 'Salt Lake City & Park City / Regional Bike Parks',
        baseTuition: 'Not posted publicly',
        costCategory: 'inquire',
        costNote: 'Selective application program; includes 9 months of coaching, conditioning & clinics',
        entryRequirements: 'Competitive gravity skill evaluation, downhill equipment, and athlete interview with coaches.',
        trainingSchedule: '9-month holistic program including winter indoor strength/conditioning, sports psychology, and on-bike gravity progressions.',
        racingExtras: 'Utah Gravity Series, youth enduros, USAC National DH Championships, travel camps.',
        registrationUrl: 'https://racekraftcycling.com',
        registrationLabel: 'racekraftcycling.com',
        deadline: 'Direct Inquiry / Application',
        description: 'Co-founded by Kris Baughman and Leslie Czerwinski, combining elite downhill bike mechanics and riding technique with dedicated mental health and resilience coaching.'
    },
    {
        id: 'konecny-academy',
        club: 'Konecny Cycling Academy (KCA)',
        programName: 'Elite Junior Coaching & Performance Camps',
        discipline: 'XC',
        level: 5,
        levelLabel: 'Level 4–5 · National & Elite Coaching',
        ages: 'Ages 13–18 & U23 / Pro',
        location: 'Mountain West / Utah & Colorado (Remote + In-Person Camps)',
        baseTuition: 'Custom coaching plans',
        costCategory: 'inquire',
        costNote: 'Tiered monthly coaching packages and standalone intensive training camps',
        entryRequirements: 'Application-only elite development; dedication to structured endurance science.',
        trainingSchedule: 'Individualized daily training plans via TrainingPeaks, power meter analytics, physiological periodization, and GOAT Collective camps.',
        racingExtras: 'High-performance prep for USA Cycling Nationals, Pro XCT events, and UCI World Cups.',
        registrationUrl: 'https://konecnycyclingacademy.com',
        registrationLabel: 'konecnycyclingacademy.com',
        deadline: 'Applications accepted rolling',
        description: 'High-performance endurance coaching academy led by World Cup racer Lasse Konecny, tailored for junior athletes pursuing top-tier national and international cycling results.'
    }
];

export default function ClubsDirectory() {
    const [disciplineFilter, setDisciplineFilter] = useState<string>('all');
    const [levelFilter, setLevelFilter] = useState<string>('all');
    const [costFilter, setCostFilter] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [viewMode, setViewMode] = useState<'matrix' | 'cards'>('matrix');
    const [expandedRow, setExpandedRow] = useState<string | null>(null);

    const filteredPrograms = useMemo(() => {
        return clubProgramsData.filter(program => {
            // Discipline filter
            if (disciplineFilter !== 'all') {
                if (disciplineFilter === 'XC' && program.discipline !== 'XC') return false;
                if (disciplineFilter === 'Gravity' && !['Enduro', 'Gravity / DH'].includes(program.discipline)) return false;
                if (disciplineFilter === 'Multi' && program.discipline !== 'Multi-Discipline') return false;
            }

            // Level filter
            if (levelFilter !== 'all') {
                if (levelFilter === 'devo' && ![1, 2].includes(program.level)) return false;
                if (levelFilter === 'comp' && program.level !== 3) return false;
                if (levelFilter === 'national' && ![4, 5].includes(program.level)) return false;
            }

            // Cost filter
            if (costFilter !== 'all') {
                if (costFilter === 'free-low' && program.costCategory !== 'free-low') return false;
                if (costFilter === 'moderate' && program.costCategory !== 'moderate') return false;
                if (costFilter === 'high' && program.costCategory !== 'high') return false;
                if (costFilter === 'inquire' && program.costCategory !== 'inquire') return false;
            }

            // Search filter
            if (searchQuery.trim()) {
                const query = searchQuery.toLowerCase();
                const matchString = `${program.club} ${program.programName} ${program.discipline} ${program.location} ${program.baseTuition} ${program.entryRequirements} ${program.description}`.toLowerCase();
                if (!matchString.includes(query)) return false;
            }

            return true;
        });
    }, [disciplineFilter, levelFilter, costFilter, searchQuery]);

    const resetFilters = () => {
        setDisciplineFilter('all');
        setLevelFilter('all');
        setCostFilter('all');
        setSearchQuery('');
    };

    const toggleRow = (id: string) => {
        setExpandedRow(prev => prev === id ? null : id);
    };

    return (
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 var(--spacing-sm)' }}>
            
            {/* Urgent Deadlines Banner */}
            <div style={{
                backgroundColor: 'rgba(87, 43, 158, 0.05)',
                border: '1px solid rgba(87, 43, 158, 0.2)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem 1.5rem',
                marginBottom: '2rem',
                boxShadow: 'var(--shadow-sm)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '1.3rem' }}>⏰</span>
                    <h2 style={{
                        fontFamily: 'var(--font-brand)',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        color: 'rgb(var(--color-primary-dark))',
                        margin: 0
                    }}>
                        Key Deadlines &amp; Status Notes (2026–27 Season)
                    </h2>
                </div>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '1rem',
                    fontSize: '0.9rem'
                }}>
                    <div style={{
                        backgroundColor: '#fff',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        borderLeft: '4px solid #e11d48',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                    }}>
                        <div style={{ fontWeight: 700, color: '#e11d48' }}>Accel Cycling</div>
                        <div style={{ color: 'var(--color-text-muted-light)' }}>
                            2027 primary window closed. <strong style={{ color: '#000' }}>Late application portal</strong> currently active.
                        </div>
                    </div>

                    <div style={{
                        backgroundColor: '#fff',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        borderLeft: '4px solid #0284c7',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                    }}>
                        <div style={{ fontWeight: 700, color: '#0284c7' }}>Flyers Enduro</div>
                        <div style={{ color: 'var(--color-text-muted-light)' }}>
                            Registration officially opens <strong style={{ color: '#000' }}>December 1</strong> for the 2027 season.
                        </div>
                    </div>

                    <div style={{
                        backgroundColor: '#fff',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        borderLeft: '4px solid #ea580c',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                    }}>
                        <div style={{ fontWeight: 700, color: '#ea580c' }}>Outlaw MTB (Nomads / Drifters)</div>
                        <div style={{ color: 'var(--color-text-muted-light)' }}>
                            Full season tuition is due by <strong style={{ color: '#000' }}>December 31</strong>.
                        </div>
                    </div>

                    <div style={{
                        backgroundColor: '#fff',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        borderLeft: '4px solid #16a34a',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                    }}>
                        <div style={{ fontWeight: 700, color: '#16a34a' }}>VeloLove Junior Racing</div>
                        <div style={{ color: 'var(--color-text-muted-light)' }}>
                            2027 sign-ups open this winter via interest form; program is free/nominal.
                        </div>
                    </div>

                    <div style={{
                        backgroundColor: '#fff',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        borderLeft: '4px solid #854d0e',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                    }}>
                        <div style={{ fontWeight: 700, color: '#854d0e' }}>Rouleur Devo</div>
                        <div style={{ color: 'var(--color-text-muted-light)' }}>
                            2027 team structure uncertain / splitting; published fees reflect prior season benchmarks.
                        </div>
                    </div>
                </div>
            </div>

            {/* Filter Bar */}
            <div style={{
                backgroundColor: '#fff',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                border: '1px solid var(--border-color)',
                marginBottom: '1.5rem',
                boxShadow: 'var(--shadow-sm)'
            }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    
                    {/* Live Search */}
                    <div style={{ flex: '1 1 280px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }}>🔍</span>
                        <input
                            type="text"
                            placeholder="Search by club, city, discipline, or keyword..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '0.65rem 0.75rem 0.65rem 2.25rem',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid rgba(87, 43, 158, 0.25)',
                                fontSize: '0.95rem',
                                outline: 'none',
                                fontFamily: 'inherit'
                            }}
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                style={{
                                    position: 'absolute',
                                    right: '0.75rem',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: '#888'
                                }}
                            >
                                ✕
                            </button>
                        )}
                    </div>

                    {/* View Switcher & Result Count */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted-light)', fontWeight: 500 }}>
                            Showing <strong>{filteredPrograms.length}</strong> of {clubProgramsData.length} programs
                        </span>

                        <div style={{
                            display: 'flex',
                            backgroundColor: 'rgba(87, 43, 158, 0.08)',
                            borderRadius: 'var(--radius-sm)',
                            padding: '0.2rem'
                        }}>
                            <button
                                onClick={() => setViewMode('matrix')}
                                style={{
                                    border: 'none',
                                    padding: '0.4rem 0.8rem',
                                    borderRadius: 'var(--radius-sm)',
                                    cursor: 'pointer',
                                    fontFamily: 'inherit',
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                    backgroundColor: viewMode === 'matrix' ? 'rgb(var(--color-primary))' : 'transparent',
                                    color: viewMode === 'matrix' ? '#fff' : 'rgb(var(--color-primary-dark))',
                                    transition: 'all 150ms'
                                }}
                            >
                                📊 Matrix Table
                            </button>
                            <button
                                onClick={() => setViewMode('cards')}
                                style={{
                                    border: 'none',
                                    padding: '0.4rem 0.8rem',
                                    borderRadius: 'var(--radius-sm)',
                                    cursor: 'pointer',
                                    fontFamily: 'inherit',
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                    backgroundColor: viewMode === 'cards' ? 'rgb(var(--color-primary))' : 'transparent',
                                    color: viewMode === 'cards' ? '#fff' : 'rgb(var(--color-primary-dark))',
                                    transition: 'all 150ms'
                                }}
                            >
                                🃏 Card Grid
                            </button>
                        </div>
                    </div>
                </div>

                {/* Filter Pill Selectors */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center', paddingTop: '0.5rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                    
                    {/* Discipline filter */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted-light)', letterSpacing: '0.03em' }}>
                            Discipline:
                        </span>
                        <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
                            {[
                                { id: 'all', label: 'All' },
                                { id: 'XC', label: 'Cross-Country (XC)' },
                                { id: 'Gravity', label: 'Enduro & Downhill' },
                                { id: 'Multi', label: 'Multi-Discipline' }
                            ].map((btn) => (
                                <button
                                    key={btn.id}
                                    onClick={() => setDisciplineFilter(btn.id)}
                                    style={{
                                        border: '1px solid',
                                        borderColor: disciplineFilter === btn.id ? 'rgb(var(--color-primary))' : 'rgba(0,0,0,0.15)',
                                        backgroundColor: disciplineFilter === btn.id ? 'rgb(var(--color-primary))' : '#fff',
                                        color: disciplineFilter === btn.id ? '#fff' : 'inherit',
                                        padding: '0.3rem 0.65rem',
                                        borderRadius: 'var(--radius-full)',
                                        fontSize: '0.8rem',
                                        cursor: 'pointer',
                                        fontWeight: disciplineFilter === btn.id ? 700 : 500
                                    }}
                                >
                                    {btn.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Level filter */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted-light)', letterSpacing: '0.03em' }}>
                            Level:
                        </span>
                        <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
                            {[
                                { id: 'all', label: 'All Levels' },
                                { id: 'devo', label: 'Levels 1–2 (Devo / Rec)' },
                                { id: 'comp', label: 'Level 3 (Competitive / I-Cup)' },
                                { id: 'national', label: 'Levels 4–5 (National / Elite)' }
                            ].map((btn) => (
                                <button
                                    key={btn.id}
                                    onClick={() => setLevelFilter(btn.id)}
                                    style={{
                                        border: '1px solid',
                                        borderColor: levelFilter === btn.id ? 'rgb(var(--color-primary))' : 'rgba(0,0,0,0.15)',
                                        backgroundColor: levelFilter === btn.id ? 'rgb(var(--color-primary))' : '#fff',
                                        color: levelFilter === btn.id ? '#fff' : 'inherit',
                                        padding: '0.3rem 0.65rem',
                                        borderRadius: 'var(--radius-full)',
                                        fontSize: '0.8rem',
                                        cursor: 'pointer',
                                        fontWeight: levelFilter === btn.id ? 700 : 500
                                    }}
                                >
                                    {btn.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Cost filter */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted-light)', letterSpacing: '0.03em' }}>
                            Base Fee:
                        </span>
                        <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
                            {[
                                { id: 'all', label: 'All Costs' },
                                { id: 'free-low', label: 'Free / Under $200' },
                                { id: 'moderate', label: '$200–$1,000' },
                                { id: 'high', label: '$1,000+' },
                                { id: 'inquire', label: 'Inquire Directly' }
                            ].map((btn) => (
                                <button
                                    key={btn.id}
                                    onClick={() => setCostFilter(btn.id)}
                                    style={{
                                        border: '1px solid',
                                        borderColor: costFilter === btn.id ? 'rgb(var(--color-primary))' : 'rgba(0,0,0,0.15)',
                                        backgroundColor: costFilter === btn.id ? 'rgb(var(--color-primary))' : '#fff',
                                        color: costFilter === btn.id ? '#fff' : 'inherit',
                                        padding: '0.3rem 0.65rem',
                                        borderRadius: 'var(--radius-full)',
                                        fontSize: '0.8rem',
                                        cursor: 'pointer',
                                        fontWeight: costFilter === btn.id ? 700 : 500
                                    }}
                                >
                                    {btn.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {(disciplineFilter !== 'all' || levelFilter !== 'all' || costFilter !== 'all' || searchQuery) && (
                        <button
                            onClick={resetFilters}
                            style={{
                                border: 'none',
                                background: 'none',
                                color: 'rgb(var(--color-primary))',
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                textDecoration: 'underline',
                                cursor: 'pointer',
                                padding: '0.2rem 0.5rem'
                            }}
                        >
                            Reset All Filters
                        </button>
                    )}
                </div>
            </div>

            {/* Result Display: Matrix or Cards */}
            {filteredPrograms.length === 0 ? (
                <div style={{
                    backgroundColor: '#fff',
                    borderRadius: 'var(--radius-md)',
                    padding: '3rem',
                    textAlign: 'center',
                    border: '1px solid var(--border-color)',
                    marginBottom: '2rem'
                }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🔍</div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>No programs match your current filters</h3>
                    <p style={{ color: 'var(--color-text-muted-light)', marginBottom: '1.5rem' }}>
                        Try broadening your search keywords or resetting your discipline and cost filters.
                    </p>
                    <button
                        onClick={resetFilters}
                        className="btn btn-primary"
                        style={{ padding: '0.5rem 1.25rem', borderRadius: 'var(--radius-full)', cursor: 'pointer' }}
                    >
                        Reset All Filters
                    </button>
                </div>
            ) : viewMode === 'matrix' ? (
                
                /* ================= MATRIX TABLE VIEW ================= */
                <div style={{
                    backgroundColor: '#fff',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow-md)',
                    overflow: 'hidden',
                    marginBottom: '2.5rem'
                }}>
                    <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                        <table style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            textAlign: 'left',
                            fontSize: '0.875rem'
                        }}>
                            <thead>
                                <tr style={{
                                    backgroundColor: 'rgba(87, 43, 158, 0.06)',
                                    borderBottom: '2px solid rgba(87, 43, 158, 0.2)',
                                    color: 'rgb(var(--color-primary-dark))',
                                    fontFamily: 'var(--font-brand)',
                                    letterSpacing: '0.04em',
                                    textTransform: 'uppercase',
                                    fontSize: '0.85rem'
                                }}>
                                    <th style={{ padding: '0.85rem 1rem', whiteSpace: 'nowrap' }}>Club / Program</th>
                                    <th style={{ padding: '0.85rem 0.75rem', whiteSpace: 'nowrap' }}>Discipline</th>
                                    <th style={{ padding: '0.85rem 0.75rem', whiteSpace: 'nowrap' }}>Level</th>
                                    <th style={{ padding: '0.85rem 0.75rem', whiteSpace: 'nowrap' }}>Ages</th>
                                    <th style={{ padding: '0.85rem 0.75rem', whiteSpace: 'nowrap' }}>Location</th>
                                    <th style={{ padding: '0.85rem 0.75rem', whiteSpace: 'nowrap' }}>Base Fee</th>
                                    <th style={{ padding: '0.85rem 0.75rem', minWidth: '180px' }}>Entry Requirements</th>
                                    <th style={{ padding: '0.85rem 0.75rem', minWidth: '220px' }}>Training &amp; Schedule</th>
                                    <th style={{ padding: '0.85rem 0.75rem', minWidth: '200px' }}>Racing &amp; Extras</th>
                                    <th style={{ padding: '0.85rem 1rem', whiteSpace: 'nowrap', textAlign: 'center' }}>Register / Info</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredPrograms.map((prog, idx) => {
                                    const isExpanded = expandedRow === prog.id;
                                    const isEven = idx % 2 === 0;

                                    return (
                                        <Fragment key={prog.id}>
                                            <tr
                                                onClick={() => toggleRow(prog.id)}
                                            style={{
                                                backgroundColor: prog.highlight 
                                                    ? 'rgba(250, 255, 56, 0.12)' 
                                                    : isEven ? '#fff' : 'rgba(0, 0, 0, 0.015)',
                                                borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
                                                cursor: 'pointer',
                                                transition: 'background-color 150ms'
                                            }}
                                        >
                                            {/* Club / Program Name */}
                                            <td style={{ padding: '1rem', verticalAlign: 'top', fontWeight: 600 }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                                    {prog.highlight && (
                                                        <span title="Lehi MTB" style={{ fontSize: '0.9rem' }}>⚡</span>
                                                    )}
                                                    <span style={{ color: 'rgb(var(--color-primary-dark))', fontSize: '0.95rem' }}>
                                                        {prog.club}
                                                    </span>
                                                </div>
                                                <div style={{ color: 'var(--color-secondary)', fontSize: '0.85rem', marginTop: '0.15rem' }}>
                                                    {prog.programName}
                                                </div>
                                                {prog.deadline && (
                                                    <div style={{
                                                        marginTop: '0.35rem',
                                                        display: 'inline-block',
                                                        fontSize: '0.725rem',
                                                        fontWeight: 700,
                                                        padding: '0.15rem 0.45rem',
                                                        borderRadius: 'var(--radius-sm)',
                                                        backgroundColor: prog.urgentDeadline ? '#fee2e2' : 'rgba(87, 43, 158, 0.08)',
                                                        color: prog.urgentDeadline ? '#b91c1c' : 'rgb(var(--color-primary))'
                                                    }}>
                                                        {prog.deadline}
                                                    </div>
                                                )}
                                            </td>

                                            {/* Discipline */}
                                            <td style={{ padding: '1rem 0.75rem', verticalAlign: 'top', whiteSpace: 'nowrap' }}>
                                                <span style={{
                                                    display: 'inline-block',
                                                    padding: '0.2rem 0.5rem',
                                                    borderRadius: 'var(--radius-sm)',
                                                    fontSize: '0.75rem',
                                                    fontWeight: 700,
                                                    backgroundColor: 
                                                        prog.discipline === 'XC' ? '#ecfdf5' :
                                                        prog.discipline === 'Enduro' ? '#eff6ff' :
                                                        prog.discipline === 'Gravity / DH' ? '#fff1f2' : '#f5f3ff',
                                                    color:
                                                        prog.discipline === 'XC' ? '#047857' :
                                                        prog.discipline === 'Enduro' ? '#1d4ed8' :
                                                        prog.discipline === 'Gravity / DH' ? '#be123c' : '#6d28d9'
                                                }}>
                                                    {prog.discipline}
                                                </span>
                                            </td>

                                            {/* Level */}
                                            <td style={{ padding: '1rem 0.75rem', verticalAlign: 'top', whiteSpace: 'nowrap' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                    <span style={{
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        width: '20px',
                                                        height: '20px',
                                                        borderRadius: '50%',
                                                        backgroundColor: 
                                                            prog.level === 5 ? '#e11d48' :
                                                            prog.level === 4 ? '#7c3aed' :
                                                            prog.level === 3 ? '#2563eb' :
                                                            prog.level === 2 ? '#059669' : '#4b5563',
                                                        color: '#fff',
                                                        fontWeight: 700,
                                                        fontSize: '0.75rem'
                                                    }}>
                                                        {prog.level}
                                                    </span>
                                                    <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>
                                                        {prog.level === 5 ? 'Elite' :
                                                         prog.level === 4 ? 'National' :
                                                         prog.level === 3 ? 'Comp' :
                                                         prog.level === 2 ? 'Devo' : 'Rec'}
                                                    </span>
                                                </div>
                                            </td>

                                            {/* Ages */}
                                            <td style={{ padding: '1rem 0.75rem', verticalAlign: 'top', whiteSpace: 'nowrap', fontSize: '0.85rem' }}>
                                                {prog.ages}
                                            </td>

                                            {/* Location */}
                                            <td style={{ padding: '1rem 0.75rem', verticalAlign: 'top', fontSize: '0.85rem' }}>
                                                {prog.location}
                                            </td>

                                            {/* Base Tuition */}
                                            <td style={{ padding: '1rem 0.75rem', verticalAlign: 'top', whiteSpace: 'nowrap' }}>
                                                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'rgb(var(--color-primary-dark))' }}>
                                                    {prog.baseTuition}
                                                </div>
                                                {prog.costNote && (
                                                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted-light)', maxWidth: '140px', marginTop: '0.2rem' }}>
                                                        {prog.costNote}
                                                    </div>
                                                )}
                                            </td>

                                            {/* Entry Requirements */}
                                            <td style={{ padding: '1rem 0.75rem', verticalAlign: 'top', fontSize: '0.825rem', color: '#333' }}>
                                                {prog.entryRequirements}
                                            </td>

                                            {/* Training & Schedule */}
                                            <td style={{ padding: '1rem 0.75rem', verticalAlign: 'top', fontSize: '0.825rem', color: '#444' }}>
                                                {prog.trainingSchedule}
                                            </td>

                                            {/* Racing & Extras */}
                                            <td style={{ padding: '1rem 0.75rem', verticalAlign: 'top', fontSize: '0.825rem', color: '#444' }}>
                                                {prog.racingExtras}
                                            </td>

                                            {/* Register Link */}
                                            <td style={{ padding: '1rem', verticalAlign: 'top', textAlign: 'center' }} onClick={(e) => e.stopPropagation()}>
                                                <a
                                                    href={prog.registrationUrl}
                                                    target={prog.registrationUrl.startsWith('http') ? '_blank' : undefined}
                                                    rel={prog.registrationUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                    style={{
                                                        display: 'inline-block',
                                                        padding: '0.45rem 0.9rem',
                                                        backgroundColor: 'rgb(var(--color-primary))',
                                                        color: '#fff',
                                                        borderRadius: 'var(--radius-sm)',
                                                        fontWeight: 600,
                                                        fontSize: '0.8rem',
                                                        textDecoration: 'none',
                                                        whiteSpace: 'nowrap',
                                                        boxShadow: 'var(--shadow-sm)'
                                                    }}
                                                >
                                                    {prog.registrationLabel} ↗
                                                </a>
                                            </td>
                                        </tr>
                                        {isExpanded && (
                                            <tr key={`${prog.id}-expanded`} style={{ backgroundColor: 'rgba(87, 43, 158, 0.04)' }}>
                                                <td colSpan={10} style={{ padding: '0.85rem 1.25rem', borderBottom: '2px solid rgba(87, 43, 158, 0.15)' }}>
                                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                                                        <div style={{ flex: '1 1 300px' }}>
                                                            <strong style={{ color: 'rgb(var(--color-primary-dark))' }}>About {prog.club} &ndash; {prog.programName}: </strong>
                                                            <span style={{ color: '#333' }}>{prog.description}</span>
                                                        </div>
                                                        {prog.statusNote && (
                                                            <div style={{ fontSize: '0.825rem', color: '#854d0e', backgroundColor: '#fefce8', padding: '0.4rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #fef08a' }}>
                                                                ℹ️ {prog.statusNote}
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                        </Fragment>
                                    );
                                })}
                        </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                
                /* ================= CARD GRID VIEW ================= */
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                    gap: '1.5rem',
                    marginBottom: '2.5rem'
                }}>
                    {filteredPrograms.map((prog) => (
                        <div
                            key={prog.id}
                            style={{
                                backgroundColor: '#fff',
                                borderRadius: 'var(--radius-md)',
                                border: prog.highlight 
                                    ? '2px solid rgb(var(--color-primary))' 
                                    : '1px solid var(--border-color)',
                                padding: '1.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                boxShadow: prog.highlight ? 'var(--shadow-purple)' : 'var(--shadow-sm)',
                                position: 'relative'
                            }}
                        >
                            <div>
                                {/* Header badges */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', gap: '0.5rem' }}>
                                    <div>
                                        <div style={{
                                            fontFamily: 'var(--font-brand)',
                                            fontSize: '1.25rem',
                                            fontWeight: 800,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.02em',
                                            color: 'rgb(var(--color-primary-dark))',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.4rem'
                                        }}>
                                            {prog.highlight && <span>⚡</span>}
                                            {prog.club}
                                        </div>
                                        <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-secondary)' }}>
                                            {prog.programName}
                                        </div>
                                    </div>

                                    {/* Discipline Tag */}
                                    <span style={{
                                        display: 'inline-block',
                                        padding: '0.2rem 0.55rem',
                                        borderRadius: 'var(--radius-sm)',
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        backgroundColor: 
                                            prog.discipline === 'XC' ? '#ecfdf5' :
                                            prog.discipline === 'Enduro' ? '#eff6ff' :
                                            prog.discipline === 'Gravity / DH' ? '#fff1f2' : '#f5f3ff',
                                        color:
                                            prog.discipline === 'XC' ? '#047857' :
                                            prog.discipline === 'Enduro' ? '#1d4ed8' :
                                            prog.discipline === 'Gravity / DH' ? '#be123c' : '#6d28d9'
                                    }}>
                                        {prog.discipline}
                                    </span>
                                </div>

                                {/* Level & Cost Bar */}
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '0.5rem 0.75rem',
                                    backgroundColor: 'rgba(87, 43, 158, 0.04)',
                                    borderRadius: 'var(--radius-sm)',
                                    marginBottom: '1rem'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                        <span style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '20px',
                                            height: '20px',
                                            borderRadius: '50%',
                                            backgroundColor: 
                                                prog.level === 5 ? '#e11d48' :
                                                prog.level === 4 ? '#7c3aed' :
                                                prog.level === 3 ? '#2563eb' :
                                                prog.level === 2 ? '#059669' : '#4b5563',
                                            color: '#fff',
                                            fontWeight: 700,
                                            fontSize: '0.75rem'
                                        }}>
                                            {prog.level}
                                        </span>
                                        <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>
                                            {prog.levelLabel}
                                        </span>
                                    </div>

                                    <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'rgb(var(--color-primary-dark))' }}>
                                        {prog.baseTuition}
                                    </div>
                                </div>

                                {/* Key Specs */}
                                <div style={{ fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                                    <div>
                                        <strong style={{ color: 'var(--color-text-muted-light)' }}>Ages: </strong>
                                        <span>{prog.ages}</span>
                                    </div>
                                    <div>
                                        <strong style={{ color: 'var(--color-text-muted-light)' }}>Location: </strong>
                                        <span>{prog.location}</span>
                                    </div>
                                    <div>
                                        <strong style={{ color: 'var(--color-text-muted-light)' }}>Entry: </strong>
                                        <span>{prog.entryRequirements}</span>
                                    </div>
                                    <div>
                                        <strong style={{ color: 'var(--color-text-muted-light)' }}>Training: </strong>
                                        <span>{prog.trainingSchedule}</span>
                                    </div>
                                    <div>
                                        <strong style={{ color: 'var(--color-text-muted-light)' }}>Racing: </strong>
                                        <span>{prog.racingExtras}</span>
                                    </div>
                                </div>

                                {prog.statusNote && (
                                    <div style={{
                                        fontSize: '0.8rem',
                                        color: '#854d0e',
                                        backgroundColor: '#fefce8',
                                        padding: '0.5rem',
                                        borderRadius: 'var(--radius-sm)',
                                        border: '1px solid #fef08a',
                                        marginBottom: '1rem'
                                    }}>
                                        ℹ️ {prog.statusNote}
                                    </div>
                                )}
                            </div>

                            {/* Card Footer / Action */}
                            <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                                    {prog.deadline ? (
                                        <span style={{
                                            fontSize: '0.75rem',
                                            fontWeight: 700,
                                            color: prog.urgentDeadline ? '#b91c1c' : 'rgb(var(--color-primary))'
                                        }}>
                                            ⏱ {prog.deadline}
                                        </span>
                                    ) : (
                                        <span />
                                    )}

                                    <a
                                        href={prog.registrationUrl}
                                        target={prog.registrationUrl.startsWith('http') ? '_blank' : undefined}
                                        rel={prog.registrationUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        style={{
                                            padding: '0.5rem 1rem',
                                            backgroundColor: 'rgb(var(--color-primary))',
                                            color: '#fff',
                                            borderRadius: 'var(--radius-sm)',
                                            fontWeight: 600,
                                            fontSize: '0.85rem',
                                            textDecoration: 'none',
                                            boxShadow: 'var(--shadow-sm)'
                                        }}
                                    >
                                        {prog.registrationLabel} ↗
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Educational Section: "Reading the Matrix" */}
            <div style={{
                backgroundColor: '#fff',
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
                border: '1px solid var(--border-color)',
                marginBottom: '2.5rem',
                boxShadow: 'var(--shadow-sm)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>📖</span>
                    <h2 style={{
                        fontFamily: 'var(--font-brand)',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.03em',
                        color: 'rgb(var(--color-primary-dark))',
                        margin: 0
                    }}>
                        Reading the Matrix &amp; Program Guide
                    </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    
                    {/* Levels breakdown */}
                    <div style={{
                        backgroundColor: 'rgba(87, 43, 158, 0.03)',
                        padding: '1.25rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid rgba(87, 43, 158, 0.1)'
                    }}>
                        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.75rem', color: 'rgb(var(--color-primary))' }}>
                            Competition Levels (1 to 5)
                        </h3>
                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted-light)', marginBottom: '0.75rem' }}>
                            Level runs 1 to 5 and reflects stated entry requirements, intensity, and race calendar expectations:
                        </p>
                        <ul style={{ paddingLeft: '1.2rem', fontSize: '0.85rem', lineHeight: 1.6, color: '#333' }}>
                            <li>
                                <strong>Level 1 · Recreational:</strong> Focus on fun, trail etiquette, safe riding fundamentals, and fitness without racing expectations.
                            </li>
                            <li>
                                <strong>Level 2 · Development:</strong> Skill progression, endurance base-building, cornering, and preparing riders for high school or entry racing.
                            </li>
                            <li>
                                <strong>Level 3 · Competitive:</strong> Local and regional racing series, including the Intermountain Cup (I-Cup) and Utah Gravity Series.
                            </li>
                            <li>
                                <strong>Level 4 · National:</strong> USA Cycling National Championships, Soldier Hollow Pro XCT, and USAC Pro Downhill series preparation.
                            </li>
                            <li>
                                <strong>Level 5 · Elite:</strong> UCI Junior World Cups, international team selection, and professional cycling pathways.
                            </li>
                        </ul>
                    </div>

                    {/* Fee Transparency */}
                    <div style={{
                        backgroundColor: 'rgba(87, 43, 158, 0.03)',
                        padding: '1.25rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid rgba(87, 43, 158, 0.1)'
                    }}>
                        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.75rem', color: 'rgb(var(--color-primary))' }}>
                            Fee Transparency &amp; Published Costs
                        </h3>
                        <ul style={{ paddingLeft: '1.2rem', fontSize: '0.85rem', lineHeight: 1.6, color: '#333' }}>
                            <li style={{ marginBottom: '0.5rem' }}>
                                <strong>Published Base Tuition:</strong> Fees listed are the published base for the 2026–27 season. Specialized coaching camps, weekend travel, USA Cycling annual licenses, race entry fees, and extra team kit usually cost more.
                            </li>
                            <li style={{ marginBottom: '0.5rem' }}>
                                <strong>&quot;Not Posted&quot; Programs:</strong> Means the tuition wasn&apos;t published on a public webpage. Maybird, Summit Bike Club (site under redesign), Aspire, and RaceKraft require direct email inquiries.
                            </li>
                            <li style={{ marginBottom: '0.5rem' }}>
                                <strong>Grassroots &amp; Free Options:</strong> Community clubs like VeloLove operate with volunteer coaches and have free or nominal costs, while Lehi&apos;s spring program is kept at an accessible $150 flat fee.
                            </li>
                        </ul>
                    </div>

                    {/* How Clubs Complement NICA */}
                    <div style={{
                        backgroundColor: 'rgba(87, 43, 158, 0.03)',
                        padding: '1.25rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid rgba(87, 43, 158, 0.1)'
                    }}>
                        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.75rem', color: 'rgb(var(--color-primary))' }}>
                            How Club Teams Complement Lehi MTB
                        </h3>
                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted-light)', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                            Utah High School Cycling League (NICA) runs from June 1st through mid-October. Non-NICA club teams operate primarily in the <strong>winter and spring</strong> (February through May).
                        </p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted-light)', lineHeight: 1.6 }}>
                            Riding with a spring club or offseason program provides structured base miles, technical skill refinement, and spring racing exposure so athletes arrive at June team practices strong, confident, and race-ready.
                        </p>
                    </div>
                </div>
            </div>

            {/* Quick Contact & Action Callout */}
            <div style={{
                textAlign: 'center',
                padding: '2.5rem',
                background: 'linear-gradient(135deg, rgba(87, 43, 158, 0.08) 0%, rgba(250, 255, 56, 0.08) 100%)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-color)',
                marginBottom: '3rem'
            }}>
                <h3 style={{
                    fontFamily: 'var(--font-brand)',
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    color: 'rgb(var(--color-primary-dark))',
                    marginBottom: '0.75rem'
                }}>
                    Have Questions About Which Team Is Right For Your Rider?
                </h3>
                <p style={{
                    maxWidth: '640px',
                    margin: '0 auto 1.5rem',
                    color: 'var(--color-text-muted-light)',
                    fontSize: '0.95rem',
                    lineHeight: 1.5
                }}>
                    Talk to your Lehi MTB coaching staff! We are happy to help riders and parents evaluate goals, bike compatibility, budget, and commitment to choose the right offseason development path.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <Link
                        href="/coaches"
                        className="btn btn-primary"
                        style={{
                            padding: '0.65rem 1.5rem',
                            borderRadius: 'var(--radius-full)',
                            fontWeight: 700,
                            textDecoration: 'none'
                        }}
                    >
                        Meet Lehi Coaches
                    </Link>
                    <Link
                        href="/training"
                        className="btn btn-secondary"
                        style={{
                            padding: '0.65rem 1.5rem',
                            borderRadius: 'var(--radius-full)',
                            fontWeight: 700,
                            textDecoration: 'none'
                        }}
                    >
                        View Training Plans
                    </Link>
                </div>
            </div>

        </div>
    );
}
