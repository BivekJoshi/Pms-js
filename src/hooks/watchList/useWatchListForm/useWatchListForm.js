import { useFormik } from 'formik';
import { watchlistMasterSchema } from './watchListSchema';
import { useAddWatchListMaster, useUpdateWatchlistName } from '../useWatchList';

export const useWatchListForm = () => {
  const { mutate } = useAddWatchListMaster({});
  const formik = useFormik({
    initialValues: {
      watchlistName: '',
    },
    validationSchema: watchlistMasterSchema,
    onSubmit: (values) => {
      handleRegister(values);
    },
  });

  const handleRegister = (values) => {
    const { watchlistName } = values;
    mutate({ watchlistName });
  };

  return {
    handleRegister,
    formik,
  };
};
export const useUpdateWatchListname = (name, id) => {
  const { mutate } = useUpdateWatchlistName({});
  const formik = useFormik({
    initialValues: {
      watchlistName: name,
      id: id,
    },
    validationSchema: watchlistMasterSchema,
    onSubmit: (values) => {
      const formValues = { ...values, id: id };
      handleUpdate(formValues);
    },
  });
  const handleUpdate = (values) => {
    mutate({ values });
  };
  return {
    handleUpdate,
    formik,
  };
};
