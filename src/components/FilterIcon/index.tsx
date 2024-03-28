import { FilterIconAll } from '@/ui-elements/FilterIcon/FilterIconAll';
import { FilterIconArchitecture } from '@/ui-elements/FilterIcon/FilterIconArchitecture';
import { FilterIconContest } from '@/ui-elements/FilterIcon/FilterIconContest';
import { FilterIconInteriors } from '@/ui-elements/FilterIcon/FilterIconInteriors';
import { FilterIconUrban } from '@/ui-elements/FilterIcon/FilterIconUrban';
import { ReactNode } from 'react';
import { IHeaderNavigationCategories } from '@/lib/getHeadlessMaster';

type PickIHeaderNavigation = Pick<IHeaderNavigationCategories, 'themeColor'>;
interface FilterIconProps extends PickIHeaderNavigation {
  isActive: boolean;
}
const FilterIcon = ({ themeColor, isActive }: FilterIconProps) => {
  const filterIcon: { [key: string]: ReactNode } = {
    ['#ffffff']: <FilterIconAll fillColor={`${isActive ? themeColor : '#fff'}`} />,
    ['#fabd5c']: <FilterIconArchitecture fillColor={`${isActive ? themeColor : '#fff'}`} />,
    ['#6c757d']: <FilterIconContest fillColor={`${isActive ? themeColor : '#fff'}`} />,
    ['#006aad']: <FilterIconInteriors fillColor={`${isActive ? themeColor : '#fff'}`} />,
    ['#fa4647']: <FilterIconUrban fillColor={`${isActive ? themeColor : '#fff'}`} />
  };

  return <>{filterIcon[themeColor]}</>;
};

export { FilterIcon };
