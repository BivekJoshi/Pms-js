import { useMutation, useQuery } from "react-query";
import { finalSubmitApi, getUserMetaData } from "../api/metaDataKyc";
import { useDispatch } from "react-redux";
import { USER_LOGIN } from "../../redux/types/types";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { getErrorMessage } from "../../utility/getErrorMessage";

export const useGetMetaData = (id) => {
  const dispatch = useDispatch();

  return useQuery(
    ["getUserMetaData", id],
    async () => {
      const data = await getUserMetaData(id);
      dispatch({ type: USER_LOGIN, payload: data?.user });
      return data;
    },
    {
      cacheTime: 10000,
      refetchInterval: false,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        // Optional: If you need to perform additional actions on success
      },
    }
  );
};

export const useFinalSubmitApi = ({ onSuccess }) => {
  const history = useNavigate();

  return useMutation(["finalSubmitApi"], () => finalSubmitApi(), {
    onSuccess: (data, variables, context) => {
      toast.success("Kyc Submitted Successfully");
      history(`/kyc-submitted`);
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(getErrorMessage(err));
    },
  });
};
