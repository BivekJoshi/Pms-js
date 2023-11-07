import { useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import {
  getTransactionPortfolio,
  getUserChildDetail,
  getUserInfo,
  getUserPortfolio,
  postChangeProfile,
} from "../../api/portfolio/portfolio-api";

/*________________________GET TRANSACTION PORTFOLIO_____________________________________*/
export const useGetTransactionPortfolio = () => {
  return useQuery(
    ["getTransactionPortfolio"],
    () => getTransactionPortfolio(),
    {
      cacheTime: 10000,
      refetchInterval: false,
      refetchOnWindowFocus: false,
    }
  );
};

/*________________________GET TRANSACTION PORTFOLIO_____________________________________*/
export const useGetUserenPortfolio = () => {
  return useQuery(["getUserenPortfolio"], () => getUserPortfolio(), {
    cacheTime: 10000,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

/*________________________GET TRANSACTION PORTFOLIO_____________________________________*/
export const useGetUserInfo = () => {
  return useQuery(["getUserInfo"], () => getUserInfo(), {
    cacheTime: 10000,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

/*________________________GET CHILD DETAIL_____________________________________*/
export const useGetUserChildDetail = () => {
  return useQuery(["getUserChildDetail"], () => getUserChildDetail(), {
    cacheTime: 10000,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

export const usePostChangeProfile = ({ onSuccess }) => {
  return useMutation(["addAlert"], () => postChangeProfile(), {
    onSuccess: (data, variables, context) => {
      toast.success("Succesfully Change Profile");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err) => {
      toast.error(`error: ${err.message}`);
    },
  });
};

