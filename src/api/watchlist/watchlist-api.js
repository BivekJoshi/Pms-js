import { axiosInstance } from "../axiosInterceptor";

/*________________________GET WATCHLIST MASTER DATA_____________________________________*/
export const getWatchListName = async () => {
  const res = await axiosInstance.get("/app-user/watchlist-master-data");
  return res.data;
};

/*________________________GET WATCHLIST DATA BY_____________________________________*/
export const getWatchListDataById = async (id) => {
  let response;
  if (id) {
    response = await axiosInstance.get(`/app-user/watchlist-data/${id}`);
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
