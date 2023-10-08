import { useQuery } from 'react-query';
import { getWatchListName } from '../../api/watchlist/watchlist-api';

export const useGetWatchListName = () => {
  return useQuery(['getWatchListName'], () => getWatchListName(), {
    cacheTime: 10000,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};
