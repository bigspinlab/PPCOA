'use client';

import { filterWidgetsByAlias } from '@/global/utils';
import { ICarousel, ICarouselItem, IHeadlessContentPage, UmbracoWidgets } from '@/types';
import { CarouselItemContent } from '@/ui-elements/CarouselItem';
import { ScrollBar, ScrollArea } from '@/ui-elements/ScrollArea';

import ButtonGoBack from '../ButtonGoBack';

export default function FakeCarousel({
  params,
  projectDetailData
}: { projectDetailData: IHeadlessContentPage } & { params: { category: string; projectId: string; lang: string } }) {
  const { category, projectId } = params;

  if (!projectDetailData) {
    return null;
  }

  const filteredCarouselWidget = filterWidgetsByAlias<ICarousel>(projectDetailData, UmbracoWidgets.carousel);

  return (
    <section className="overflow-hidden mb-17 md:mb-36">
      <h2 className="sr-only">
        Project Detail {category} {projectId}
      </h2>
      <article className="pt-14 lg:pt-36 relative">
        <ButtonGoBack />
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
