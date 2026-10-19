import type { Metadata } from 'next';
import Link from 'next/link';
import './operations.css';

export const metadata: Metadata = {
    title: 'Operations | Lehi MTB',
    description: 'How we run the Lehi MTB team: capability map and season process map.',
    robots: { index: false, follow: false },
};

export default function OperationsIndex() {
    return (
        <main className="ops-page">
            <div className="ops-doc">
                <h1>Running the Lehi MTB team</h1>
                <p>A handbook for coaches and parent leads: what we do, which tools we use, who owns each piece, and when it happens. This is a working draft for the 2027 season.</p>
            </div>
            <div className="ops-index">
                <Link className="ops-card" href="/operations/capability-map">
                    <h2>Capability map</h2>
                    <p>Current and future state of every capability, with tools, maturity levels, owners and the migration roadmap.</p>
                </Link>
                <Link className="ops-card" href="/operations/process-map">
                    <h2>Process map</h2>
                    <p>The season from off-season planning to close-out: role charters, step tables, weekly, race and monthly loops, calendar and RACI.</p>
                </Link>
            </div>
        </main>
    );
}
