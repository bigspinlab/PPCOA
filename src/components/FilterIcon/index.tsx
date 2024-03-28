import { FilterIconAll } from '@/ui-elements/FilterIcon/FilterIconAll';
// import { FilterIconArchitecture } from '@/ui-elements/FilterIcon/FilterIconArchitecture';
// import { FilterIconContest } from '@/ui-elements/FilterIcon/FilterIconContest';
import { FilterIconInteriors } from '@/ui-elements/FilterIcon/FilterIconInteriors';
import { FilterIconUrban } from '@/ui-elements/FilterIcon/FilterIconUrban';
import { ReactNode } from 'react';
import { IHeaderNavigationCategories } from '@/lib/getHeadlessMaster';

type PickIHeaderNavigation = Pick<IHeaderNavigationCategories, 'id' | 'themeColor'>;
interface FilterIconProps extends PickIHeaderNavigation {
  isActive: boolean;
}
const FilterIcon = ({ id, themeColor, isActive }: FilterIconProps) => {
  const filterIcon: { [key: string]: ReactNode } = {
    [1066]: <FilterIconAll fillColor={`${isActive ? themeColor : '#fff'}`} />,
    // [1067]: <FilterIconArchitecture fillColor={`${isActive ? themeColor : '#fff'}`} />,
    // [1070]: <FilterIconContest fillColor={`${isActive ? themeColor : '#fff'}`} />,
    [1068]: <FilterIconInteriors fillColor={`${isActive ? themeColor : '#fff'}`} />,
    [1069]: <FilterIconUrban fillColor={`${isActive ? themeColor : '#fff'}`} />
  };

  return <>{filterIcon[id]}</>;
};

export { FilterIcon };
