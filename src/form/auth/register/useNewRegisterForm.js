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
      dematExist: false,
      nepseExist: false,
      clientType: "",
      name: "",
      email: "",
      phoneNo: "",
      branchId: "",
      nepseCode: "",
      dpId: "",
      dematNo: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      setLoading(true);
      handleRegister(values);
    },
  });

  const handleRegister = (values) => {
    mutate(values, { onSettled: () => setLoading(false) });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  console.log("🚀 ~ useNewRegisterForm ~ formik:", formik);
  useEffect(() => {
    const determineFields = () => {
      if (formik.values.nepseExist && formik.values.dematExist) {
        setSchema(tmsanddematRegisterSchema);
      } else if (formik.values.nepseExist) {
        setSchema(tmsOnly);
      } else if (formik.values.dematExist) {
        setSchema(dematOnly);
      } else {
        setSchema(dematRegisterSchema);
      }
    };

    determineFields();
  }, [formik.values.nepseExist, formik.values.dematExist]);

  return {
    handleRegister,
    formik,
    loading,
    handleMouseDownPassword,
  };
};
