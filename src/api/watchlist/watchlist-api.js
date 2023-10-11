import { axiosInstance } from "../axiosInterceptor";

/*________________________GET Profile Detail_____________________________________*/
export const getProfileDetail = async () => {
  const res = await axiosInstance.get("/app-user");
  // console.log('🚀 ~ file: watchlist-api.js:5 ~ getWatchListName ~ data:', data);
  return res.data;
};

/*________________________GET WATCHLIST MASTER DATA_____________________________________*/
export const getWatchListName = async () => {
  const res = await axiosInstance.get("/app-user/watchlist-master-data");
  // console.log('🚀 ~ file: watchlist-api.js:5 ~ getWatchListName ~ data:', data);
  return res.data;
};

/*________________________GET WATCHLIST DATA BY_____________________________________*/
export const getWatchListDataById = async (id) => {
  let response;
  if (id) {
    response = await axiosInstance.get(`/app-user/watchlist-data/${id}`);
  } else {
    response = await axiosInstance.get(`/app-user/watchlist-data/1`); //need to change this
  }
  return response;
};

/*________________________GET LISTED COMPANIES_____________________________________*/
export const getWatchListedCompanies = async () => {
  const res = await axiosInstance.get("/app-user/listed-companies");
  return res.data;
};

/*________________________POST WATCHLIST MASTER_____________________________________*/
export const addWatchListMaster = async (formData) => {
  const data = await axiosInstance.post("/app-user/watchlist-master", formData);
  return data;
};

/*________________________POST WATCHLIST DETAIL_____________________________________*/
export const addWatchListDetail = async (formData) => {
  const data = await axiosInstance.post("/app-user/watchlist-detail", formData);
  return data;
};
