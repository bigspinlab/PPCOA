import Image from 'next/image'
import Link from 'next/link'
import Nav from '../Nav'

export default function Header() {
  return (
    <header className="w-full">
      <div className='max-w-screen-2xl m-auto'>
        <Link href="/">
          <Image alt='logo-ppcoa' src="logo-ppcoa.svg" width={94} height={58} unoptimized />
        </Link>
        <button type='button'>toggle menu button</button>
        <Nav />
      </div>
      
    </header>
  )
}