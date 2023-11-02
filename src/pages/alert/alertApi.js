import { axiosInstance } from "../../api/axiosInterceptor";

/*________________________POST ALERT_____________________________________*/
export const createAlertApi = async (formData) => {
  const data = await axiosInstance.post(
    "/live-market/create/stock-alert",
    formData
  );
  return data;
};

/*________________________GET LIVE MARKET LTP_____________________________________*/
export const getCompanyLTP = async (script) => {
  if (script) {
    const res = await axiosInstance.get(`/live-market/ltp/${script}`);
    return res.data;
  } else return null;
};


/*________________________GET LIVE MARKET INDEX_____________________________________*/
// export const getLiveMarketIndex = async () => {
//   const res = await axiosInstance.get('/live-market/market-index');
//   return res.data;
// }