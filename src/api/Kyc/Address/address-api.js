import { axiosInstance } from "../../axiosInterceptor";

/*________________________POST ADDRESS DETAIL_____________________________________*/
export const addAddress = async (formData) => {
  const addresses = formData.addresses;
  const data = await axiosInstance.post(
    `/address-details?currentForm=1`,
    addresses
  );
  return data;
};
