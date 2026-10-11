'use client';

import React, { useState } from 'react';

// ==========================================
// STATE CHAMPIONSHIPS DATA (OCT 23-24, 2026 - ST. GEORGE, UT)
// ==========================================
interface StateWaveSplit {
    split: string;
    riders: string;
    callUps: string;
    gate: string;
    staging: string;
    start: string;
    pullTime?: string;
}

interface StateWaveGroup {
    wave: string;
    category: string;
    plates: string;
    laps: string;
    maxLapTime: string;
    overallPullTime?: string;
    arrivalTime: string;
    meetingTime: string;
    warmupTime: string;
    splits: StateWaveSplit[];
}

const stateFridayWaves: StateWaveGroup[] = [
    {
        wave: 'Wave 1',
        category: 'JV B Boys',
        plates: '2000–2899',
        laps: '2',
        maxLapTime: '45 min',
        overallPullTime: '9:25 AM',
        arrivalTime: '6:45 AM',
        meetingTime: '7:15 – 7:25 AM',
        warmupTime: '7:25 – 7:55 AM',
        splits: [
            { split: 'JV B Boys (Split 1)', riders: '72', callUps: '1–12', gate: '1', staging: '8:15 AM', start: '8:30 AM' },
            { split: 'JV B Boys (Split 2)', riders: '72', callUps: '13–24', gate: '2', staging: '8:20 AM', start: '8:35 AM' },
            { split: 'JV B Boys (Split 3)', riders: '72', callUps: '25–36', gate: '3', staging: '8:25 AM', start: '8:40 AM', pullTime: '9:25 AM' },
        ],
    },
    {
        wave: 'Wave 2',
        category: 'JV B Boys',
        plates: '2000–2899',
        laps: '2',
        maxLapTime: '45 min',
        overallPullTime: '10:30 AM',
        arrivalTime: '7:30 AM',
        meetingTime: '8:25 – 8:35 AM',
        warmupTime: '8:35 – 9:05 AM',
        splits: [
            { split: 'JV B Boys (Split 4)', riders: '72', callUps: '37–48', gate: '1', staging: '9:25 AM', start: '9:40 AM' },
            { split: 'JV B Boys (Split 5)', riders: '72', callUps: '49+', gate: '2', staging: '9:30 AM', start: '9:45 AM', pullTime: '10:30 AM' },
        ],
    },
    {
        wave: 'Wave 3',
        category: 'JV B Girls',
        plates: '1000–1599',
        laps: '2',
        maxLapTime: '45 min',
        overallPullTime: '11:45 AM',
        arrivalTime: '8:30 AM',
        meetingTime: '9:35 – 9:45 AM',
        warmupTime: '9:45 – 10:15 AM',
        splits: [
            { split: 'JV B Girls (Split 1)', riders: '80', callUps: '1–13', gate: '1', staging: '10:35 AM', start: '10:50 AM' },
            { split: 'JV B Girls (Split 2)', riders: '80', callUps: '14–26', gate: '2', staging: '10:40 AM', start: '10:55 AM' },
            { split: 'JV B Girls (Split 3)', riders: '80', callUps: '27+', gate: '3', staging: '10:45 AM', start: '11:00 AM', pullTime: '11:45 AM' },
        ],
    },
    {
        wave: 'Wave 4',
        category: 'JV C Boys',
        plates: '6000–6899',
        laps: '2',
        maxLapTime: '45 min',
        overallPullTime: '1:00 PM',
        arrivalTime: '9:45 AM',
        meetingTime: '10:50 – 11:00 AM',
        warmupTime: '11:00 – 11:30 AM',
        splits: [
            { split: 'JV C Boys (Split 1)', riders: '80', callUps: '1–13', gate: '1', staging: '11:50 AM', start: '12:05 PM' },
            { split: 'JV C Boys (Split 2)', riders: '80', callUps: '14–26', gate: '2', staging: '11:55 AM', start: '12:10 PM' },
            { split: 'JV C Boys (Split 3)', riders: '80', callUps: '27+', gate: '3', staging: '12:00 PM', start: '12:15 PM', pullTime: '1:00 PM' },
        ],
    },
    {
        wave: 'Wave 5',
        category: 'JV C Girls & Senior Open Girls',
        plates: '4000–4899',
        laps: '2',
        maxLapTime: '45 min',
        overallPullTime: '2:10 PM / 2:15 PM',
        arrivalTime: '11:00 AM',
        meetingTime: '12:05 – 12:15 PM',
        warmupTime: '12:15 – 12:45 PM',
        splits: [
            { split: 'JV C Girls (Split 1)', riders: '90', callUps: '1–14', gate: '1', staging: '1:05 PM', start: '1:20 PM' },
            { split: 'JV C Girls (Split 2)', riders: '90', callUps: '15+', gate: '2', staging: '1:10 PM', start: '1:25 PM', pullTime: '2:10 PM' },
            { split: 'Senior Open Girls', riders: 'TBD', callUps: 'All', gate: '3', staging: '1:15 PM', start: '1:30 PM', pullTime: '2:15 PM' },
        ],
    },
    {
        wave: 'Wave 6',
        category: 'Senior Open Boys',
        plates: 'Senior Open',
        laps: '2',
        maxLapTime: '45 min',
        overallPullTime: '3:30 PM',
        arrivalTime: '12:15 PM',
        meetingTime: '1:20 – 1:30 PM',
        warmupTime: '1:30 – 2:00 PM',
        splits: [
            { split: 'Senior Open Boys (Split 1)', riders: 'TBD', callUps: 'All', gate: '1', staging: '2:20 PM', start: '2:35 PM' },
            { split: 'Senior Open Boys (Split 2)', riders: 'TBD', callUps: 'All', gate: '2', staging: '2:25 PM', start: '2:40 PM' },
            { split: 'Senior Open Boys (Split 3)', riders: 'TBD', callUps: 'All', gate: '3', staging: '2:30 PM', start: '2:45 PM', pullTime: '3:30 PM' },
        ],
    },
];

const stateSaturdayWaves: StateWaveGroup[] = [
    {
        wave: 'Wave 7',
        category: 'Freshman A Boys',
        plates: '3000–3899',
        laps: '2',
        maxLapTime: '45 min',
        overallPullTime: '9:25 AM',
        arrivalTime: '6:45 AM',
        meetingTime: '7:15 – 7:25 AM',
        warmupTime: '7:25 – 7:55 AM',
        splits: [
            { split: 'Freshman A Boys (Split 1)', riders: '80', callUps: '1–13', gate: '1', staging: '8:15 AM', start: '8:30 AM' },
            { split: 'Freshman A Boys (Split 2)', riders: '80', callUps: '14–26', gate: '2', staging: '8:20 AM', start: '8:35 AM' },
            { split: 'Freshman A Boys (Split 3)', riders: '80', callUps: '27+', gate: '3', staging: '8:25 AM', start: '8:40 AM', pullTime: '9:25 AM' },
        ],
    },
    {
        wave: 'Wave 8',
        category: 'JV A Girls',
        plates: '270–540',
        laps: '2',
        maxLapTime: '45 min',
        overallPullTime: '10:40 AM',
        arrivalTime: '7:45 AM',
        meetingTime: '8:30 – 8:40 AM',
        warmupTime: '8:40 – 9:10 AM',
        splits: [
            { split: 'JV A Girls (Split 1)', riders: '60', callUps: '1–10', gate: '1', staging: '9:30 AM', start: '9:45 AM' },
            { split: 'JV A Girls (Split 2)', riders: '60', callUps: '11–20', gate: '2', staging: '9:35 AM', start: '9:50 AM' },
            { split: 'JV A Girls (Split 3)', riders: '60', callUps: '21+', gate: '3', staging: '9:40 AM', start: '9:55 AM', pullTime: '10:40 AM' },
        ],
    },
    {
        wave: 'Wave 9',
        category: 'JV A Boys',
        plates: '5000–5599',
        laps: '3',
        maxLapTime: '70 min',
        overallPullTime: '12:20 PM',
        arrivalTime: '8:45 AM',
        meetingTime: '9:45 – 9:55 AM',
        warmupTime: '9:55 – 10:25 AM',
        splits: [
            { split: 'JV A Boys (Split 1)', riders: '72', callUps: '1–12', gate: '1', staging: '10:45 AM', start: '11:00 AM' },
            { split: 'JV A Boys (Split 2)', riders: '72', callUps: '13–24', gate: '2', staging: '10:50 AM', start: '11:05 AM' },
            { split: 'JV A Boys (Split 3)', riders: '72', callUps: '25–36', gate: '3', staging: '10:55 AM', start: '11:10 AM', pullTime: '12:20 PM' },
        ],
    },
    {
        wave: 'Wave 10',
        category: 'JV A Boys',
        plates: '5000–5599',
        laps: '3',
        maxLapTime: '70 min',
        overallPullTime: '1:50 PM',
        arrivalTime: '10:15 AM',
        meetingTime: '11:15 – 11:25 AM',
        warmupTime: '11:25 – 11:55 AM',
        splits: [
            { split: 'JV A Boys (Split 4)', riders: '72', callUps: '37–48', gate: '1', staging: '12:15 PM', start: '12:30 PM' },
            { split: 'JV A Boys (Split 5)', riders: '72', callUps: '49–60', gate: '2', staging: '12:20 PM', start: '12:35 PM' },
            { split: 'JV A Boys (Split 6)', riders: '72', callUps: '60+', gate: '3', staging: '12:25 PM', start: '12:40 PM', pullTime: '1:50 PM' },
        ],
    },
    {
        wave: 'Wave 11',
        category: 'Varsity Girls',
        plates: '2–269',
        laps: '3',
        maxLapTime: '70 min',
        overallPullTime: '3:20 PM',
        arrivalTime: '11:45 AM',
        meetingTime: '12:50 – 1:00 PM',
        warmupTime: '1:00 – 1:30 PM',
        splits: [
            { split: 'Varsity Girls (Split 1)', riders: '66', callUps: '1–10', gate: '1', staging: '1:50 PM', start: '2:05 PM' },
            { split: 'Varsity Girls (Split 2)', riders: '66', callUps: '11–31', gate: '2', staging: '1:55 PM', start: '2:10 PM', pullTime: '3:20 PM' },
        ],
    },
    {
        wave: 'Wave 12',
        category: 'Varsity Boys',
        plates: '550–819',
        laps: '4',
        maxLapTime: '80 min',
        overallPullTime: '5:05 PM',
        arrivalTime: '1:15 PM',
        meetingTime: '2:20 – 2:30 PM',
        warmupTime: '2:30 – 3:00 PM',
        splits: [
            { split: 'Varsity Boys (Split 1)', riders: '72', callUps: '1–12', gate: '1', staging: '3:20 PM', start: '3:35 PM' },
            { split: 'Varsity Boys (Split 2)', riders: '72', callUps: '13–24', gate: '2', staging: '3:25 PM', start: '3:40 PM' },
            { split: 'Varsity Boys (Split 3)', riders: '72', callUps: '25+', gate: '3', staging: '3:30 PM', start: '3:45 PM', pullTime: '5:05 PM' },
        ],
    },
];

// ==========================================
// RACES 1-3 & RACE 4 REGIONAL DATA
// ==========================================
const races1To3HsWaves = [
    {
        wave: 'Wave 1 - HS',
        arrivalTime: '6:45 AM',
        meetingTime: '7:00 – 7:10 AM',
        warmupTime: '7:10 – 7:40 AM',
        stageTime: '7:45 AM',
        startTime: '8:00 AM',
        categories: [
            { category: 'JVB Boys', time: '8:00 AM', laps: '2' },
            { category: 'JVC Boys', time: '8:05 AM', laps: '2' },
        ]
    },
    {
        wave: 'Wave 2 - HS',
        arrivalTime: '7:30 AM',
        meetingTime: '7:55 – 8:05 AM',
        warmupTime: '8:05 – 8:35 AM',
        stageTime: '8:40 AM',
        startTime: '8:55 AM',
        categories: [
            { category: 'JVA Boys', time: '8:55 AM', laps: '3' },
            { category: 'Fresh A Boys', time: '9:00 AM', laps: '2' },
        ]
    },
    {
        wave: 'Wave 3 - HS',
        arrivalTime: '7:45 AM',
        meetingTime: '9:10 – 9:20 AM',
        warmupTime: '9:20 – 9:50 AM',
        stageTime: '9:55 AM',
        startTime: '10:10 AM',
        categories: [
            { category: 'Varsity Boys', time: '10:10 AM', laps: '4' },
            { category: 'Varsity Girls', time: '10:15 AM', laps: '3' },
        ]
    },
    {
        wave: 'Wave 4 - HS',
        arrivalTime: '7:45 AM',
        meetingTime: '10:35 – 10:45 AM',
        warmupTime: '10:45 – 11:15 AM',
        stageTime: '11:20 AM',
        startTime: '11:35 AM',
        categories: [
            { category: 'JVA Girls', time: '11:35 AM', laps: '2' },
            { category: 'JVB Girls', time: '11:40 AM', laps: '2' },
            { category: 'JVC Girls', time: '11:45 AM', laps: '2' },
        ]
    },
    {
        wave: 'Wave 5 - HS',
        arrivalTime: '7:45 AM',
        meetingTime: '11:40 – 11:50 AM',
        warmupTime: '11:50 AM – 12:20 PM',
        stageTime: '12:25 PM',
        startTime: '12:40 PM',
        categories: [
            { category: 'Fresh B Boys', time: '12:40 PM', laps: '2' },
            { category: 'JV D Boys', time: '12:45 PM', laps: '2' },
        ]
    },
    {
        wave: 'Wave 6 - HS (Single Lap)',
        arrivalTime: '7:45 AM',
        meetingTime: '12:35 – 12:45 PM',
        warmupTime: '12:45 – 1:15 PM',
        stageTime: '1:20 PM',
        startTime: '1:35 PM',
        categories: [
            { category: 'JVE Boys', time: '1:35 PM', laps: '1' },
            { category: 'Fresh C Boys', time: '1:38 PM', laps: '1' },
            { category: 'JVD Girls', time: '1:41 PM', laps: '1' },
            { category: 'Adventure*', time: '1:45 PM', laps: '1', note: 'Non-competitive' },
            { category: 'Adaptive', time: '1:45 PM', laps: '1' },
        ]
    },
];

const race4HsWaves = [
    {
        wave: 'Wave 1 - HS',
        arrivalTime: '6:30 – 7:00 AM',
        meetingTime: '7:00 – 7:10 AM',
        warmupTime: '7:10 – 7:40 AM',
        stageTime: '7:45 AM',
        startTime: '8:00 AM',
        categories: [
            { category: 'JVB Boys', time: '8:00 AM', laps: '2', staging: '7:45 AM', pullTime: '8:45 AM', plates: '2600–2749' },
            { category: 'JVC Boys', time: '8:05 AM', laps: '2', staging: '7:55 AM', pullTime: '8:50 AM', plates: '6150–6299' },
        ]
    },
    {
        wave: 'Wave 2 - HS',
        arrivalTime: '7:00 – 7:45 AM',
        meetingTime: '7:55 – 8:05 AM',
        warmupTime: '8:05 – 8:35 AM',
        stageTime: '8:40 AM',
        startTime: '8:55 AM',
        categories: [
            { category: 'JVA Boys', time: '8:55 AM', laps: '2', staging: '8:40 AM', pullTime: '9:40 AM', plates: '5400–5499' },
            { category: 'Fresh A Boys', time: '9:00 AM', laps: '2', staging: '8:45 AM', pullTime: '9:45 AM', plates: '3600–3749' },
        ]
    },
    {
        wave: 'Wave 3 - HS',
        arrivalTime: '7:45 – 8:40 AM',
        meetingTime: '9:10 – 9:20 AM',
        warmupTime: '9:20 – 9:50 AM',
        stageTime: '9:55 AM',
        startTime: '10:10 AM',
        categories: [
            { category: 'Varsity Boys', time: '10:10 AM', laps: '3', staging: '9:55 AM', pullTime: '11:20 AM', plates: '730–774' },
            { category: 'Varsity Girls', time: '10:15 AM', laps: '2', staging: '10:00 AM', pullTime: '11:00 AM', plates: '180–224' },
        ]
    },
    {
        wave: 'Wave 4 - HS',
        arrivalTime: '9:35 – 10:05 AM',
        meetingTime: '10:35 – 10:45 AM',
        warmupTime: '10:45 – 11:15 AM',
        stageTime: '11:20 AM',
        startTime: '11:35 AM',
        categories: [
            { category: 'JVA Girls', time: '11:35 AM', laps: '2', staging: '11:20 AM', pullTime: '12:20 PM', plates: '450–494' },
            { category: 'JVB Girls', time: '11:40 AM', laps: '2', staging: '11:25 AM', pullTime: '12:25 PM', plates: '1400–1499' },
            { category: 'JVC Girls', time: '11:45 AM', laps: '2', staging: '11:30 AM', pullTime: '12:30 PM', plates: '4600–4749' },
        ]
    },
    {
        wave: 'Wave 5 - HS',
        arrivalTime: '10:40 – 11:10 AM',
        meetingTime: '11:40 – 11:50 AM',
        warmupTime: '11:50 AM – 12:20 PM',
        stageTime: '12:25 PM',
        startTime: '12:40 PM',
        categories: [
            { category: 'Fresh B Boys', time: '12:40 PM', laps: '2', staging: '12:25 PM', pullTime: '1:25 PM', plates: '7600–7749' },
            { category: 'JV D Boys', time: '12:45 PM', laps: '2', staging: '12:30 PM', pullTime: '1:30 PM', plates: '8800–8999' },
        ]
    },
    {
        wave: 'Wave 6 - HS (Single Lap)',
        arrivalTime: '11:35 AM – 12:05 PM',
        meetingTime: '12:35 – 12:45 PM',
        warmupTime: '12:45 – 1:15 PM',
        stageTime: '1:20 PM',
        startTime: '1:35 PM',
        categories: [
            { category: 'JVE Boys', time: '1:35 PM', laps: '1', staging: '1:20 PM', pullTime: 'N/A', plates: '10600–10749' },
            { category: 'Fresh C Boys', time: '1:38 PM', laps: '1', staging: '1:23 PM', pullTime: 'N/A', plates: '30400–30499' },
            { category: 'JVD Girls', time: '1:41 PM', laps: '1', staging: '1:26 PM', pullTime: 'N/A', plates: '20400–20499' },
            { category: 'Adventure*', time: '1:45 PM', laps: '1', staging: '1:29 PM', pullTime: 'N/A', plates: '90400–90499', note: 'Non-competitive' },
            { category: 'Adaptive', time: '1:45 PM', laps: '1', staging: 'N/A', pullTime: 'N/A', plates: 'N/A' },
        ]
    },
];

export default function WaveScheduleTabs() {
    const [activeTab, setActiveTab] = useState<'state' | 'race4' | 'races13' | 'western'>('state');
    const [stateDay, setStateDay] = useState<'friday' | 'saturday' | 'logistics'>('friday');

    return (
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
            {/* Main Tab Navigation Buttons */}
            <div style={{
                display: 'flex',
                gap: '0.5rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginBottom: 'var(--spacing-lg)'
            }}>
                <button
                    onClick={() => setActiveTab('state')}
                    style={{
                        padding: '0.8rem 1.4rem',
                        borderRadius: 'var(--radius-md)',
                        fontWeight: 800,
                        fontSize: '1rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        border: '2px solid #ec4899',
                        backgroundColor: activeTab === 'state' ? '#ec4899' : 'transparent',
                        color: activeTab === 'state' ? 'white' : '#db2777',
                        boxShadow: activeTab === 'state' ? '0 4px 14px rgba(236, 72, 153, 0.35)' : 'none'
                    }}
                >
                    🏆 2026 Utah State Championship (St. George)
                </button>

                <button
                    onClick={() => setActiveTab('race4')}
                    style={{
                        padding: '0.8rem 1.25rem',
                        borderRadius: 'var(--radius-md)',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        border: '2px solid #3b82f6',
                        backgroundColor: activeTab === 'race4' ? '#3b82f6' : 'transparent',
                        color: activeTab === 'race4' ? 'white' : '#2563eb',
                        boxShadow: activeTab === 'race4' ? '0 4px 12px rgba(59, 130, 246, 0.3)' : 'none'
                    }}
                >
                    🚩 Race 4: Regional Championship (Herriman)
                </button>

                <button
                    onClick={() => setActiveTab('races13')}
                    style={{
                        padding: '0.8rem 1.25rem',
                        borderRadius: 'var(--radius-md)',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        border: '2px solid rgb(var(--color-primary))',
                        backgroundColor: activeTab === 'races13' ? 'rgb(var(--color-primary))' : 'transparent',
                        color: activeTab === 'races13' ? 'white' : 'rgb(var(--color-primary))',
                        boxShadow: activeTab === 'races13' ? 'var(--shadow-purple)' : 'none'
                    }}
                >
                    🚩 Races 1–3 (Beaver, Richfield, Panguitch)
                </button>

                <button
                    onClick={() => setActiveTab('western')}
                    style={{
                        padding: '0.8rem 1.25rem',
                        borderRadius: 'var(--radius-md)',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        border: '2px solid #8b5cf6',
                        backgroundColor: activeTab === 'western' ? '#8b5cf6' : 'transparent',
                        color: activeTab === 'western' ? 'white' : '#7c3aed',
                        boxShadow: activeTab === 'western' ? '0 4px 12px rgba(139, 92, 246, 0.3)' : 'none'
                    }}
                >
                    ⭐ NICA Western Regionals (Post-Season)
                </button>
            </div>

            {/* TAB 1: 2026 UTAH STATE CHAMPIONSHIP */}
            {activeTab === 'state' && (
                <div className="animate-fade-in">
                    {/* Header Banner */}
                    <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>
                        <span style={{
                            fontWeight: 800,
                            fontSize: '0.8rem',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: '#ec4899',
                            background: 'rgba(236,72,153,0.12)',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '4px',
                            display: 'inline-block',
                            marginBottom: '0.5rem'
                        }}>
                            HIGH SCHOOL ONLY · QUALIFIED ATHLETES · 2-DAY CHAMPIONSHIP
                        </span>
                        <h2 style={{ fontSize: '2rem', marginBottom: '0.35rem' }}>
                            2026 Utah State Championship Wave Schedule
                        </h2>
                        <p className="text-muted" style={{ fontSize: '1.05rem', maxWidth: '750px', margin: '0 auto' }}>
                            October 23–24, 2026 · St. George, Utah · Each Friday &amp; Saturday, 1 male and 1 female state champion is crowned in every category!
                        </p>
                    </div>

                    {/* Sub-Day Navigation (Friday vs Saturday vs Logistics) */}
                    <div style={{
                        display: 'flex',
                        gap: '0.5rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        marginBottom: 'var(--spacing-lg)'
                    }}>
                        <button
                            onClick={() => setStateDay('friday')}
                            style={{
                                padding: '0.65rem 1.25rem',
                                borderRadius: 'var(--radius-sm)',
                                fontWeight: 700,
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                transition: 'all 0.15s ease',
                                border: '2px solid #ec4899',
                                backgroundColor: stateDay === 'friday' ? '#ec4899' : 'rgba(236, 72, 153, 0.08)',
                                color: stateDay === 'friday' ? 'white' : '#db2777'
                            }}
                        >
                            📅 Friday, Oct 23 (Waves 1–6)
                        </button>

                        <button
                            onClick={() => setStateDay('saturday')}
                            style={{
                                padding: '0.65rem 1.25rem',
                                borderRadius: 'var(--radius-sm)',
                                fontWeight: 700,
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                transition: 'all 0.15s ease',
                                border: '2px solid #3b82f6',
                                backgroundColor: stateDay === 'saturday' ? '#3b82f6' : 'rgba(59, 130, 246, 0.08)',
                                color: stateDay === 'saturday' ? 'white' : '#2563eb'
                            }}
                        >
                            📅 Saturday, Oct 24 (Waves 7–12)
                        </button>

                        <button
                            onClick={() => setStateDay('logistics')}
                            style={{
                                padding: '0.65rem 1.25rem',
                                borderRadius: 'var(--radius-sm)',
                                fontWeight: 700,
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                transition: 'all 0.15s ease',
                                border: '2px solid #10b981',
                                backgroundColor: stateDay === 'logistics' ? '#10b981' : 'rgba(16, 185, 129, 0.08)',
                                color: stateDay === 'logistics' ? 'white' : '#059669'
                            }}
                        >
                            🏕️ Logistics, Pre-Ride &amp; Camping Rules
                        </button>
                    </div>

                    {/* FRIDAY SCHEDULE */}
                    {stateDay === 'friday' && (
                        <div className="animate-fade-in">
                            {/* Friday Event Timeline Highlights */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                                gap: '0.6rem',
                                marginBottom: 'var(--spacing-md)',
                                textAlign: 'center'
                            }}>
                                <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(236,72,153,0.1)', border: '1px solid rgba(236,72,153,0.25)' }}>
                                    <span style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', color: '#db2777', display: 'block' }}>Pit Zone Opens</span>
                                    <span style={{ fontWeight: 800, fontSize: '0.95rem' }}>6:45 AM</span>
                                </div>
                                <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(250,255,56,0.15)', border: '1px solid rgba(250,255,56,0.4)' }}>
                                    <span style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', color: 'rgb(120,100,0)', display: 'block' }}>Head Coach Mtg</span>
                                    <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'rgb(120,100,0)' }}>7:00 AM</span>
                                </div>
                                <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
                                    <span style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', color: '#2563eb', display: 'block' }}>Lost Plates Reg</span>
                                    <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#2563eb' }}>7:30 AM</span>
                                </div>
                                <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)' }}>
                                    <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#dc2626', display: 'block' }}>Pit Closes / Anthem</span>
                                    <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#dc2626' }}>8:00 AM</span>
                                </div>
                                <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(236,72,153,0.12)', border: '1px solid rgba(236,72,153,0.3)' }}>
                                    <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#be185d', display: 'block' }}>Waves 1–6 Racing</span>
                                    <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#be185d' }}>8:30 AM – 3:30 PM</span>
                                </div>
                                <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}>
                                    <span style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', color: '#059669', display: 'block' }}>Podium Ceremony</span>
                                    <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#047857' }}>5:30 PM (approx)</span>
                                </div>
                                <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.3)' }}>
                                    <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#7c3aed', display: 'block' }}>DJ Dance Party!</span>
                                    <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#7c3aed' }}>6:30 – 8:00 PM</span>
                                </div>
                            </div>

                            {/* Friday Pit Zone & Party Notice */}
                            <div style={{
                                background: 'linear-gradient(135deg, rgba(236,72,153,0.08), rgba(139,92,246,0.08))',
                                border: '1px solid rgba(236,72,153,0.25)',
                                borderRadius: 'var(--radius-sm)',
                                padding: '0.85rem 1.15rem',
                                marginBottom: '1rem',
                                display: 'flex',
                                gap: '0.85rem',
                                alignItems: 'center'
                            }}>
                                <span style={{ fontSize: '1.4rem' }}>🎉</span>
                                <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.5, color: 'rgb(var(--text-main))' }}>
                                    <strong>Friday Night DJ Dance Party (6:30–8:00 PM):</strong> Pit Zone remains open until <strong>8:00 PM</strong> for team dinners, athlete social parties, and parent hangouts while riders celebrate at the DJ Dance Party! Pre-ride for Saturday riders opens 20 minutes after the final Friday racer finishes until 6:00 PM.
                                </p>
                            </div>

                            {/* Friday Waves Table */}
                            <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #ec4899', overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '860px' }}>
                                    <thead>
                                        <tr style={{ borderBottom: '2px solid var(--border-color)', color: '#be185d' }}>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Wave &amp; Category</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Split / Call-Up Range</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Gate</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Staging Time</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Start Time</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Plates</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Laps</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Pull Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {stateFridayWaves.map((w, waveIdx) => (
                                            w.splits.map((s, splitIdx) => {
                                                const isWaveEven = waveIdx % 2 === 0;
                                                const isLastSplit = splitIdx === w.splits.length - 1;
                                                return (
                                                    <tr
                                                        key={`${w.wave}-${s.split}`}
                                                        style={{
                                                            borderBottom: isLastSplit ? '2px solid rgba(236, 72, 153, 0.35)' : '1px dashed var(--border-color)',
                                                            backgroundColor: isWaveEven ? 'rgba(236, 72, 153, 0.04)' : 'rgba(255, 255, 255, 0.015)'
                                                        }}
                                                    >
                                                        {splitIdx === 0 && (
                                                            <td rowSpan={w.splits.length} style={{
                                                                padding: '0.75rem',
                                                                fontWeight: 700,
                                                                verticalAlign: 'middle',
                                                                borderRight: '1px solid var(--border-color)',
                                                                backgroundColor: isWaveEven ? 'rgba(236, 72, 153, 0.08)' : 'rgba(236, 72, 153, 0.02)'
                                                            }}>
                                                                <div style={{ color: '#be185d', fontWeight: 800, fontSize: '0.95rem' }}>{w.wave}</div>
                                                                <div style={{ fontSize: '0.85rem', color: 'rgb(var(--text-main))' }}>{w.category}</div>
                                                                <div style={{ fontSize: '0.72rem', color: 'rgb(var(--text-muted))', marginTop: '0.2rem' }}>
                                                                    Max Lap: {w.maxLapTime}
                                                                </div>
                                                            </td>
                                                        )}
                                                        <td style={{ padding: '0.75rem', fontWeight: 600 }}>
                                                            <div>{s.split}</div>
                                                            <div style={{ fontSize: '0.75rem', color: 'rgb(var(--text-muted))' }}>
                                                                Call-up: #{s.callUps} ({s.riders} riders)
                                                            </div>
                                                        </td>
                                                        <td style={{ padding: '0.75rem', fontWeight: 700, color: 'rgb(var(--color-primary))' }}>
                                                            Gate {s.gate}
                                                        </td>
                                                        <td style={{ padding: '0.75rem', color: '#2563eb', fontWeight: 700 }}>
                                                            {s.staging}
                                                        </td>
                                                        <td style={{ padding: '0.75rem', color: '#be185d', fontWeight: 800, fontSize: '0.95rem' }}>
                                                            {s.start}
                                                        </td>
                                                        {splitIdx === 0 && (
                                                            <>
                                                                <td rowSpan={w.splits.length} style={{ padding: '0.75rem', verticalAlign: 'middle', fontSize: '0.85rem' }}>
                                                                    {w.plates}
                                                                </td>
                                                                <td rowSpan={w.splits.length} style={{ padding: '0.75rem', verticalAlign: 'middle', fontWeight: 700 }}>
                                                                    {w.laps} Laps
                                                                </td>
                                                            </>
                                                        )}
                                                        <td style={{ padding: '0.75rem', fontWeight: 600, color: '#dc2626' }}>
                                                            {s.pullTime || (splitIdx === w.splits.length - 1 ? w.overallPullTime : '—')}
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* SATURDAY SCHEDULE */}
                    {stateDay === 'saturday' && (
                        <div className="animate-fade-in">
                            {/* Saturday Event Timeline Highlights */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                                gap: '0.6rem',
                                marginBottom: 'var(--spacing-md)',
                                textAlign: 'center'
                            }}>
                                <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)' }}>
                                    <span style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', color: '#2563eb', display: 'block' }}>Pit Zone Opens</span>
                                    <span style={{ fontWeight: 800, fontSize: '0.95rem' }}>6:45 AM</span>
                                </div>
                                <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(250,255,56,0.15)', border: '1px solid rgba(250,255,56,0.4)' }}>
                                    <span style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', color: 'rgb(120,100,0)', display: 'block' }}>Head Coach Mtg</span>
                                    <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'rgb(120,100,0)' }}>7:00 AM</span>
                                </div>
                                <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
                                    <span style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', color: '#2563eb', display: 'block' }}>Lost Plates Reg</span>
                                    <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#2563eb' }}>7:30 AM</span>
                                </div>
                                <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)' }}>
                                    <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#dc2626', display: 'block' }}>Pit Closes / Anthem</span>
                                    <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#dc2626' }}>8:00 AM</span>
                                </div>
                                <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.3)' }}>
                                    <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#1d4ed8', display: 'block' }}>Waves 7–12 Racing</span>
                                    <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#1d4ed8' }}>8:30 AM – 5:05 PM</span>
                                </div>
                                <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}>
                                    <span style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', color: '#059669', display: 'block' }}>Podiums &amp; Spirit Awards</span>
                                    <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#047857' }}>6:30 PM (approx)</span>
                                </div>
                            </div>

                            {/* Saturday Spirit Ceremony Notice */}
                            <div style={{
                                background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(16,185,129,0.08))',
                                border: '1px solid rgba(59,130,246,0.25)',
                                borderRadius: 'var(--radius-sm)',
                                padding: '0.85rem 1.15rem',
                                marginBottom: '1rem',
                                display: 'flex',
                                gap: '0.85rem',
                                alignItems: 'center'
                            }}>
                                <span style={{ fontSize: '1.4rem' }}>🏆</span>
                                <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.5, color: 'rgb(var(--text-main))' }}>
                                    <strong>Saturday Grand Finale:</strong> Varsity Boys race up to 4 laps (80 min max lap time), followed by the official Utah League <strong>Podiums &amp; Spirit Award Ceremony at 6:30 PM</strong>! Stay to celebrate our Lehi racers and spirit honors!
                                </p>
                            </div>

                            {/* Saturday Waves Table */}
                            <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #3b82f6', overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '860px' }}>
                                    <thead>
                                        <tr style={{ borderBottom: '2px solid var(--border-color)', color: '#1d4ed8' }}>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Wave &amp; Category</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Split / Call-Up Range</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Gate</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Staging Time</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Start Time</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Plates</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Laps</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Pull Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {stateSaturdayWaves.map((w, waveIdx) => (
                                            w.splits.map((s, splitIdx) => {
                                                const isWaveEven = waveIdx % 2 === 0;
                                                const isLastSplit = splitIdx === w.splits.length - 1;
                                                return (
                                                    <tr
                                                        key={`${w.wave}-${s.split}`}
                                                        style={{
                                                            borderBottom: isLastSplit ? '2px solid rgba(59, 130, 246, 0.35)' : '1px dashed var(--border-color)',
                                                            backgroundColor: isWaveEven ? 'rgba(59, 130, 246, 0.04)' : 'rgba(255, 255, 255, 0.015)'
                                                        }}
                                                    >
                                                        {splitIdx === 0 && (
                                                            <td rowSpan={w.splits.length} style={{
                                                                padding: '0.75rem',
                                                                fontWeight: 700,
                                                                verticalAlign: 'middle',
                                                                borderRight: '1px solid var(--border-color)',
                                                                backgroundColor: isWaveEven ? 'rgba(59, 130, 246, 0.08)' : 'rgba(59, 130, 246, 0.02)'
                                                            }}>
                                                                <div style={{ color: '#1d4ed8', fontWeight: 800, fontSize: '0.95rem' }}>{w.wave}</div>
                                                                <div style={{ fontSize: '0.85rem', color: 'rgb(var(--text-main))' }}>{w.category}</div>
                                                                <div style={{ fontSize: '0.72rem', color: 'rgb(var(--text-muted))', marginTop: '0.2rem' }}>
                                                                    Max Lap: {w.maxLapTime}
                                                                </div>
                                                            </td>
                                                        )}
                                                        <td style={{ padding: '0.75rem', fontWeight: 600 }}>
                                                            <div>{s.split}</div>
                                                            <div style={{ fontSize: '0.75rem', color: 'rgb(var(--text-muted))' }}>
                                                                Call-up: #{s.callUps} ({s.riders} riders)
                                                            </div>
                                                        </td>
                                                        <td style={{ padding: '0.75rem', fontWeight: 700, color: 'rgb(var(--color-primary))' }}>
                                                            Gate {s.gate}
                                                        </td>
                                                        <td style={{ padding: '0.75rem', color: '#2563eb', fontWeight: 700 }}>
                                                            {s.staging}
                                                        </td>
                                                        <td style={{ padding: '0.75rem', color: '#1d4ed8', fontWeight: 800, fontSize: '0.95rem' }}>
                                                            {s.start}
                                                        </td>
                                                        {splitIdx === 0 && (
                                                            <>
                                                                <td rowSpan={w.splits.length} style={{ padding: '0.75rem', verticalAlign: 'middle', fontSize: '0.85rem' }}>
                                                                    {w.plates}
                                                                </td>
                                                                <td rowSpan={w.splits.length} style={{ padding: '0.75rem', verticalAlign: 'middle', fontWeight: 700 }}>
                                                                    {w.laps} Laps
                                                                </td>
                                                            </>
                                                        )}
                                                        <td style={{ padding: '0.75rem', fontWeight: 600, color: '#dc2626' }}>
                                                            {s.pullTime || (splitIdx === w.splits.length - 1 ? w.overallPullTime : '—')}
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* LOGISTICS & CAMPING */}
                    {stateDay === 'logistics' && (
                        <div className="animate-fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--spacing-lg)' }}>
                            {/* Pre-Ride Rules */}
                            <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #10b981' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                    <span style={{ fontSize: '1.5rem' }}>🚵</span>
                                    <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Official Pre-Ride Times &amp; Rules</h3>
                                </div>
                                <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.6, fontSize: '0.875rem' }}>
                                    <li><strong>Wednesday, Oct 21:</strong> Course closes at 7:00 PM for setup preparations.</li>
                                    <li><strong>Thursday, Oct 22:</strong> Course opens at <strong>3:00 PM</strong> (subject to setup completion) and closes promptly at <strong>6:00 PM</strong>. Registration opens at 2:30 PM for pre-ride plates.</li>
                                    <li><strong>Friday, Oct 23:</strong> Pre-ride opens <strong>20 minutes after the final racer finishes</strong> and closes at <strong>6:00 PM</strong> (for Saturday athletes).</li>
                                    <li><strong>Pre-Ride Plates Required:</strong> Official pre-ride plates must be mounted on bikes for both student-athletes and coaches to access course.</li>
                                    <li><strong>Marking Integrity:</strong> Never move or alter any course markings. Direct questions to <code>Jason@utahmtb.org</code>.</li>
                                </ul>
                            </div>

                            {/* Camping & Fire Safety */}
                            <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #ef4444' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                    <span style={{ fontSize: '1.5rem' }}>🔥</span>
                                    <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Camping &amp; Fire Regulations</h3>
                                </div>
                                <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.6, fontSize: '0.875rem' }}>
                                    <li><strong>Venue Camping:</strong> There is <strong>NO on-site camping</strong> at the race venue. Plenty of dispersed BLM camping is available across the highway.</li>
                                    <li><strong>🚫 NO Wood-Burning Campfires:</strong> Strict prohibition across all league race events.</li>
                                    <li><strong>🚫 NO Charcoal BBQs or Grills:</strong> Not permitted at any league race.</li>
                                    <li><strong>🚫 NO Propane Fire Pits:</strong> Propane fire pits are NOT permitted at this venue.</li>
                                    <li><strong>✅ Propane Cookstoves OK:</strong> Propane stoves and BBQs used for cooking with an on/off valve are permitted.</li>
                                    <li><strong>Trailer Chains:</strong> Ensure safety chains are secured properly to avoid dragging and causing sparks. Pack out all trash!</li>
                                </ul>
                            </div>

                            {/* Pit Zone Access & Parking */}
                            <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #f59e0b' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                    <span style={{ fontSize: '1.5rem' }}>🚗</span>
                                    <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Pit Zone Access &amp; Vehicle Gate</h3>
                                </div>
                                <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.6, fontSize: '0.875rem' }}>
                                    <li><strong>Thursday Setup:</strong> Pit Zone opens at 3:00 PM (setup permitting). All vehicles out by 8:00 PM.</li>
                                    <li><strong>Friday &amp; Saturday:</strong> Pit Zone opens at <strong>6:45 AM</strong> and gates <strong>close strictly at 8:00 AM</strong>!</li>
                                    <li><strong>Vehicle Lockout:</strong> Pit Zone gates remain closed until the final rider crosses the finish line each day. Moving vehicles outside scheduled hours can result in revoked team Pit Zone passes.</li>
                                    <li><strong>Call-Ups:</strong> Based on cumulative overall series points from regional races. No spots held for named or number call-ups.</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* TAB 2: RACE 4 HERRIMAN (REGIONAL CHAMPIONSHIP) */}
            {activeTab === 'race4' && (
                <div className="animate-fade-in">
                    <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>
                        <span style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2563eb', background: 'rgba(59,130,246,0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px', display: 'inline-block', marginBottom: '0.4rem' }}>
                            REGION 5 · RACE 4 (REGIONAL CHAMPIONSHIP)
                        </span>
                        <h2 style={{ fontSize: '1.75rem' }}>Herriman Regional Championship Schedule</h2>
                        <p className="text-muted">October 10, 2026 · Herriman Trails, UT</p>
                    </div>

                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #3b82f6', overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '820px' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid var(--border-color)', color: '#1d4ed8' }}>
                                    <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Wave</th>
                                    <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Category</th>
                                    <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Min. Arrival</th>
                                    <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Wave Mtg (10m)</th>
                                    <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Warm-Up (30m)</th>
                                    <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Stage Time</th>
                                    <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Start Time</th>
                                    <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Laps</th>
                                </tr>
                            </thead>
                            <tbody>
                                {race4HsWaves.map((w, waveIdx) => (
                                    w.categories.map((cat, idx) => {
                                        const isWaveEven = waveIdx % 2 === 0;
                                        const isLastCategoryInWave = idx === w.categories.length - 1;
                                        return (
                                            <tr
                                                key={cat.category}
                                                style={{
                                                    borderBottom: isLastCategoryInWave ? '2px solid rgba(59, 130, 246, 0.3)' : '1px dashed var(--border-color)',
                                                    backgroundColor: isWaveEven ? 'rgba(59, 130, 246, 0.06)' : 'rgba(255, 255, 255, 0.015)'
                                                }}
                                            >
                                                {idx === 0 && (
                                                    <td rowSpan={w.categories.length} style={{ padding: '0.75rem', fontWeight: 700, verticalAlign: 'middle', borderRight: '1px solid var(--border-color)', backgroundColor: isWaveEven ? 'rgba(59, 130, 246, 0.12)' : 'rgba(59, 130, 246, 0.04)' }}>
                                                        {w.wave}
                                                    </td>
                                                )}
                                                <td style={{ padding: '0.75rem', fontWeight: 600 }}>
                                                    {cat.category}
                                                    {cat.note && <span style={{ display: 'block', fontSize: '0.75rem', color: 'rgb(var(--text-muted))', fontWeight: 400 }}>*{cat.note}</span>}
                                                </td>
                                                {idx === 0 && (
                                                    <>
                                                        <td rowSpan={w.categories.length} style={{ padding: '0.75rem', fontWeight: 600, verticalAlign: 'middle', borderRight: '1px solid var(--border-color)', fontSize: '0.825rem' }}>
                                                            {w.arrivalTime}
                                                        </td>
                                                        <td rowSpan={w.categories.length} style={{ padding: '0.75rem', color: 'rgb(var(--color-primary))', fontWeight: 800, verticalAlign: 'middle', borderRight: '1px solid var(--border-color)', fontSize: '0.85rem' }}>
                                                            {w.meetingTime}
                                                        </td>
                                                        <td rowSpan={w.categories.length} style={{ padding: '0.75rem', color: '#059669', fontWeight: 700, verticalAlign: 'middle', borderRight: '1px solid var(--border-color)', fontSize: '0.85rem' }}>
                                                            {w.warmupTime}
                                                        </td>
                                                    </>
                                                )}
                                                <td style={{ padding: '0.75rem', color: '#2563eb', fontWeight: 700 }}>{cat.staging}</td>
                                                <td style={{ padding: '0.75rem', color: 'rgb(var(--color-primary))', fontWeight: 800 }}>{cat.time}</td>
                                                <td style={{ padding: '0.75rem', fontWeight: 600 }}>{cat.laps} {cat.laps === '1' ? 'Lap' : 'Laps'}</td>
                                            </tr>
                                        );
                                    })
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* TAB 3: RACES 1-3 SCHEDULE */}
            {activeTab === 'races13' && (
                <div className="animate-fade-in">
                    <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>
                        <h2 style={{ fontSize: '1.75rem' }}>Races 1–3 Wave Schedule</h2>
                        <p className="text-muted">Applies to Beaver Mountain (Race 1), Richfield (Race 2), and Panguitch (Race 3).</p>
                    </div>

                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid rgb(var(--color-primary))', overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '820px' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid var(--border-color)', color: 'rgb(var(--color-primary))' }}>
                                    <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Wave</th>
                                    <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Category</th>
                                    <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Min. Arrival</th>
                                    <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Wave Mtg (10m)</th>
                                    <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Warm-Up (30m)</th>
                                    <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Stage Time</th>
                                    <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Start Time</th>
                                    <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase' }}>Laps</th>
                                </tr>
                            </thead>
                            <tbody>
                                {races1To3HsWaves.map((w, waveIdx) => (
                                    w.categories.map((cat, idx) => {
                                        const isWaveEven = waveIdx % 2 === 0;
                                        const isLastCategoryInWave = idx === w.categories.length - 1;
                                        return (
                                            <tr
                                                key={cat.category}
                                                style={{
                                                    borderBottom: isLastCategoryInWave ? '2px solid rgba(87, 43, 158, 0.3)' : '1px dashed var(--border-color)',
                                                    backgroundColor: isWaveEven ? 'rgba(87, 43, 158, 0.06)' : 'rgba(255, 255, 255, 0.015)'
                                                }}
                                            >
                                                {idx === 0 && (
                                                    <td rowSpan={w.categories.length} style={{ padding: '0.75rem', fontWeight: 700, verticalAlign: 'middle', borderRight: '1px solid var(--border-color)', backgroundColor: isWaveEven ? 'rgba(87, 43, 158, 0.12)' : 'rgba(87, 43, 158, 0.04)' }}>
                                                        {w.wave}
                                                    </td>
                                                )}
                                                <td style={{ padding: '0.75rem', fontWeight: 600 }}>
                                                    {cat.category}
                                                    {cat.note && <span style={{ display: 'block', fontSize: '0.75rem', color: 'rgb(var(--text-muted))', fontWeight: 400 }}>*{cat.note}</span>}
                                                </td>
                                                {idx === 0 && (
                                                    <>
                                                        <td rowSpan={w.categories.length} style={{ padding: '0.75rem', fontWeight: 600, verticalAlign: 'middle', borderRight: '1px solid var(--border-color)', fontSize: '0.825rem' }}>
                                                            {w.arrivalTime}
                                                        </td>
                                                        <td rowSpan={w.categories.length} style={{ padding: '0.75rem', color: 'rgb(var(--color-primary))', fontWeight: 800, verticalAlign: 'middle', borderRight: '1px solid var(--border-color)', fontSize: '0.85rem' }}>
                                                            {w.meetingTime}
                                                        </td>
                                                        <td rowSpan={w.categories.length} style={{ padding: '0.75rem', color: '#059669', fontWeight: 700, verticalAlign: 'middle', borderRight: '1px solid var(--border-color)', fontSize: '0.85rem' }}>
                                                            {w.warmupTime}
                                                        </td>
                                                    </>
                                                )}
                                                <td style={{ padding: '0.75rem', color: '#2563eb', fontWeight: 700 }}>{w.stageTime}</td>
                                                <td style={{ padding: '0.75rem', color: 'rgb(var(--color-primary))', fontWeight: 800 }}>{cat.time}</td>
                                                <td style={{ padding: '0.75rem', fontWeight: 600 }}>{cat.laps} {cat.laps === '1' ? 'Lap' : 'Laps'}</td>
                                            </tr>
                                        );
                                    })
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* TAB 4: NICA WESTERN REGIONALS */}
            {activeTab === 'western' && (
                <div className="animate-fade-in">
                    <div className="glass-panel" style={{ padding: 'var(--spacing-xl)', borderTop: '4px solid #8b5cf6', maxWidth: '750px', margin: '0 auto', textAlign: 'center' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>⭐</div>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>NICA Western Regional Championship</h2>
                        <p style={{ fontWeight: 700, color: '#7c3aed', marginBottom: '1rem' }}>Post-Season 2026 · Western Region Venue</p>
                        <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '1.25rem' }}>
                            Bringing together premier high school mountain bike racers from Utah, Idaho, Nevada, California, and across the West. Open to qualified High School student-athletes based on season point standings.
                        </p>
                        <a
                            href="https://events.nationalmtb.org/regionals/western"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                            style={{ display: 'inline-block', fontSize: '0.9rem', padding: '0.65rem 1.25rem' }}
                        >
                            Visit NICA Western Regionals Portal ↗
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}
