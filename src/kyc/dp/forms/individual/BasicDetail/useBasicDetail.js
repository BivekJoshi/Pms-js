import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { addBasicDetail, addFamilyDetail } from "../../../../../api/Kyc/Demat/demat_api";
import { getErrorMessage } from "../../../../../utility/getErrorMessage";

/*________________________POST Basic Detail_____________________________________*/
export const useAddBasicDetail = () => {
  return useMutation(
    ["addBasicDetail"],
    (formData ) => addBasicDetail(formData ),
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

/*________________________POST Family Detail_____________________________________*/
export const useAddFamilyDetail = () => {
  return useMutation(
    ["addFamilyDetail"],
    (formData) => addFamilyDetail(formData ),
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
