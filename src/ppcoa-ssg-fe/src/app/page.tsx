'use client';

import RootWrapper from '@/components/RootWrapper';
import ProjectCard from '@/components/ProjectCard';
import { useMediaQuery } from 'usehooks-ts';
import { Filter } from '@/components/Filter/Filter';

export default function Home() {
  const isMediumAndUp = useMediaQuery('(min-width: 768px)');

  return (
    <>
      {!isMediumAndUp ? <Filter /> : null}
      <RootWrapper>
        <article className="pt-14 md:pt-44">
          <ul className="w-full flex flex-col items-center gap-16 lg:gap-20">
            <li>
              <ProjectCard
                id="1"
                imageSrc="https://via.placeholder.com/550"
                imageAlt="placeholder"
                imageWidth={550}
                imageHeight={550}
                projectName="Project Name"
                category="architecture"
              />
            </li>
            <li>
              <ProjectCard
                id="2"
                imageSrc="https://via.placeholder.com/550"
                imageAlt="placeholder"
                imageWidth={550}
                imageHeight={550}
                projectName="Project Name"
                category="social"
              />
            </li>
            <li>
              <ProjectCard
                id="3"
                imageSrc="https://via.placeholder.com/550"
                imageAlt="placeholder"
                imageWidth={550}
                imageHeight={550}
                projectName="Project Name"
                category="urban"
              />
            </li>
            <li>
              <ProjectCard
                id="4"
                imageSrc="https://via.placeholder.com/550"
                imageAlt="placeholder"
                imageWidth={550}
                imageHeight={550}
                projectName="Project Name"
                category="architecture"
              />
            </li>
          </ul>
        </article>
      </RootWrapper>
    </>
  );
}
