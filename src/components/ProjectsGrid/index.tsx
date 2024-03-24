'use client';

import ProjectCard from '@/components/ProjectCard';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { IProject } from '@/types/home';
import RootWrapper from '../RootWrapper';
import { getProjectDetail } from '@/lib/getProjectDetail';
import { capitalizeFirstLetter } from '@/lib/utils';

export default function ProjectsGrid({ params }: { params: { category: string; projectId: string } }) {
  const { category, projectId } = params;
  const categoryWithFirstLetterCapitalized = capitalizeFirstLetter(category);


  const { data: projectList } = useQuery({
    queryKey: ['projectDetail', projectId],
    queryFn: () => getProjectDetail({ projectName: projectId })
  });

  return (
    <RootWrapper customClassName="w-full">
      <h2 className="sr-only">Project list</h2>
      <article className="flex flex-col gap-10">
        <h3 className="font-bold">Outros Projetos {categoryWithFirstLetterCapitalized}</h3>
        <ul className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-10 lg:grid-cols-3">
          {projectList.widgets.content?.map((project: IProject) => (
            <li key={project.id}>
              <ProjectCard
                title={project.title}
                image={project.image}
                urlNameAlias={project.urlNameAlias}
                category=''
              />
            </li>
          ))}
        </ul>
      </article>
    </RootWrapper>
  );
}
