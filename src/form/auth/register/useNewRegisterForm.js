import { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
  dematRegisterSchema,
  pmsRegisterSchema,
  tmsRegisterSchema,
} from "./registerValidationSchema";
import { useRegister } from "../../../hooks/auth/useAuth";

export const useNewRegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [schema, setSchema] = useState();
  const { mutate } = useRegister({});
  const formik = useFormik({
    initialValues: {
      accountType: "",
      clientType: "",
      name: "",
      email: "",
      mobileNumber: "",
      branch: "",
      boidNumber: "",
      dpId: "",
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
      switch (formik.values.accountType) {
        case "TMS":
          setSchema(tmsRegisterSchema);
          break;
        case "PMS":
          setSchema(pmsRegisterSchema);
          break;
        default:
          setSchema(dematRegisterSchema);
          break;
      }
    };

    determineFields();
  }, [formik.values.accountType]);

  return {
    handleRegister,
    formik,
    loading,
    handleMouseDownPassword,
  };
};
