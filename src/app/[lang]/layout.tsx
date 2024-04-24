import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './styles/globals.css';
import React from 'react';
import Providers from './providers';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Toaster } from '@/ui-elements/Toast/Toaster';
import { Outfit } from 'next/font/google';
import { getHeadlessMaster } from '@/api';
import { IHeadlessMaster } from '@/types';
import { IntroAnimation } from '@/components/IntroAnimation';

const outFit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit'
});

export default async function RootLayout({
  params,
  children
}: Readonly<{
  params: { lang: string };
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['masterPage'],
    queryFn: () => getHeadlessMaster<IHeadlessMaster>({ lang: params.lang })
  });

  return (
    <html lang={params.lang} className={outFit.variable}>
      <body>
        <Providers>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <Header lang={params.lang} />
            <h1 className="sr-only">PPCOA website</h1>
            <main className="w-full min-h-screen flex flex-col mx-auto pt-22">{children}</main>
            <Footer lang={params.lang} />
            <IntroAnimation />
            <Toaster />
          </HydrationBoundary>
        </Providers>
      </body>
    </html>
  );
}
