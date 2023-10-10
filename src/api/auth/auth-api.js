import { axiosInstance } from '../axiosInterceptor';

export const login = async (email, brokerNo, password) => {
  const data = await axiosInstance.post('/public/login', {
    email,
    brokerNo,
    password,
  });
  return data;
};

export const register = async (email, brokerNo, nepseCode, mobileNo) => {
  const { data } = await axiosInstance.post('/public/register', {
    email,
    brokerNo,
    nepseCode,
    mobileNo,
  });
  return data;
};

export const application = async (email, submissionNo) => {
  const { data } = await axiosInstance.get(
    `/public/register/rejected?email=${email}&submissionNo=${submissionNo}`
  );
  return data;
};

export const verification = async (id, otp) => {
  const { data } = await axiosInstance.post(`/public/register/${id}/${otp}`);
  return data;
};

export const resendVerification = async (id, otp) => {
  const { data } = await axiosInstance.post(`/public/register/${id}/${otp}`);
  return data;
};

export const resetPassword = async (id) => {
  const { data } = await axiosInstance.post(`/public/register/${id}`);
  return data;
};
