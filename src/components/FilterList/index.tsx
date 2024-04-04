'use client';

import { useQuery } from '@tanstack/react-query';
import { FilterItem } from '../FilterItem';
import { IHeader, IHeaderNavigationCategories, IHeadlessMaster } from '@/types';
import { getHeadlessMaster } from '@/api';

const FilterList = ({lang}: {lang: string}) => {
  const { data: headerLogo } = useQuery<IHeadlessMaster>({ queryKey: ['masterPage'], queryFn: () => getHeadlessMaster({lang}) });
  const headerFilterList = headerLogo?.widget[0] as IHeader;
  if (!headerFilterList) {
    return null;
  }

  return (
    <ul className="w-full h-full whitespace-nowrap flex items-center justify-center sm:pl-0">
      {headerFilterList.header?.content?.navigation?.content?.categories?.map((category: IHeaderNavigationCategories) => {
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
