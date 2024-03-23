'use client'
import { useGetHeadlessContent } from '@/hooks/useGetHeadlessContent';
import Rectangle from '@/ui-elements/Rectangle';
import Image from 'next/image';
import parse from 'html-react-parser';

export default function ImageText() {
  const {data: imageText} = useGetHeadlessContent({ route: 'about', queryKey: 'aboutContent' });

  if (!imageText) {
    return null;
  }

  return (
    <>
      <section className="w-full pt-20 mb-24">
        <h2 className="sr-only">About</h2>
        <article className="w-full grid lg:grid-cols-12 lg:grid-rows-2 lg:h-[90dvh]">
          <div className="flex items-center justify-center px-4 pt-20 mb-16 lg:mb-0 lg:p-0 lg:col-start-2 lg:col-end-5 lg:row-start-1 lg:row-end-3">
            <div className="max-w-sm text-xl">
              {parse(`${imageText.widgets[0].content?.firstParagraph}`)}
            </div>
          </div>
          <div className="min-h-96 flex items-center justify-center bg-blue-100 lg:row-span-1 lg:col-start-6 lg:col-end-13 md:h-full">
            <Image src={imageText.widgets[0].content?.logo.url} alt={imageText.widgets[0].content?.logo.alt} width={272} height={150} />
          </div>
          <div className="min-h-96 relative lg:row-span-2 lg:col-start-6 lg:col-end-13 md:h-full">
            <Image
              className="w-full h-full object-cover"
              src={imageText.widgets[0].content?.image.url} alt={imageText.widgets[0].content?.logo.alt}
              fill
              sizes="(min-width: 64em) 33vw, (min-width: 48em) 50vw, 100vw"
            />
          </div>
        </article>
      </section>

       <section className="w-full pt-20 mb-24">
        <h2 className="sr-only">About</h2>
        <article className="w-full grid justify-center lg:grid-cols-12">
          <div className="w-full relative aspect-square mb-24 lg:mb-0 lg:col-start-2 lg:col-end-5">
            <Image
              className="shrink-0 aspect-square object-contain px-4 lg:px-0"
              src={imageText.widgets[1].content?.image.url} alt={imageText.widgets[1].content?.logo.alt}
              fill
              sizes="(min-width: 64em) 33vw, (min-width: 48em) 50vw, 100vw"
            />
          </div>
          <div className="flex flex-col px-4 lg:col-start-6 lg:col-end-9 lg:px-0">
            <div className="max-w-96 text-xl">
              <h3 className="text-xl mb-[30px]">
                <strong>{imageText.widgets[1].content?.title}</strong>
              </h3>
              <div className="text-xl">
                {parse(`${imageText.widgets[1].content?.firstParagraph}`)}
              </div>
            </div>
          </div>
        </article>
      </section>
      
      <section className="w-full pt-20 mb-24">
        <h2 className="sr-only">About</h2>
        <article className="w-full pl-4 grid md:pl-0 lg:grid-cols-12">
          <Rectangle customStyles="w-5/6 justify-self-end bg-red-100 mb-48 md:mb-20 lg:mb-28 lg:col-start-2 lg:w-full lg:justify-self-start lg:col-end-8" />
          <div className="pr-4 max-w-96 justify-self-center lg:col-start-9 lg:col-end-12 lg:pr-0">
            <div className="text-xl">
              {parse(`${imageText.widgets[2].content?.richText}`)}
            </div>
          </div>
        </article>
      </section>

      <section className="w-full pt-20 mb-24">
        <h2 className="sr-only">About</h2>
        <article className="w-full px-4 grid gap-y-36 md:px-0 md:gap-0 lg:grid-cols-12">
          <div className="flex flex-col gap-36 justify-self-center md:col-start-2 md:w-full md:col-end-9 md:justify-self-start">
            <div className="text-xl max-w-96">
              {parse(`${imageText.widgets[3].content?.firstParagraph}`)}
            </div>
            <div className="text-xl max-w-96 md:ml-auto">
              {parse(`${imageText.widgets[3].content?.secondParagraph}`)}    
            </div>
          </div>
          <div className="flex items-center justify-center py-24 px-16 bg-yellow-100 max-w-56 row-start-1 md:col-start-9 md:col-end-12 md:justify-self-end md:max-w-72">
            <Image
              className="max-h-72 object-contain md:max-h-[490px]"
              src={imageText.widgets[3].content?.logo.url} alt={imageText.widgets[3].content?.logo.alt}
              width={90}
              height={530}
            />
          </div>
        </article>
      </section>

      <section className="w-full pt-20 mb-24">
        <h2 className="sr-only">About</h2>
        <article className="w-full h-44 grid grid-cols-12 lg:h-80">
          <div className="w-full h-auto bg-red-100 col-start-1 col-end-5 lg:col-start-2 lg:col-end-8"></div>
          <div className="relative col-start-5 col-end-13 lg:col-start-8">
            <Image
              className="object-cover"
              src={imageText.widgets[4].content?.image.url} alt={imageText.widgets[4].content?.logo.alt}
              fill
              sizes="(min-width: 64em) 33vw, (min-width: 48em) 50vw, 75vw"
            />
          </div>
        </article>
      </section>

      <section className="w-full pt-20 mb-24">
        <h2 className="sr-only">About</h2>
        <article className="w-full grid grid-cols-12 grid-rows-2">
          <div className="flex flex-col gap-36 justify-self-center px-4 md:px-0 col-span-full md:col-start-4 md:w-full md:col-end-12 md:justify-self-start lg:col-start-6">
            <div className="text-xl max-w-96">
              {parse(`${imageText.widgets[5].content?.firstParagraph}`)}
            </div>
            <div className="text-xl max-w-96 md:ml-auto">
              {parse(`${imageText.widgets[5].content?.secondParagraph}`)}
            </div>
          </div>
          <div className="w-full h-28 mt-32 ml-auto bg-yellow-100 col-start-7 col-end-13 row-start-2"></div>
        </article>
      </section>
    </>
  );
}
