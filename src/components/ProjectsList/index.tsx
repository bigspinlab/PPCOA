'use client';

import ProjectCard from '@/components/ProjectCard';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import { IProject, IProjectList } from '@/types';
import ProjectCardSkeleton from '../ProjectCardSkeleton';
import { getProjectList } from '@/api';
import { ROUTES } from '@/global/constants';

export default function ProjectsList({ params }: { params: { category: string; lang: string } }) {
  const [ref, inView] = useInView();

  const { data, isFetchingNextPage, isFetching, fetchNextPage, hasNextPage, isFetched, isLoading } = useInfiniteQuery({
    queryKey: [ROUTES.projects.queryKey, params.category, params.lang],
    queryFn: ({ pageParam }) =>
      getProjectList<IProjectList>({
        category: params.category,
        perPage: 4,
        pageNumber: pageParam,
        lang: params.lang
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage: any) => {
      const hasNextPage = lastPage.widgets[0].settings.next_page > lastPage.widgets[0].settings.current_page;
      const isLastPage = lastPage.widgets[0].settings.current_page === lastPage.widgets[0].settings.total_pages;

      if (hasNextPage && !isLastPage) {
        return lastPage.widgets[0].settings.next_page;
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
    return [...acc, ...page.widgets[0].content];
  }, []);

  if (projectList.length === 0 && isFetched && !isFetchingNextPage && !isFetching && !isLoading) {
    return (
      <>
        <div className="h-dvh flex flex-col items-center gap-2">
          <h2>Empty project list</h2>
          <span>This category is missing projects to be published</span>
        </div>
      </>
    );
  }

  if (!projectList) {
    return null;
  }

  return (
    <>
      {projectList?.map((project: IProject) => (
        <li key={project.id}>
          <ProjectCard {...project} showCategoryText />
        </li>
      ))}
      {isFetchingNextPage || isFetching || isLoading ? (
        <li>
          <ProjectCardSkeleton />
        </li>
      ) : null}
      <li ref={ref}></li>
    </>
  );
}
