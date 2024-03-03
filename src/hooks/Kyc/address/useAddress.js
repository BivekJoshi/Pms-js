import { useMutation, useQueryClient } from "react-query";
import { addAddress } from "../../../api/Kyc/Address/address-api";
import toast from "react-hot-toast";

export const useAddAddress = ({ onSuccess }) => {
  return useMutation(["addAddress"], (formData) => addAddress(formData), {
    onSuccess: (data, variables, context) => {
      toast.success("Successfully added Address");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`${err.message}`);
    },
  });
};
