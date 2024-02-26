import { useEffect, useState } from "react";
import { useFormik } from "formik";

import { useRegister } from "../../../hooks/auth/useAuth";
import {
  FirstStepSchema,
  SecondSchema,
  ThirdStepSchema,
} from "./RegistrationSchema";

export const useNewRegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [schema, setSchema] = useState();
  const [currentStep, setCurrentStep] = useState(1);

  const { mutate } = useRegister({});
  const formik = useFormik({
    initialValues: {
      dematExist: "",
      nepseExist: "",
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
    validationSchema: schema,
    onSubmit: (values) => {
      setLoading(true);
      handleRegister(values);
    },
  });

  const handleStep = (values) => {
    const isValid = schema.isValidSync(values);
    if (isValid) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handleRegister = (values) => {
    mutate(values, { onSettled: () => setLoading(false) });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const determineFields = () => {
      const schemasArray = [FirstStepSchema, SecondSchema, ThirdStepSchema];
      setSchema(schemasArray[currentStep - 1]);
    };

    determineFields();
  }, [currentStep]);

  return {
    handleRegister,
    handleStep,
    formik,
    loading,
    currentStep,
    handleMouseDownPassword,
  };
};
