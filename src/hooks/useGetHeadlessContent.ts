import { getHeadless } from '@/lib/getHeadless';
import { useQuery } from '@tanstack/react-query';

interface IGetHeadlessContent {
  route: string;
  numberOfItems: number;
  page: number;
}

export function useGetHeadlessContent({ route, numberOfItems, page }: IGetHeadlessContent) {
  const { ...props } = useQuery({ queryKey: ['content'], queryFn: () => getHeadless({ route, numberOfItems, page }) });

  return {
    ...props
  };
}
