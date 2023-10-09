import { useFormik } from "formik";
import { useAddWatchListDetail } from "../../useWatchList";
import { watchlistDetailSchema } from "../watchListSchema";

export const useWatchListDetailForm = () => {
  const { mutate } = useAddWatchListDetail({});
  const formik = useFormik({
    initialValues: {
      script: "",
    },
    validationSchema: watchlistDetailSchema,
    onSubmit: (values) => {
      handleRegister(values);
    },
  });

  const handleRegister = (values) => {
    const { script } = values;
    mutate({ script });
  };

  return {
    handleRegister,
    formik,
  };
};
