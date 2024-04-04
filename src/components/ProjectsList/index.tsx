'use client';

import ProjectCard from '@/components/ProjectCard';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import { IProject, IProjectList } from '@/types';
import ProjectCardSkeleton from '../ProjectCardSkeleton';
import { getProjectList } from '@/api';
import { ROUTES } from '@/global/constants';


export default function ProjectsList({ params }: { params: { category: string; lang: string } } ) {
  const [ref, inView] = useInView();

  const { data, isFetchingNextPage, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: [ROUTES.projects.queryKey, params.category, params.lang],
    queryFn: ({ pageParam }) => getProjectList<IProjectList>({ category: `${params.category}`, perPage: 4, pageNumber: pageParam, lang: params.lang }),
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
      {isFetchingNextPage || isFetching ? (
        <li>
          <ProjectCardSkeleton />
        </li>
      ) : null}
      <li ref={ref}></li>
    </>
  );
}
