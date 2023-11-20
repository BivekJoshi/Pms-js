import { useMutation } from 'react-query';
import toast from 'react-hot-toast';
import { changePassword } from '../../api/auth/change-password-api';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../utility/logout';


export const useChangePassword = ({ onSuccess }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return useMutation(
    ['changePassword'],
    ({ oldPassword,newPassword,rePassword}) =>
      changePassword(oldPassword,newPassword,rePassword),
    {
      onSuccess: (data, variables, context) => {
        toast.success('Password Changed Sucessfull');
        navigate(`/login`);
        dispatch({ type: "LOGOUT" });
        logout();
        onSuccess && onSuccess(data, variables, context);
      },
      onError: (err, _variables, _context) => {
        toast.error(err.message);
      },
    }
  );
};
