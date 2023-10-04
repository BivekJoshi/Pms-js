import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { login, register, application } from '../../api/auth/auth-api';

export const useLogin = ({ onSuccess }) => {
  const history = useNavigate();

  return useMutation(
    ['login'],
    ({ email, brokerNo, password }) => login(email, brokerNo, password),
    {
      onSuccess: (data, variables, context) => {
        toast.success('Login Successful');
        history('dashboard');
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
        history.push('/login');
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
        toast.error(err.message);
      },
    }
  );
};
