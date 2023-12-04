import { axiosInstance } from "../../api/axiosInterceptor";

/*________________________POST ALERT_____________________________________*/
export const createAlertApi = async (formData) => {
  const data = await axiosInstance.post(
    "/live-market/create/stock-alert",
    formData
  );
  return data;
};

/*_________________________GET COMPANY LTP______________________________________________*/
export const getCompanyLTP = async (script) => {
  if (script) {
    const res = await axiosInstance.get(`/live-market/ltp/${script}`);
    return res.data;
  } else return null;
};

/*_______________________DELETE MANAGE STOCK ALERT________________________________*/
export const deleteStockAlert = async (id) => {
  if (id) {
    await axiosInstance.delete(`/live-market/delete/stock-alert/${id}`);
  }
};

/*________________________GET LIVE MARKET INDEX_____________________________________*/
// export const getLiveMarketIndex = async () => {
//   const res = await axiosInstance.get('/live-market/market-index');
//   return res.data;
// }

/*_________________________GET STOCK ALERT______________________________________________*/
export const getStockAlert = async (script) => {
  if (script) {
    const res = await axiosInstance.get(
      `/live-market/stock-alerts?script=${script}`
    );
    return res.data;
  } else return null;
};

/*_________________________EDIT STOCK ALERT______________________________________________*/
export const editStockAlert = async (formData, id) => {
  if (id) {
    const data = await axiosInstance.put(
      `/live-market/update/stock-alert/${id}`,
      formData
    );
    return data;
  }
};
