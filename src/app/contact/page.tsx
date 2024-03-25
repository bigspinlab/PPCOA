'use serve';

import ColumnsContent from '@/components/ColumnsContent';
import FormContact from '@/components/FormContact';
import RootWrapper from '@/components/RootWrapper';
import { getHeadless } from '@/lib/getHeadless';
import Rectangle from '@/ui-elements/Rectangle';
import { QueryClient } from '@tanstack/react-query';

export default async function Contact() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['contactContent'],
    queryFn: () => getHeadless({ route: 'contact' })
  });

  return (
    <>
      <RootWrapper>
        <h2 className="sr-only">Contact</h2>
        <article className="pt-44">
          <Rectangle customStyles="bg-red-100 w-2/4 mb-9 sm:w-64 md:mb-20 lg:mb-28" />
          <ColumnsContent />
        </article>
      </RootWrapper>
      <FormContact />
    </>
  );
}
