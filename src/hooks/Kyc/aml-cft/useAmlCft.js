import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { addAmlCft } from "../../../api/Kyc/AML-CFT/aml-cft-api";

export const useAddAmlCft = ({ onSuccess }) => {
  return useMutation(["addAmlCft"], (formData) => addAmlCft(formData), {
    onSuccess: (data, variables, context) => {
      toast.success("Successfully added AML/ CFT");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`${err.message}`);
    },
  });
};
