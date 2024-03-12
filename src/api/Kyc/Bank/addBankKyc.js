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

  /*________________________UPDATE BANK DETAIL_____________________________________*/
  export const updateKycBank = async (updatedRow) => {
    const data = await axiosInstance.post(`/client/bank-details?currentForm=1`, updatedRow);
    return data;
  };

  /*________________________DELETE BANK DETAIL_____________________________________*/
  export const deleteKycBank = async (row) => {
    const data = await axiosInstance.delete(`/client/bank-details/delete?id=${row}`);
    return data;
  };