import { IHeaderNavigationCategories } from '@/lib/getHeadlessMaster';
import { capitalizeFirstLetter } from '@/lib/utils';
import { FilterIconAll } from '@/ui-elements/FilterIcon/FilterIconAll';
import { FilterIconArchitecture } from '@/ui-elements/FilterIcon/FilterIconArchitecture';
import { FilterIconContest } from '@/ui-elements/FilterIcon/FilterIconContest';
import { FilterIconInteriors } from '@/ui-elements/FilterIcon/FilterIconInteriors';
import { FilterIconUrban } from '@/ui-elements/FilterIcon/FilterIconUrban';
import Link from 'next/link';
import { ReactNode } from 'react';

interface FilterItemProps extends IHeaderNavigationCategories {
  isActive: boolean;
}

const FilterItem = ({ themeColor, id, label, url = '/', isActive }: FilterItemProps) => {
  const labelWithFirstLetterCapitalized = capitalizeFirstLetter(label);

  const filterIcon: { [key: string]: ReactNode } = {
    ['#ffffff']: <FilterIconAll fillColor={`${isActive ? themeColor : '#fff'}`} />,
    ['#fabd5c']: <FilterIconArchitecture fillColor={`${isActive ? themeColor : '#fff'}`} />,
    ['#6c757d']: <FilterIconContest fillColor={`${isActive ? themeColor : '#fff'}`} />,
    ['#006aad']: <FilterIconInteriors fillColor={`${isActive ? themeColor : '#fff'}`} />,
    ['#fa4647']: <FilterIconUrban fillColor={`${isActive ? themeColor : '#fff'}`} />
  };

  return (
    <Link
      href={`/${url}`}
      data-testid={`filter-item-${id}`}
      className="w-auto h-auto flex flex-col justify-center items-center shrink-0 p-0 px-3 md:px-4"
    >
      
      {filterIcon[themeColor]}
      <p className={`${isActive ? 'font-bold' : null} whitespace-nowrap`}>{labelWithFirstLetterCapitalized}</p>
    </Link>
  );
};

export { FilterItem };
