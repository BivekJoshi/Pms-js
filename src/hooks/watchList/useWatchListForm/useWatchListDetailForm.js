import { useFormik } from "formik";
import { watchlistDetailSchema } from "./watchListSchema";
import { useAddWatchListDetail } from "../useWatchList";

export const useWatchListDetailForm = () => {
  // console.log(watchlist,"watchlist");
  const { mutate } = useAddWatchListDetail({});
  const formik = useFormik({
    initialValues: {
      script: "",
    },
    // validationSchema: watchlistDetailSchema,
    onSubmit: (values) => {
      
      handleRegister(values);
    },
  });

  const handleRegister = (values) => {
    const { id, script } = values;
    console.log(values, "Value hai ma cahi");
    mutate({ id, script });
  };

  return {
    handleRegister,
    formik,
  };
};
