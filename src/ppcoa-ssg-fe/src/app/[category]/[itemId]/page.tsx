'use server';

import RootWrapper from '@/components/RootWrapper';
import ProjectCard from '@/components/ProjectCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/ui-elements/Carousel';
import { CAROUSEL_ITEM_TYPE, CarouselItemContent } from '@/ui-elements/CarouselItem';
import { Filter } from '@/components/Filter';

export default async function ProjectDetails({ params }: any) {
  const { slug } = params;
  console.log('params', params, slug);

  return (
    <>
      <Filter />
      <section className="overflow-hidden mb-17 md:mb-36">
        <h2 className="sr-only">Project Detail</h2>
        <article className="pt-14 lg:pt-36">
          <Carousel className="flex flex-col-reverse">
            <CarouselContent>
              <CarouselItem>
                <CarouselItemContent
                  alt="placeholder"
                  height={550}
                  type={CAROUSEL_ITEM_TYPE.IMAGE_WITH_TEXT}
                  url="https://via.placeholder.com/550"
                  width={550}
                />
              </CarouselItem>
              <CarouselItem>
                <CarouselItemContent
                  alt="placeholder"
                  height={550}
                  type={CAROUSEL_ITEM_TYPE.FULL_IMAGE}
                  url="https://via.placeholder.com/550"
                  width={550}
                />
              </CarouselItem>
              <CarouselItem>
                <CarouselItemContent
                  alt="placeholder"
                  height={550}
                  type={CAROUSEL_ITEM_TYPE.IMAGE_WITH_TEXT}
                  url="https://via.placeholder.com/550"
                  width={550}
                />
              </CarouselItem>
              <CarouselItem>
                <CarouselItemContent
                  alt="placeholder"
                  height={550}
                  type={CAROUSEL_ITEM_TYPE.IMAGE_WITH_TEXT_REVERSED}
                  url="https://via.placeholder.com/550"
                  width={550}
                />
              </CarouselItem>
            </CarouselContent>
            <div className="hidden pb-9 md:pr-20 md:flex md:gap-8 lg:pr-32 justify-end">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </article>
      </section>

      <RootWrapper>
        <h2 className="sr-only">Project list</h2>
        <article className="flex flex-col gap-10">
          <h3 className="font-bold">Outros Projetos Arquitetura</h3>
          <ul className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-10 lg:grid-cols-3">
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
    </>
  );
}

// Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
//   const posts = await fetch('http://localhost:8000/projectDetail').then((res) => res.json())

//   return posts
// }
