import { axiosInstance } from "../axiosInterceptor";

/*________________________POST NOTIFICATION CONFIGURATION_____________________________________*/
export const addNotification = async (formData) => {
  const data = await axiosInstance.post("/notification", formData);
  return data;
};
