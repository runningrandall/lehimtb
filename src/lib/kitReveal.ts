// March 25, 2026 at 6:00 PM MDT = March 26, 2026 00:00 UTC
export const KIT_REVEAL_DATE = new Date('2026-03-26T00:00:00Z');

export function isKitRevealed(): boolean {
    return new Date() >= KIT_REVEAL_DATE;
}
