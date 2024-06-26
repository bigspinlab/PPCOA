import { getHeadlessMaster } from '@/api';
import { Filter } from '@/components/Filter';
import { IntroAnimation } from '@/components/IntroAnimation';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import React from 'react';

export default async function CategoriesLayout({
  params,
  children
}: Readonly<{
  params: { lang: string };
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['masterPage'],
    queryFn: () => getHeadlessMaster({ lang: params.lang }),
    staleTime: Infinity
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Filter lang={params.lang} />
      </HydrationBoundary>
      {children}
      <IntroAnimation />
    </>
  );
}
