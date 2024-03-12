import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { addBranchDetail } from "../../../api/Kyc/BranchDetail/branch-detail-api";

export const useAddBranchDetail = ({ onSuccess }) => {
  return useMutation(["addBranchDetail"], (formData) => addBranchDetail(formData), {
    onSuccess: (data, variables, context) => {
      toast.success("Successfully added Branch Detail");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`${err.message}`);
    },
  });
};
