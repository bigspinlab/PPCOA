import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import React from 'react';

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
        <Header />
        <main className="w-full min-h-full flex flex-col max-w-screen-2xl m-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
