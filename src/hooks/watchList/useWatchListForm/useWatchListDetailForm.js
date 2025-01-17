import { useFormik } from 'formik';
import { watchlistDetailSchema } from './watchListSchema';
import { useAddWatchListDetail } from '../useWatchList';

export const useWatchListDetailForm = (watchlist, setSelectedSymbol) => {
  const { mutate } = useAddWatchListDetail({});
  const formik = useFormik({
    initialValues: {
      script: [],
    },
    validationSchema: watchlistDetailSchema,
    onSubmit: (values) => {
      handleRegister(values);
    },
  });

  const handleRegister = (values) => {
    const formData = {
      id: watchlist,
      ...values,
    };

    mutate(formData, {
      onSuccess: () => {
        formik.resetForm();
        setSelectedSymbol([]);
      },
    });
  };

  return {
    formik,
  };
};
