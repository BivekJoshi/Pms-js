import { axiosInstance } from "../axiosInterceptor";

/*________________________GET COMPANY DATA BY ID_____________________________________*/
export const getCompanyById = async (script) => {
  if (script) {
    const res = await axiosInstance.get(`/company-info/${script}`);
    return res?.data;
  }
};

// /*________________________GET floor sheet BY script ____________________________________*/
// export const getfloorsheetById = async (script, trDate, pageNumber, pageSize) => {
//   const queryParams = {script, trDate, pageNumber, pageSize};
//   if (script) {
//     const res = await axiosInstance.get(`/app-user/floor-sheet-details`,  { params: queryParams });
//     return res;
//   }
// };
