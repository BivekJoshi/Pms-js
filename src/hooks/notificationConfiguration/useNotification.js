import { useMutation } from "react-query";
import { addNotification } from "../../api/notificationConfiguration/notification-api";
import toast from "react-hot-toast";
import { getErrorMessage } from "../../utility/getErrorMessage";

/*________________________POST NOTIFICATION_____________________________________*/
export const useAddWatchListMaster = ({ onSuccess }) => {
    return useMutation(
      ['addNotification'],
      (formData) => addNotification(formData),
      {
        onSuccess: (data, variables, context) => {
          toast.success('Succesfully set notification');
          onSuccess && onSuccess(data, variables, context);
        },
        onError: (err, _variables, _context) => {
          toast.error(getErrorMessage(err));
        },
      }
    );
  };