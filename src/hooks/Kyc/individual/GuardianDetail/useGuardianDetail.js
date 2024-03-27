import { useMutation } from "react-query";
import { addGuardian } from "../../../../api/Kyc/GuardianDetail/guardian-api";
import toast from "react-hot-toast";

export const useAddGuardian = ({ onSuccess }) => {
  return useMutation(["addGuardian"], (formData) => addGuardian(formData), {
    onSuccess: (data, variables, context) => {
      toast.success("Successfully added Guardian Detail");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`${err.message}`);
    },
  });
};
