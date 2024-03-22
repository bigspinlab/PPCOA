import { getHeadlessMaster } from '@/lib/getHeadlessMaster';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavRouteListProps {
  onRouteClick: () => void;
}

export default function NavRouteList({ onRouteClick }: NavRouteListProps) {
  const { data: headerNavList } = useQuery({ queryKey: ['masterPage'], queryFn: getHeadlessMaster });

  const useLocation = usePathname();

  if (!headerNavList) {
    return null;
  }

  return (
    <ul className="flex flex-col px-4 py-3 lg:flex-row lg:items-center gap-5 lg:p-0">
      {headerNavList[0].content.navigation.content.items.map((route) => {
        const isActive = route.url === '/' ? useLocation === route.url : useLocation.includes(route.url);

        return (
          <li key={route.label} className="text-right text-4xl font-extralight lg:text-3xl">
            <Link className={isActive ? 'font-bold' : ''} href={route.url} onClick={onRouteClick}>
              {route.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
