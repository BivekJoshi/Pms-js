import { useFormik } from "formik";
import { watchlistDetailSchema } from "./watchListSchema";
import { useAddWatchListDetail } from "../useWatchList";

export const useWatchListDetailForm = (watchlist) => {
  const { mutate } = useAddWatchListDetail({});
  const formik = useFormik({
    initialValues: {
      id: watchlist,
      script: "NEP",
    },
    validationSchema: watchlistDetailSchema,
    onSubmit: (values) => {
      handleRegister(values);
    },
  });

  const handleRegister = (values) => {
    const { id, script } = values;
    mutate({ id, script });
  };

  return {
    handleRegister,
    formik,
  };
};
