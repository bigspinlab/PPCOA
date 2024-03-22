import { getHeadlessMaster } from '@/lib/getHeadlessMaster';
import { useQuery } from '@tanstack/react-query';

export function useGetHeadlessMaster() {
  const { ...props } = useQuery({ queryKey: ['masterPage'], queryFn: getHeadlessMaster });

  return {
    ...props
  };
}
