import { axiosInstance } from '../axiosInterceptor';

/*________________________GET Profile Detail_____________________________________*/
export const getProfileDetail = async () => {
  const res = await axiosInstance.get('/app-user');
  // console.log('🚀 ~ file: watchlist-api.js:5 ~ getWatchListName ~ data:', data);
  return res.data;
};

/*________________________GET WATCHLIST MASTER DATA_____________________________________*/
export const getWatchListName = async () => {
  const res = await axiosInstance.get('/watchlist/master-data');
  return res.data;
};

/*________________________GET WATCHLIST DATA BY_____________________________________*/
export const getWatchListDataById = async (id) => {
  if (id) {
    console.log(
      '🚀 ~ file: watchlist-api.js:19 ~ getWatchListDataById ~ id:',
      id
    );
    const response = await axiosInstance.get(`/watchlist/data/${id}`);
    return response;
  }
};

/*________________________GET LISTED COMPANIES_____________________________________*/
export const getWatchListedCompanies = async () => {
  const res = await axiosInstance.get('/company-info/listed-companies');
  return res.data;
};

/*________________________POST WATCHLIST MASTER_____________________________________*/
export const addWatchListMaster = async (formData) => {
  const data = await axiosInstance.post('/watchlist', formData);
  return data;
};

/*________________________POST WATCHLIST DETAIL_____________________________________*/
export const addWatchListDetail = async (formData) => {
  const id = formData.id;
  const payload = formData.script;
  const data = await axiosInstance.post(`/watchlist/master/${id}`, payload);
  return data;
};
// ........................Edit WatchListName ..........//
export const editWatchListName = async (formData) => {
  const id = formData.values?.id;
  if (id) {
    const values = {
      watchlistName: formData?.values?.watchlistName,
    };

    const data = await axiosInstance.put(`/watchlist/${id}`, values);
    return data;
  }
};

/*...................deleteWatchListname....................*/
export const deleteWatchName = async (id) => {
  await axiosInstance.delete(`/watchlist/${id}`);
};

/*_______________________DELETE WATCHLIST DETAIL________________________________*/
export const deleteWatchListDetail = async (tableDataSymbol, id) => {
  if (id) {
    await axiosInstance.delete(
      `/watchlist/detail/${tableDataSymbol}?masterId=${id}`
    );
  }
};
