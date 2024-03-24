/* eslint-disable no-unused-vars */
import Image from 'next/image';
import * as React from 'react';
import parse from 'html-react-parser';
import { ICarouselItem } from '@/types/home';
import { mapColorToClassName } from '@/lib/utils';

export enum CAROUSEL_ITEM_TYPE {
  FULL_IMAGE_LANDSCAPE = 'full-image',
  FULL_IMAGE_SQUARE = 'full-image-square',
  IMAGE_WITH_TEXT = 'image-with-text',
  IMAGE_WITH_TEXT_REVERSED = 'image-with-text-reversed',
  IMAGE_WITH_TEXT_SMALL_CONTAINER = 'image-with-text-small-container',
  IMAGE_WITH_TEXT_SMALL_CONTAINER_REVERSED = 'image-with-text-small-container-reversed'
}

const CarouselItemContent = ({ carouselItemType, content, settings, alias, id, categoryTheme }: ICarouselItem) => {
  const showContainerText =
    carouselItemType !== CAROUSEL_ITEM_TYPE.FULL_IMAGE_LANDSCAPE &&
    carouselItemType !== CAROUSEL_ITEM_TYPE.FULL_IMAGE_SQUARE;

  const tailwindClassName = mapColorToClassName(categoryTheme);

  return (
    <div
      data-testid={`carousel-item-${id}-${alias}`}
      className={`flex shrink-0 ${carouselItemType === CAROUSEL_ITEM_TYPE.IMAGE_WITH_TEXT_REVERSED || CAROUSEL_ITEM_TYPE.IMAGE_WITH_TEXT_SMALL_CONTAINER_REVERSED ? 'flex-row-reverse' : ''} ${settings?.paddingLeft} ${settings?.paddingRight}`}
    >
      <div
        className={`h-full min-h-96 relative shrink-0 lg:h-[700px] ${carouselItemType.includes(CAROUSEL_ITEM_TYPE.FULL_IMAGE_SQUARE) ? 'aspect-square w-full min-w-[500px]' : 'w-[768px] lg:w-[1024px]'}`}
      >
        <Image alt={content.imageSrc.alt} src={content.imageSrc.url} fill sizes="100vw" />
      </div>
      {showContainerText ? (
        <div
          className={`whitespace-normal py-5 px-4  md:py-7 md:px-9 ${tailwindClassName} ${carouselItemType === CAROUSEL_ITEM_TYPE.IMAGE_WITH_TEXT_SMALL_CONTAINER ? 'max-w-[166px] md:max-w-[300px]' : 'max-w-72 md:max-w-[400px]'}`}
        >
          {parse(`${content?.text}`)}
        </div>
      ) : null}
    </div>
  );
};

export { CarouselItemContent };
