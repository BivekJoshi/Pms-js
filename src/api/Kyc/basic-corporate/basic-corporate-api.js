import { axiosInstance } from "../../axiosInterceptor";

/*________________________GET BASIC CORPORATE DETAIL_____________________________________*/
export const getBasicCorporate = async () => {
    const response = await axiosInstance.get(`/client/corporate-details`);
    return response.data;
  };

/*________________________POST BASIC CORPORATE DETAIL_____________________________________*/
export const addBasicCorporate = async (formData) => {
  const data = await axiosInstance.post(
    `/client/corporate-details?currentForm=1`,
    formData
  );
  return data;
};