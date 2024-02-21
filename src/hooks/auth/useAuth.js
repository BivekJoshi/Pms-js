import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  login,
  register,
  application,
  verification,
  resetPassword,
  resendVerification,
  verifyResetPassword,
} from "../../api/auth/auth-api";
import { useDispatch } from "react-redux";
import { getErrorMessage } from "../../utility/getErrorMessage";

export const useLogin = ({ onSuccess }) => {
  const history = useNavigate();
  const dispatch = useDispatch();
  return useMutation(
    ["login"],
    ({ email, brokerNo, password }) => login(email, brokerNo, password),
    {
      onSuccess: (data, variables, context) => {
        console.log("🚀 ~ useLogin ~ data:", data);
        // dispatch({ type: "USER_LOGIN", payload: data.data });
        // window.localStorage.setItem(
        //   "auth",
        //   JSON.stringify({
        //     authToken: data.data.auth,
        //     refreshToken: data.data.refresh,
        //     startDate: data.data.startDate,
        //     tempPassword: data?.data?.user?.tempPasswordStatus,
        //   })
        // );

        // if (data?.data?.user?.tempPasswordStatus) {
        //   history("/change/password");
        // } else {
        //   history("/profile");
        //   toast.success("Login Successful");
        // }

        dispatch({ type: "USER_LOGIN", payload: data.data?.user });
        window.localStorage.setItem(
          "auth",
          JSON.stringify({
            authToken: data.data.token,
          })
        );

        onSuccess && onSuccess(data, variables, context);
      },
      onError: (err, _variables, _context) => {
        toast.error(getErrorMessage(err));
      },
    }
  );
};

export const useRegister = ({ onSuccess }) => {
  const history = useNavigate();

  return useMutation(["register"], (formData) => register(formData), {
    onSuccess: (data, variables, context) => {
      toast.success("Registration Successful");
      history(`/verification/${data?.id}`);
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(getErrorMessage(err));
    },
  });
};

export const useApplication = ({ onSuccess }) => {
  const history = useNavigate();

  return useMutation(
    ["login"],
    ({ email, submissionNo }) => application(email, submissionNo),
    {
      onSuccess: (data, variables, context) => {
        toast.success(data?.status);
        history(`/status/message/${data?.status}`);
        onSuccess && onSuccess(data, variables, context);
      },
      onError: (err, _variables, _context) => {
        toast.error(getErrorMessage(err));
      },
    }
  );
};

export const useVerification = ({ onSuccess }) => {
  const history = useNavigate();

  return useMutation(["verification"], ({ id, otp }) => verification(id, otp), {
    onSuccess: (data, variables, context) => {
      toast.success("status fetched Successfully");
      history("/otp/verification");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(getErrorMessage(err));
    },
  });
};

export const useResendVerification = ({ onSuccess }) => {
  return useMutation(["verification"], ({ id }) => resendVerification(id), {
    onSuccess: (data, variables, context) => {
      toast.success("code re-send Successfully");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(getErrorMessage(err));
    },
  });
};

export const useResetPassword = ({ onSuccess }) => {
  const history = useNavigate();

  return useMutation(
    ["resetPassword"],
    ({ brokerNo, email, nepseCode }) =>
      resetPassword(brokerNo, email, nepseCode),
    {
      onSuccess: (data, variables, context) => {
        toast.success("Code sent to your email successfully");
        history(`/login`);
        onSuccess && onSuccess(data, variables, context);
      },
      onError: (err, _variables, _context) => {
        toast.error(getErrorMessage(err));
      },
    }
  );
};

export const useVerifyResetPassword = ({ id, onSuccess }) => {
  const navigate = useNavigate();

  return useMutation(
    ["changePassword"],
    ({ newPassword, confirmPassword }) =>
      verifyResetPassword(id, newPassword, confirmPassword),
    {
      onSuccess: (data, variables, context) => {
        toast.success("Password changed successfully");
        navigate(`/login`);
        onSuccess && onSuccess(data, variables, context);
      },
      onError: (err, _variables, _context) => {
        toast.error(getErrorMessage(err));
      },
    }
  );
};
