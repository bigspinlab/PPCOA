import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavRouteListProps {
  onRouteClick: () => void;
}

export default function NavRouteList({ onRouteClick }: NavRouteListProps) {
  const isActive = usePathname().includes('about')
  
  return (
    <ul className="flex flex-col px-4 py-3 lg:flex-row lg:items-center gap-5 lg:p-0">
      <li className="text-right text-4xl font-extralight lg:text-3xl">
        <Link className={isActive?"font-bold":''} href="/about" onClick={onRouteClick}>
          Sobre
        </Link>
      </li>

      <li className="text-right text-4xl font-extralight lg:text-3xl">
        <Link className={isActive?"font-bold":''} href="/team" onClick={onRouteClick}>
          Equipa
        </Link>
      </li>

      <li className="text-right text-4xl font-extralight lg:text-3xl">
        <Link className={isActive?"font-bold":''} href="/contact" onClick={onRouteClick}>
          Contactos
        </Link>
      </li>
    </ul>
  );
}
