import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { application } from '../../api/auth/application-api';

export const useApplication = ({ onSuccess }) => {
  const history = useNavigate();

  return useMutation(
    ['login'],
    ({ email, brokerNo, password }) => application(email, brokerNo, password),
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
