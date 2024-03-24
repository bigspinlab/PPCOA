'use client';

import { UmbracoWidgets } from '@/global/constants';
import { getProjectDetail } from '@/lib/getProjectDetail';
import { filterWidgetsByAlias } from '@/lib/utils';
import { ICarousel } from '@/types/home';
import { BACKGROUND_COLOR, CAROUSEL_ITEM_TYPE, CarouselItemContent } from '@/ui-elements/CarouselItem';
import { ScrollBar, ScrollArea } from '@/ui-elements/ScrollArea';
import { useQuery } from '@tanstack/react-query';

export default function FakeCarousel({ params }: { params: { category: string; projectId: string } }) {
  const { category, projectId } = params;

  const { data } = useQuery({
    queryKey: ['projectDetail', projectId],
    queryFn: () => getProjectDetail({ projectName: projectId })
  });

  const filteredCarouselWidget = filterWidgetsByAlias<ICarousel>(data, UmbracoWidgets.carousel);


  console.log('data', filteredCarouselWidget);
  return (
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
  );
}

// Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
//   const posts = await fetch('http://localhost:8000/projectDetail').then((res) => res.json())

//   return posts
// }
