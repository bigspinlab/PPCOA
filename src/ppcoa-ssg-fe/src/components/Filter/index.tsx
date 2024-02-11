'use client';

import { ScrollArea, ScrollBar } from '@/ui-elements/ScrollArea';
import { usePathname } from 'next/navigation';
import { FilterList } from '../FilterList';


const Filter = () => {
  const location = usePathname();
  const routesToHideFilter = ['/contact', '/about', '/team', '/privacy-policy', '/not-found'];
  const hideFilter = routesToHideFilter.some((route) => location.includes(route));

  
  if (hideFilter) {
    return null;
  }

  return (
    <ScrollArea>
      <section className="w-full h-full flex justify-center pt-20 lg:pt-0 lg:fixed lg:w-2/4 lg:h-[86px] lg:translate-x-2/4 lg:z-10">
        <h2 className="sr-only">Categories Nav</h2>
        <nav className="w-full flex items-center pb-2.5 sm:pb-0">
          <FilterList />
        </nav>
      </section>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
export { Filter };
