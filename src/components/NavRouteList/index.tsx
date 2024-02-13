import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavRouteListProps {
  onRouteClick: () => void;
}

const navRoutes = [
  {
    path: '/about',
    label: 'Sobre'
  },
  {
    path: '/team',
    label: 'Equipa'
  },
  {
    path: '/contact',
    label: 'Contactos'
  }
];

export default function NavRouteList({ onRouteClick }: NavRouteListProps) {
  const useLocation = usePathname();

  return (
    <ul className="flex flex-col px-4 py-3 lg:flex-row lg:items-center gap-5 lg:p-0">
      {navRoutes.map((route) => {
        const isActive = useLocation.includes(route.path);

        return (
          <li key={route.label} className="text-right text-4xl font-extralight lg:text-3xl">
            <Link className={isActive ? 'font-bold' : ''} href={route.path} onClick={onRouteClick}>
              {route.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
