import { axiosInstance } from "../../axiosInterceptor";

/*________________________POST FAMILY DETAIL_____________________________________*/
export const addCitizenship = async (formData) => {
  const data = await axiosInstance.post(
    `/client/citizenship-details?currentForm=1`,
    formData
  );
  return data;
};