'use server';

import RootWrapper from '@/components/RootWrapper';
import ProjectCard from '@/components/ProjectCard';
import { BACKGROUND_COLOR, CAROUSEL_ITEM_TYPE, CarouselItemContent } from '@/ui-elements/CarouselItem';
import { ScrollBar, ScrollArea } from '@/ui-elements/ScrollArea';
// import type { Metadata, ResolvingMetadata } from 'next'

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata#usage
// type Props = {
//   params: { category: string; projectId: string }
// }

// export async function generateMetadata(
//   { params }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params
//   const id = params.category

//   // fetch data
//   const product = await fetch(`https://.../${id}`).then((res) => res.json())

//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || []

//   return {
//     title: product.title,
//     openGraph: {
//       images: ['/some-specific-page-image.jpg', ...previousImages],
//     },
//   }
// }

export default async function ProjectDetails({ params }: { params: { category: string; projectId: number } }) {
  const { category, projectId } = params;
  console.log('params', category, projectId);

  return (
    <>
      <section className="overflow-hidden mb-17 md:mb-36">
        <h2 className="sr-only">
          Project Detail {category} {projectId}
        </h2>
        <article className="pt-14 lg:pt-36">
          <ScrollArea showArrowButtons className="w-full whitespace-nowrap">
            <div className="w-max flex pl-4 md:pl-16 xl:pl-32">
              {Array.from({ length: 9 }).map((_, index) => (
                <CarouselItemContent
                  key={index}
                  alt="placeholder"
                  type={
                    index === 0
                      ? CAROUSEL_ITEM_TYPE.IMAGE_WITH_TEXT_SMALL_CONTAINER_REVERSED
                      : index === 2
                        ? CAROUSEL_ITEM_TYPE.FULL_IMAGE_SQUARE
                        : index === 4
                          ? CAROUSEL_ITEM_TYPE.IMAGE_WITH_TEXT
                          : CAROUSEL_ITEM_TYPE.FULL_IMAGE_LANDSCAPE
                  }
                  url="https://via.placeholder.com/1024x700"
                  className="pr-4"
                  backgroundColor={BACKGROUND_COLOR.YELLOW}
                />
              ))}
            </div>

            <ScrollBar orientation="horizontal" className="hidden" />
          </ScrollArea>
        </article>
      </section>
      <RootWrapper customClassName="w-full">
        <h2 className="sr-only">Project list</h2>
        <article className="flex flex-col gap-10">
          <h3 className="font-bold">Outros Projetos Arquitetura</h3>
          <ul className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-10 lg:grid-cols-3">
            {Array.from({ length: 9 }).map((_, index) => (
              <li key={index}>
                <ProjectCard
                  id="1"
                  imageSrc="https://via.placeholder.com/550"
                  imageAlt="placeholder"
                  projectName="Project Name"
                />
              </li>
            ))}
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
