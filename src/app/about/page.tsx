'use server'

import ImageText from '@/components/ImageText';
import { getHeadless } from '@/lib/getHeadless';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

export default async function About() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['aboutContent'],
    queryFn: () => getHeadless({ route: 'about' })
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ImageText />
    </HydrationBoundary>
  );
}
