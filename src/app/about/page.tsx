import RootWrapper from '@/components/RootWrapper';
import Rectangle from '@/ui-elements/Rectangle';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <section className="w-full pt-20 mb-24">
        <h2 className="sr-only">About</h2>
        <article className="w-full grid lg:grid-cols-2 lg:grid-rows-2 lg:h-[90dvh] xl:grid-cols-3">
          <div className="flex items-center justify-center px-4 pt-20 mb-16 lg:mb-0 lg:row-start-1 lg:row-end-3 xl:pt-0 xl:px-32">
            <p className="max-w-sm text-xl">
              PPCOA é uma oficina de arquitectura sediada em Lisboa e Luanda. Desenvolve um trabalho assente na relação
              entre a pessoa e o construído, oscilando entre o espaço público e privado, na procura de uma experiência
              adaptável à envolvente social, económica e histórica.
            </p>
          </div>
          <div className="min-h-96 flex items-center justify-center bg-blue-100 lg:row-span-1 lg:col-start-2 xl:col-end-4 md:h-full">
            <Image src="https://via.placeholder.com/220" alt="office" width={272} height={150} />
          </div>
          <div className="min-h-96 relative lg:row-span-2 lg:col-start-2 xl:col-end-4 md:h-full">
            <Image
              className="w-full h-full object-cover"
              src="https://via.placeholder.com/1080"
              alt="office"
              fill
              sizes="(min-width: 64em) 33vw, (min-width: 48em) 50vw, 100vw"
            />
          </div>
        </article>
      </section>
      <section className="w-full pt-20 mb-24">
        <h2 className="sr-only">About</h2>
        <article className="w-full grid justify-center lg:grid-cols-2 xl:grid-cols-3">
          <div className="w-full relative aspect-square max-h-80 m-x-auto mb-24 lg:mb-0">
            <Image
              className="shrink-0 aspect-square object-contain"
              alt="founder"
              src="https://via.placeholder.com/1080"
              fill
              sizes="(min-width: 64em) 33vw, (min-width: 48em) 50vw, 100vw"
            />
          </div>
          <div className="flex flex-col px-4 lg:col-start-2 lg:px-0">
            <div className="max-w-96 text-xl">
              <h3 className='text-xl mb-[30px]'><strong>Fundador</strong></h3>
              <p className="text-xl">
                Pedro Oliveira Santos Pinto Correia é um arquitecto luso-angolano, nascido em Lisboa a 8 de março de
                1981. Estudou na Faculdade de Arquitectura da Universidade Lusíada de Lisboa entre 1999 e 2004,
                efectuando posteriormente o seu Estágio Profissional em Madrid com o Arquitecto Andrés Jaque, entre 2004
                e 2008. Aqui realizou trabalhos como Teddy House (Vigo | Prémio COAG – Colegio Oficial Arquitectos de
                Galicia | Melhor Projecto, 2005) e Tupper Home (Madrid | Finalista do prémio Mies Van Rohe 2006).
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="w-full pt-20 mb-24">
        <h2 className="sr-only">About</h2>
        <article className="w-full pl-4 grid lg:grid-cols-12">
          <Rectangle customStyles="justify-self-end bg-red-100 w-full mb-9 sm:w-10/12 md:mb-20 lg:mb-28 lg:col-start-1 lg:justify-self-center lg:col-end-9" />
          <div className="pr-4 max-w-96 lg:col-start-9 lg:col-end-12">
            <p className="text-xl">
              Em Lisboa, ingressa no atelier da Arquitecta Teresa Nunes da Ponte, entre 2008 e 2010, tendo desenvolvido
              projectos na área da hotelaria/ensino. Escola de Hotelaria e Turismo de Lisboa, Escola Machado de Castro e
              Escola de Hotelaria e Turismo de Setúbal, Escola Padre António Vieira do arquitecto Athouguia.
            </p>
          </div>
        </article>
      </section>

      <RootWrapper>
        <h2 className="sr-only">About</h2>
        <article className="w-full flex flex-col md:flex-row d:gap-0">
          <div className="flex flex-col gap-10 md:max-w-96">
            <p>
              Colaborou também no desenvolvimento da nova sede da Fundação Calouste Gulbenkian em Paris, entre outros
              trabalhos de apoio à sede da mesma em Lisboa.
            </p>
            <p>
              Abre em 2011 a Oficina de Arquitectura, onde entre Lisboa e Luanda, executa parcerias e presta serviços de
              arquitectura nas mais diversas áreas: habitação, hotelaria, comércio, reabilitação e urbanismo tático.
            </p>
          </div>
          <div className="flex items-center justify-center py-24 px-16 bg-yellow-100">
            <Image src="https://via.placeholder.com/220/681" alt="office" width={280} height={681} />
          </div>
        </article>
      </RootWrapper>

      <section className="w-full pt-20 mb-24">
        <h2 className="sr-only">About</h2>
        <article className="w-full flex md:pl-16 xl:pl-32">
          <div className="w-full h-auto bg-red-100"></div>
          <Image src="https://via.placeholder.com/220" alt="office" width={280} height={300} />
        </article>
      </section>

      <RootWrapper>
        <h2 className="sr-only">About</h2>
        <article className="w-full flex flex-col md:pl-16 xl:pl-32">
          <div className="flex flex-col gap-10 md:max-w-96">
            <p>
              Colaborou também no desenvolvimento da nova sede da Fundação Calouste Gulbenkian em Paris, entre outros
              trabalhos de apoio à sede da mesma em Lisboa.
            </p>
            <p>
              Abre em 2011 a Oficina de Arquitectura, onde entre Lisboa e Luanda, executa parcerias e presta serviços de
              arquitectura nas mais diversas áreas: habitação, hotelaria, comércio, reabilitação e urbanismo tático.
            </p>
          </div>
          <div className="w-1/2 h-10 mt-32 ml-auto bg-yellow-100 lg:w-2/5"></div>
        </article>
      </RootWrapper>
    </>
  );
}
