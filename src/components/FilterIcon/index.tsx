import { IHeaderNavigationCategories } from '@/types';
import { FilterIconAll } from '@/ui-elements/FilterIcon/FilterIconAll';
import { FilterIconArchitecture } from '@/ui-elements/FilterIcon/FilterIconArchitecture';
import { FilterIconContest } from '@/ui-elements/FilterIcon/FilterIconContest';
import { FilterIconInteriors } from '@/ui-elements/FilterIcon/FilterIconInteriors';
import { FilterIconUrban } from '@/ui-elements/FilterIcon/FilterIconUrban';
import { ReactNode } from 'react';

type PickIHeaderNavigation = Pick<IHeaderNavigationCategories, 'id'>;
interface FilterIconProps extends PickIHeaderNavigation {
  isActive: boolean;
}
const FilterIcon = ({ id, isActive }: FilterIconProps) => {
  const filterIcon: { [key: string]: ReactNode } = {
    [1066]: <FilterIconAll fillColor={`${isActive ? '#fff' : '#fff'}`} />,
    [1067]: <FilterIconArchitecture fillColor={`${isActive ? '#fabd5c' : '#fff'}`} />,
    [1070]: <FilterIconContest fillColor={`${isActive ? '#6c757d' : '#fff'}`} />,
    [1068]: <FilterIconInteriors fillColor={`${isActive ? '#006aad' : '#fff'}`} />,
    [1069]: <FilterIconUrban fillColor={`${isActive ? '#fa4647' : '#fff'}`} />
  };

  return <>{filterIcon[id]}</>;
};

export { FilterIcon };
