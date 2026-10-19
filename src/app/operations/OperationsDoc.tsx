import fs from 'node:fs';
import path from 'node:path';
import Link from 'next/link';
import { Marked, Renderer } from 'marked';
import MermaidRenderer from './MermaidRenderer';
import './operations.css';

const escapeHtml = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function renderMarkdown(file: string): string {
    const source = fs
        .readFileSync(path.join(process.cwd(), 'src/content/operations', file), 'utf8')
        // GitHub-style alerts become plain bold labels inside blockquotes
        .replace(/^> \[!(\w+)\]\s*$/gm, (_m, kind: string) => `> **${kind[0]}${kind.slice(1).toLowerCase()}:**`);

    const renderer = new Renderer();
    const baseCode = renderer.code.bind(renderer);
    renderer.code = (token) => {
        if (token.lang === 'mermaid') {
            return `<pre class="mermaid">${escapeHtml(token.text)}</pre>`;
        }
        return baseCode(token);
    };
    // Wrap tables so wide ones scroll sideways on phones
    renderer.table = function (token) {
        const html = Renderer.prototype.table.call(this, token);
        return `<div class="ops-table-wrap">${html}</div>`;
    };

    return new Marked({ gfm: true, renderer }).parse(source) as string;
}

interface Props {
    file: string;
    other: { href: string; label: string };
}

export default function OperationsDoc({ file, other }: Props) {
    const html = renderMarkdown(file);
    return (
        <main className="ops-page">
            <nav className="ops-nav">
                <Link href="/operations">Operations</Link>
                <span>·</span>
                <Link href={other.href}>{other.label}</Link>
            </nav>
            <article className="ops-doc" dangerouslySetInnerHTML={{ __html: html }} />
            <MermaidRenderer />
        </main>
    );
}
