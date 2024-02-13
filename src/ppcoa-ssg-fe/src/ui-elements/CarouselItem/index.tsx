/* eslint-disable no-unused-vars */
import Image from 'next/image';
import * as React from 'react';

export enum CAROUSEL_ITEM_TYPE {
  FULL_IMAGE_LANDSCAPE = 'full-image',
  FULL_IMAGE_SQUARE = 'full-image-square',
  IMAGE_WITH_TEXT = 'image-with-text',
  IMAGE_WITH_TEXT_REVERSED = 'image-with-text-reversed',
  IMAGE_WITH_TEXT_SMALL_CONTAINER = 'image-with-text-small-container',
  IMAGE_WITH_TEXT_SMALL_CONTAINER_REVERSED = 'image-with-text-small-container-reversed'
}

export enum BACKGROUND_COLOR {
  RED = 'bg-red-100',
  BLUE = 'bg-blue-100',
  GREEN = 'bg-green-100',
  YELLOW = 'bg-yellow-100'
}

interface CarouselItemContentProps {
  type: CAROUSEL_ITEM_TYPE;
  url: string;
  alt: string;
  className?: string;
  backgroundColor?: string;
}

const CarouselItemContent = ({ className = '', type, alt, url, backgroundColor }: CarouselItemContentProps) => {
  const showContainerText = type !== CAROUSEL_ITEM_TYPE.FULL_IMAGE_LANDSCAPE && type !== CAROUSEL_ITEM_TYPE.FULL_IMAGE_SQUARE;
  
  return (
    <div
      className={`flex shrink-0 ${type === CAROUSEL_ITEM_TYPE.IMAGE_WITH_TEXT_REVERSED || CAROUSEL_ITEM_TYPE.IMAGE_WITH_TEXT_SMALL_CONTAINER_REVERSED ? 'flex-row-reverse' : ''} ${className}`}
    >
      <div className={`h-full min-h-96 relative shrink-0 lg:h-[700px] ${type.includes(CAROUSEL_ITEM_TYPE.FULL_IMAGE_SQUARE) ? 'aspect-square w-full min-w-[500px]' : 'w-[768px] lg:w-[1024px]'}`}>
        <Image alt={alt} src={url} fill sizes="100vw" />
      </div>
      {showContainerText ? (
        <div
          className={`whitespace-normal py-5 px-4  md:py-7 md:px-9 ${backgroundColor} ${type === CAROUSEL_ITEM_TYPE.IMAGE_WITH_TEXT_SMALL_CONTAINER ? 'max-w-[166px] md:max-w-[300px]' : 'max-w-72 md:max-w-[400px]'}`}
        >
          <h3>Colégio Sta. Clara de Assis</h3>
          <p>Arquitetura</p>
          <p>Tipologia</p>
          <p>Localização</p>
          <p>Área</p>
          <p>Projeto</p>
          <p>
            The complex will consist of a series of multi-story buildings, intelligently designed to optimize natural
            lighting and ventilation. The architecture will seamlessly blend modern aesthetics with nature-inspired
            elements, creating a visually appealing and inviting atmosphere. The use of sustainable materials, such as
            recycled steel and locally sourced timber, will further enhance the eco-friendly nature of the project.
          </p>
        </div>
      ) : null}
    </div>
  );
};

export { CarouselItemContent };
