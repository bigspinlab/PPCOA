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

            {/* <Image src="https://via.placeholder.com/220" alt="office" width={272} height={150} /> */}
          </div>
          <div className="min-h-96 relative lg:row-span-2 lg:col-start-6 lg:col-end-13 md:h-full">
            <Skeleton className="h-full w-full " />

            {/* <Image
              className="w-full h-full object-cover"
              src="https://via.placeholder.com/1080"
              alt="office"
              fill
              sizes="(min-width: 64em) 33vw, (min-width: 48em) 50vw, 100vw"
            /> */}
          </div>
        </article>
      </section>
      <section className="w-full pt-20 mb-24">
        <h2 className="sr-only">About skeleton</h2>
        <article className="w-full grid justify-center lg:grid-cols-12">
          <div className="w-full relative aspect-square mb-24 lg:mb-0 lg:col-start-2 lg:col-end-5">
            <Skeleton className="h-full w-full shrink-0 px-4 lg:px-0 " />

            {/* <Image
              className="shrink-0 aspect-square object-contain px-4 lg:px-0"
              alt="founder"
              src="https://via.placeholder.com/1080"
              fill
              sizes="(min-width: 64em) 33vw, (min-width: 48em) 50vw, 100vw"
            /> */}
          </div>
          <div className="flex flex-col px-4 lg:col-start-6 lg:col-end-9 lg:px-0">
            <div className="max-w-96 text-xl">
              <Skeleton className="h-7 mb-[30px] w-full " />

              {/* <h3 className="text-xl mb-[30px]">
                <strong>Fundador</strong>
              </h3> */}
              <Skeleton className="h-96 mb-[30px] w-full " />

              {/* <p className="text-xl">
                Pedro Oliveira Santos Pinto Correia é um arquitecto luso-angolano, nascido em Lisboa a 8 de março de
                1981. Estudou na Faculdade de Arquitectura da Universidade Lusíada de Lisboa entre 1999 e 2004,
                efectuando posteriormente o seu Estágio Profissional em Madrid com o Arquitecto Andrés Jaque, entre 2004
                e 2008. Aqui realizou trabalhos como Teddy House (Vigo | Prémio COAG – Colegio Oficial Arquitectos de
                Galicia | Melhor Projecto, 2005) e Tupper Home (Madrid | Finalista do prémio Mies Van Rohe 2006).
              </p> */}
            </div>
          </div>
        </article>
      </section>

      <section className="w-full pt-20 mb-24">
        <h2 className="sr-only">About</h2>
        <article className="w-full pl-4 grid md:pl-0 lg:grid-cols-12">
          <Skeleton className="w-5/6 h-10 justify-self-end mb-48 md:mb-20 lg:mb-28 lg:col-start-2 lg:w-full lg:justify-self-start lg:col-end-8" />

          {/* <Rectangle customStyles="w-5/6 justify-self-end bg-red-100 mb-48 md:mb-20 lg:mb-28 lg:col-start-2 lg:w-full lg:justify-self-start lg:col-end-8" /> */}
          <div className="pr-4 max-w-96 justify-self-center lg:col-start-9 lg:col-end-12 lg:pr-0">
            {/* <p className="text-xl">
              Em Lisboa, ingressa no atelier da Arquitecta Teresa Nunes da Ponte, entre 2008 e 2010, tendo desenvolvido
              projectos na área da hotelaria/ensino. Escola de Hotelaria e Turismo de Lisboa, Escola Machado de Castro e
              Escola de Hotelaria e Turismo de Setúbal, Escola Padre António Vieira do arquitecto Athouguia.
            </p> */}
          </div>
        </article>
      </section>

      <section className="w-full pt-20 mb-24">
        <h2 className="sr-only">About</h2>
        <article className="w-full px-4 grid gap-y-36 md:px-0 md:gap-0 lg:grid-cols-12">
          <div className="flex flex-col gap-36 justify-self-center md:col-start-2 md:w-full md:col-end-9 md:justify-self-start">
            {/* <p className="text-xl max-w-96">
              Colaborou também no desenvolvimento da nova sede da Fundação Calouste Gulbenkian em Paris, entre outros
              trabalhos de apoio à sede da mesma em Lisboa.
            </p>
            <p className="text-xl max-w-96 md:ml-auto">
              Abre em 2011 a Oficina de Arquitectura, onde entre Lisboa e Luanda, executa parcerias e presta serviços de
              arquitectura nas mais diversas áreas: habitação, hotelaria, comércio, reabilitação e urbanismo tático.
            </p> */}
          </div>
          <div className="flex items-center justify-center py-24 px-16 bg-yellow-100 max-w-56 row-start-1 md:col-start-9 md:col-end-12 md:justify-self-end md:max-w-72">
            {/* <Image
              className="max-h-72 object-contain md:max-h-[490px]"
              src="/about-layer.png"
              alt="office"
              width={90}
              height={530}
            /> */}
          </div>
        </article>
      </section>

      <section className="w-full pt-20 mb-24">
        <h2 className="sr-only">About</h2>
        <article className="w-full h-44 grid grid-cols-12 lg:h-80">
          <div className="w-full h-auto bg-red-100 col-start-1 col-end-5 lg:col-start-2 lg:col-end-8"></div>
          <div className='relative col-start-5 col-end-13 lg:col-start-8'>
            {/* <Image className='object-cover' src="https://via.placeholder.com/700x300" alt="office" fill sizes='(min-width: 64em) 33vw, (min-width: 48em) 50vw, 75vw' /> */}
          </div>
        </article>
      </section>

      <section className='w-full pt-20 mb-24'>
        <h2 className="sr-only">About</h2>
        <article className="w-full grid grid-cols-12 grid-rows-2">
          <div className="flex flex-col gap-36 justify-self-center px-4 md:px-0 col-span-full md:col-start-4 md:w-full md:col-end-12 md:justify-self-start lg:col-start-6">
            {/* <p className="text-xl max-w-96">
              Colaborou também no desenvolvimento da nova sede da Fundação Calouste Gulbenkian em Paris, entre outros
              trabalhos de apoio à sede da mesma em Lisboa.
            </p>
            <p className="text-xl max-w-96 md:ml-auto">
              Abre em 2011 a Oficina de Arquitectura, onde entre Lisboa e Luanda, executa parcerias e presta serviços de
              arquitectura nas mais diversas áreas: habitação, hotelaria, comércio, reabilitação e urbanismo tático.
            </p> */}
          </div>
          <div className="w-full h-28 mt-32 ml-auto bg-yellow-100 col-start-7 col-end-13 row-start-2"></div>
        </article>
      </section>
    </>
  );}
