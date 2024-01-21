import { useQuery } from "react-query";
import { axiosInstance } from "../axiosInterceptor";

const fiscalYearAPI = async () => {
  const { data } = await axiosInstance.get("/fiscal-year");
  return data;
};

export const useFiscalYearGet = () => {
  return useQuery(
    "getFiscalYear",
    async () => {
      return await fiscalYearAPI();
    },
    {
      refetchInterval: true,
    }
  );
};
