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
  width: number;
  height: number;
  alt: string;
  className?: string;
}

const CarouselItemContent = ({ className, type, alt, height, url, width }: CarouselItemContentProps) => {
  return (
    <div className={`flex ${className} ${type === CAROUSEL_ITEM_TYPE.IMAGE_WITH_TEXT_REVERSED && 'flex-row-reverse'}`}>
      <Image className="shrink-0" alt={alt} src={url} width={width} height={height} />
      {type !== CAROUSEL_ITEM_TYPE.FULL_IMAGE ? (
        <div className="bg-red-700">
          <h3>Colégio Sta. Clara de Assis</h3>
          <p>Arquitetura</p>
          <p>Tipologia</p>
          <p>Localização</p>
          <p>Área</p>
          <p>Projeto</p>
        </div>
      ) : null}
    </div>
  );
};

export { CarouselItemContent };
