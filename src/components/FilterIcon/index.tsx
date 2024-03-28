import { FilterIconAll } from '@/ui-elements/FilterIcon/FilterIconAll';
import { FilterIconArchitecture } from '@/ui-elements/FilterIcon/FilterIconArchitecture';
import { FilterIconContest } from '@/ui-elements/FilterIcon/FilterIconContest';
import { FilterIconInteriors } from '@/ui-elements/FilterIcon/FilterIconInteriors';
import { FilterIconUrban } from '@/ui-elements/FilterIcon/FilterIconUrban';
import { ReactNode } from 'react';
import { IHeaderNavigationCategories } from '@/lib/getHeadlessMaster';

type PickIHeaderNavigation = Pick<IHeaderNavigationCategories, 'id' | 'themeColor'>;
interface FilterIconProps extends PickIHeaderNavigation {
  isActive: boolean;
}

const FilterIcon = ({ id, themeColor, isActive }: FilterIconProps) => {
  const filterIconMap: { id: number; themeColor: string; icon: ReactNode }[] = [
    { id: 1066, themeColor: '#ffffff', icon: <FilterIconAll fillColor={`${isActive ? themeColor : '#fff'}`} /> },
    {
      id: 1067,
      themeColor: '#fabd5c',
      icon: <FilterIconArchitecture fillColor={`${isActive ? themeColor : '#fff'}`} />
    },
    { id: 1070, themeColor: '#6c757d', icon: <FilterIconContest fillColor={`${isActive ? themeColor : '#fff'}`} /> },
    { id: 1068, themeColor: '#006aad', icon: <FilterIconInteriors fillColor={`${isActive ? themeColor : '#fff'}`} /> },
    { id: 1069, themeColor: '#fa4647', icon: <FilterIconUrban fillColor={`${isActive ? themeColor : '#fff'}`} /> }
  ];

  const filteredIcon = filterIconMap.find((item) => item.id === id && item.themeColor === themeColor);

  return <>{filteredIcon?.icon}</>;
};

export { FilterIcon };
