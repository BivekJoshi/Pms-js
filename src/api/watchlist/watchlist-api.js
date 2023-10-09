import { axiosInstance } from '../axiosInterceptor';

/*________________________GET WATCHLIST MASTER DATA_____________________________________*/
export const getWatchListName = async () => {
  const res = await axiosInstance.get('/app-user/watchlist-master-data');
  // console.log('🚀 ~ file: watchlist-api.js:5 ~ getWatchListName ~ data:', data);
  return res.data;
};

/*________________________GET WATCHLIST DATA BY_____________________________________*/
export const getWatchListDataById = async () => {
  const res = await axiosInstance.get('/app-user/watchlist-data/1');
  return res.data;
};

/*________________________POST WATCHLIST MASTER_____________________________________*/
export const addWatchListMaster = async (formData) => {
  const data = await axiosInstance.post('/app-user/watchlist-master', formData);
  return data;
};

/*________________________POST WATCHLIST DETAIL_____________________________________*/
export const addWatchListDetail = async (formData) => {
  const data = await axiosInstance.post('/app-user/watchlist-detail', formData);
  return data;
};