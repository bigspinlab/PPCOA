'use client';

import ProjectCard from '@/components/ProjectCard';
import React from 'react';
import { IHeadlessContentPage, IProject, IProjectList } from '@/types';
import RootWrapper from '../RootWrapper';
import { capitalizeFirstLetter } from '@/global/utils';
import { useSearchParams } from 'next/navigation';

export default function ProjectsGrid({ projectGridData }: { projectGridData: IHeadlessContentPage }) {
  const searchParams = useSearchParams();
  const searchParamsCategory = searchParams.get('category') ?? '';
  const categoryWithFirstLetterCapitalized = capitalizeFirstLetter(searchParamsCategory);

  const projectGrid = projectGridData?.widgets[1] as IProjectList;

  if (!projectGrid || !projectGrid?.content) {
    return null;
  }

  return (
    <RootWrapper customClassName="w-full">
      <h2 className="sr-only">Project Grid</h2>
      <article className="flex flex-col gap-10">
        <h3 className="font-bold">Outros Projetos {categoryWithFirstLetterCapitalized}</h3>
        <ul className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-10 md:gap-y-4 lg:grid-cols-3">
          {projectGrid?.content?.map((project: IProject) => (
            <li key={project.id}>
              <ProjectCard {...project} showCategoryText={false} />
            </li>
          ))}
        </ul>
      </article>
    </RootWrapper>
  );
}
