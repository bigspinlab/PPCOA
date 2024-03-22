import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './styles/globals.css';
import React from 'react';
import Providers from './providers';
import { getHeadlessMaster } from '@/lib/getHeadlessMaster';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

export const metadata: Metadata = {
  title: 'PPCOA',
  description: 'PPCOA website'
};

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
            <main className="w-full min-h-full flex flex-col m-auto pt-22">{children}</main>
            <Footer />
          </HydrationBoundary>
        </Providers>
      </body>
    </html>
  );
}
