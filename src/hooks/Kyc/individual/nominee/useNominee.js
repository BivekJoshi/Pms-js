import { useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { addNomineeDetail, getNomineeDetail } from '../../../../api/Kyc/Nominee/Nominee-api';

/*________________________GET NOMINEE DETAIL_____________________________________*/
export const useGetNomineeDetail = () => {
  return useQuery(["getNominee"], () => getNomineeDetail(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

/*________________________POST NOMINEE DETAIL_____________________________________*/
export const useAddNomineeDetail = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["addNominee"],
     (formData) => addNomineeDetail(formData), {
    onSuccess: (data, variables, context) => {
      toast.success("Successfully added BO data");
      onSuccess && onSuccess(data, variables, context);
      queryClient.invalidateQueries('getNominee');
    },
    onError: (err, _variables, _context) => {
      toast.error(`${err.message}`);
    },
  });
};