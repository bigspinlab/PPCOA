import Image from 'next/image';
import Link from 'next/link';
import Nav from '../Nav';

export default function Header() {
  return (
    <header className="w-full fixed bg-white">
      <div className="m-auto flex justify-between items-center gap-5 px-4 py-1.5 lg:py-3 lg:px-8">
        <Link href="/">
          <Image alt="logo-ppcoa" src="logo-ppcoa.svg" width={94} height={58} unoptimized />
        </Link>
        <button type="button">btn</button>
      </div>
      <Nav /> 
    </header>
  );
}
