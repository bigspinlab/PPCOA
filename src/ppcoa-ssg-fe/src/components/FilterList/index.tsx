'use client';

import { FilterItem } from '../FilterItem';
import { usePathname } from 'next/navigation';

const categoryRoutes = [
  {
    path: '/',
    label: 'Todos',
    themeColor: '#fff'
  },
  {
    path: '/architecture',
    label: 'Arquitetura',
    themeColor: '#FABD5C'
  },
  {
    path: '/interiors',
    label: 'Interiores',
    themeColor: '#006AAD'
  },
  {
    path: '/urban',
    label: 'Urbano',
    themeColor: '#FA4647'
  },
  {
    path: '/contest',
    label: 'Concurso',
    themeColor: '#6C757D'
  }
];

const FilterList = () => {
  const useLocation = usePathname();

  return (
    <ul className="w-full h-full whitespace-nowrap flex items-center justify-center sm:pl-0">
      {categoryRoutes.map((category) => {
        const isActive = category.path === '/' ? useLocation === category.path : useLocation.includes(category.path);

        return (
          <li key={category.label} className="flex justify-center shrink-0">
            <FilterItem
              themeColor={category.themeColor}
              filterPath={category.path}
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
