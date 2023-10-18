import { useMutation, useQuery } from "react-query";
import { createAlertApi, getCompanyLTP } from "./alertApi";
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
