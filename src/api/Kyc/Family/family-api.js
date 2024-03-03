import { axiosInstance } from "../../axiosInterceptor";

/*________________________POST FAMILY DETAIL_____________________________________*/
export const addFamily = async (formData) => {
  const data = await axiosInstance.post(
    `/client-family-details?currentForm=1`,
    formData
  );
  return data;
};
