import { useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { getCompanyById } from "../../api/company/company-api";

/*________________________GET COMPANY DATA BY ID_____________________________________*/
export const useGetCompanyById = (id) => {
    return useQuery(["getCompany", id], () => getCompanyById(id), {
      cacheTime: 10000,
      refetchInterval: false,
      refetchOnWindowFocus: false,
    });
  };