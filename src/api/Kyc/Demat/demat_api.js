export const postBankKycData = "http://103.94.159.144:8084/kyc/api/client/bank-details";
export const getBankKycData = "http://103.94.159.144:8084/kyc/api/client/bank-details";
import { axiosInstance } from "../../axiosInterceptor";

/*________________________BASIC DETAIL_____________________________________*/
export const addBasicDetail = async (formData, currentForm) => {
  const data = await axiosInstance.post(
    `/client/individual-details?currentForm=1`,
    formData
  );
  return data;
};
