import FormContact from '@/components/FormContact';
import RootWrapper from '@/components/RootWrapper';
import Rectangle from '@/ui-elements/Rectangle';

export default function Contact() {
  return (
    <>
      <RootWrapper>
        <h2 className="sr-only">Contact</h2>
        <article className="pt-44">
          <Rectangle customStyles="bg-red-100 w-2/4 mb-9 sm:w-64 md:mb-20 lg:mb-28" />
          <div className="w-full mb-24 font-bold sm:w-3/4">
            <h3 className='text-3xl'>
              Pretende falar connosco? Conforme a sua questão, encontre o contacto mais apropriado, ou envie-nos uma
              mensagem. Adorávamos ouvir o que tem para nos dizer.
            </h3>
          </div>
          <div className="w-full mb-24 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-20">
            <div className="flex flex-col gap-5">
              <h2>Sede</h2>
              <p>Rua kwame Krumah, 256 Luanda, Angola</p>
              <p>[PT] +351 962 452 491 [AO] +244 934 460 434</p>
              <p>VAT 123456789</p>
              <p>
                <strong>Questões Gerais</strong>
              </p>
              <p>geral@pedropintocorreia.com</p>
            </div>

            <div className="flex flex-col gap-5">
              <h2>Carreiras</h2>
              <p>Pretende enviar o seu curriculo ou portfólio?</p>
              <p>Envie email para carreiras@pedropintocorreia.com</p>
              <p>Também pode enviar-nos uma mensagem preenchendo ou campos em baixo.</p>
            </div>

            <div className="flex flex-col gap-5">
              <h2>Redes Sociais</h2>
              <p>Siga-nos e fique a par os últimos projetos e novidades:</p>
              <div className="flex gap-6 md:flex-col md:gap-0">
                <a target="_blank" href="">
                  Linkedin
                </a>
                <a target="_blank" href="">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </article>
      </RootWrapper>
      <FormContact />
    </>
  );
}
