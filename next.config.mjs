import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/',
        has: [
          {
            type: 'cookie',
            key: 'NEXT_LOCALE',
            value: 'pt'
          }
        ],
        destination: '/pt/todos',
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
        source: '/pt/all',
        destination: '/pt/todos',
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
      }
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  }
};

export default withNextIntl(nextConfig);
