import { axiosInstance } from "../../api/axiosInterceptor";

export const createAlertApi = async (formData) => {
  const data = await axiosInstance.post(
    "/live-market/create/stock-alert",
    formData
  );
  return data;
};

export const getCompanyLTP = async (script) => {
  if (script) {
    const res = await axiosInstance.get(`/live-market/ltp/${script}`);
    return res.data;
  } else return null;
};

/*_______________________DELETE MANAGE STOCK ALERT________________________________*/
export const deleteStockAlert = async ( id) => {
  if (id) {
    await axiosInstance.delete(
      `/live-market/delete/stock-alert/${id}`
    );
  }
};

export const getStockAlert = async (script) => {
  if (script) {
    const res = await axiosInstance.get(`/live-market/stock-alerts?script=${script}`);
    return res.data;
  } else return null;
};

