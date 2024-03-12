import { axiosInstance } from "../../axiosInterceptor";

/*________________________GET FAMILY DETAIL_____________________________________*/
export const getFamily = async () => {
  const response = await axiosInstance.get(`/client/client-family-details`);
  return response.data;
};

/*________________________POST FAMILY DETAIL_____________________________________*/
export const addFamily = async (formData) => {
  const data = await axiosInstance.post(
    `/client/client-family-details?currentForm=4`,
    formData
  );
  return data;
};
