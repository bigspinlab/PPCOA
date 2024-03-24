import { getHeadless } from '@/lib/getHeadless';
import { useQuery } from '@tanstack/react-query';

interface IGetHeadlessContent {
  route: string;
  queryKey: string;
}

export function useGetHeadlessContent({ route, queryKey }: IGetHeadlessContent) {
  const { ...props } = useQuery({ queryKey: [`${queryKey}`], queryFn: () => getHeadless({ route }) });

  return {
    ...props
  };
}
