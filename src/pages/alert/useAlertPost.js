import { useMutation, useQuery } from "react-query";
import { createAlertApi, getCompanyLTP, getLiveMarketIndex } from "./alertApi";
import toast from "react-hot-toast";

/*________________________POST ALERT_____________________________________*/
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

/*________________________GET LIVE MARKET LTP_____________________________________*/
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

/*________________________GET LIVE MARKET INDEX_____________________________________*/
// export const useGetLiveMarketIndex = () => {
//   return useQuery(['getLiveMarketIndex'], () => getLiveMarketIndex(), {
//     cacheTime: 10000,
//     refetchInterval: false,
//     refetchOnWindowFocus: false,
//   });
// };