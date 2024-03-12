import { axiosInstance } from "../../axiosInterceptor";

/*________________________GET BO DETAIL_____________________________________*/
export const getNomineeDetail = async () => {
    const data = await axiosInstance.get(`/client/dp-nominee-details`);
    return data;
  };

/*________________________POST BO DETAIL_____________________________________*/
export const addNomineeDetail = async (formData) => {
  const data = await axiosInstance.post(
    `/client/dp-nominee-details?currentForm=1`,
    formData
  );
  return data;
};