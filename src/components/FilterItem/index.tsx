import { capitalizeFirstLetter } from '@/global/utils';
import Link from 'next/link';
import { FilterIcon } from '../FilterIcon';
import { usePathname } from 'next/navigation';
import { IHeaderNavigationCategories } from '@/types';

const FilterItem = ({ id, label, url }: IHeaderNavigationCategories) => {
  const labelWithFirstLetterCapitalized = capitalizeFirstLetter(label);
  const useLocation = usePathname();

  const isActive =
    useLocation.includes(url?.toLowerCase()) ||
    (useLocation === '/' && url?.toLowerCase() === 'todos') ||
    (useLocation === '/' && url?.toLowerCase() === 'all');

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
