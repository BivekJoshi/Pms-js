import { useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import {
  addBranchDetail,
  getBranchDetail,
} from "../../../api/Kyc/BranchDetail/branch-detail-api";

/*____________________GET BRANCH DETAIL____________________*/
export const useGetBranchDetail = () => {
  return useQuery(["getBranchDetail"], () => getBranchDetail(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

/*____________POST BRANCH DETAIL_______*/
export const useAddBranchDetail = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["addBranchDetail"],
    (formData) => addBranchDetail(formData),
    {
      onSuccess: (data, variables, context) => {
        toast.success("Successfully added Branch Detail");
        onSuccess && onSuccess(data, variables, context);
        queryClient.invalidateQueries("getBranchDetail");
      },
      onError: (err, _variables, _context) => {
        toast.error(`${err.message}`);
      },
    }
  );
};
