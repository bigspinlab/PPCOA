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

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['projectsList', projectCategory],
    queryFn: ({ pageParam }) => getProjectList({ category: `${projectCategory}`, perPage: 1, pageNumber: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage: any) => {
      const hasNextPage = lastPage[0].settings.next_page > lastPage[0].settings.current_page;
      const isLastPage = lastPage[0].settings.current_page === lastPage[0].settings.total_pages;

      if (hasNextPage && !isLastPage) {
        return lastPage[0].settings.next_page;
      } else {
        return undefined;
      }
    }
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  const projectList: IProject[] = data?.pages.reduce((acc, page) => {
    return [...acc, ...page[0].content];
  }, []);

  if (isLoading) {
    return <li>loading spinner</li>;
  }

  if (!projectList) {
    return null;
  }

  return (
    <>
      {projectList?.map((project: IProject) => (
        <li key={project.id}>
          <ProjectCard {...project} />
        </li>
      ))}
      <li ref={ref}></li>
    </>
  );
}
