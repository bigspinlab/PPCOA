'use client';

import { getProjectDetail } from '@/api';
import { ROUTES } from '@/global/constants';
import { filterWidgetsByAlias } from '@/global/utils';
import { ICarousel, ICarouselItem, IHeadlessContentPage, UmbracoWidgets } from '@/types';
import { CarouselItemContent } from '@/ui-elements/CarouselItem';
import { ScrollBar, ScrollArea } from '@/ui-elements/ScrollArea';
import { useQuery } from '@tanstack/react-query';
import ButtonGoBack from '../ButtonGoBack';

export default function FakeCarousel({ params }: { params: { category: string; projectId: string; lang: string } }) {
  const { category, projectId } = params;

  const { data: projectDetailData } = useQuery<IHeadlessContentPage>({
    queryKey: [ROUTES.projectDetails.queryKey, projectId],
    queryFn: () => getProjectDetail({ projectName: projectId, lang: params.lang })
  });

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
