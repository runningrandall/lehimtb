'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [result, setResult] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult('sending');
        const formData = new FormData(event.currentTarget);
        formData.append('access_key', '89db5d40-29b7-46dd-ac2e-7777fd50a82a');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            setResult(data.success ? 'success' : 'error');
        } catch {
            setResult('error');
        }
    };

    if (result === 'success') {
        return (
            <div style={{ textAlign: 'center', padding: 'var(--spacing-xl)' }}>
                <p style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>✓</p>
                <h3 style={{ marginBottom: '0.5rem', color: 'rgb(var(--color-primary))' }}>Message sent!</h3>
                <p className="text-muted">A coach will get back to you soon.</p>
                <button
                    onClick={() => setResult('idle')}
                    className="btn-silver"
                    style={{ marginTop: '1.25rem', fontSize: '0.875rem' }}
                >
                    Send another
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input type="hidden" name="subject" value="Lehi MTB — Contact Form" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div>
                    <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.4rem' }}>Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        style={{
                            width: '100%',
                            padding: '0.65rem 0.875rem',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid var(--border-color)',
                            background: 'rgba(255,255,255,0.6)',
                            fontSize: '0.95rem',
                            color: 'rgb(var(--text-main))',
                            outline: 'none',
                            boxSizing: 'border-box',
                        }}
                    />
                </div>
                <div>
                    <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.4rem' }}>Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        style={{
                            width: '100%',
                            padding: '0.65rem 0.875rem',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid var(--border-color)',
                            background: 'rgba(255,255,255,0.6)',
                            fontSize: '0.95rem',
                            color: 'rgb(var(--text-main))',
                            outline: 'none',
                            boxSizing: 'border-box',
                        }}
                    />
                </div>
            </div>
            <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.4rem' }}>Message</label>
                <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="What's on your mind?"
                    style={{
                        width: '100%',
                        padding: '0.65rem 0.875rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-color)',
                        background: 'rgba(255,255,255,0.6)',
                        fontSize: '0.95rem',
                        color: 'rgb(var(--text-main))',
                        outline: 'none',
                        resize: 'vertical',
                        boxSizing: 'border-box',
                        fontFamily: 'inherit',
                    }}
                />
            </div>
            {result === 'error' && (
                <p style={{ color: '#c0392b', fontSize: '0.875rem', fontWeight: 600 }}>
                    Something went wrong — please try again or email a coach directly.
                </p>
            )}
            <div>
                <button
                    type="submit"
                    disabled={result === 'sending'}
                    className="btn-primary"
                    style={{ padding: '0.75rem 2rem', opacity: result === 'sending' ? 0.7 : 1 }}
                >
                    {result === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
            </div>
        </form>
    );
}
