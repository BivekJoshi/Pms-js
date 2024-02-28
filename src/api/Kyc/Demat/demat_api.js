import { axiosInstance } from "../../axiosInterceptor";

/*________________________BASIC DETAIL_____________________________________*/
export const addBasicDetail = async (formData) => {
    const data = await axiosInstance.post('/client/individual-details', formData);
    return data;
  };