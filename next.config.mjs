import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/',
        destination: '/pt/all',
        permanent: true,
      },
      {
        source: '/',
        destination: '/en/all',
        permanent: true
      },
      {
        source: '/pt',
        destination: '/pt/all',
        permanent: true
      },
      {
        source: '/en',
        destination: '/en/all',
        permanent: true
      },
      {
        source: '/',
        has: [
          {
            type: 'cookie',
            key: 'NEXT_LOCALE',
            value: 'pt'
          }
        ],
        destination: '/pt/all',
        permanent: true
      },
      {
        source: '/',
        has: [
          {
            type: 'cookie',
            key: 'NEXT_LOCALE',
            value: 'en'
          }
        ],
        destination: '/en/all',
        permanent: true
      },
      {
        source: '/pt/todos',
        destination: '/pt/all',
        permanent: true
      },
      {
        source: '/en/todos',
        destination: '/en/all',
        permanent: true
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'http',
        hostname: 'danielribamar-001-site1.itempurl.com'
      },
      {
        protocol: 'https',
        hostname: 'danielribamar-001-site1.itempurl.com'
      },
      {
        protocol: 'https',
        hostname: 'ppcoa.org'
      }
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  }
};

export default withNextIntl(nextConfig);
