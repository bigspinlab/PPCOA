import RootWrapper from "@/components/RootWrapper";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectDetails() {
  return (
    <RootWrapper>
      <article className="flex flex-col gap-10">
        <h2>
          Outros Projetos Arquitetura
        </h2>
        <ul className="w-full grid grid-cols-1 grid-rows-2 gap-6 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-10 lg:grid-cols-3">
          <li>
            <ProjectCard 
              id="1"
              imageSrc="https://via.placeholder.com/550"
              imageAlt="placeholder"
              imageWidth={550}
              imageHeight={550}
              projectName="Project Name"
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
              
            />
          </li>
        </ul>
      </article>
    </RootWrapper>
  )
}
