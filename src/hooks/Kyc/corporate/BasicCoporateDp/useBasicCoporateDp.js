import { useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { addBasicCorporate, getBasicCorporate } from '../../../../api/Kyc/basic-corporate/basic-corporate-api';

/*________________________GET BASIC CORPORATE DETAIL_____________________________________*/
export const useGetBasicDpCorporate = () => {
  return useQuery(["getBasicCorporate"], () => getBasicCorporate(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

/*________________________POST BASIC CORPORATE DETAIL_____________________________________*/
export const useAddBasicDPCorporate = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["addBasicCorporate"],
     (formData) => addBasicCorporate(formData), {
    onSuccess: (data, variables, context) => {
      toast.success("Successfully added BO data");
      onSuccess && onSuccess(data, variables, context);
      queryClient.invalidateQueries('getBasicCorporate');
    },
    onError: (err, _variables, _context) => {
      toast.error(`${err.message}`);
    },
  });
};