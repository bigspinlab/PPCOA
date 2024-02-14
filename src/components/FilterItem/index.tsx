import { FilterIcon } from '@/ui-elements/FilterIcon';
import Link from 'next/link';

interface FilterItemProps {
  themeColor: string;
  filterLabel: string;
  filterPath: string;
  isActive: boolean;
}

const FilterItem = ({ themeColor, filterLabel, filterPath, isActive }: FilterItemProps) => {
  return (
    <Link
      href={filterPath}
      className="w-auto h-auto flex flex-col justify-center items-center shrink-0 p-0 px-3 md:px-4"
    >
      <FilterIcon fillColor={`${isActive ? themeColor : '#fff'}`} />
      <p className={`${isActive && 'font-bold'} whitespace-nowrap`}>{filterLabel}</p>
    </Link>
  );
};
export { FilterItem };