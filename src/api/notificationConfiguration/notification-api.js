import { axiosInstance } from "../axiosInterceptor";

/*________________________POST NOTIFICATION CONFIGURATION_____________________________________*/
export const addNotification = async (formData) => {
  const data = await axiosInstance.post("/notification-configuration", formData);
  return data;
};

/*________________________GET NOTIFICATION CONFIGURATION_____________________________________*/
export const getNotification = async () => {
  const {data} = await axiosInstance.get(`/notification-configuration`);
  return data;
};

/*________________________EDIT NOTIFICATION CONFIGURATION_____________________________________*/
export const editNotification = async (formData) => {
  const data  = await axiosInstance.put(`/notification-configuration`,formData);
  return data;
};