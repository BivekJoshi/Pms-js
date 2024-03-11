import { axiosInstance } from "../axiosInterceptor";

export const login = async (email, brokerNo, password) => {
  const data = await axiosInstance.post("/public/login", {
    loginId: email,
    brokerNo,
    password,
  });
  return data;
};

export const register = async (values) => {
  if (values) {
    const data = await axiosInstance.post("/registration", values);
    return data;
  }
};

export const application = async (email, submissionNo) => {
  const { data } = await axiosInstance.get(
    `/public/register/rejected?email=${email}&submissionNo=${submissionNo}`
  );
  return data;
};

export const verification = async (id, otp) => {
  if (otp) {
    const { data } = await axiosInstance.post(`/public/register/${id}/${otp}`);
    return data;
  }
};

export const resendVerification = async (id) => {
  if (id) {
    const { data } = await axiosInstance.post(
      `/public/register/re-send-otp/${id}`
    );
    return data;
  }
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
