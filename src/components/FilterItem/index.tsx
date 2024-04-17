import { capitalizeFirstLetter } from '@/global/utils';
import Link from 'next/link';
import { FilterIcon } from '../FilterIcon';
import { IHeaderNavigationCategories } from '@/types';

const FilterItem = ({ id, label, url, isActive }: IHeaderNavigationCategories & { isActive: boolean }) => {
  const labelWithFirstLetterCapitalized = capitalizeFirstLetter(label);

  return (
    <Link
      href={url}
      data-testid={`filter-item-${id}`}
      className="w-auto h-auto flex flex-col justify-center items-center shrink-0 p-0 px-3 md:px-4"
    >
      <FilterIcon id={id} isActive={isActive} />
      <p className={`${isActive ? 'font-bold' : null} whitespace-nowrap`}>{labelWithFirstLetterCapitalized}</p>
    </Link>
  );
};

export { FilterItem };
