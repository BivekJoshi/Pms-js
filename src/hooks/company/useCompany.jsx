import { useQuery } from "react-query";
import {
  getCompanyById,
  getCompanyByIdNo,
  getFloorsheetDetail,
  // getfloorsheetById,
} from "../../api/company/company-api";

/*________________________GET COMPANY DATA BY ID_____________________________________*/
export const useGetCompanyById = (script) => {
  return useQuery(["getCompany", script], () => getCompanyById(script), {
    cacheTime: 10000,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};
/*________________________GET COMPANY DATA BY ID_____________________________________*/
export const useGetCompanyBySymbol = (script) => {
  return useQuery(["getCompanySymbol", script], () => getCompanyById(script), {
    cacheTime: 10000,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

/*________________________GET COMPANY DATA BY ID_____________________________________*/
export const useGetCompanyByIdNo = (id) => {
  return useQuery(["getCompanyByIdNo", id], () => getCompanyByIdNo(id), {
    cacheTime: 10000,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

// /*________________________GET floor sheet_____________________________________*/
// export const useGetfloorsheetById = (script) => {
//   return useQuery(
//     ["getFloorsheetDetail", script],
//     () => getFloorsheetDetail(script),
//     {
//       cacheTime: 10000,
//       refetchInterval: false,
//       refetchOnWindowFocus: false,
//     }
//   );
// };
