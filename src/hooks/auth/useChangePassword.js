import { useMutation } from 'react-query';
import toast from 'react-hot-toast';
import { changePassword } from '../../api/auth/change-password-api';


export const useChangePassword = ({ onSuccess }) => {
  return useMutation(
    ['changePassword'],
    ({ oldPassword,newPassword,rePassword}) =>
      changePassword(oldPassword,newPassword,rePassword),
    {
      onSuccess: (data, variables, context) => {
        toast.success('Password Changed Sucessfull');
        onSuccess && onSuccess(data, variables, context);
      },
      onError: (err, _variables, _context) => {
        toast.error(err.message);
      },
    }
  );
};
