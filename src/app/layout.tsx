import type { Metadata } from 'next';
import { Inter, Outfit, Barlow_Semi_Condensed } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnnouncementBanner from '@/components/AnnouncementBanner';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-display' });
const barlow = Barlow_Semi_Condensed({ subsets: ['latin'], weight: ['700', '800'], style: ['normal', 'italic'], variable: '--font-brand' });

export const metadata: Metadata = {
  title: 'Lehi MTB Hub | Trails & Community',
  description: 'Your central hub for Lehi Mountain Biking trails, events, and community.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} ${barlow.variable}`}>
        <AnnouncementBanner />
        <Navbar />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
