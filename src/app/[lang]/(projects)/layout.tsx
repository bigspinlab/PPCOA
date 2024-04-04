import { getHeadlessMaster } from '@/api';
import { Filter } from '@/components/Filter';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import React from 'react';

export default async function CategoriesLayout({
  params,
  children
}: Readonly<{
  params:  { lang: string}
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  console.log('params layout', params);

  await queryClient.prefetchQuery({
    queryKey: ['masterPage'],
    queryFn: () => getHeadlessMaster({ lang: params.lang })
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Filter lang={params.lang} />
      </HydrationBoundary>
      {children}
    </>
  );
}
