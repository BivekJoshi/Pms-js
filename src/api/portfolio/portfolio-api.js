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