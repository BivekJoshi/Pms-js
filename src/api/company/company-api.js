import { axiosInstance } from '../axiosInterceptor';

/*________________________GET COMPANY DATA BY ID_____________________________________*/
export const getCompanyById = async (script) => {
  if (script) {
    const res = await axiosInstance.get(`/company-info/${script}`);
    return res?.data;
  }
};

