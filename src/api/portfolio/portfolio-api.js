import { axiosInstance } from "../axiosInterceptor";

/*________________________GET TRANSACTION PORTFOLIO_____________________________________*/
export const getTransactionPortfolio = async () => {
  const response = await axiosInstance.get(`/transaction/portfolio`);
  return response.data;
};

/*________________________GET TRANSACTION PORTFOLIO_____________________________________*/
export const getUserPortfolio = async () => {
  const response = await axiosInstance.get(`/app-user/user-portfolio`);
  return response.data;
};

/*________________________GET USERINFO_____________________________________*/
export const getUserInfo = async () => {
  const response = await axiosInstance.get(`/app-user`);
  return response.data;
};
/*________________________Change Profile_____________________________________*/
export const postChangeProfile = async () => {
  const data = await axiosInstance.post(
    "app-user/upload/profile-photo",
  );
  return data;
};

/*________________________GET CHILD DETAIL_____________________________________*/
export const getUserChildDetail = async () => {
  const response = await axiosInstance.get(`/app-user/child-detail`);
  return response.data;
};
