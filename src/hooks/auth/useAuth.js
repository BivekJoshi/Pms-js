import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { login, register, application, verification } from '../../api/auth/auth-api';
import { useDispatch } from 'react-redux';

export const useLogin = ({ onSuccess }) => {
  const history = useNavigate();
  const dispatch = useDispatch();
  return useMutation(
    ['login'],
    ({ email, brokerNo, password }) => login(email, brokerNo, password),
    {
      onSuccess: (data, variables, context) => {
        toast.success('Login Successful');
        dispatch({ type: 'USER_LOGIN', payload: data.data });
        window.localStorage.setItem(
          'auth',
          JSON.stringify({
            authToken: data.data.auth,
            refreshToken: data.data.refresh,
            startDate: data.data.startDate,
          })
        );
        history('/dashboard');
        onSuccess && onSuccess(data, variables, context);
      },
      onError: (err, _variables, _context) => {
        toast.error(err.message);
      },
    }
  );
};

export const useRegister = ({ onSuccess }) => {
  const history = useNavigate();

  return useMutation(
    ['register'],
    ({ email, brokerNo, nepseCode, mobileNo }) =>
      register(email, brokerNo, nepseCode, mobileNo),
    {
      onSuccess: (data, variables, context) => {
        toast.success('Registration Successful');
        history(`/verification/${data?.id}`);
        onSuccess && onSuccess(data, variables, context);
      },
      onError: (err, _variables, _context) => {
        toast.error(err.message);
      },
    }
  );
};

export const useApplication = ({ onSuccess }) => {
  const history = useNavigate();

  return useMutation(
    ['login'],
    ({ email, submissionNo }) => application(email, submissionNo),
    {
      onSuccess: (data, variables, context) => {
        toast.success('status fetched Successfully');
        history('dashboard');
        onSuccess && onSuccess(data, variables, context);
      },
      onError: (err, _variables, _context) => {
        if(err.message === "Request failed with status code 406"){
          toast.success("Success")
          history("/status/message")
        }
        // toast.error(err.message);
      },
    }
  );
};

export const useVerification = ({ onSuccess }) => {
  const history = useNavigate();

  return useMutation(['verification'], ({ id, otp }) => verification(id, otp), {
    onSuccess: (data, variables, context) => {
      toast.success('status fetched Successfully');
      history('dashboard');
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(err.message);
    },
  });
};

export const useResendVerification = ({ onSuccess }) => {
  const history = useNavigate();

  return useMutation(['verification'], ({ id }) => resendVerification(id), {
    onSuccess: (data, variables, context) => {
      toast.success('code re-send Successfully');
      history('login');
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(err.message);
    },
  });
};

export const useResetPassword = ({ onSuccess }) => {
  const history = useNavigate();

  return useMutation(
    ['register'],
    ({ oldPassword, newPassword, rePassword }) =>
      resetPassword(oldPassword, newPassword, rePassword),
    {
      onSuccess: (data, variables, context) => {
        toast.success('Registration Successful');
        history(`/login`);
        onSuccess && onSuccess(data, variables, context);
      },
      onError: (err, _variables, _context) => {
        toast.error(err.message);
      },
    }
  );
};
