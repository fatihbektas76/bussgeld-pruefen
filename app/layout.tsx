import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyMobileCTA from '@/components/layout/StickyMobileCTA';

const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter', display: 'swap' });

export const metadata = {
  metadataBase: new URL('https://bussgeld-pruefen.de'),
  title: { default: 'Bußgeld prüfen — bussgeld-pruefen.de', template: '%s · bussgeld-pruefen.de' },
  description: 'Bußgeld berechnen, Punkte und Fahrverbot prüfen, Einspruchschancen einschätzen — kostenlos.',
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="bg-surface-alt text-ink font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
