import { axiosInstance } from "../../axiosInterceptor";

/*________________________GET List Of All BANK DETAIL_____________________________________*/
export const getBankList = async () => {
    const data = await axiosInstance.get(`/utility/bank-master`);
    return data;
  };

/*________________________GET BANK DETAIL_____________________________________*/
export const getKycBank = async () => {
    const data = await axiosInstance.get(`/client/bank-details`);
    return data;
  };

/*________________________POST BANK DETAIL_____________________________________*/
export const addKycBank = async (formData) => {
  const data = await axiosInstance.post(
    `/client/bank-details?currentForm=1`,
    formData
  );
  return data;
};
