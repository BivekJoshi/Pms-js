import { useQuery } from "react-query";
import { getUserMetaData } from "../api/metaDataKyc";

export const useGetMetaData = (id) => {
  return useQuery(["getUserMetaData", id], () => getUserMetaData(id), {
    cacheTime: 10000,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};
