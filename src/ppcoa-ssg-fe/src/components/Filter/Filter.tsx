import { FilterItem } from '../FilterItem/FilterItem';

const Filter = () => {
  // const isMediumAndUp = useMediaQuery('(min-width: 768px)')
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
    <section className="w-full pt-20 md:pt-0">
      <article className="flex items-center">
        <ul className="whitespace-nowrap flex items-center justify-center overflow-x-scroll m-auto space-x-1 pl-40 sm:pl-0">
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
  );
};
export { Filter };
