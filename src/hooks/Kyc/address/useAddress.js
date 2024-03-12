import { useMutation, useQuery, useQueryClient } from "react-query";
import { addAddress, getAddress } from "../../../api/Kyc/Address/address-api";
import toast from "react-hot-toast";

/*________________________GET ADDRESS DETAIL_____________________________________*/
export const useGetAddress = () => {
  return useQuery(["getAddress"], () => getAddress(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

/*________________________POST ADDRESS DETAIL_____________________________________*/
export const useAddAddress = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["addAddress"], (formData) => addAddress(formData), {
    onSuccess: (data, variables, context) => {
      toast.success("Successfully added Address");
      onSuccess && onSuccess(data, variables, context);
      queryClient.invalidateQueries('getAddress');
    },
    onError: (err, _variables, _context) => {
      toast.error(`${err.message}`);
    },
  });
};
