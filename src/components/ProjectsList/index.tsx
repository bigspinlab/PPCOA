'use client';

import ProjectCard from '@/components/ProjectCard';
import { useCallback, useEffect, useState } from 'react';
import { fetchProjectsList } from './actions';
import { useInView } from 'react-intersection-observer';

export default function ProjectsList({ initialUmbracoContent }: any) {
  const [projectList, setProjectList] = useState(initialUmbracoContent);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();

  const fetchProjects = useCallback(async () => {
    const next = page + 1;
    const projectList = await fetchProjectsList({ page: next, category: 'all' });
    if (projectList?.length) {
      setPage(next);
      setProjectList({
        projectsList: {
          content: [...projectList.projectsList.content, ...projectList.projectsList.content]
        }
      });
    }
  }, [page]);

  useEffect(() => {
    if (inView) {
      fetchProjects();
    }
  }, [inView, fetchProjects]);

  return (
    <>
      {projectList?.projectsList?.content.map((project: any) => (
        <li key={project.id}>
          <ProjectCard
            id={project.id}
            imageSrc={project.imageSrc.desktop}
            imageAlt={project.imageSrc.alt}
            projectName={project.title}
            category={project.category}
          />
        </li>
      ))}

      <li ref={ref}>loading spinner</li>
    </>
  );
}
