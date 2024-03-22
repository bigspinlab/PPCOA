'use client';

import { FilterItem } from '../FilterItem';
import { usePathname } from 'next/navigation';
import { useGetHeadlessMaster } from '@/hooks/useGetHeadlessMaster';

// const categoryRoutes = [
//   {
//     path: '/',
//     label: 'Todos',
//     themeColor: '#fff'
//   },
//   {
//     path: '/architecture',
//     label: 'Arquitetura',
//     themeColor: '#FABD5C'
//   },
//   {
//     path: '/interiors',
//     label: 'Interiores',
//     themeColor: '#006AAD'
//   },
//   {
//     path: '/urban',
//     label: 'Urbano',
//     themeColor: '#FA4647'
//   },
//   {
//     path: '/contest',
//     label: 'Concurso',
//     themeColor: '#6C757D'
//   }
// ];

const FilterList = () => {
  const { data: headerFilterList } = useGetHeadlessMaster();

  const useLocation = usePathname();

  if (!headerFilterList) {
    return null;
  }

  return (
    <ul className="w-full h-full whitespace-nowrap flex items-center justify-center sm:pl-0">
      {headerFilterList[0].content.navigation.content.categories.map((category) => {
        const isActive = category.url === '/' ? useLocation === category.url : useLocation.includes(category.url);

        return (
          <li key={category.id} className="flex justify-center shrink-0">
            <FilterItem
              themeColor={category.themeColor}
              filterPath={category.url}
              filterLabel={category.label}
              isActive={isActive}
            />
          </li>
        );
      })}
    </ul>
  );
};
export { FilterList };
