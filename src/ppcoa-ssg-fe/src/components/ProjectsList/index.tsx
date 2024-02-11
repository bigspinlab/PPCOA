'use server';

import RootWrapper from '@/components/RootWrapper';
import ProjectCard from '@/components/ProjectCard';
import { getHeadless } from '@/lib/getHeadless';

export default async function ProjectsList() {
  const umbracoContent = await getHeadless({ route: 'view' });

  return (
    <RootWrapper customClassName="w-full">
      <h2 className="sr-only">Project list</h2>
      <article className="pt-14 md:pt-44">
        <ul className="w-full max-w-[550px] grid grid-rows-1 m-auto gap-16 lg:gap-20">
          {umbracoContent?.projectsList?.content.map((project: any) => (
            <li key={project.id}>
              <ProjectCard
                id={project.id}
                imageSrc={project.imageSrc.desktop}
                imageAlt={project.imageSrc.alt}
                projectName={project.title}
                category={project.category}
              />
            </li>
          ))}
        </ul>
      </article>
    </RootWrapper>
  );
}
