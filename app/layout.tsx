import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bhavyabansal.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Bhavya Bansal — AI Engineer Portfolio',
    template: '%s | Bhavya Bansal',
  },
  description:
    'AI Engineer & Data Science undergraduate portfolio representing software projects, technical focus, and engineering achievements.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Bhavya Bansal — AI Engineer Portfolio',
    description:
      'AI Engineer & Data Science undergraduate portfolio representing software projects, technical focus, and engineering achievements.',
    url: baseUrl,
    siteName: 'Bhavya Bansal Portfolio',
    type: 'website',
    images: [
      {
        url: '/images/hero-portrait.jpg',
        width: 1200,
        height: 630,
        alt: 'Bhavya Bansal — AI Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhavya Bansal — AI Engineer Portfolio',
    description:
      'AI Engineer & Data Science undergraduate portfolio representing software projects, technical focus, and engineering achievements.',
    images: ['/images/hero-portrait.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Bhavya Bansal',
    jobTitle: 'AI Engineer & Data Science Undergraduate',
    url: baseUrl,
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Guru Gobind Singh Indraprastha University (GGSIPU)',
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Computer Vision',
      'Data Analytics',
      'Python',
      'SQL',
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-[var(--background)] text-[var(--foreground)]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--surface)] focus:text-[var(--foreground)] focus:border focus:border-[var(--surface-border)] focus:rounded"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
