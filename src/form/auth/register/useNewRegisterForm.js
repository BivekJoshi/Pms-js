import { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
  dematOnly,
  dematRegisterSchema,
  tmsOnly,
  tmsanddematRegisterSchema,
} from "./registerValidationSchema";
import { useRegister } from "../../../hooks/auth/useAuth";

export const useNewRegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [schema, setSchema] = useState();
  const { mutate } = useRegister({});
  const formik = useFormik({
    initialValues: {
      dematNoExist: false,
      tmsNoExist: false,
      clientType: "",
      name: "",
      email: "",
      mobileNumber: "",
      branch: "",
      tmsNo: "",
      dematNumber: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      setLoading(true);
      handleRegister(values);
    },
  });

  const handleRegister = (values) => {
    mutate({ values }, { onSettled: () => setLoading(false) });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const determineFields = () => {
      if (formik.values.tmsNoExist && formik.values.dematNoExist) {
        setSchema(tmsanddematRegisterSchema);
      } else if (formik.values.tmsNoExist) {
        setSchema(tmsOnly);
      } else if (formik.values.dematNoExist) {
        setSchema(dematOnly);
      } else {
        setSchema(dematRegisterSchema);
      }
    };

    determineFields();
  }, [formik.values.tmsNoExist, formik.values.dematNoExist]);
  console.log("🚀 ~ useNewRegisterForm ~ formik:", formik);

  return {
    handleRegister,
    formik,
    loading,
    handleMouseDownPassword,
  };
};
