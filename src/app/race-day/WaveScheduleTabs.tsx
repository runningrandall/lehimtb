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

export default function WaveScheduleTabs() {
    const [activeDay, setActiveDay] = useState<'friday' | 'saturday' | 'logistics'>('friday');

    return (
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
            {/* Day & Logistics Navigation Tabs */}
            <div style={{
                display: 'flex',
                gap: '0.65rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginBottom: 'var(--spacing-lg)'
            }}>
                <button
                    onClick={() => setActiveDay('friday')}
                    style={{
                        padding: '0.8rem 1.4rem',
                        borderRadius: 'var(--radius-md)',
                        fontWeight: 800,
                        fontSize: '0.975rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        border: '2px solid #ec4899',
                        backgroundColor: activeDay === 'friday' ? '#ec4899' : 'transparent',
                        color: activeDay === 'friday' ? 'white' : '#db2777',
                        boxShadow: activeDay === 'friday' ? '0 4px 14px rgba(236, 72, 153, 0.35)' : 'none'
                    }}
                >
                    📅 Friday, Oct 23 (Waves 1–6)
                </button>

                <button
                    onClick={() => setActiveDay('saturday')}
                    style={{
                        padding: '0.8rem 1.4rem',
                        borderRadius: 'var(--radius-md)',
                        fontWeight: 800,
                        fontSize: '0.975rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        border: '2px solid #3b82f6',
                        backgroundColor: activeDay === 'saturday' ? '#3b82f6' : 'transparent',
                        color: activeDay === 'saturday' ? 'white' : '#2563eb',
                        boxShadow: activeDay === 'saturday' ? '0 4px 14px rgba(59, 130, 246, 0.35)' : 'none'
                    }}
                >
                    📅 Saturday, Oct 24 (Waves 7–12)
                </button>

                <button
                    onClick={() => setActiveDay('logistics')}
                    style={{
                        padding: '0.8rem 1.4rem',
                        borderRadius: 'var(--radius-md)',
                        fontWeight: 800,
                        fontSize: '0.975rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        border: '2px solid #10b981',
                        backgroundColor: activeDay === 'logistics' ? '#10b981' : 'transparent',
                        color: activeDay === 'logistics' ? 'white' : '#059669',
                        boxShadow: activeDay === 'logistics' ? '0 4px 14px rgba(16, 185, 129, 0.35)' : 'none'
                    }}
                >
                    🚵 Pre-Ride &amp; Venue Logistics
                </button>
            </div>

            {/* FRIDAY SCHEDULE */}
            {activeDay === 'friday' && (
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
                            marginBottom: '0.4rem'
                        }}>
                            HIGH SCHOOL ONLY · FRIDAY CHAMPIONSHIP RACING
                        </span>
                        <h2 style={{ fontSize: '1.85rem', marginBottom: '0.25rem' }}>
                            Friday, October 23, 2026 · Wave Schedule
                        </h2>
                        <p className="text-muted" style={{ fontSize: '0.95rem' }}>
                            Waves 1–6 (JV B Boys, JV B Girls, JV C Boys, JV C Girls, Senior Open) · Podiums at 5:30 PM · DJ Dance Party 6:30–8:00 PM
                        </p>
                    </div>

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
            {activeDay === 'saturday' && (
                <div className="animate-fade-in">
                    {/* Header Banner */}
                    <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>
                        <span style={{
                            fontWeight: 800,
                            fontSize: '0.8rem',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: '#3b82f6',
                            background: 'rgba(59,130,246,0.12)',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '4px',
                            display: 'inline-block',
                            marginBottom: '0.4rem'
                        }}>
                            HIGH SCHOOL ONLY · SATURDAY FINALE RACING
                        </span>
                        <h2 style={{ fontSize: '1.85rem', marginBottom: '0.25rem' }}>
                            Saturday, October 24, 2026 · Wave Schedule
                        </h2>
                        <p className="text-muted" style={{ fontSize: '0.95rem' }}>
                            Waves 7–12 (Freshman A Boys, JV A Girls, JV A Boys, Varsity Girls, Varsity Boys) · Podiums &amp; Spirit Awards at ~6:30 PM
                        </p>
                    </div>

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

            {/* PRE-RIDE & VENUE LOGISTICS */}
            {activeDay === 'logistics' && (
                <div className="animate-fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--spacing-lg)' }}>
                    {/* Pre-Ride Rules */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #10b981' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>🚵</span>
                            <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Official Pre-Ride Times &amp; Rules</h3>
                        </div>
                        <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.7, fontSize: '0.875rem' }}>
                            <li><strong>Wednesday, Oct 21:</strong> Course closes at 7:00 PM for setup preparations.</li>
                            <li><strong>Thursday, Oct 22:</strong> Course opens for pre-ride at <strong>3:00 PM</strong> (subject to setup completion) and closes promptly at <strong>6:00 PM</strong>. Registration tent opens at 2:30 PM for pre-ride plates.</li>
                            <li><strong>Friday, Oct 23:</strong> Pre-ride opens <strong>20 minutes after the final racer finishes</strong> and closes at <strong>6:00 PM</strong> (for Saturday athletes).</li>
                            <li><strong>Pre-Ride Plates Required:</strong> Official pre-ride plates must be mounted on bikes for both student-athletes and coaches to access course.</li>
                            <li><strong>Marking Integrity:</strong> Never move or alter any course markings. Direct questions to <code>Jason@utahmtb.org</code>.</li>
                        </ul>
                    </div>

                    {/* Pit Zone Access & Vehicle Gate */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #f59e0b' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>🚗</span>
                            <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Pit Zone Access &amp; Vehicle Gate</h3>
                        </div>
                        <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.7, fontSize: '0.875rem' }}>
                            <li><strong>Thursday Setup:</strong> Pit Zone opens at 3:00 PM (setup permitting). All vehicles out by 8:00 PM.</li>
                            <li><strong>Friday &amp; Saturday Gate:</strong> Pit Zone opens at <strong>6:45 AM</strong> and gates <strong>close strictly at 8:00 AM</strong>!</li>
                            <li><strong>Strict Vehicle Lockout:</strong> Pit Zone gates remain closed until the final rider crosses the finish line each day. Moving vehicles outside scheduled hours can result in revoked team Pit Zone passes.</li>
                            <li><strong>Trailer Towing Safety:</strong> If towing a trailer, ensure chains are attached properly to prevent any dragging and sparks.</li>
                        </ul>
                    </div>

                    {/* Critical Venue Policies */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #ef4444' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>⚠️</span>
                            <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Critical Venue Policies</h3>
                        </div>
                        <ul style={{ paddingLeft: '1.2rem', color: 'rgb(var(--text-muted))', lineHeight: 1.7, fontSize: '0.875rem' }}>
                            <li>
                                <strong style={{ color: '#dc2626' }}>NO VENUE CAMPING:</strong> There is <strong>NO camping permitted at the state championship venue</strong>. Please arrange lodging at local St. George hotels.
                            </li>
                            <li>
                                <strong style={{ color: '#dc2626' }}>NO DOGS ALLOWED:</strong> Dogs are strictly prohibited at all Utah League race venues and pit zones for rider safety.
                            </li>
                            <li>
                                <strong>Call-Ups:</strong> Based on cumulative overall series points from regional races. No spots held for named or number call-ups.
                            </li>
                            <li>
                                <strong>Friday DJ Dance Party:</strong> 6:30–8:00 PM at Pit Zone! Team dinners welcome until 8:00 PM.
                            </li>
                            <li>
                                <strong>Saturday Podiums &amp; Spirit:</strong> Official award ceremony begins at approximately 6:30 PM following venue cleanup.
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
