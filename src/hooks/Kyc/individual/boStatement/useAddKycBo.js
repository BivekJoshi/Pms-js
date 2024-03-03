import { useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { addKycBO, getKycBO } from '../../../../api/Kyc/KycBO/addKycBO';

/*________________________GET BO DETAIL_____________________________________*/
export const useGetKycBO = () => {
  return useQuery(["getBO"], () => getKycBO(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

/*________________________POST BO DETAIL_____________________________________*/
export const useAddKycBO = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["addBank"],
     (formData) => addKycBO(formData), {
    onSuccess: (data, variables, context) => {
      toast.success("Successfully added bank data");
      onSuccess && onSuccess(data, variables, context);
      queryClient.invalidateQueries('getBank');
    },
    onError: (err, _variables, _context) => {
      toast.error(`${err.message}`);
    },
  });
};