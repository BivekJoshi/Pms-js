import { axiosInstance } from '../axiosInterceptor';

/*________________________GET COMPANY DATA BY SCRIPT_____________________________________*/
export const getCompanyById = async (script) => {
  if (script) {
    const res = await axiosInstance.get(`/company-info/${script}`);
    return res?.data;
  }
};

/*________________________GET COMPANY DATA BY ID_____________________________________*/
export const getCompanyByIdNo = async (id) => {
  if (id) {
    const res = await axiosInstance.get(`/company-info/listed-companies/${id}`);
    return res?.data;
  }
};
// /*________________________GET Floorsheet Detail_____________________________________*/
// export const getFloorsheetDetail = async (script) => {
//   if (script) {
//     const res = await axiosInstance.get(`/company-info/floor-sheet-details/${script}`);
//     return res?.data;
//   }
// };

