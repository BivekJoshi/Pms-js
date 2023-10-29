import { useQuery } from 'react-query';
import { getMarketIndex } from '../../api/dashboard/dashboard-api';

/*________________________GET COMPANY DATA BY ID_____________________________________*/
export const useGetMarketIndex = () => {
  return useQuery(['getMarketIndex'], () => getMarketIndex(), {
    cacheTime: 10000,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};
