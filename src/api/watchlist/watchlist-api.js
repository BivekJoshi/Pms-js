import { axiosInstance } from '../axiosInterceptor';

export const getWatchListName = async () => {
  const { data } = await axiosInstance.get('/app-user/watchlist-master-data');
  return data;
};
