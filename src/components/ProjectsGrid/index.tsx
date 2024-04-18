'use client';

import ProjectCard from '@/components/ProjectCard';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { IHeadlessContentPage, IProject, IProjectList } from '@/types';
import RootWrapper from '../RootWrapper';
import { capitalizeFirstLetter } from '@/global/utils';
import { ROUTES } from '@/global/constants';
import { getProjectDetail } from '@/api';
import { Skeleton } from '@/ui-elements/Skeleton';

export default function ProjectsGrid({ params }: { params: { category: string; projectId: string; lang: string } }) {
  const { category, projectId } = params;
  const categoryWithFirstLetterCapitalized = capitalizeFirstLetter(category);

  const { data: projectGridData, isLoading } = useQuery({
    queryKey: [ROUTES.projectDetails.queryKey, projectId, params.lang],
    queryFn: () => getProjectDetail<IHeadlessContentPage>({ projectName: projectId, lang: params.lang })
  });

  const projectGrid = projectGridData?.widgets[1] as IProjectList;

  if (isLoading) {
    return (
      <RootWrapper customClassName="w-full">
        <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-10 lg:grid-cols-3">
          <Skeleton className="h-64" />
          <Skeleton className="h-64" />
          <Skeleton className="h-64" />
          <Skeleton className="h-64" />
          <Skeleton className="h-64" />
          <Skeleton className="h-64" />
        </div>
      </RootWrapper>
    );
  }

  if (!projectGrid || !projectGrid?.content) {
    return null;
  }

  return (
    <RootWrapper customClassName="w-full">
      <h2 className="sr-only">Project Grid</h2>
      <article className="flex flex-col gap-10">
        <h3 className="font-bold">Outros Projetos {categoryWithFirstLetterCapitalized}</h3>
        <ul className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-10 lg:grid-cols-3">
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
