'use client';

import { useQuery } from '@tanstack/react-query';
import { FilterItem } from '../FilterItem';
import { IHeader, IHeaderNavigationCategories, IHeadlessMaster } from '@/types';
import { getHeadlessMaster } from '@/api';
import { usePathname, useSearchParams } from 'next/navigation';

const FilterList = ({ lang }: { lang: string }) => {
  const useLocation = usePathname();
  const searchParams = useSearchParams();
  const searchParamsCategory = searchParams.get('category');

  const { data: headerLogo } = useQuery<IHeadlessMaster>({
    queryKey: ['masterPage'],
    queryFn: () => getHeadlessMaster({ lang }),
    staleTime: Infinity
  });

  const headerFilterList = headerLogo?.widget[0] as IHeader;

  if (!headerFilterList) {
    return null;
  }

  return (
    <ul className="w-full h-full whitespace-nowrap flex items-center justify-center sm:pl-0">
      {headerFilterList.content?.navigation?.content?.categories?.map((category: IHeaderNavigationCategories) => {
        let isCategoryActive = false;

        if (searchParamsCategory) {
          isCategoryActive = category.label.toLowerCase() === searchParamsCategory;
        } else {
          isCategoryActive =
            useLocation.includes(category.url?.toLowerCase()) ||
            (useLocation === '/' && category.url?.toLowerCase() === 'all');
        }

        return (
          <li key={category.id} className="flex justify-center shrink-0">
            <FilterItem {...category} isActive={isCategoryActive} />
          </li>
        );
      })}
    </ul>
  );
};
export { FilterList };
