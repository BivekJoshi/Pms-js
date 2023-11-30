import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { addChangePassword } from '../../api/password/password-api';
import { getErrorMessage } from '../../utility/getErrorMessage';

/*________________________PUT_____________________________________*/
export const useAddResetPassword = ({ onSuccess }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation(
    ['ChangePassword'],
    (formData) => addChangePassword(formData),
    {
      onSuccess: (data, variables, context) => {
        toast.success('Password has been Changed Successfully');
        onSuccess && onSuccess(data, variables, context);
        queryClient.invalidateQueries('resetPassword');
        navigate('/profile');
      },
      onError: (err, _variables, _context) => {
        toast.error(getErrorMessage(err));
      },
    }
  );
};
