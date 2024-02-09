'use client'

import { ScrollArea, ScrollBar } from '@/ui-elements/ScrollArea';
import { usePathname } from 'next/navigation';
import { FilterList } from '../FilterList';

const Filter = () => {
  const location = usePathname()
  const routesToHideFilter = ['/contact', '/about', '/team', '/privacy-policy', '/not-found'];
  const hideFilter = routesToHideFilter.some(route => location.includes(route));

  // const isMediumAndUp = useMediaQuery('(min-width: 1024px)')
  // const chipContainer = useRef<HTMLUListElement>();

  // const scrollToActiveChip = useCallback(() => {
  //   if (chipContainer && chipContainer.current) {
  //     const { scrollWidth, clientWidth, children } = chipContainer.current;
  //     if (scrollWidth > clientWidth) {
  //       let left = 0;

  //       if (activeChipIndex && children) {
  //         left = Array.from(children)
  //           .filter((_, index) => index <= activeChipIndex)
  //           .map((element) => element.scrollWidth)
  //           .reduce((total, num) => total + num);
  //       }
  //       chipContainer.current.scroll({ left, behavior: 'smooth' });
  //     }
  //   }
  // }, [chipContainer, availableUniqueChips]);

  // useEffect(() => {
  //   if (!isMediumAndUp) {
  //     scrollToActiveChip();
  //   }
  // }, [activeChip, isCatalogLoading, isMediumAndUp]);

  if (hideFilter) {
    return null;
  }

  return (
    <ScrollArea>
      <section className="w-full h-full flex justify-center pt-20 lg:pt-0">
        <article className="w-full flex items-center pb-2.5 sm:pb-0">
         <FilterList />
        </article>
      </section>
      <ScrollBar orientation='horizontal'/>
    </ScrollArea>
  );
};
export { Filter };
