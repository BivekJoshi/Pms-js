import { useQuery } from 'react-query';
import { getCompanyById } from '../../api/company/company-api';

/*________________________GET COMPANY DATA BY ID_____________________________________*/
export const useGetCompanyById = (script) => {
  return useQuery(['getCompany', script], () => getCompanyById(script), {
    cacheTime: 10000,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};
