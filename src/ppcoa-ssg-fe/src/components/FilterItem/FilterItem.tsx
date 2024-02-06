import { Button } from '@/ui-elements/Button';
import Image from 'next/image';

interface FilterItemProps {
  filterFillColor: string;
  filterLabel: string;
  isActive: boolean;
}

const FilterItem = ({ filterFillColor, filterLabel, isActive }: FilterItemProps) => {
  return (
    <Button className="w-auto h-auto flex flex-col shrink-0 p-0 px-3 md:px-4" variant="ghost">
      <Image className={filterFillColor} src="/mark-ppcoa.svg" width={24} height={24} alt="filter" />
      <p className={`${isActive && 'font-bold'} whitespace-nowrap`}>{filterLabel}</p>
    </Button>
  );
};
export { FilterItem };
