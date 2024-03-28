import { IHeaderNavigationCategories } from '@/lib/getHeadlessMaster';
import { capitalizeFirstLetter } from '@/lib/utils';
import Link from 'next/link';
import { FilterIcon } from '../FilterIcon';

export interface FilterItemProps extends IHeaderNavigationCategories {
  isActive: boolean;
}

const FilterItem = ({ themeColor, id, label, url = '/', isActive }: FilterItemProps) => {
  const labelWithFirstLetterCapitalized = capitalizeFirstLetter(label);

  return (
    <Link
      href={`/${url}`}
      data-testid={`filter-item-${id}`}
      className="w-auto h-auto flex flex-col justify-center items-center shrink-0 p-0 px-3 md:px-4"
    >
      <FilterIcon isActive={isActive} themeColor={themeColor} />
      <p className={`${isActive ? 'font-bold' : null} whitespace-nowrap`}>{labelWithFirstLetterCapitalized}</p>
    </Link>
  );
};

export { FilterItem };
