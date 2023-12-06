import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { getErrorMessage } from "../../utility/getErrorMessage";
import { addFeedback } from "../../api/feedback/Feedback-api";

/*________________________POST WATCHLIST MASTER_____________________________________*/
export const useAddFeedback = ({ onSuccess }) => {
    return useMutation(
      ['addFeedback'],
      (formData) => addFeedback(formData),
      {
        onSuccess: (data, variables, context) => {
          toast.success('Succesfully added feedback');
          onSuccess && onSuccess(data, variables, context);
        },
        onError: (err, _variables, _context) => {
          toast.error(getErrorMessage(err));
        },
      }
    );
  };