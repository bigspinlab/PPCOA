'use server';

import RootWrapper from '@/components/RootWrapper';
import { getHeadless } from '@/lib/getHeadless';
import ProjectsList from '@/components/ProjectsList';

export default async function Home() {
  const umbracoContent = await getHeadless({ route: 'widgets', page: 1 });

  return (
    <RootWrapper customClassName="w-full">
      <h2 className="sr-only">Project list</h2>
      <article className="pt-14 md:pt-44">
        <ul className="w-full max-w-[550px] grid grid-rows-1 m-auto gap-16 lg:gap-20">
          <ProjectsList initialUmbracoContent={umbracoContent} />
        </ul>
      </article>
    </RootWrapper>
  );
}
