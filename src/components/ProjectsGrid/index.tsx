'use client';

import ProjectCard from '@/components/ProjectCard';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { IProject } from '@/types/home';
import RootWrapper from '../RootWrapper';
import { getProjectDetail } from '@/lib/getProjectDetail';

export default function ProjectsGrid({ projectCategory }: { projectCategory: string }) {
  const { data: projectList } = useQuery({
    queryKey: ['projectDetail'],
    queryFn: () => getProjectDetail({ projectName: projectCategory })
  });

  console.log('data', projectList);
  return (
    <RootWrapper customClassName="w-full">
      <h2 className="sr-only">Project list</h2>
      <article className="flex flex-col gap-10">
        <h3 className="font-bold">Outros Projetos Arquitetura</h3>
        <ul className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-10 lg:grid-cols-3">
          {projectList?.map((project: IProject) => (
            <li key={project.id}>
              <ProjectCard
                title={project.title}
                image={project.image}
                urlName={project.urlName}
                category={project.category}
              />
            </li>
          ))}
        </ul>
      </article>
    </RootWrapper>
  );
}
