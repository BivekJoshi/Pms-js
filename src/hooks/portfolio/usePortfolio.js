import { useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import {
  getTransactionPortfolio,
  getUserInfo,
  getUserPortfolio,
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
