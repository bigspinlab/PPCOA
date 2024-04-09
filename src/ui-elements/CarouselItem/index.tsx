/* eslint-disable no-unused-vars */
import Image from 'next/image';
import * as React from 'react';
import parse from 'html-react-parser';
import { ICarouselItem } from '@/types/home';
import { mapColorToClassName } from '@/lib/utils';

export enum CAROUSEL_ITEM_TYPE {
  FULL_IMAGE_LANDSCAPE = 'FULL_IMAGE_LANDSCAPE',
  FULL_IMAGE_SQUARE = 'FULL_IMAGE_SQUARE',
  IMAGE_WITH_TEXT = 'IMAGE_WITH_TEXT',
  IMAGE_WITH_TEXT_REVERSED = 'IMAGE_WITH_TEXT_REVERSED',
  IMAGE_WITH_TEXT_SMALL_CONTAINER = 'IMAGE_WITH_TEXT_SMALL_CONTAINER',
  IMAGE_WITH_TEXT_SMALL_CONTAINER_REVERSED = 'IMAGE_WITH_TEXT_SMALL_CONTAINER_REVERSED'
}

const CarouselItemContent = ({ carouselItemType, content, settings, alias, id, categoryTheme }: ICarouselItem) => {
  const showContainerText =
    carouselItemType !== CAROUSEL_ITEM_TYPE.FULL_IMAGE_LANDSCAPE &&
    carouselItemType !== CAROUSEL_ITEM_TYPE.FULL_IMAGE_SQUARE;

  const tailwindClassName = mapColorToClassName(categoryTheme);

  return (
    <div
      data-testid={`carousel-item-${id}-${alias}-${carouselItemType}`}
      className={`flex shrink-0 ${carouselItemType === CAROUSEL_ITEM_TYPE.IMAGE_WITH_TEXT_REVERSED || CAROUSEL_ITEM_TYPE.IMAGE_WITH_TEXT_SMALL_CONTAINER_REVERSED ? 'flex-row-reverse' : ''} ${settings?.paddingLeft ? 'pl-8' : ''} ${settings?.paddingRight ? 'pr-8' : ''}`}
    >
      <div
        className={`h-full min-h-96 relative shrink-0 lg:h-[700px] ${carouselItemType.includes(CAROUSEL_ITEM_TYPE.FULL_IMAGE_SQUARE) ? 'aspect-square w-full min-w-[500px]' : 'w-[768px] lg:w-[1024px]'}`}
      >
        <Image
          className="data-[loaded=false]:animate-pulse data-[loaded=false]:bg-muted pointer-events-none"
          alt={`carousel-figure-${id}-${content.imageSrc.alt}`}
          src={content.imageSrc.url}
          fill
          sizes="(min-width: 48em) 100vw, 100vw"
          data-loaded="false"
          onLoad={(event) => {
            event.currentTarget.setAttribute('data-loaded', 'true');
          }}
        />
      </div>
      {showContainerText ? (
        <div
          className={`whitespace-normal py-5 px-4  md:py-7 md:px-9 ${tailwindClassName} ${carouselItemType === CAROUSEL_ITEM_TYPE.IMAGE_WITH_TEXT_SMALL_CONTAINER ? 'w-[166px] md:w-[300px]' : 'w-72 md:w-[400px]'}`}
        >
          {parse(`${content?.text}`)}
        </div>
      ) : null}
    </div>
  );
};

export { CarouselItemContent };
