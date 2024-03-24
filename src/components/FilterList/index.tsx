'use client';

import { FilterItem } from '../FilterItem';
import { usePathname } from 'next/navigation';
import { useGetHeadlessMaster } from '@/hooks/useGetHeadlessMaster';
import { IHeaderNavigationCategories } from '@/lib/getHeadlessMaster';

const FilterList = () => {
  const { data: headerFilterList } = useGetHeadlessMaster();

  const useLocation = usePathname();

  if (!headerFilterList) {
    return null;
  }

  return (
    <ul className="w-full h-full whitespace-nowrap flex items-center justify-center sm:pl-0">
      {headerFilterList[0].content.navigation.content.categories.map((category: IHeaderNavigationCategories) => {
        const isActive =
          useLocation.includes(category?.url?.toLowerCase()) ||
          (useLocation === '/' && category?.url?.toLowerCase() === 'todos');

        return (
          <li key={category.id} className="flex justify-center shrink-0">
            <FilterItem {...category} isActive={isActive} />
          </li>
        );
      })}
    </ul>
  );
};
export { FilterList };
