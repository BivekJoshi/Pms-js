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
