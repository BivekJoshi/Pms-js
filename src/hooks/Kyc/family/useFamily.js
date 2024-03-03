import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { addFamily } from "../../../api/Kyc/Family/family-api";

export const useAddFamily = ({ onSuccess }) => {
  return useMutation(["addFamily"], (formData) => addFamily(formData), {
    onSuccess: (data, variables, context) => {
      toast.success("Successfully added Family Detail");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`${err.message}`);
    },
  });
};
