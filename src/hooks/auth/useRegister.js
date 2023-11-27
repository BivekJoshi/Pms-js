import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { register } from '../../api/auth/register-api';
import { getErrorMessage } from '../../utility/getErrorMessage';

export const useRegister = ({ onSuccess }) => {
  const history = useNavigate();

  return useMutation(
    ['register'],
    ({ email, brokerNo, nepseCode, mobileNo }) =>
      register(email, brokerNo, nepseCode, mobileNo),
    {
      onSuccess: (data, variables, context) => {
        toast.success('Registration Successful');
        history('/login');
        onSuccess && onSuccess(data, variables, context);
      },
      onError: (err, _variables, _context) => {
        toast.error(getErrorMessage(err));
      },
    }
  );
};
