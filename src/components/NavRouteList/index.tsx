import { useGetHeadlessMaster } from '@/hooks/useGetHeadlessMaster';
import { usePathname } from 'next/navigation';
import NavRouteItem from '../NavRouteItem';
import { IHeaderNavigationItems } from '@/lib/getHeadlessMaster';

interface NavRouteListProps {
  onRouteClick: () => void;
}

export default function NavRouteList({ onRouteClick }: NavRouteListProps) {
  const { data: headerNavList } = useGetHeadlessMaster();

  const useLocation = usePathname();

  if (!headerNavList) {
    return null;
  }

  return (
    <ul className="flex flex-col px-4 py-3 lg:flex-row lg:items-center gap-5 lg:p-0">
      {headerNavList[0].content.navigation.content.items.map((route: IHeaderNavigationItems) => {
        const isActive = route?.url === '/' ? useLocation === route?.url : useLocation.includes(route?.url);

        return (
          <li key={route.id} className="text-right text-4xl font-extralight lg:text-2xl">
            <NavRouteItem {...route} isActive={isActive} onRouteClick={onRouteClick} />
          </li>
        );
      })}
    </ul>
  );
}
