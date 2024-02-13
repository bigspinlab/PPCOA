import RootWrapper from '@/components/RootWrapper';
import Rectangle from '@/ui-elements/Rectangle';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <section className="w-full pt-20 mb-24">
        <h2 className="sr-only">About</h2>
        <article className="w-full flex flex-col md:flex-row d:gap-0">
          <div className="flex items-center justify-center basis-2/5 px-4 pt-20 pb-16 md:pb-0 md:pt-0 md:px-16 xl:px-32 md:max-w-96">
            <p>
              PPCOA é uma oficina de arquitectura sediada em Lisboa e Luanda. Desenvolve um trabalho assente na relação
              entre a pessoa e o construído, oscilando entre o espaço público e privado, na procura de uma experiência
              adaptável à envolvente social, económica e histórica.
            </p>
          </div>
          <div className="flex flex-col basis-3/5">
            <div className="flex items-center justify-center py-24 px-16 bg-blue-100">
              <Image src="https://via.placeholder.com/220" alt="office" width={280} height={120} />
            </div>
            <Image className="w-full" src="https://via.placeholder.com/1080" alt="office" width={500} height={500} />
          </div>
        </article>
      </section>
      <section className="w-full pt-20 mb-24">
        <h2 className="sr-only">About</h2>
        <article className="w-full flex flex-col md:flex-row d:gap-0">
          <div className="flex items-center justify-center basis-2/5 px-4 pt-20 pb-16 md:pb-0 md:pt-0 md:px-16 xl:px-32">
            <Image src="https://via.placeholder.com/220" alt="office" width={280} height={120} />
          </div>
          <div className="flex flex-col basis-3/5 px-4 md:max-w-96">
            <h3>Fundador</h3>
            <p>
              Pedro Oliveira Santos Pinto Correia é um arquitecto luso-angolano, nascido em Lisboa a 8 de março de 1981.
              Estudou na Faculdade de Arquitectura da Universidade Lusíada de Lisboa entre 1999 e 2004, efectuando
              posteriormente o seu Estágio Profissional em Madrid com o Arquitecto Andrés Jaque, entre 2004 e 2008. Aqui
              realizou trabalhos como Teddy House (Vigo | Prémio COAG – Colegio Oficial Arquitectos de Galicia | Melhor
              Projecto, 2005) e Tupper Home (Madrid | Finalista do prémio Mies Van Rohe 2006).
            </p>
          </div>
        </article>
      </section>

      <RootWrapper>
        <h2 className="sr-only">About</h2>
        <article className="w-full flex flex-col md:flex-row d:gap-0">
          <Rectangle customStyles="bg-red-100 w-2/4 mb-9 sm:w-64 md:mb-20 lg:mb-28" />
          <div className="md:max-w-96">
            <p>
              Em Lisboa, ingressa no atelier da Arquitecta Teresa Nunes da Ponte, entre 2008 e 2010, tendo desenvolvido
              projectos na área da hotelaria/ensino. Escola de Hotelaria e Turismo de Lisboa, Escola Machado de Castro e
              Escola de Hotelaria e Turismo de Setúbal, Escola Padre António Vieira do arquitecto Athouguia.
            </p>
          </div>
        </article>
      </RootWrapper>

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
