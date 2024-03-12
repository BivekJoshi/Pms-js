import { useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { addBasicDetail, getBasicDetail } from "../../../../../api/Kyc/Demat/demat_api";
import { getErrorMessage } from "../../../../../utility/getErrorMessage";

/*________________________GET DP INDIVIDUAL DETAILS_____________________________________*/
export const useGetBasicDetail = () => {
  return useQuery(["getBasicDetail"], () => getBasicDetail(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

/*________________________POST DP INDIVIDUAL DETAILS_____________________________________*/
export const useAddBasicDetail = ({ onSuccess }) => {
  return useMutation(
    ["addBasicDetail"],
    (formData, currentForm) => addBasicDetail(formData, currentForm),
    {
      onSuccess: (data, variables, context) => {
        toast.success("Succesfully added basic detail");
        onSuccess && onSuccess(data, variables, context);
      },
      onError: (err, _variables, _context) => {
        toast.error(getErrorMessage(err));
      },
    }
  );
};
