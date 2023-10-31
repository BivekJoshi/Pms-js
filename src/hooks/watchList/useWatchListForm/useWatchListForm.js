import { useFormik } from "formik";
import { watchlistMasterSchema } from "./watchListSchema";
import { useAddWatchListMaster, useUpdateWatchlistName } from "../useWatchList";

export const useWatchListForm = () => {
  const { mutate } = useAddWatchListMaster({});
  const formik = useFormik({
    initialValues: {
      watchlistName: "",
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
export const useUpdateWatchListname = () => {
  const { mutate } = useUpdateWatchlistName({});
  const formik = useFormik({
    validationSchema: watchlistMasterSchema,
    onSubmit: (values) => {
      handleUpdate(values);
    },
  });
  const handleUpdate = (values) => {
    console.log(values);
    mutate({ values });
  };
  return {
    handleUpdate,
    formik,
  };
};
