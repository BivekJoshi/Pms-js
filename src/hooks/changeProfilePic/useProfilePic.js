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
      queryClient.invalidateQueries('userMetaData');
    },
    onError: (err, _variables, _context) => {
      toast.error(getErrorMessage(err));
    },
  });
};
export const useProfilePic = ({ selectedProfile }) => {
  const { mutate } = useAddImage({});

  const handleAddProfileImage = (value) => {
    mutate(value);
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
