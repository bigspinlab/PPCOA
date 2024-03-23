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
    getNextPageParam: (nextPage: any) => nextPage[0].settings.next_page ?? undefined,
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  //console.log(data)

  // filter projectList by params category
  // const filteredProjectList = projectList?.pages..filter((project: any) => project.category === params.category);
  const projectList: IProject[] = data?.pages.reduce((acc, page) => {
    //console.log('page', page.content);
    return [...acc, ...page[0].content];
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
      {projectList?.map((project: IProject) => (
        <li key={project.id}>
          <ProjectCard
            imageSrc={project.image?.url}
            imageAlt={project.image?.alt}
            projectName={project.title}
            category={project.category}
          />
        </li>
      ))}
      <li ref={ref}></li>
    </>
  );
}
