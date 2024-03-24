'use client';

import ProjectCard from '@/components/ProjectCard';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import { IProject } from '@/types/home';
import { getProjectList } from '@/lib/getProjectList';

interface IProjectsListProps {
  projectCategory: string;
}

export default function ProjectsList({ projectCategory }: IProjectsListProps) {
  const [ref, inView] = useInView();

  const { data, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: ['projectsList'],
    queryFn: () => getProjectList({ category: `${projectCategory}`, perPage: 3, pageNumber: 2 }),
    initialPageParam: 2,
    getNextPageParam: (nextPage: any) => nextPage[0].settings.next_page ?? undefined
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  const projectList: IProject[] = data?.pages.reduce((acc, page) => {
    return [...acc, ...page[0].content];
  }, []);

  if (isLoading) {
    return <li>loading spinner</li>;
  }

  return (
    <>
      {projectList?.map((project: IProject) => (
        <li key={project.id}>
          <ProjectCard
            title={project.title}
            image={project.image}
            urlNameAlias={project.urlNameAlias}
            category={project.category}
          />
        </li>
      ))}
      <li ref={ref}></li>
    </>
  );
}
