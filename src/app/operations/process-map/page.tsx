import type { Metadata } from 'next';
import OperationsDoc from '../OperationsDoc';

export const metadata: Metadata = {
    title: 'Process Map | Lehi MTB Operations',
    description: 'Season process map, role charters, loops and RACI for running the Lehi MTB team.',
    robots: { index: false, follow: false },
};

export default function ProcessMapPage() {
    return <OperationsDoc file="process-map.md" other={{ href: '/operations/capability-map', label: 'Capability map' }} />;
}
