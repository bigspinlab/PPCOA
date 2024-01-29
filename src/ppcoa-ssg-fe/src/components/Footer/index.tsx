import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full mt-auto border-t-1 border-solid border-Black">
      <div className='max-w-screen-2xl m-auto flex flex-col gap-6 md:flex-row justify-between'>
        <Link href="/" className='shrink-0'>
          <Image alt='mark-ppcoa' src="mark-ppcoa.svg" width={40} height={70} unoptimized />
        </Link>

        <div className='flex flex-col'>
          <p>Pedro Pinto Correia</p>
          <p>Oficina de Arquitetura</p>
        </div>

        <div className='flex flex-col'>
          <p>Rua Kwame Krumah, 256</p>
          <p>Luanda, Angola</p>
        </div>


        <div className='flex flex-col'>
          <a target="_blank" href="mailto:geral@pedropintocorreia.com">geral@pedropintocorreia.com</a>
          <p>[PT] <a target="_blank" href="tel:+351962452491">+351 962 452 491</a></p>
          <p>[AO] <a target="_blank" href="tel:+244934460434">+244 934 460 434</a></p>
        </div>

        <div className='flex flex-col'>
          <div className='flex gap-6 md:flex-col'>
            <a target="_blank" href="">Linkedin</a>
            <a target="_blank" href="">Instagram</a>  
          </div>
          <Link href="/privacy-policy">
            Política de Privacidade
          </Link>
          <div>change language component</div>
        </div>
      </div>
    </footer>
  )
}