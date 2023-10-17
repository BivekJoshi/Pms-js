import { axiosInstance } from "../axiosInterceptor";

export const login = async (email, brokerNo, password) => {
  const data = await axiosInstance.post("/public/login", {
    email,
    brokerNo,
    password,
  });
  return data;
};

export const register = async (email, brokerNo, nepseCode, mobileNo) => {
  const { data } = await axiosInstance.post("/public/register", {
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

export const resetPassword = async (brokerNo, email, nepseCode) => {
  const { data } = await axiosInstance.put(`/public/reset-password`, {
    brokerNo,
    email,
    nepseCode,
  });
  return data;
};

export const verifyResetPassword = async (id, newPassword, confirmPassword) => {
  const { data } = await axiosInstance.put(`/public/reset-password/${id}`, {
    newPassword,
    confirmPassword,
  });
  return data;
};