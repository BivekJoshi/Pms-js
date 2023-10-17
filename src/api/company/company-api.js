import { axiosInstance } from "../axiosInterceptor";

/*________________________GET COMPANY DATA BY ID_____________________________________*/
export const getCompanyById = async (id) => {
  if (id) {
    const res = await axiosInstance.get(`/app-user/listed-companies/${id}`);
    return res?.data;
  }
};
