import { QueryClient, useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { addKycBank, deleteKycBank, getBankList, getKycBank, updateKycBank } from "../../../../api/Kyc/Bank/addBankKyc";

/*________________________GET BANK List DETAIL_____________________________________*/
export const useGetBankList = () => {
    return useQuery(["getBankList"], () => getBankList(), {
      refetchInterval: false,
      refetchOnWindowFocus: false,
    });
  };

/*________________________GET BANK DETAIL_____________________________________*/
export const useGetKycBank = () => {
  return useQuery(["getBankKyc"], () => getKycBank(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

/*________________________POST BANK DETAIL_____________________________________*/
export const useAddKycBank = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["addBank"],
     (formData) => addKycBank(formData), {
    onSuccess: (data, variables, context) => {
      toast.success("Successfully added bank data");
      onSuccess && onSuccess(data, variables, context);
      queryClient.invalidateQueries('getBankKyc');
    },
    onError: (err, _variables, _context) => {
      toast.error(`${err.message}`);
    },
  });
};

/*________________________UPDATE BANK DETAIL_____________________________________*/
export const useUpdateKycBank = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["updateBank"],
     (updatedRow) => updateKycBank(updatedRow), {
    onSuccess: (data, variables, context) => {
      toast.success("Successfully updated bank data");
      onSuccess && onSuccess(data, variables, context);
      queryClient.invalidateQueries('getBankKyc');
    },
    onError: (err, _variables, _context) => {
      toast.error(`${err.message}`);
    },
  });
};


/*________________________DELETE BANK DETAIL_____________________________________*/
export const useDeleteKycBank = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  const kycBankDelete = useMutation(
    ["deleteKycBank"],
    (row) =>  deleteKycBank(row),
    {
      onSuccess: (data, variables, context) => {
        toast.success("Successfully deleted bank data");
        onSuccess && onSuccess(data, variables, context);
        queryClient.invalidateQueries("getBankKyc");
      },
      onError: (err, _variables, _context) => {
        console.log("err", err)
        toast.error(`${err.response.data.message}`);
      },
    }
    );
    return {
      isSuccess: kycBankDelete.isSuccess,
      deleteKycBanknMutation: kycBankDelete.mutate,
    };
};