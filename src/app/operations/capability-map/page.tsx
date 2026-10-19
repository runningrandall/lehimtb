import type { Metadata } from 'next';
import OperationsDoc from '../OperationsDoc';

export const metadata: Metadata = {
    title: 'Capability Map | Lehi MTB Operations',
    description: 'Current and future state capability map for running the Lehi MTB team.',
    robots: { index: false, follow: false },
};

export default function CapabilityMapPage() {
    return <OperationsDoc file="capability-map.md" other={{ href: '/operations/process-map', label: 'Process map' }} />;
}
