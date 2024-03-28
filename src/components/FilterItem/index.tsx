import { IHeaderNavigationCategories } from '@/lib/getHeadlessMaster';
import { capitalizeFirstLetter } from '@/lib/utils';
import { FilterIconAll } from '@/ui-elements/FilterIcon/FilterIconAll';
import { FilterIconArchitecture } from '@/ui-elements/FilterIcon/FilterIconArchitecture';
import { FilterIconContest } from '@/ui-elements/FilterIcon/FilterIconContest';
import { FilterIconInteriors } from '@/ui-elements/FilterIcon/FilterIconInteriors';
import { FilterIconUrban } from '@/ui-elements/FilterIcon/FilterIconUrban';
import Link from 'next/link';

interface FilterItemProps extends IHeaderNavigationCategories {
  isActive: boolean;
}

const FilterItem = ({ themeColor, id, label, url = '/', isActive }: FilterItemProps) => {
  const labelWithFirstLetterCapitalized = capitalizeFirstLetter(label);

  const renderFilterIconSwitch = ({themeColor}: {themeColor: string}) => {
    switch (themeColor) {
      case '#ffffff':
        return <FilterIconAll fillColor={`${isActive ? themeColor : '#fff'}`} />;
      case '#fabd5c':
        return <FilterIconArchitecture fillColor={`${isActive ? themeColor : '#fff'}`} />;
      case '#6c757d':
        return <FilterIconContest fillColor={`${isActive ? themeColor : '#fff'}`} />;
      case '#006aad':
        return <FilterIconInteriors fillColor={`${isActive ? themeColor : '#fff'}`} />;
      case '#fa4647':
        return <FilterIconUrban fillColor={`${isActive ? themeColor : '#fff'}`} />;
      default:
         return null
    }
  }

  return (
    <Link
      href={`/${url}`}
      data-testid={`filter-item-${id}`}
      className="w-auto h-auto flex flex-col justify-center items-center shrink-0 p-0 px-3 md:px-4"
    >

      {renderFilterIconSwitch({themeColor})}
      <p className={`${isActive ? 'font-bold' : null} whitespace-nowrap`}>{labelWithFirstLetterCapitalized}</p>
    </Link>
  );
};

export { FilterItem };
