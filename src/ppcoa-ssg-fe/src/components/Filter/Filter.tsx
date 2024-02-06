import { ScrollArea, ScrollBar } from '@/ui-elements/ScrollArea';
import { FilterItem } from '../FilterItem/FilterItem';

const Filter = () => {
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

  return (
    <ScrollArea>
      <section className="w-full h-full flex justify-center pt-20 lg:pt-0">
        <article className="w-full flex items-center">
          <ul className="w-full h-full whitespace-nowrap flex items-center justify-center sm:pl-0">
            <li className="flex justify-center shrink-0">
              <FilterItem filterFillColor="bg-red-500" filterLabel="Todos" isActive={true} />
            </li>
            <li className="flex justify-center shrink-0">
              <FilterItem filterFillColor="bg-red-500" filterLabel="Arquitetura" isActive={true} />
            </li>
            <li className="flex justify-center shrink-0">
              <FilterItem filterFillColor="bg-red-500" filterLabel="Sociedade" isActive={true} />
            </li>
            <li className="flex justify-center shrink-0">
              <FilterItem filterFillColor="bg-red-500" filterLabel="Urbano" isActive={true} />
            </li>
            <li className="flex justify-center shrink-0">
              <FilterItem filterFillColor="bg-red-500" filterLabel="Concurso" isActive={true} />
            </li>
          </ul>
        </article>
      </section>
      <ScrollBar orientation='horizontal'/>
    </ScrollArea>
    
  );
};
export { Filter };
