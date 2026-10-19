'use client';

import { useEffect } from 'react';

/**
 * Renders any <pre class="mermaid"> blocks inside the page.
 * Loaded on the client only, so the static export stays small for other pages.
 */
export default function MermaidRenderer() {
    useEffect(() => {
        let cancelled = false;
        (async () => {
            const mermaid = (await import('mermaid')).default;
            if (cancelled) return;
            mermaid.initialize({
                startOnLoad: false,
                theme: 'neutral',
                securityLevel: 'strict',
                flowchart: { htmlLabels: true, curve: 'basis', useMaxWidth: true },
            });
            await mermaid.run({ querySelector: 'pre.mermaid' });
        })();
        return () => {
            cancelled = true;
        };
    }, []);

    return null;
}
