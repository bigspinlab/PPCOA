import { Skeleton } from '@/ui-elements/Skeleton';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <section className="w-full pt-20 mb-24">
        <h2 className="sr-only">About skeleton</h2>
        <article className="w-full grid lg:grid-cols-12 lg:grid-rows-2 lg:h-[90dvh]">
          <div className="flex items-center justify-center px-4 pt-20 mb-16 lg:mb-0 lg:p-0 lg:col-start-2 lg:col-end-5 lg:row-start-1 lg:row-end-3">
            <Skeleton className="h-64 w-full " />
          </div>
          <div className="min-h-96 flex items-center justify-center bg-blue-100 lg:row-span-1 lg:col-start-6 lg:col-end-13 md:h-full">
            <Skeleton className="h-full w-full " />
          </div>
          <div className="min-h-96 relative lg:row-span-2 lg:col-start-6 lg:col-end-13 md:h-full">
            <Skeleton className="h-full w-full " />
          </div>
        </article>
      </section>
      <section className="w-full pt-20 mb-24">
        <h2 className="sr-only">About skeleton</h2>
        <article className="w-full grid justify-center lg:grid-cols-12">
          <div className="w-full relative aspect-square mb-24 lg:mb-0 lg:col-start-2 lg:col-end-5">
            <Skeleton className="h-full w-full shrink-0 px-4 lg:px-0 " />
          </div>
          <div className="flex flex-col px-4 lg:col-start-6 lg:col-end-9 lg:px-0">
            <div className="max-w-96 text-xl">
              <Skeleton className="h-7 mb-[30px] w-full " />
              <Skeleton className="h-96 mb-[30px] w-full " />
            </div>
          </div>
        </article>
      </section>

      <section className="w-full pt-20 mb-24">
        <h2 className="sr-only">About</h2>
        <article className="w-full pl-4 grid md:pl-0 lg:grid-cols-12">
          <Skeleton className="w-5/6 h-10 justify-self-end mb-48 md:mb-20 lg:mb-28 lg:col-start-2 lg:w-full lg:justify-self-start lg:col-end-8" />
          <div className="pr-4 max-w-96 justify-self-center lg:col-start-9 lg:col-end-12 lg:pr-0">
            <Skeleton className="h-96 w-full " />
          </div>
        </article>
      </section>

      <section className="w-full pt-20 mb-24">
        <h2 className="sr-only">About</h2>
        <article className="w-full px-4 grid gap-y-36 md:px-0 md:gap-0 lg:grid-cols-12">
          <div className="flex flex-col gap-36 justify-self-center md:col-start-2 md:w-full md:col-end-9 md:justify-self-start">
            <Skeleton className="h-96 mb-[30px] w-full " />
            <Skeleton className="h-96 mb-[30px] w-full " />
          </div>
          <div className="flex items-center justify-center py-24 px-16 bg-yellow-100 max-w-56 row-start-1 md:col-start-9 md:col-end-12 md:justify-self-end md:max-w-72">
            <Skeleton className="h-72 mb-[30px] w-full " />
          </div>
        </article>
      </section>

      <section className="w-full pt-20 mb-24">
        <h2 className="sr-only">About</h2>
        <article className="w-full h-44 grid grid-cols-12 lg:h-80">
          <div className="w-full h-auto bg-red-100 col-start-1 col-end-5 lg:col-start-2 lg:col-end-8"></div>
          <div className="relative col-start-5 col-end-13 lg:col-start-8">
            <Skeleton className="h-96 mb-[30px] w-full " />
          </div>
        </article>
      </section>

      <section className="w-full pt-20 mb-24">
        <h2 className="sr-only">About</h2>
        <article className="w-full grid grid-cols-12 grid-rows-2">
          <div className="flex flex-col gap-36 justify-self-center px-4 md:px-0 col-span-full md:col-start-4 md:w-full md:col-end-12 md:justify-self-start lg:col-start-6">
            <Skeleton className="h-96 mb-[30px] w-full " />
            <Skeleton className="h-96 mb-[30px] w-full " />
          </div>
          <div className="w-full h-28 mt-32 ml-auto bg-yellow-100 col-start-7 col-end-13 row-start-2"></div>
        </article>
      </section>
    </>
  );
}
