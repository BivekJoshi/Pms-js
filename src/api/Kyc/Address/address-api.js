import { axiosInstance } from "../../axiosInterceptor";

/*________________________GET ADDRESS DETAIL_____________________________________*/
export const getAddress = async () => {
  const data = await axiosInstance.get(`/client/address-details`);
  return data;
};

/*________________________POST ADDRESS DETAIL_____________________________________*/
export const addAddress = async (formData) => {
  const addresses = formData.addresses;
  const data = await axiosInstance.post(
    `/client/address-details?currentForm=3`,
    addresses
  );
  return data;
};
