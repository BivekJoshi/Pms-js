import { axiosInstance } from '../axiosInterceptor';

export const getWatchListName = async () => {
  const data = await axiosInstance.get('/app-user/watchlist-master-data');
  console.log('🚀 ~ file: watchlist-api.js:5 ~ getWatchListName ~ data:', data);
  return data;
};
