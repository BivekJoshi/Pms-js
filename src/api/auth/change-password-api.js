import { axiosInstance } from "../axiosInterceptor";

export const changePassword = async (oldPassword,newPassword,rePassword) => {
  const { data } = await axiosInstance.post('/utility/change-password', {
    oldPassword,
    newPassword,
    rePassword
  });
  return data;
};
