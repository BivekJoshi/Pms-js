import React from 'react';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';
import { getErrorMessage } from '../../utility/getErrorMessage';
import { addProfilePic } from '../../api/profile/profile-api';
import { useFormik } from 'formik';

const useAddImage = ({ onSuccess }) => {
  const queryClient = useQueryClient();

  return useMutation(['addProfile'], (image) => addProfilePic(image), {
    onSuccess: (data, variables, context) => {
      onSuccess && onSuccess(data, variables, context);
      queryClient.invalidateQueries('getUserInfo');
      toast.success('Profile Picture Successfully Changed');
    },
    onError: (err, _variables, _context) => {
      toast.error(getErrorMessage(err));
    },
  });
};
export const useProfilePic = ({ selectedProfile, handleCloseModal }) => {
  const { mutate } = useAddImage({});

  const handleAddProfileImage = (value) => {
    mutate(value, {
      onSuccess: () => {
        handleCloseModal();
      },
    });
  };
  const formik = useFormik({
    initialValues: {
      multipartFile: selectedProfile,
    },
    onSubmit: () => {
      handleAddProfileImage(selectedProfile);
    },
  });

  return {
    formik,
  };
};

export default useProfilePic;
