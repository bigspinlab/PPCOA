/* eslint-disable no-unused-vars */
import Image from 'next/image';
import * as React from 'react';

export enum CAROUSEL_ITEM_TYPE {
  FULL_IMAGE = 'full-image',
  IMAGE_WITH_TEXT = 'image-with-text',
  IMAGE_WITH_TEXT_REVERSED = 'image-with-text-reversed'
}

interface CarouselItemContentProps {
  type: CAROUSEL_ITEM_TYPE;
  url: string;
  alt: string;
  className?: string;
}

const CarouselItemContent = ({ className = '', type, alt, url }: CarouselItemContentProps) => {
  return (
    <div
      className={`flex shrink-0  ${className} ${type === CAROUSEL_ITEM_TYPE.IMAGE_WITH_TEXT_REVERSED ? 'flex-row-reverse' : ''}`}
    >
      <div className="w-[768px] h-full min-h-96 lg:w-[1024px] lg:h-[700px] relative shrink-0">
        <Image alt={alt} src={url} fill sizes="100vw" />
      </div>
      {type !== CAROUSEL_ITEM_TYPE.FULL_IMAGE ? (
        <div className="whitespace-normal max-w-64 py-5 px-4 bg-red-700 md:py-7 md:px-9 md:max-w-xs">
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
