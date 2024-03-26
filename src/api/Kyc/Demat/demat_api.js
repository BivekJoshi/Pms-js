export const postBankKycData = "client/bank-details"
export const getBankKycData = "client/bank-details"
import { axiosInstance } from "../../axiosInterceptor"

/*________________________GET BASIC DETAIL_____________________________________*/
export const getBasicDetail = async () => {
  const res = await axiosInstance.get(`/client/individual-details`)
  return res?.data;
}

/*________________________POST BASIC DETAIL_____________________________________*/
export const addBasicDetail = async (formData) => {
  const {data} = await axiosInstance.post(
    `/client/individual-details?currentForm=2`,
    formData
  )
  return data
}
