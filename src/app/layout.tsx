import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './styles/globals.css';
import React from 'react';
import { Filter } from '@/components/Filter';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'PPCOA',
  description: 'PPCOA website'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <h1 className="sr-only">PPCOA website</h1>
          <main className="w-full min-h-full flex flex-col m-auto pt-22">
            <Filter />
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
