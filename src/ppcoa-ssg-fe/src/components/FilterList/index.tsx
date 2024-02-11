'use client';

import { FilterItem } from '../FilterItem';
import { usePathname } from 'next/navigation';

const categoryRoutes = [
  {
    path: '/',
    label: 'Todos',
    iconThemeColor: '#fff'
  },
  {
    path: '/architecture',
    label: 'Arquitetura',
    iconThemeColor: '#FABD5C'
  },
  {
    path: '/interiors',
    label: 'Interiores',
    iconThemeColor: '#006AAD'
  },
  {
    path: '/urban',
    label: 'Urbano',
    iconThemeColor: '#FA4647'
  },
  {
    path: '/contest',
    label: 'Concurso',
    iconThemeColor: '#6C757D'
  }
];

const FilterList = () => {
  const useLocation = usePathname();

  return (
    <div className="w-full h-full whitespace-nowrap flex items-center justify-center sm:pl-0">
      {categoryRoutes.map((category) => {
        const isActive = category.path === '/' ? useLocation === category.path : useLocation.includes(category.path);

        return (
          <li key={category.label} className="flex justify-center shrink-0">
            <FilterItem
              iconThemeColor={category.iconThemeColor}
              filterPath={category.path}
              filterLabel={category.label}
              isActive={isActive}
            />
          </li>
        );
      })}
    </div>
  );
};
export { FilterList };
