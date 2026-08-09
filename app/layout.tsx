import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PortfolioProvider } from '@/context/portfolio-context';
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
    default: 'Bhavya Bansal — AI & Data Science Portfolio',
    template: '%s | Bhavya Bansal',
  },
  description:
    'Artificial Intelligence & Data Science undergraduate portfolio representing applied software projects, computer vision tools, and machine learning pipelines.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Bhavya Bansal — AI & Data Science Portfolio',
    description:
      'Artificial Intelligence & Data Science undergraduate portfolio representing applied software projects, computer vision tools, and machine learning pipelines.',
    url: baseUrl,
    siteName: 'Bhavya Bansal Portfolio',
    type: 'website',
    images: [
      {
        url: '/images/hero-portrait.jpg',
        width: 1200,
        height: 630,
        alt: 'Bhavya Bansal — AI & Data Science Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhavya Bansal — AI & Data Science Portfolio',
    description:
      'Artificial Intelligence & Data Science undergraduate portfolio representing applied software projects, computer vision tools, and machine learning pipelines.',
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
    jobTitle: 'Artificial Intelligence & Data Science Undergraduate',
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
      <body className="min-h-screen flex flex-col antialiased bg-[#09090b] text-[#f4f4f5]">
        <PortfolioProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#121215] focus:text-[#f4f4f5] focus:border focus:border-white/10 focus:rounded"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1 w-full">
            {children}
          </main>
          <Footer />
        </PortfolioProvider>
      </body>
    </html>
  );
}
