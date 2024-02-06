import Link from 'next/link';

interface NavRouteListProps {
  onRouteClick: () => void;
}

export default function NavRouteList({ onRouteClick }: NavRouteListProps) {
  return (
    <ul className="flex flex-col px-4 py-3 lg:flex-row gap-5 lg:p-0">
      <li className='text-right text-4xl font-extralight lg:text-3xl'>
        <Link className='animate-in' href="/about" onClick={onRouteClick}>
          Sobre
        </Link>
      </li>

      <li className='text-right text-4xl font-extralight lg:text-3xl'>
        <Link className='animate-in' href="/team" onClick={onRouteClick}>
          Equipa
        </Link>
      </li>

      <li className='text-right text-4xl font-extralight lg:text-3xl'>
        <Link className='animate-in' href="/contact" onClick={onRouteClick}>
          Contactos
        </Link>
      </li>
    </ul>
  );
}
