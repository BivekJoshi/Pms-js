import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { addBasicDetail } from "../../../../../api/Kyc/Demat/demat_api";
import { getErrorMessage } from "../../../../../utility/getErrorMessage";

/*________________________POST WATCHLIST MASTER_____________________________________*/
export const useAddBasicDetail = ({ onSuccess }) => {
    return useMutation(
      ['addBasicDetail'],
      (formData) => addBasicDetail(formData),
      {
        onSuccess: (data, variables, context) => {
          toast.success('Succesfully added basic detail');
          onSuccess && onSuccess(data, variables, context);
        },
        onError: (err, _variables, _context) => {
          toast.error(getErrorMessage(err));
        },
      }
    );
  };