import { axiosInstance } from '../axiosInterceptor';

/*________________________GET DASHBOARD DATA BY ID_____________________________________*/
export const getMarketIndex = async () => {
  const { data } = await axiosInstance.get(`/live-market/market-index`);
  return data;
};
