import { useFormik } from "formik";
import { watchlistMasterSchema } from "./watchListSchema";
import { useAddWatchListMaster } from "../useWatchList";

export const useWatchListForm = ({onClose}) => {
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
    // mutate({ watchlistName });
    mutate({ watchlistName, onSuccess: () => onClose });
  };

  return {
    handleRegister,
    formik,
  };
};
