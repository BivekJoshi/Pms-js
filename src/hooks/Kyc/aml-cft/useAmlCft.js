import { useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { addAmlCft, getAmlCft } from "../../../api/Kyc/AML-CFT/aml-cft-api";

/*________________________POST AML CFT DETAIL_____________________________________*/
export const useAddAmlCft = ({ onSuccess }) => {
  return useMutation(["addAmlCft"], (formData) => addAmlCft(formData), {
    onSuccess: (data, variables, context) => {
      toast.success("Successfully added AML/ CFT");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`${err.message}`);
    },
  });
};

/*________________________GET AML CFT DETAIL_____________________________________*/
export const useGetAmlCft = () => {
  return useQuery(["getAmlCft"], () => getAmlCft(), {
    cacheTime: 10000,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};
