import { axiosInstance } from "../../axiosInterceptor";

/*________________________POST GUARDIAN DETAIL_____________________________________*/
export const addGuardian = async (formData) => {
  const data = await axiosInstance.post(
    `/client/individual-details/guardian?currentForm=2`,
    formData
  );
  return data;
};
