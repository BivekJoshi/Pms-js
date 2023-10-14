import { axiosInstance } from "../axiosInterceptor";

/*________________________GET WATCHLIST MASTER DATA_____________________________________*/
export const getTransaction = async () => {
  const res = await axiosInstance.get("transaction/share-transaction?pageNumber=0&dateFrom=1694420342&dateTo=1697012342");
  return res;
};