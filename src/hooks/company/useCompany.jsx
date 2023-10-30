import { useQuery } from "react-query";
import {
  getCompanyById,
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
/*________________________GET floor sheet_____________________________________*/
// export const useGetfloorsheetById = (script, trDate, pageNumber, pageSize) => {
//   return useQuery(
//     ["getfloorsheetById",  script, trDate, pageNumber, pageSize],
//     () => getfloorsheetById( script, trDate, pageNumber, pageSize),
//     {
//       cacheTime: 10000,
//       refetchInterval: false,
//       refetchOnWindowFocus: false,
//     }
//   );
// };
