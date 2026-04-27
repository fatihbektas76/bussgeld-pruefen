import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyMobileCTA from '@/components/layout/StickyMobileCTA';
import OrganizationSchema from '@/components/seo/OrganizationSchema';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import LegalServiceSchema from '@/components/seo/LegalServiceSchema';

const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://bussgeld-pruefen.de'),
  title: {
    default: 'Bußgeld prüfen — bussgeld-pruefen.de',
    template: '%s · bussgeld-pruefen.de',
  },
  description:
    'Bußgeld berechnen, Punkte und Fahrverbot prüfen, Einspruchschancen einschätzen — kostenlos.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'bussgeld-pruefen.de',
    title: 'Bußgeld prüfen — bussgeld-pruefen.de',
    description:
      'Bußgeld berechnen, Punkte und Fahrverbot prüfen, Einspruchschancen einschätzen — kostenlos.',
    url: 'https://bussgeld-pruefen.de',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'bussgeld-pruefen.de — Bußgeldkatalog 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bußgeld prüfen — bussgeld-pruefen.de',
    description:
      'Bußgeld berechnen, Punkte und Fahrverbot prüfen — kostenlos.',
    images: ['/og-default.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="bg-surface-alt text-ink font-sans antialiased min-h-screen flex flex-col">
        <OrganizationSchema />
        <WebSiteSchema />
        <LegalServiceSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
