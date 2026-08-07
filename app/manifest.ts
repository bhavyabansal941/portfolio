import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bhavya Bansal — Engineering Portfolio',
    short_name: 'Bhavya Bansal',
    description:
      'AI Engineer & Data Science undergraduate portfolio representing software projects, technical focus, and engineering achievements.',
    start_url: '/',
    display: 'standalone',
    background_color: '#09090b',
    theme_color: '#09090b',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
