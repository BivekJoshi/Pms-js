import { useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";

/*________________________GET WATCHLIST DATA BY ID_____________________________________*/
export const useGetTransaction = () => {
    return useQuery(["getTransaction"], () => getTransaction(), {
      cacheTime: 10000,
      refetchInterval: false,
      refetchOnWindowFocus: false,
    });
  };