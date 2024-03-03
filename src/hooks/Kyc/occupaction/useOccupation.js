import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { addOccupation } from "../../../api/Kyc/Occupation/occupation-api";

export const useAddOccupation = ({ onSuccess }) => {
  return useMutation(["addOccupation"], (formData) => addOccupation(formData), {
    onSuccess: (data, variables, context) => {
      toast.success("Successfully added Occupation Detail");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`${err.message}`);
    },
  });
};
