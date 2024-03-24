import { IHeaderNavigationCategories } from '@/lib/getHeadlessMaster';
import { capitalizeFirstLetter } from '@/lib/utils';
import { FilterIcon } from '@/ui-elements/FilterIcon';
import Link from 'next/link';

interface FilterItemProps extends IHeaderNavigationCategories {
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
      <FilterIcon fillColor={`${isActive ? themeColor : '#fff'}`} />
      <p className={`${isActive ? 'font-bold' : null} whitespace-nowrap`}>{labelWithFirstLetterCapitalized}</p>
    </Link>
  );
};

export { FilterItem };
