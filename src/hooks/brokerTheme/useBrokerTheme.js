import { useQuery } from 'react-query';
import { getTheme } from '../../api/theme-api/theme-api';

export const useGetTheme = (id) => {
  return useQuery(['getTheme', id], () => getTheme(id), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
    cacheTime: 6000,
    staleTime: 6000,
  });
};
