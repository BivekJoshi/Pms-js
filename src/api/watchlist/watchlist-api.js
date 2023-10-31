import { axiosInstance } from "../axiosInterceptor";

/*________________________GET Profile Detail_____________________________________*/
export const getProfileDetail = async () => {
  const res = await axiosInstance.get("/app-user");
  // console.log('🚀 ~ file: watchlist-api.js:5 ~ getWatchListName ~ data:', data);
  return res.data;
};

/*________________________GET WATCHLIST MASTER DATA_____________________________________*/
export const getWatchListName = async () => {
  const res = await axiosInstance.get("/watchlist/master-data");
  return res.data;
};

/*________________________GET WATCHLIST DATA BY_____________________________________*/
export const getWatchListDataById = async (id) => {
  let response;
  if (id) {
    response = await axiosInstance.get(`/watchlist/data/${id}`);
  }
  return response;
};

/*________________________GET LISTED COMPANIES_____________________________________*/
export const getWatchListedCompanies = async () => {
  const res = await axiosInstance.get("/company-info/listed-companies");
  return res.data;
};

/*________________________POST WATCHLIST MASTER_____________________________________*/
export const addWatchListMaster = async (formData) => {
  const data = await axiosInstance.post("/watchlist", formData);
  return data;
};

/*________________________POST WATCHLIST DETAIL_____________________________________*/
export const addWatchListDetail = async (formData) => {
  const { id, script } = formData;
  const data = await axiosInstance.post(`/watchlist/master/${id}`, script);
  return data;
};
