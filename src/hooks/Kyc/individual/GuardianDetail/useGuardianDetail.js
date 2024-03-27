import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addGuardian,
  getGuardian,
} from "../../../../api/Kyc/GuardianDetail/guardian-api";
import toast from "react-hot-toast";

/*________________________GET Guardian DETAIL_____________________________________*/
export const useGetGuardianDetail = () => {
  return useQuery(["getBODetail"], () => getGuardian(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};
export const useAddGuardian = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["addGuardian"], (formData) => addGuardian(formData), {
    onSuccess: (data, variables, context) => {
      toast.success("Successfully added Guardian Detail");
      onSuccess && onSuccess(data, variables, context);
      queryClient.invalidateQueries("getBODetail");
    },
    onError: (err, _variables, _context) => {
      toast.error(`${err.message}`);
    },
  });
};
