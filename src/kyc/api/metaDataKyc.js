import { axiosInstance } from "../../api/axiosInterceptor";

export const getUserMetaData = async (id) => {
  if (id) {
    const res = await axiosInstance.get(`/registration/${id}`);
    return res?.data;
  }
};

export const finalSubmitApi = async () => {
  const { res } = await axiosInstance.post(`/registration/final-submit`);
  return res;
};
