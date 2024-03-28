import { Filter } from '@/components/Filter';
import { getHeadlessMaster } from '@/lib/getHeadlessMaster';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import React from 'react';

export default async function CategoriesLayout({ children }: { children: React.ReactNode }) {
  
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['masterPage'],
    queryFn: getHeadlessMaster
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Filter />
      </HydrationBoundary>
      {children}
    </>
  );
}
