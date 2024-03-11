import { axiosInstance } from "../../axiosInterceptor";

/*________________________BASIC DETAIL_____________________________________*/
export const addBasicDetail = async (formData) => {
  const data = await axiosInstance.post(
    `/client/individual-details?currentForm=1`,
    formData
  );
  return data;
};
/*________________________Family Detail_____________________________________*/
export const addFamilyDetail = async (formData ) => {
  const data = await axiosInstance.post(
    `/client/client-family-details?currentForm=4`,
    formData
  );
  return data;
};
