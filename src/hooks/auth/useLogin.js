import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { login } from "../../api/auth/login-api";

export const useLogin = ({ onSuccess }) => {
  const history = useNavigate();
  return useMutation(
    ["login"],
    ({ email, brokerNo, password }) => login(email, brokerNo, password),
    {
      onSuccess: (data, variables, context) => {
        toast.success("Login Successful");
        history("dashboard");
        onSuccess && onSuccess(data, variables, context);
      },
      onError: (err, _variables, _context) => {
        toast.error(err.message);
      },
    }
  );
};
