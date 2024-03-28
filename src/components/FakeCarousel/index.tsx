'use client';

import { UmbracoWidgets } from '@/global/constants';
import { getProjectDetail } from '@/lib/getProjectDetail';
import { filterWidgetsByAlias } from '@/lib/utils';
import { ICarousel, ICarouselItem } from '@/types/home';
import { CarouselItemContent } from '@/ui-elements/CarouselItem';
import { ScrollBar, ScrollArea } from '@/ui-elements/ScrollArea';
import { useQuery } from '@tanstack/react-query';

export default function FakeCarousel({ params }: { params: { category: string; projectId: string } }) {
  const { category, projectId } = params;

  const { data } = useQuery({
    queryKey: ['projectDetail', projectId],
    queryFn: () => getProjectDetail({ projectName: projectId })
  });

  const filteredCarouselWidget = filterWidgetsByAlias<ICarousel>(data, UmbracoWidgets.carousel);

  return (
    <section className="overflow-hidden mb-17 md:mb-36">
      <h2 className="sr-only">
        Project Detail {category} {projectId}
      </h2>
      <article className="pt-14 lg:pt-36">
        <ScrollArea showArrowButtons className="w-full whitespace-nowrap">
          <div className="w-max flex pl-4 md:pl-16 xl:pl-32">
            {filteredCarouselWidget[0]?.content.map((carouselItem: ICarouselItem) => (
              <CarouselItemContent
                key={carouselItem.id}
                {...carouselItem}
                categoryTheme={filteredCarouselWidget[0].categoryThemeColor}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>
      </article>
    </section>
  );
}
