import Link from 'next/link';

interface NavRouteListProps {
  onRouteClick: () => void;
}

export default function NavRouteList({onRouteClick}: NavRouteListProps) {

  return (
    <ul className="flex flex-col px-4 py-3 lg:flex-row lg:gap-5 lg:p-0">
      <li>
        <Link href="/about" onClick={onRouteClick}>Sobre</Link>
      </li>

      <li>
        <Link href="/team" onClick={onRouteClick}>Equipa</Link>
      </li>

      <li>
        <Link href="/contact" onClick={onRouteClick}>Contactos</Link>
      </li>
    </ul>
  );
}
