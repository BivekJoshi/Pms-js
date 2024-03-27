import { axiosInstance } from "../../axiosInterceptor";

/*________________________GET GUARDIAN DETAIL_____________________________________*/
export const getGuardian = async () => {
  const response = await axiosInstance.get(
    `/client/individual-details/guardian`
  );
  return response.data;
};

/*________________________POST GUARDIAN DETAIL_____________________________________*/
export const addGuardian = async (formData) => {
  const data = await axiosInstance.post(
    `/client/individual-details/guardian?currentForm=2`,
    formData
  );
  return data;
};
