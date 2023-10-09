import { useFormik } from "formik";
import { watchlistMasterSchema } from "../watchListSchema";
import { useAddWatchListMaster } from "../../useWatchList";

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
