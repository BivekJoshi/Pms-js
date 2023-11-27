import { useMutation, useQuery, useQueryClient } from "react-query";
import { addNotification, editNotification, getNotification } from "../../api/notificationConfiguration/notification-api";
import toast from "react-hot-toast";
import { getErrorMessage } from "../../utility/getErrorMessage";

/*________________________GET NOTIFICATION CONFIGURATION_____________________________________*/
export const useGetNotification = () => {
  return useQuery(["getNotifiactionConfiguration"], () => getNotification(), {
    cacheTime: 10000,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

/*________________________POST NOTIFICATION CONFIGURATION_____________________________________*/
export const useAddWatchListMaster = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["addNotification"],
    (formData) => addNotification(formData),
    {
      onSuccess: (data, variables, context) => {
        toast.success("Succesfully set notification");
        onSuccess && onSuccess(data, variables, context);
        queryClient.invalidateQueries("getNotifiactionConfiguration");
      },
      onError: (err, _variables, _context) => {
        toast.error(getErrorMessage(err));
      },
    }
  );
};

/*________________________POST NOTIFICATION CONFIGURATION_____________________________________*/
export const useEditNotification = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["editNotificationConfiguration"],
    (formData) => editNotification(formData),
    {
      onSuccess: (data, variables, context) => {
        console.log(variables,"variables");
        const allValuesAreFalse = Object.values(variables || {}).every(value => value === false);
        if (allValuesAreFalse) {
          toast.success("All notification configurations are Reset");
        } else {
          toast.success("Successfully set notification");
        }

        onSuccess && onSuccess(data, variables, context);
        queryClient.invalidateQueries("getNotifiactionConfiguration");
      },
      onError: (err, _variables, _context) => {
        toast.error(getErrorMessage(err));
      },
    }
  );
};
