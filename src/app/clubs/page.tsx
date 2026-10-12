import type { Metadata } from 'next';
import ClubsDirectory from './ClubsDirectory';

export const metadata: Metadata = {
    title: 'Utah Junior MTB Clubs | Lehi MTB Hub',
    description: 'Non-NICA club and development teams for Utah youth riders, compared on cost, level, location and commitment.',
};

export default function ClubsPage() {
    return (
        <main className="clubs-page" style={{ minHeight: '100vh', paddingBottom: 'var(--spacing-xl)' }}>
            <ClubsDirectory />
        </main>
    );
}
