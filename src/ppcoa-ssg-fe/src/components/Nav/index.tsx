import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="w-full h-dvh fixed top-16 flex flex-col bg-white lg:absolute lg:top-6 lg:right-12 lg:bg-transparent lg:h-auto lg:w-auto">
      <ul className='flex flex-col px-4 py-3 lg:flex-row lg:gap-5 lg:p-0'>
        <li>
          <Link href="/about">Sobre</Link>
        </li>

        <li>
          <Link href="/team">Equipa</Link>
        </li>

        <li>
          <Link href="/contact">Contactos</Link>
        </li>
      </ul>
    </nav>
  );
}
