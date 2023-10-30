import { axiosInstance } from "../axiosInterceptor";

{
  /*____________________________PUT____________________________________________*/
}
export const addChangePassword = async (formData) => {
  const data = await axiosInstance.put(`/utility/change-password`, formData);
  return data;
};
