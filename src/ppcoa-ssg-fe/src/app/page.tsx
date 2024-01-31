import RootWrapper from '@/components/RootWrapper';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <RootWrapper>
      <article className="pt-44">
        <ul className="w-full flex flex-col items-center gap-16 lg:gap-20">
          <li>
            <ProjectCard
              id="1"
              imageSrc="https://via.placeholder.com/550"
              imageAlt="placeholder"
              imageWidth={550}
              imageHeight={550}
              projectName="Project Name"
              category="Category"
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
              category="Category"
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
              category="Category"
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
              category="Category"
            />
          </li>
        </ul>
      </article>
    </RootWrapper>
  );
}
