import { axiosInstance } from "../axiosInterceptor";

export const login = async (email, brokerNo, password) => {
  const { data } = await axiosInstance.post("/login", {
    loginId: email,
    brokerNo,
    password,
  });
  return data;
};
