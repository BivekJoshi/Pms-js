import { useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { addBODetail, getBODetail } from '../../../../api/Kyc/KycBO/bo-api';

c

/*________________________POST BO DETAIL_____________________________________*/
export const useAddBODetail = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["addBODetail"],
     (formData) => addBODetail(formData), {
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