import Image from 'next/image';
import Link from 'next/link';

interface FilterItemProps {
  filterFillColor?: string;
  filterLabel: string;
  filterPath: string;
  isActive?: boolean;
}

const FilterItem = ({ filterFillColor, filterLabel, filterPath, isActive }: FilterItemProps) => {
  return (
    <Link
      href={filterPath}
      className="w-auto h-auto flex flex-col justify-center items-center shrink-0 p-0 px-3 md:px-4"
    >
      <Image className={filterFillColor} src="/mark-ppcoa.svg" width={24} height={24} alt="filter" />
      <p className={`${isActive && 'font-bold'} whitespace-nowrap`}>{filterLabel}</p>
    </Link>
  );
};
export { FilterItem };
