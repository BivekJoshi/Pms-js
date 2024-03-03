import { useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { addKycBO, getKycBO } from '../../../../api/Kyc/KycBO/addKycBO';

/*________________________GET BO DETAIL_____________________________________*/
export const useGetKycBO = () => {
  return useQuery(["getBODetail"], () => getKycBO(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

/*________________________POST BO DETAIL_____________________________________*/
export const useAddKycBO = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["addBODetail"],
     (formData) => addKycBO(formData), {
    onSuccess: (data, variables, context) => {
      toast.success("Successfully added BO data");
      onSuccess && onSuccess(data, variables, context);
      queryClient.invalidateQueries('getBODetail');
    },
    onError: (err, _variables, _context) => {
      toast.error(`${err.message}`);
    },
  });
};