import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addWatchListDetail,
  addWatchListMaster,
  getProfileDetail,
  getWatchListDataById,
  getWatchListName,
  getWatchListedCompanies,
} from "../../api/watchlist/watchlist-api";
import toast from "react-hot-toast";

/*________________________GET Profile Detail_____________________________________*/
export const useGetProfileDetail = () => {
  return useQuery(["getProfileDetail"], () => getProfileDetail(), {
    cacheTime: 10000,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

/*________________________GET WATCHLIST MASTER DATA_____________________________________*/
export const useGetWatchListName = () => {
  return useQuery(["getWatchListName"], () => getWatchListName(), {
    cacheTime: 10000,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

/*________________________GET WATCHLIST DATA BY ID_____________________________________*/
export const useGetWatchListDataById = (id) => {
  return useQuery(
    ["getWatchListDataById", id],
    () => getWatchListDataById(id),
    {
      cacheTime: 10000,
      refetchInterval: false,
      refetchOnWindowFocus: false,
    }
  );
};

/*________________________GET WATCHLIST DATA BY ID_____________________________________*/
export const useGetListedCompanies = () => {
  return useQuery(
    ["getWatchListedCompanies"],
    () => getWatchListedCompanies(),
    {
      cacheTime: 10000,
      refetchInterval: false,
      refetchOnWindowFocus: false,
    }
  );
};

/*________________________POST WATCHLIST MASTER_____________________________________*/
export const useAddWatchListMaster = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["addWatchListMaster"],
    (formData) => addWatchListMaster(formData),
    {
      onSuccess: (data, variables, context) => {
        toast.success("Succesfully added WatchList Master");
        onSuccess && onSuccess(data, variables, context);
        queryClient.invalidateQueries("getWatchListName");
      },
      onError: (err, _variables, _context) => {
        toast.error(`error: ${err.message}`);
      },
    }
  );
};

/*________________________POST WATCHLIST DETAILS_____________________________________*/
export const useAddWatchListDetail = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["addWatchListDetail"],
    (formData) => addWatchListDetail(formData),
    {
      onSuccess: (data, variables, context) => {
        toast.success("Succesfully added WatchList Detail");
        onSuccess && onSuccess(data, variables, context);
        queryClient.invalidateQueries("getWatchListName");
      },
      onError: (err, _variables, _context) => {
        toast.error(`error: ${err.message}`);
      },
    }
  );
};
