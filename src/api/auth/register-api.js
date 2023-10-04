import { axiosInstance } from '../axiosInterceptor';

export const register = async (email, brokerNo, nepseCode, mobileNo) => {
  const { data } = await axiosInstance.post('/public/register', {
    email,
    brokerNo,
    nepseCode,
    mobileNo,
  });
  return data;
};
