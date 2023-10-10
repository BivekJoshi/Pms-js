import { useFormik } from "formik";
import { watchlistDetailSchema } from "./watchListSchema";
import { useAddWatchListDetail } from "../useWatchList";

export const useWatchListDetailForm = (watchlist) => {
    // console.log(watchlist,"watchlist");
  const { mutate } = useAddWatchListDetail({});
  const formik = useFormik({
    initialValues: {
      "id": "",
      script: "",
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
