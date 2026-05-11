import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';

import Navbar from '@/components/layout/Navbar';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Wojciech Kaczanowski',
  description: 'Portfolio zawodowe',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body
        className={`${inter.variable} ${cormorant.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
