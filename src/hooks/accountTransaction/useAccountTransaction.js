import { useQuery } from 'react-query';
import { getAccountTransaction } from '../../api/accountTransaction/accountTransaction-api';

export const useGetAccountTransaction = (dateFrom, dateTo) => {
  return useQuery(
    ['getAccountTransaction', dateFrom, dateTo],
    () => getAccountTransaction(dateFrom, dateTo),
    {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      cacheTime: 6000,
      staleTime: 6000,
    }
  );
};
