'use client';

import ProjectCard from '@/components/ProjectCard';
import React, { useEffect } from 'react';
import { getProjectsList } from './actions';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
//import { useParams } from 'next/navigation';

export default function ProjectsList() {
  //const params = useParams();
  const [ref, inView] = useInView();

  const { data, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: ['projectsList'],
    queryFn: () => getProjectsList({ page: 1 }),
    initialPageParam: 1,
    getNextPageParam: (nextPage: any) => nextPage.nextId ?? undefined,
    maxPages: 3
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  // filter projectList by params category
  // const filteredProjectList = projectList?.pages..filter((project: any) => project.category === params.category);
  const projectList = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.data[0].content];
  }, []);

  if (isLoading) {
    return <li>loading spinner</li>;
  }

  return (
    <>
      {/* {data?.pages.map((page) =>
        <React.Fragment key={page.nextId}>
          {page.data[0]?.content?.map((project: any) => (
            <li key={project.id}>
              <ProjectCard
                id={project.id}
                imageSrc={project.imageSrc?.url}
                imageAlt={project.imageSrc?.alt}
                projectName={project.title}
                category={project.category}
              />
            </li>
          ))}
        </React.Fragment>
      )} */}
      {projectList?.map((project: any) => (
        <li key={project.id}>
          <ProjectCard
            id={project.id}
            imageSrc={project.imageSrc?.url}
            imageAlt={project.imageSrc?.alt}
            projectName={project.title}
            category={project.category}
          />
        </li>
      ))}
      <li ref={ref}>loading spinner</li>
    </>
  );
}
