import { axiosInstance } from "../../axiosInterceptor";

/*________________________BASIC DETAIL_____________________________________*/
export const addBasicDetail = async (formData, currentForm) => {
  const data = await axiosInstance.post(
    `/client/individual-details?currentForm=1`,
    formData
  );
  return data;
};
