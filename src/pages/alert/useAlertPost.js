import { useMutation, useQuery, useQueryClient } from "react-query";
import { createAlertApi, deleteStockAlert, getCompanyLTP } from "./alertApi";
import toast from "react-hot-toast";

export const useAddCreateAlert = ({ onSuccess }) => {
  return useMutation(["addAlert"], (formData) => createAlertApi(formData), {
    onSuccess: (data, variables, context) => {
      toast.success("Succesfully Create Alert");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err) => {
      toast.error(`error: ${err.message}`);
    },
  });
};
export const useGetLtp = (script) => {
  return useQuery(["getLtpData", script], () => getCompanyLTP(script), {
    onError: (err) => {
      toast.error(`error: ${err.message}`);
    },
    cacheTime: 10000,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};
/*________________________________DELETE MANAGE STOCK ALERT _____________________*/
export const useRemoveWatchListDetail = ({ onSuccess, id }) => {
  console.log(id ,"id ma chai ");
  const queryClient = useQueryClient();
  return useMutation(["deleteStockAlert"], () => deleteStockAlert(id), {
    onSuccess: (data, variables, context) => {
      onSuccess && onSuccess(data, variables, context);
      toast.success("Succesfully Deleted Stock Alert");

      queryClient.invalidateQueries("getLtpData");
    },
    onError: (err, _variables, _context) => {
      toast.error(getErrorMessage(err));
    },
  });
};
