import { axiosInstance } from '../axiosInterceptor';

export const getTheme = async (id) => {
  if (id) {
    const { data } = await axiosInstance.get(`/public/color/${id}`);
    return data;
  }
};
