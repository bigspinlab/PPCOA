import { usePathname } from 'next/navigation';
import NavRouteItem from '../NavRouteItem';
import { IHeader, IHeaderNavigationItems, IHeadlessMaster } from '@/types';
import { getHeadlessMaster } from '@/api';
import { useQuery } from '@tanstack/react-query';

interface NavRouteListProps {
  onRouteClick: () => void;
  lang: string;
}

export default function NavRouteList({ onRouteClick, lang }: NavRouteListProps) {
  const { data: headerNavListData } = useQuery<IHeadlessMaster>({
    queryKey: ['masterPage'],
    queryFn: () => getHeadlessMaster({ lang })
  });
  const headerNavList = headerNavListData?.widget[0] as IHeader;
  const useLocation = usePathname();

  if (!headerNavList) {
    return null;
  }

  return (
    <ul className="flex flex-col px-4 py-3 lg:flex-row lg:items-center gap-5 lg:p-0">
      {headerNavList?.content?.navigation?.content?.items?.map((route: IHeaderNavigationItems) => {
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
