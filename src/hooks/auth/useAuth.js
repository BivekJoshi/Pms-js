import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  login,
  register,
  application,
  verification,
  changePassword,
  resetPassword,
  resendVerification,
} from '../../api/auth/auth-api';
import { useDispatch } from 'react-redux';

export const useLogin = ({ onSuccess }) => {
  const history = useNavigate();
  const dispatch = useDispatch();
  return useMutation(
    ['login'],
    ({ email, brokerNo, password }) => login(email, brokerNo, password),
    {
      onSuccess: (data, variables, context) => {
        console.log('🚀 ~ file: useAuth.js:15 ~ useLogin ~ data:', data);
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
        toast.success('Login Successful');

        // if (data?.data?.user?.tempPasswordStatus) {
        //   toast.loading('Please change password to continue');
        //   history('/reset/password');
        // } else {
        //   history('/dashboard');
        //   toast.success('Login Successful');
        // }
        onSuccess && onSuccess(data, variables, context);
      },
      onError: (err, _variables, _context) => {
        toast.error(err.message);
        console.log(err)
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
        if (err.message === 'Request failed with status code 406') {
          toast.success('Success');
          history('/status/message');
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
    ['resetPassword'],
    ({brokerNo, email, nepseCode}) => resetPassword(brokerNo, email, nepseCode),
    {
      onSuccess: (data, variables, context) => {
        toast.success('Code sent to your email successfully');
        history(`/login`);
        onSuccess && onSuccess(data, variables, context);
      },
      onError: (err, _variables, _context) => {
        toast.error(err.message);
      },
    }
  );
};

export const useChangePassword = ({ id, onSuccess }) => {
  const history = useNavigate();

  return useMutation(
    ['changePassword'],
    ({newPassword, confirmPassword}) => changePassword(id, newPassword, confirmPassword),
    {
      onSuccess: (data, variables, context) => {
        toast.success('Password changed successfully');
        history(`/login`);
        onSuccess && onSuccess(data, variables, context);
      },
      onError: (err, _variables, _context) => {
        toast.error(err.message);
      },
    }
  );
};