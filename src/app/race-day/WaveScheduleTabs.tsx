'use client';

import React, { useState } from 'react';

// Races 1-3 Data (Beaver Mountain, Richfield, Panguitch)
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

const races1To3JdWaves = [
    {
        wave: 'Wave 7 - JD',
        arrivalTime: '12:00 – 12:30 PM',
        meetingTime: '1:30 – 1:40 PM',
        warmupTime: '1:40 – 2:10 PM',
        stageTime: '2:15 PM',
        startTime: '2:30 PM',
        categories: [
            { category: 'Advanced Boys', time: '2:30 PM', laps: '1' },
            { category: 'Interm Boys 8', time: '2:35 PM', laps: '1' },
            { category: 'Interm Boys 7', time: '2:40 PM', laps: '1' },
        ]
    },
    {
        wave: 'Wave 8 - JD',
        arrivalTime: '12:40 – 1:10 PM',
        meetingTime: '2:10 – 2:20 PM',
        warmupTime: '2:20 – 2:50 PM',
        stageTime: '2:55 PM',
        startTime: '3:10 PM',
        categories: [
            { category: 'Advanced Girls', time: '3:10 PM', laps: '1' },
            { category: 'Intermediate Girls', time: '3:15 PM', laps: '1' },
            { category: 'Beginner Girls', time: '3:20 PM', laps: '1' },
        ]
    },
    {
        wave: 'Wave 9 - JD',
        arrivalTime: '1:20 – 1:50 PM',
        meetingTime: '2:50 – 3:00 PM',
        warmupTime: '3:00 – 3:30 PM',
        stageTime: '3:35 PM',
        startTime: '3:50 PM',
        categories: [
            { category: 'Beginner Boys 8', time: '3:50 PM', laps: '1' },
            { category: 'Beginner Boys 7', time: '3:55 PM', laps: '1' },
        ]
    },
];

// Race 4 Data (Herriman Regional Championship)
const race4HsWaves = [
    {
        wave: 'Wave 1 - HS',
        arrivalTime: '6:30 – 7:00 AM',
        meetingTime: '8:00 – 8:10 AM',
        warmupTime: '8:10 – 8:40 AM',
        stageTime: '8:45 AM',
        startTime: '9:00 AM',
        categories: [
            { category: 'JVB Boys', time: '9:00 AM', laps: '2', distance: '11.8 mi', staging: '8:45 AM', pullTime: '9:45 AM', plates: '2600–2749', maxPull: '45 min' },
            { category: 'JVC Boys', time: '9:05 AM', laps: '2', distance: '11.8 mi', staging: '8:55 AM', pullTime: '9:50 AM', plates: '6150–6299', maxPull: '45 min' },
        ]
    },
    {
        wave: 'Wave 2 - HS',
        arrivalTime: '7:00 – 7:55 AM',
        meetingTime: '8:55 – 9:05 AM',
        warmupTime: '9:05 – 9:35 AM',
        stageTime: '9:40 AM',
        startTime: '9:55 AM',
        categories: [
            { category: 'JVA Boys', time: '9:55 AM', laps: '2', distance: '11.8 mi', staging: '9:40 AM', pullTime: '10:40 AM', plates: '5400–5499', maxPull: '45 min' },
            { category: 'Fresh A Boys', time: '10:00 AM', laps: '2', distance: '11.8 mi', staging: '9:45 AM', pullTime: '10:45 AM', plates: '3600–3749', maxPull: '45 min' },
        ]
    },
    {
        wave: 'Wave 3 - HS',
        arrivalTime: '8:40 – 9:10 AM',
        meetingTime: '10:10 – 10:20 AM',
        warmupTime: '10:20 – 10:50 AM',
        stageTime: '10:55 AM',
        startTime: '11:10 AM',
        categories: [
            { category: 'Varsity Boys', time: '11:10 AM', laps: '3', distance: '17.7 mi', staging: '10:55 AM', pullTime: '12:20 PM', plates: '730–774', maxPull: '70 min' },
            { category: 'Varsity Girls', time: '11:15 AM', laps: '2', distance: '11.8 mi', staging: '11:00 AM', pullTime: '12:00 PM', plates: '180–224', maxPull: '45 min' },
        ]
    },
    {
        wave: 'Wave 4 - HS',
        arrivalTime: '10:05 – 10:35 AM',
        meetingTime: '11:35 – 11:45 AM',
        warmupTime: '11:45 AM – 12:15 PM',
        stageTime: '12:20 PM',
        startTime: '12:35 PM',
        categories: [
            { category: 'JVA Girls', time: '12:35 PM', laps: '2', distance: '11.8 mi', staging: '12:20 PM', pullTime: '1:20 PM', plates: '450–494', maxPull: '45 min' },
            { category: 'JVB Girls', time: '12:40 PM', laps: '2', distance: '11.8 mi', staging: '12:25 PM', pullTime: '1:25 PM', plates: '1400–1499', maxPull: '45 min' },
            { category: 'JVC Girls', time: '12:45 PM', laps: '2', distance: '11.8 mi', staging: '12:30 PM', pullTime: '1:30 PM', plates: '4600–4749', maxPull: '45 min' },
        ]
    },
    {
        wave: 'Wave 5 - HS',
        arrivalTime: '11:10 – 11:40 AM',
        meetingTime: '12:40 – 12:50 PM',
        warmupTime: '12:50 – 1:20 PM',
        stageTime: '1:25 PM',
        startTime: '1:40 PM',
        categories: [
            { category: 'Fresh B Boys', time: '1:40 PM', laps: '2', distance: '11.8 mi', staging: '1:25 PM', pullTime: '2:25 PM', plates: '7600–7749', maxPull: '45 min' },
            { category: 'JV D Boys', time: '1:45 PM', laps: '2', distance: '11.8 mi', staging: '1:30 PM', pullTime: '2:30 PM', plates: '8800–8999', maxPull: '45 min' },
        ]
    },
    {
        wave: 'Wave 6 - HS (Single Lap)',
        arrivalTime: '12:05 – 12:35 PM',
        meetingTime: '1:35 – 1:45 PM',
        warmupTime: '1:45 – 2:15 PM',
        stageTime: '2:20 PM',
        startTime: '2:35 PM',
        categories: [
            { category: 'JVE Boys', time: '2:35 PM', laps: '1', distance: '5.9 mi', staging: '2:20 PM', pullTime: 'N/A', plates: '10600–10749', maxPull: 'N/A' },
            { category: 'Fresh C Boys', time: '2:38 PM', laps: '1', distance: '5.9 mi', staging: '2:23 PM', pullTime: 'N/A', plates: '30400–30499', maxPull: 'N/A' },
            { category: 'JVD Girls', time: '2:41 PM', laps: '1', distance: '5.9 mi', staging: '2:26 PM', pullTime: 'N/A', plates: '20400–20499', maxPull: 'N/A' },
            { category: 'Adventure*', time: '2:45 PM', laps: '1', distance: '5.9 mi', staging: '2:30 PM', pullTime: 'N/A', plates: '90400–90499', maxPull: 'N/A', note: 'Non-competitive' },
            { category: 'Adaptive', time: '2:45 PM', laps: '1', distance: '5.9 mi', staging: 'N/A', pullTime: 'N/A', plates: 'N/A', maxPull: 'N/A' },
        ]
    },
];

export default function WaveScheduleTabs() {
    const [activeTab, setActiveTab] = useState<'races13' | 'race4' | 'postseason'>('races13');
    const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

    return (
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
            {/* Tab Navigation Buttons */}
            <div style={{
                display: 'flex',
                gap: '0.5rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginBottom: 'var(--spacing-md)'
            }}>
                <button
                    onClick={() => setActiveTab('races13')}
                    style={{
                        padding: '0.75rem 1.25rem',
                        borderRadius: 'var(--radius-md)',
                        fontWeight: 800,
                        fontSize: '0.95rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        border: '2px solid rgb(var(--color-primary))',
                        backgroundColor: activeTab === 'races13' ? 'rgb(var(--color-primary))' : 'rgba(87, 43, 158, 0.06)',
                        color: activeTab === 'races13' ? '#ffffff' : 'rgb(var(--color-primary))',
                        boxShadow: activeTab === 'races13' ? 'var(--shadow-purple)' : 'none'
                    }}
                >
                    🚩 Races 1–3 Schedule (HS &amp; JD)
                </button>

                <button
                    onClick={() => setActiveTab('race4')}
                    style={{
                        padding: '0.75rem 1.25rem',
                        borderRadius: 'var(--radius-md)',
                        fontWeight: 800,
                        fontSize: '0.95rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        border: '2px solid #2563eb',
                        backgroundColor: activeTab === 'race4' ? '#2563eb' : 'rgba(37, 99, 235, 0.06)',
                        color: activeTab === 'race4' ? '#ffffff' : '#1d4ed8',
                        boxShadow: activeTab === 'race4' ? '0 4px 12px rgba(37, 99, 235, 0.3)' : 'none'
                    }}
                >
                    🏆 Race 4: Regional Championship (Herriman)
                </button>

                <button
                    onClick={() => setActiveTab('postseason')}
                    style={{
                        padding: '0.75rem 1.25rem',
                        borderRadius: 'var(--radius-md)',
                        fontWeight: 800,
                        fontSize: '0.95rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        border: '2px solid #db2777',
                        backgroundColor: activeTab === 'postseason' ? '#db2777' : 'rgba(219, 39, 119, 0.06)',
                        color: activeTab === 'postseason' ? '#ffffff' : '#be185d',
                        boxShadow: activeTab === 'postseason' ? '0 4px 12px rgba(219, 39, 119, 0.3)' : 'none'
                    }}
                >
                    ⭐ State &amp; Western Regionals (HS ONLY)
                </button>
            </div>

            {/* View Format Selector (Cards vs Table) */}
            {activeTab !== 'postseason' && (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: 'var(--spacing-lg)'
                }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        View Format:
                    </span>
                    <button
                        onClick={() => setViewMode('cards')}
                        style={{
                            padding: '0.4rem 0.85rem',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                            border: viewMode === 'cards' ? '2px solid rgb(var(--color-primary))' : '1px solid #cbd5e1',
                            backgroundColor: viewMode === 'cards' ? 'rgba(87, 43, 158, 0.12)' : '#ffffff',
                            color: viewMode === 'cards' ? 'rgb(var(--color-primary))' : '#334155',
                            transition: 'all 0.15s ease'
                        }}
                    >
                        📱 Mobile Cards
                    </button>
                    <button
                        onClick={() => setViewMode('table')}
                        style={{
                            padding: '0.4rem 0.85rem',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                            border: viewMode === 'table' ? '2px solid rgb(var(--color-primary))' : '1px solid #cbd5e1',
                            backgroundColor: viewMode === 'table' ? 'rgba(87, 43, 158, 0.12)' : '#ffffff',
                            color: viewMode === 'table' ? 'rgb(var(--color-primary))' : '#334155',
                            transition: 'all 0.15s ease'
                        }}
                    >
                        📊 Full Table
                    </button>
                </div>
            )}

            {/* TAB 1: RACES 1-3 SCHEDULE */}
            {activeTab === 'races13' && (
                <div className="animate-fade-in">
                    <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>
                        <h2 style={{ fontSize: '1.75rem' }}>Races 1–3 Wave Schedule</h2>
                        <p className="text-muted">Applies to Beaver Mountain (Race 1), Richfield (Race 2), and Panguitch (Race 3).</p>
                    </div>

                    {/* High School Waves */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', marginBottom: 'var(--spacing-lg)', borderTop: '4px solid rgb(var(--color-primary))' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                            <div>
                                <span style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(var(--color-primary))' }}>Morning &amp; Afternoon</span>
                                <h3 style={{ fontSize: '1.5rem', margin: 0 }}>High School Waves (Waves 1–6)</h3>
                            </div>
                        </div>

                        {/* Teammate Support & Early Arrival Note */}
                        <div style={{
                            background: 'rgba(87, 43, 158, 0.08)',
                            border: '1px solid rgba(87, 43, 158, 0.25)',
                            borderRadius: 'var(--radius-sm)',
                            padding: '0.85rem 1.15rem',
                            marginBottom: '1rem',
                            display: 'flex',
                            gap: '0.85rem',
                            alignItems: 'center'
                        }}>
                            <span style={{ fontSize: '1.4rem' }}>📣</span>
                            <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.5, color: '#0f172a' }}>
                                <strong>Teammate Support &amp; Cheering:</strong> High School riders in later waves (Waves 3–6) arrive by <strong>7:45 AM</strong> to cheer on and support teammates racing in morning waves. There is no bench on our team—having a loud Lehi cheer squad out on course makes a huge difference! <em>(Arriving early also ensures racers are on site in case afternoon weather requires condensed start times).</em>
                            </p>
                        </div>

                        {/* HS Venue & Race Time Pills */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                            gap: '0.6rem',
                            marginBottom: '1rem',
                            textAlign: 'center'
                        }}>
                            <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
                                <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#1d4ed8', display: 'block' }}>Pitzone Opens</span>
                                <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0f172a' }}>6:30 AM</span>
                            </div>
                            <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(250,255,56,0.15)', border: '1px solid rgba(250,255,56,0.4)' }}>
                                <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#854d0e', display: 'block' }}>Head Coach Mtg</span>
                                <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#854d0e' }}>7:00 AM</span>
                            </div>
                            <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(87,43,158,0.12)', border: '1px solid rgba(87,43,158,0.25)' }}>
                                <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: 'rgb(var(--color-primary))', display: 'block' }}>HS Races Start</span>
                                <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'rgb(var(--color-primary))' }}>8:00 AM</span>
                            </div>
                            <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(87,43,158,0.12)', border: '1px solid rgba(87,43,158,0.25)' }}>
                                <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: 'rgb(var(--color-primary))', display: 'block' }}>HS Races End</span>
                                <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'rgb(var(--color-primary))' }}>2:15 PM</span>
                            </div>
                            <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}>
                                <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#059669', display: 'block' }}>HS Podiums</span>
                                <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#047857' }}>2:45 – 3:00 PM</span>
                            </div>
                        </div>

                        {viewMode === 'cards' ? (
                            /* Mobile Cards View */
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {races1To3HsWaves.map((w) => (
                                    <div
                                        key={w.wave}
                                        style={{
                                            padding: '1rem',
                                            borderRadius: 'var(--radius-md)',
                                            borderLeft: '5px solid rgb(var(--color-primary))',
                                            backgroundColor: '#ffffff',
                                            border: '1px solid #e2e8f0',
                                            borderLeftWidth: '5px',
                                            boxShadow: 'var(--shadow-sm)'
                                        }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                            <span style={{ fontSize: '1rem', fontWeight: 800, color: 'rgb(var(--color-primary))', backgroundColor: 'rgba(87, 43, 158, 0.12)', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-sm)' }}>
                                                {w.wave}
                                            </span>
                                            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', backgroundColor: '#f1f5f9', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #cbd5e1' }}>
                                                ⏰ Min. Arrival: <strong style={{ color: '#0f172a' }}>{w.arrivalTime}</strong>
                                            </span>
                                        </div>

                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(95px, 1fr))', gap: '0.4rem', marginBottom: '0.85rem', textAlign: 'center' }}>
                                            <div style={{ padding: '0.4rem', borderRadius: '6px', backgroundColor: 'rgba(87, 43, 158, 0.08)', border: '1px solid rgba(87, 43, 158, 0.2)' }}>
                                                <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: 'rgb(var(--color-primary))', display: 'block' }}>Wave Mtg</span>
                                                <strong style={{ fontSize: '0.85rem', color: 'rgb(var(--color-primary))' }}>{w.meetingTime}</strong>
                                            </div>
                                            <div style={{ padding: '0.4rem', borderRadius: '6px', backgroundColor: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
                                                <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#059669', display: 'block' }}>Warm-Up</span>
                                                <strong style={{ fontSize: '0.85rem', color: '#047857' }}>{w.warmupTime}</strong>
                                            </div>
                                            <div style={{ padding: '0.4rem', borderRadius: '6px', backgroundColor: 'rgba(37, 99, 235, 0.08)', border: '1px solid rgba(37, 99, 235, 0.25)' }}>
                                                <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#2563eb', display: 'block' }}>Staging</span>
                                                <strong style={{ fontSize: '0.85rem', color: '#1d4ed8' }}>{w.stageTime}</strong>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                                            {w.categories.map((cat) => (
                                                <div
                                                    key={cat.category}
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        padding: '0.55rem 0.85rem',
                                                        borderRadius: 'var(--radius-sm)',
                                                        backgroundColor: '#f8fafc',
                                                        border: '1px solid #e2e8f0'
                                                    }}
                                                >
                                                    <div>
                                                        <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0f172a' }}>{cat.category}</span>
                                                        {cat.note && <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748b' }}>*{cat.note}</span>}
                                                    </div>
                                                    <div style={{ textAlign: 'right' }}>
                                                        <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'rgb(var(--color-primary))', display: 'block' }}>🚀 {cat.time}</span>
                                                        <span style={{ fontSize: '0.75rem', color: '#475569', fontWeight: 600 }}>{cat.laps} {cat.laps === '1' ? 'Lap' : 'Laps'}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            /* Table View */
                            <div style={{ overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '820px', backgroundColor: '#ffffff', borderRadius: 'var(--radius-sm)' }}>
                                    <thead>
                                        <tr style={{ borderBottom: '2px solid #cbd5e1', color: 'rgb(var(--color-primary))', backgroundColor: '#f8fafc' }}>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 800, color: '#0f172a' }}>Wave</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 800, color: '#0f172a' }}>Category</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 800, color: '#0f172a' }}>Min. Arrival</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 800, color: '#0f172a' }}>Wave Mtg (10m)</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 800, color: '#0f172a' }}>Warm-Up (30m)</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 800, color: '#0f172a' }}>Stage Time</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 800, color: '#0f172a' }}>Start Time</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 800, color: '#0f172a' }}>Laps</th>
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
                                                            borderBottom: isLastCategoryInWave ? '2px solid rgba(87, 43, 158, 0.3)' : '1px dashed #e2e8f0',
                                                            backgroundColor: isWaveEven ? 'rgba(87, 43, 158, 0.05)' : '#ffffff'
                                                        }}
                                                    >
                                                        {idx === 0 && (
                                                            <td rowSpan={w.categories.length} style={{ padding: '0.75rem', fontWeight: 800, color: 'rgb(var(--color-primary))', verticalAlign: 'middle', borderRight: '1px solid #e2e8f0', backgroundColor: isWaveEven ? 'rgba(87, 43, 158, 0.1)' : 'rgba(87, 43, 158, 0.03)' }}>
                                                                {w.wave}
                                                            </td>
                                                        )}
                                                        <td style={{ padding: '0.75rem', fontWeight: 700, color: '#0f172a' }}>
                                                            {cat.category}
                                                            {cat.note && <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', fontWeight: 400 }}>*{cat.note}</span>}
                                                        </td>
                                                        {idx === 0 && (
                                                            <>
                                                                <td rowSpan={w.categories.length} style={{ padding: '0.75rem', fontWeight: 800, verticalAlign: 'middle', borderRight: '1px solid #e2e8f0', fontSize: '0.95rem', color: '#0f172a' }}>
                                                                    {w.arrivalTime}
                                                                </td>
                                                                <td rowSpan={w.categories.length} style={{ padding: '0.75rem', color: 'rgb(var(--color-primary))', fontWeight: 800, verticalAlign: 'middle', borderRight: '1px solid #e2e8f0', fontSize: '0.85rem' }}>
                                                                    {w.meetingTime}
                                                                </td>
                                                                <td rowSpan={w.categories.length} style={{ padding: '0.75rem', color: '#059669', fontWeight: 800, verticalAlign: 'middle', borderRight: '1px solid #e2e8f0', fontSize: '0.85rem' }}>
                                                                    {w.warmupTime}
                                                                </td>
                                                                <td rowSpan={w.categories.length} style={{ padding: '0.75rem', color: '#2563eb', fontWeight: 800, verticalAlign: 'middle', borderRight: '1px solid #e2e8f0', fontSize: '0.85rem' }}>
                                                                    {w.stageTime}
                                                                </td>
                                                            </>
                                                        )}
                                                        <td style={{ padding: '0.75rem', color: 'rgb(var(--color-primary))', fontWeight: 800 }}>{cat.time}</td>
                                                        <td style={{ padding: '0.75rem', fontWeight: 700, color: '#334155' }}>{cat.laps} {cat.laps === '1' ? 'Lap' : 'Laps'}</td>
                                                    </tr>
                                                );
                                            })
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>

                    {/* Junior Development Waves */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #d97706' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                            <div>
                                <span style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#b45309' }}>Late Afternoon</span>
                                <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Junior Development Waves (Waves 7–9)</h3>
                            </div>
                        </div>

                        {/* JD Venue & Race Time Pills */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                            gap: '0.6rem',
                            marginBottom: '1rem',
                            textAlign: 'center'
                        }}>
                            <div style={{ padding: '0.55rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(251,191,36,0.15)', border: '1px solid rgba(245,158,11,0.4)' }}>
                                <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#b45309', display: 'block' }}>JD Races Start</span>
                                <span style={{ fontWeight: 800, fontSize: '1rem', color: '#b45309' }}>2:30 PM</span>
                            </div>
                            <div style={{ padding: '0.55rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(251,191,36,0.15)', border: '1px solid rgba(245,158,11,0.4)' }}>
                                <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#b45309', display: 'block' }}>JD Races End</span>
                                <span style={{ fontWeight: 800, fontSize: '1rem', color: '#b45309' }}>4:15 PM</span>
                            </div>
                            <div style={{ padding: '0.55rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}>
                                <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#059669', display: 'block' }}>JD Podiums</span>
                                <span style={{ fontWeight: 800, fontSize: '1rem', color: '#047857' }}>5:00 – 5:30 PM</span>
                            </div>
                        </div>

                        <p className="text-muted" style={{ fontSize: '0.85rem', marginBottom: '1rem', fontStyle: 'italic', color: '#475569' }}>
                            *Note: No 1/2 laps for Advanced Jr Devos. All JD categories ride 1 full lap. JD athletes race in Races 1–3 only unless Race 4 is needed for a makeup race.
                        </p>

                        {viewMode === 'cards' ? (
                            /* Mobile Cards View for JD */
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {races1To3JdWaves.map((w) => (
                                    <div
                                        key={w.wave}
                                        style={{
                                            padding: '1rem',
                                            borderRadius: 'var(--radius-md)',
                                            borderLeft: '5px solid #d97706',
                                            backgroundColor: '#ffffff',
                                            border: '1px solid #e2e8f0',
                                            borderLeftWidth: '5px',
                                            boxShadow: 'var(--shadow-sm)'
                                        }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                            <span style={{ fontSize: '1rem', fontWeight: 800, color: '#b45309', backgroundColor: 'rgba(251, 191, 36, 0.18)', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-sm)' }}>
                                                {w.wave}
                                            </span>
                                            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', backgroundColor: '#f1f5f9', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #cbd5e1' }}>
                                                ⏰ Min. Arrival: <strong style={{ color: '#0f172a' }}>{w.arrivalTime}</strong>
                                            </span>
                                        </div>

                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(95px, 1fr))', gap: '0.4rem', marginBottom: '0.85rem', textAlign: 'center' }}>
                                            <div style={{ padding: '0.4rem', borderRadius: '6px', backgroundColor: 'rgba(251, 191, 36, 0.15)', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                                                <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#b45309', display: 'block' }}>Wave Mtg</span>
                                                <strong style={{ fontSize: '0.85rem', color: '#b45309' }}>{w.meetingTime}</strong>
                                            </div>
                                            <div style={{ padding: '0.4rem', borderRadius: '6px', backgroundColor: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
                                                <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#059669', display: 'block' }}>Warm-Up</span>
                                                <strong style={{ fontSize: '0.85rem', color: '#047857' }}>{w.warmupTime}</strong>
                                            </div>
                                            <div style={{ padding: '0.4rem', borderRadius: '6px', backgroundColor: 'rgba(37, 99, 235, 0.08)', border: '1px solid rgba(37, 99, 235, 0.25)' }}>
                                                <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#2563eb', display: 'block' }}>Staging</span>
                                                <strong style={{ fontSize: '0.85rem', color: '#1d4ed8' }}>{w.stageTime}</strong>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                                            {w.categories.map((cat) => (
                                                <div
                                                    key={cat.category}
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        padding: '0.55rem 0.85rem',
                                                        borderRadius: 'var(--radius-sm)',
                                                        backgroundColor: '#f8fafc',
                                                        border: '1px solid #e2e8f0'
                                                    }}
                                                >
                                                    <div>
                                                        <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0f172a' }}>{cat.category}</span>
                                                    </div>
                                                    <div style={{ textAlign: 'right' }}>
                                                        <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#b45309', display: 'block' }}>🚀 {cat.time}</span>
                                                        <span style={{ fontSize: '0.75rem', color: '#475569', fontWeight: 600 }}>{cat.laps} Lap</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            /* Table View for JD */
                            <div style={{ overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '820px', backgroundColor: '#ffffff', borderRadius: 'var(--radius-sm)' }}>
                                    <thead>
                                        <tr style={{ borderBottom: '2px solid #cbd5e1', color: '#b45309', backgroundColor: '#fffbebf' }}>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 800, color: '#0f172a' }}>Wave</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 800, color: '#0f172a' }}>Category</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 800, color: '#0f172a' }}>Min. Arrival</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 800, color: '#0f172a' }}>Wave Mtg (10m)</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 800, color: '#0f172a' }}>Warm-Up (30m)</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 800, color: '#0f172a' }}>Stage Time</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 800, color: '#0f172a' }}>Start Time</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 800, color: '#0f172a' }}>Laps</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {races1To3JdWaves.map((w, waveIdx) => (
                                            w.categories.map((cat, idx) => {
                                                const isWaveEven = waveIdx % 2 === 0;
                                                const isLastCategoryInWave = idx === w.categories.length - 1;
                                                return (
                                                    <tr
                                                        key={cat.category}
                                                        style={{
                                                            borderBottom: isLastCategoryInWave ? '2px solid rgba(245, 158, 11, 0.4)' : '1px dashed #e2e8f0',
                                                            backgroundColor: isWaveEven ? 'rgba(251, 191, 36, 0.07)' : '#ffffff'
                                                        }}
                                                    >
                                                        {idx === 0 && (
                                                            <td rowSpan={w.categories.length} style={{ padding: '0.75rem', fontWeight: 800, color: '#b45309', verticalAlign: 'middle', borderRight: '1px solid #e2e8f0', backgroundColor: isWaveEven ? 'rgba(251, 191, 36, 0.14)' : 'rgba(251, 191, 36, 0.04)' }}>
                                                                {w.wave}
                                                            </td>
                                                        )}
                                                        <td style={{ padding: '0.75rem', fontWeight: 700, color: '#0f172a' }}>{cat.category}</td>
                                                        {idx === 0 && (
                                                            <>
                                                                <td rowSpan={w.categories.length} style={{ padding: '0.75rem', fontWeight: 800, verticalAlign: 'middle', borderRight: '1px solid #e2e8f0', fontSize: '0.85rem', color: '#0f172a' }}>
                                                                    {w.arrivalTime}
                                                                </td>
                                                                <td rowSpan={w.categories.length} style={{ padding: '0.75rem', color: 'rgb(var(--color-primary))', fontWeight: 800, verticalAlign: 'middle', borderRight: '1px solid #e2e8f0', fontSize: '0.85rem' }}>
                                                                    {w.meetingTime}
                                                                </td>
                                                                <td rowSpan={w.categories.length} style={{ padding: '0.75rem', color: '#059669', fontWeight: 800, verticalAlign: 'middle', borderRight: '1px solid #e2e8f0', fontSize: '0.85rem' }}>
                                                                    {w.warmupTime}
                                                                </td>
                                                                <td rowSpan={w.categories.length} style={{ padding: '0.75rem', color: '#2563eb', fontWeight: 800, verticalAlign: 'middle', borderRight: '1px solid #e2e8f0', fontSize: '0.85rem' }}>
                                                                    {w.stageTime}
                                                                </td>
                                                            </>
                                                        )}
                                                        <td style={{ padding: '0.75rem', color: '#b45309', fontWeight: 800 }}>{cat.time}</td>
                                                        <td style={{ padding: '0.75rem', fontWeight: 700, color: '#334155' }}>{cat.laps} Lap</td>
                                                    </tr>
                                                );
                                            })
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* TAB 2: RACE 4 (HERRIMAN REGIONAL CHAMPIONSHIP) */}
            {activeTab === 'race4' && (
                <div className="animate-fade-in">
                    <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>
                        <span style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#dc2626', background: 'rgba(239,68,68,0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px', display: 'inline-block', marginBottom: '0.4rem' }}>HIGH SCHOOL ONLY (GRADES 9–12)</span>
                        <h2 style={{ fontSize: '1.75rem' }}>Herriman – Region 5 Race 4 (Regional Championship)</h2>
                        <p className="text-muted">October 10, 2026 · Herriman Race Course, UT</p>
                    </div>

                    {/* Important HS ONLY Notice Banner */}
                    <div style={{
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '2px solid #ef4444',
                        borderRadius: 'var(--radius-md)',
                        padding: '1rem 1.25rem',
                        marginBottom: 'var(--spacing-lg)',
                        display: 'flex',
                        gap: '0.75rem',
                        alignItems: 'center'
                    }}>
                        <span style={{ fontSize: '1.75rem' }}>🛑</span>
                        <div>
                            <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#dc2626', display: 'block' }}>High School Event &amp; Potential JD Makeup Race</span>
                            <p style={{ margin: '0.1rem 0 0 0', fontSize: '0.925rem', color: '#0f172a', lineHeight: 1.5 }}>
                                <strong>Herriman (Race 4) is a Regional Championship for High School (Grades 9–12).</strong> Junior Development (JD - Grades 7–8) typically finishes their regular season at Race 3 (Panguitch), but Race 4 may be used as a reserve/makeup race for JD if needed.
                            </p>
                        </div>
                    </div>

                    {/* Key Venue Event Times Banner */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                        gap: '0.6rem',
                        marginBottom: 'var(--spacing-md)',
                        textAlign: 'center'
                    }}>
                        <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
                            <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#1d4ed8', display: 'block' }}>Pitzone Opens</span>
                            <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0f172a' }}>6:30 AM</span>
                        </div>
                        <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(250,255,56,0.15)', border: '1px solid rgba(250,255,56,0.4)' }}>
                            <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#854d0e', display: 'block' }}>Head Coach Mtg</span>
                            <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#854d0e' }}>7:00 AM</span>
                        </div>
                        <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(87,43,158,0.1)', border: '1px solid rgba(87,43,158,0.2)' }}>
                            <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: 'rgb(var(--color-primary))', display: 'block' }}>National Anthem</span>
                            <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'rgb(var(--color-primary))' }}>8:30 AM</span>
                        </div>
                        <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.25)' }}>
                            <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#1d4ed8', display: 'block' }}>HS Races Start</span>
                            <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#1d4ed8' }}>9:00 AM</span>
                        </div>
                        <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.25)' }}>
                            <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#1d4ed8', display: 'block' }}>HS Races End</span>
                            <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#1d4ed8' }}>3:15 PM</span>
                        </div>
                        <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}>
                            <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#059669', display: 'block' }}>HS Podiums</span>
                            <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#047857' }}>4:00 – 4:30 PM</span>
                        </div>
                    </div>

                    {/* Race 4 Schedule */}
                    <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #2563eb' }}>
                        {viewMode === 'cards' ? (
                            /* Mobile Cards View for Race 4 */
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {race4HsWaves.map((w) => (
                                    <div
                                        key={w.wave}
                                        style={{
                                            padding: '1rem',
                                            borderRadius: 'var(--radius-md)',
                                            borderLeft: '5px solid #2563eb',
                                            backgroundColor: '#ffffff',
                                            border: '1px solid #e2e8f0',
                                            borderLeftWidth: '5px',
                                            boxShadow: 'var(--shadow-sm)'
                                        }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                            <span style={{ fontSize: '1rem', fontWeight: 800, color: '#1d4ed8', backgroundColor: 'rgba(37, 99, 235, 0.12)', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-sm)' }}>
                                                {w.wave}
                                            </span>
                                            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', backgroundColor: '#f1f5f9', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #cbd5e1' }}>
                                                ⏰ Min. Arrival: <strong style={{ color: '#0f172a' }}>{w.arrivalTime}</strong>
                                            </span>
                                        </div>

                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(95px, 1fr))', gap: '0.4rem', marginBottom: '0.85rem', textAlign: 'center' }}>
                                            <div style={{ padding: '0.4rem', borderRadius: '6px', backgroundColor: 'rgba(87, 43, 158, 0.08)', border: '1px solid rgba(87, 43, 158, 0.2)' }}>
                                                <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: 'rgb(var(--color-primary))', display: 'block' }}>Wave Mtg</span>
                                                <strong style={{ fontSize: '0.85rem', color: 'rgb(var(--color-primary))' }}>{w.meetingTime}</strong>
                                            </div>
                                            <div style={{ padding: '0.4rem', borderRadius: '6px', backgroundColor: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
                                                <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#059669', display: 'block' }}>Warm-Up</span>
                                                <strong style={{ fontSize: '0.85rem', color: '#047857' }}>{w.warmupTime}</strong>
                                            </div>
                                            <div style={{ padding: '0.4rem', borderRadius: '6px', backgroundColor: 'rgba(37, 99, 235, 0.08)', border: '1px solid rgba(37, 99, 235, 0.25)' }}>
                                                <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#2563eb', display: 'block' }}>Staging</span>
                                                <strong style={{ fontSize: '0.85rem', color: '#1d4ed8' }}>{w.stageTime}</strong>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            {w.categories.map((cat) => (
                                                <div
                                                    key={cat.category}
                                                    style={{
                                                        padding: '0.65rem 0.85rem',
                                                        borderRadius: 'var(--radius-sm)',
                                                        backgroundColor: '#f8fafc',
                                                        border: '1px solid #e2e8f0'
                                                    }}
                                                >
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                                                        <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0f172a' }}>{cat.category}</span>
                                                        <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#1d4ed8' }}>🚀 {cat.time}</span>
                                                    </div>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: '#475569', flexWrap: 'wrap', gap: '0.4rem' }}>
                                                        <span>{cat.laps} {cat.laps === '1' ? 'Lap' : 'Laps'} ({cat.distance})</span>
                                                        {cat.plates !== 'N/A' && <span>Plates: <strong style={{ color: '#0f172a' }}>{cat.plates}</strong></span>}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            /* Table View for Race 4 */
                            <div style={{ overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '820px', backgroundColor: '#ffffff', borderRadius: 'var(--radius-sm)' }}>
                                    <thead>
                                        <tr style={{ borderBottom: '2px solid #cbd5e1', color: '#1d4ed8', backgroundColor: '#eff6ff' }}>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 800, color: '#0f172a' }}>Wave</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 800, color: '#0f172a' }}>Category</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 800, color: '#0f172a' }}>Min. Arrival</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 800, color: '#0f172a' }}>Wave Mtg (10m)</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 800, color: '#0f172a' }}>Warm-Up (30m)</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 800, color: '#0f172a' }}>Stage Time</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 800, color: '#0f172a' }}>Start Time</th>
                                            <th style={{ padding: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 800, color: '#0f172a' }}>Laps</th>
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
                                                            borderBottom: isLastCategoryInWave ? '2px solid rgba(59, 130, 246, 0.3)' : '1px dashed #e2e8f0',
                                                            backgroundColor: isWaveEven ? 'rgba(59, 130, 246, 0.05)' : '#ffffff'
                                                        }}
                                                    >
                                                        {idx === 0 && (
                                                            <td rowSpan={w.categories.length} style={{ padding: '0.75rem', fontWeight: 800, color: '#1d4ed8', verticalAlign: 'middle', borderRight: '1px solid #e2e8f0', backgroundColor: isWaveEven ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.03)' }}>
                                                                {w.wave}
                                                            </td>
                                                        )}
                                                        <td style={{ padding: '0.75rem', fontWeight: 700, color: '#0f172a' }}>
                                                            {cat.category}
                                                            {cat.note && <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', fontWeight: 400 }}>*{cat.note}</span>}
                                                        </td>
                                                        {idx === 0 && (
                                                            <>
                                                                <td rowSpan={w.categories.length} style={{ padding: '0.75rem', fontWeight: 800, verticalAlign: 'middle', borderRight: '1px solid #e2e8f0', fontSize: '0.85rem', color: '#0f172a' }}>
                                                                    {w.arrivalTime}
                                                                </td>
                                                                <td rowSpan={w.categories.length} style={{ padding: '0.75rem', color: 'rgb(var(--color-primary))', fontWeight: 800, verticalAlign: 'middle', borderRight: '1px solid #e2e8f0', fontSize: '0.85rem' }}>
                                                                    {w.meetingTime}
                                                                </td>
                                                                <td rowSpan={w.categories.length} style={{ padding: '0.75rem', color: '#059669', fontWeight: 800, verticalAlign: 'middle', borderRight: '1px solid #e2e8f0', fontSize: '0.85rem' }}>
                                                                    {w.warmupTime}
                                                                </td>
                                                            </>
                                                        )}
                                                        <td style={{ padding: '0.75rem', color: '#2563eb', fontWeight: 800 }}>{cat.staging}</td>
                                                        <td style={{ padding: '0.75rem', color: 'rgb(var(--color-primary))', fontWeight: 800 }}>{cat.time}</td>
                                                        <td style={{ padding: '0.75rem', fontWeight: 700, color: '#334155' }}>{cat.laps} {cat.laps === '1' ? 'Lap' : 'Laps'}</td>
                                                    </tr>
                                                );
                                            })
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* TAB 3: STATE CHAMPIONSHIPS & WESTERN REGIONALS (TBD) */}
            {activeTab === 'postseason' && (
                <div className="animate-fade-in">
                    <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>
                        <span style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#dc2626', background: 'rgba(239,68,68,0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px', display: 'inline-block', marginBottom: '0.4rem' }}>HIGH SCHOOL ONLY (GRADES 9–12)</span>
                        <h2 style={{ fontSize: '1.75rem' }}>State Championship &amp; NICA Western Regionals</h2>
                        <p className="text-muted">State Championship wave schedules and post-season championship details.</p>
                    </div>

                    {/* Post-Season HS ONLY Notice Banner */}
                    <div style={{
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '2px solid #ef4444',
                        borderRadius: 'var(--radius-md)',
                        padding: '1rem 1.25rem',
                        marginBottom: 'var(--spacing-lg)',
                        display: 'flex',
                        gap: '0.75rem',
                        alignItems: 'center'
                    }}>
                        <span style={{ fontSize: '1.75rem' }}>🎓</span>
                        <div>
                            <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#dc2626', display: 'block' }}>High School Only Post-Season (Grades 9–12)</span>
                            <p style={{ margin: '0.1rem 0 0 0', fontSize: '0.925rem', color: '#0f172a', lineHeight: 1.5 }}>
                                Both the <strong>Utah State Championship</strong> and <strong>NICA Western Regional Championship</strong> are <strong>High School Only</strong> events. Junior Development (JD) does not participate in post-season championship races.
                            </p>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--spacing-lg)' }}>

                        {/* State Championship Box */}
                        <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #ec4899' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <span style={{ fontSize: '1.5rem' }}>🏆</span>
                                <h3 style={{ margin: 0, fontSize: '1.3rem' }}>Utah State Championship</h3>
                            </div>
                            <p style={{ fontWeight: 700, color: 'rgb(var(--color-primary))', marginBottom: '0.5rem' }}>Oct 23–24, 2026 · St. George, UT</p>
                            
                            <div style={{ background: 'rgba(236, 72, 153, 0.1)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(236, 72, 153, 0.25)', marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 800, color: '#be185d', fontSize: '0.9rem', display: 'block', marginBottom: '0.25rem' }}>📅 Wave Schedule Status: TBD</span>
                                <p style={{ fontSize: '0.85rem', margin: 0, lineHeight: 1.5, color: '#334155' }}>
                                    The official State Championship wave schedule will be released by the Utah League following the completion of Regional Championships.
                                </p>
                            </div>

                            <ul style={{ paddingLeft: '1.2rem', color: '#334155', lineHeight: 1.6, fontSize: '0.875rem', marginBottom: '1.25rem' }}>
                                <li><strong>Qualification Required:</strong> Open to qualified High School student-athletes from across Utah.</li>
                                <li><strong>Junior Development Note:</strong> Junior Development (JD) does <em>not</em> race at the State Championship.</li>
                                <li>Two full days of championship racing on St. George red rock trails.</li>
                            </ul>

                            <a
                                href="https://utahmtb.org/events/state-championships/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-accent"
                                style={{ display: 'inline-block', fontSize: '0.875rem', padding: '0.5rem 1rem' }}
                            >
                                Official State Race Details ↗
                            </a>
                        </div>

                        {/* NICA Western Regionals Box */}
                        <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid #2563eb' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <span style={{ fontSize: '1.5rem' }}>⭐</span>
                                <h3 style={{ margin: 0, fontSize: '1.3rem' }}>NICA Western Regional Championship</h3>
                            </div>
                            <p style={{ fontWeight: 700, color: '#1d4ed8', marginBottom: '0.5rem' }}>Post-Season 2026 · Western Region Venue</p>

                            <div style={{ background: 'rgba(37, 99, 235, 0.1)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(37, 99, 235, 0.25)', marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 800, color: '#1d4ed8', fontSize: '0.9rem', display: 'block', marginBottom: '0.25rem' }}>📅 Regional Event Status: Details TBD</span>
                                <p style={{ fontSize: '0.85rem', margin: 0, lineHeight: 1.5, color: '#334155' }}>
                                    Bringing together premier high school mountain bike racers from Utah, Idaho, Nevada, California, and across the West.
                                </p>
                            </div>

                            <ul style={{ paddingLeft: '1.2rem', color: '#334155', lineHeight: 1.6, fontSize: '0.875rem', marginBottom: '1.25rem' }}>
                                <li>High School racers qualify based on season standings.</li>
                                <li>Junior Development (JD) does <em>not</em> race at NICA Western Regionals.</li>
                                <li>Official course maps and wave schedules published by NICA National.</li>
                            </ul>

                            <a
                                href="https://events.nationalmtb.org/regionals/western"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                                style={{ display: 'inline-block', fontSize: '0.875rem', padding: '0.5rem 1rem' }}
                            >
                                NICA Western Regionals Info ↗
                            </a>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}
