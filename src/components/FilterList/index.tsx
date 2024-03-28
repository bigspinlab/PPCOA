'use client';

import { FilterItem } from '../FilterItem';
import { useGetHeadlessMaster } from '@/hooks/useGetHeadlessMaster';
import { IHeaderNavigationCategories } from '@/lib/getHeadlessMaster';

const FilterList = () => {
  const { data: headerFilterList } = useGetHeadlessMaster();

  if (!headerFilterList) {
    return null;
  }

  return (
    <ul className="w-full h-full whitespace-nowrap flex items-center justify-center sm:pl-0">
      {headerFilterList[0].content.navigation.content.categories.map((category: IHeaderNavigationCategories) => {
        return (
          <li key={category.id} className="flex justify-center shrink-0">
            <FilterItem {...category} />
          </li>
        );
      })}
    </ul>
  );
};
export { FilterList };
