// import type { Metadata } from 'next';
//import { Metadata, ResolvingMetadata } from 'next'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './styles/globals.css';
import React from 'react';
import Providers from './providers';
import { getHeadlessMaster } from '@/lib/getHeadlessMaster';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

// export const metadata: Metadata = {
//   title: 'PPCOA',
//   description: 'PPCOA website'
// };

// type IGenerateMetadata = {
//   params: { category: string; projectId: string }
// }

// export async function generateMetadata(
//   { params }: IGenerateMetadata,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params

//   // fetch data
//   const seoData = await fetch(`http://danielribamar-001-site1.itempurl.com/api/v1/pages/${params.category}?page=1&perPage=10&category=${params.projectId}`).then((res) => res.json())

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
    <html lang="en">
      <body>
        <Providers>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <Header />
            <h1 className="sr-only">PPCOA website</h1>
            <main className="w-full min-h-screen flex flex-col m-auto pt-22">{children}</main>
            <Footer />
          </HydrationBoundary>
        </Providers>
      </body>
    </html>
  );
}
