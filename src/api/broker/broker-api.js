import { axiosInstance } from '../axiosInterceptor';

export const getBrokerList = async () => {
  const { data } = await axiosInstance.get('/public/broker');
  return data;
};