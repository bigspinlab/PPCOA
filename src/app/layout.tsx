// import type { Metadata } from 'next';
//import { Metadata, ResolvingMetadata } from 'next'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './styles/globals.css';
import React from 'react';
import Providers from './providers';
import { getHeadlessMaster } from '@/lib/getHeadlessMaster';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Metadata } from 'next';
import { Toaster } from '@/ui-elements/Toast/Toaster';
import {Outfit} from 'next/font/google'

export const metadata: Metadata = {
  title: 'PPCOA',
  description:
    'PPCOA é uma oficina de arquitectura sediada em Lisboa e Luanda. Desenvolve um trabalho assente na relação entre a pessoa e o construído, oscilando  entre o espaço público e privado, na procura de uma experiência adaptável à envolvente social, económica e histórica.',
  metadataBase: new URL('https://danielribamar-001-site1.itempurl.com/'),
  openGraph: {
    images: ['/media/mozj0bwn/seo-ppcoa.png']
  }
};

// type IGenerateMetadata = {
//   params: { category: string; projectId: string }
// }

// export async function generateMetadata(
//   { params }: IGenerateMetadata,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params

//   // fetch data
//   const seoData = getHeadless({ route : params.})

//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || []
//   console.log(seoData.seo)
//   return {
//     title: 'sasa',
//     openGraph: {
//       images: ['/some-specific-page-image.jpg', ...previousImages],
//     },
//   }
// }

const outFit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit'
})

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['masterPage'],
    queryFn: getHeadlessMaster
  });

  return (
    <html lang="en" className={outFit.variable}>
      <body>
        <Providers>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <Header />
            <h1 className="sr-only">PPCOA website</h1>
            <main className="w-full min-h-screen flex flex-col m-auto pt-22">{children}</main>
            <Footer />
            <Toaster />
          </HydrationBoundary>
        </Providers>
      </body>
    </html>
  );
}
