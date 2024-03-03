import { useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { addKycBank, getBankList, getKycBank } from "../../../../api/Kyc/Bank/addBankKyc";

/*________________________GET BANK List DETAIL_____________________________________*/
export const useGetBankList = () => {
    return useQuery(["getBankList"], () => getBankList(), {
      refetchInterval: false,
      refetchOnWindowFocus: false,
    });
  };

/*________________________GET BANK DETAIL_____________________________________*/
export const useGetKycBank = () => {
  return useQuery(["getBank"], () => getKycBank(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

/*________________________POST BANK DETAIL_____________________________________*/
export const useAddKycBank = ({ onSuccess }) => {
  return useMutation(["addBank"], (formData) => addKycBank(formData), {
    onSuccess: (data, variables, context) => {
      toast.success("Successfully added bank data");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`${err.message}`);
    },
  });
};
