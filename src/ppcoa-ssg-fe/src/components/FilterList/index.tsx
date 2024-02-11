'use client';

import { FilterItem } from '../FilterItem';
import { usePathname } from 'next/navigation';

const categoryRoutes = [
  {
    path: '/',
    label: 'Todos',
    themeColor: ''
  },
  {
    path: '/architecture',
    label: 'Arquitetura',
    themeColor: 'yellow-100'
  },
  {
    path: '/interiors',
    label: 'Interiores',
    themeColor: 'blue-100'
  },
  {
    path: '/urban',
    label: 'Urbano',
    themeColor: 'red-100'
  },
  {
    path: '/contest',
    label: 'Concurso',
    themeColor: 'gray-100'
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
              filterPath={category.path}
              filterLabel={category.label}
              filterThemeColor={category.themeColor}
              isActive={isActive}
            />
          </li>
        );
      })}
    </div>
  );
};
export { FilterList };
