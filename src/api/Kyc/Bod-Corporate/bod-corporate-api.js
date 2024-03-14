import { axiosInstance } from "../../axiosInterceptor";

/*________________________GET BASIC CORPORATE DETAIL_____________________________________*/
export const getBodCorporate = async () => {
    const data = await axiosInstance.get(`/client/corporate-bod-details`);
    return data;
  };

/*________________________POST BASIC CORPORATE DETAIL_____________________________________*/
export const addBodCorporate = async (formData) => {
  const data = await axiosInstance.post(
    `/client/corporate-bod-details?currentForm=7`,
    formData
  );
  return data;
};