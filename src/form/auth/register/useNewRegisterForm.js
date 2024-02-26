import { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
  dematOnly,
  dematRegisterSchema,
  tmsOnly,
  tmsanddematRegisterSchema,
} from "./registerValidationSchema";
import { useRegister } from "../../../hooks/auth/useAuth";
import { FirstStepSchema } from "./RegistrationSchema";

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
      accountType: "",
      email: "",
      phoneNo: "",
      branchId: "",
      nepseCode: "",
      dpId: "",
      dematNo: "",
    },
    validationSchema: FirstStepSchema,
    onSubmit: (values) => {
      setLoading(true);
      handleRegister(values);
    },
  });

  const handleStepOne = (values) => {
    schema.validateSync(values);
  };

  const handleRegister = (values) => {
    mutate(values, { onSettled: () => setLoading(false) });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
    handleStepOne,
    formik,
    loading,
    handleMouseDownPassword,
  };
};
