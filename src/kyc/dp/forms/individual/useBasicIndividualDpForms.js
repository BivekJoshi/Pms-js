import { useState } from "react";
import { useFormik } from "formik";

export const useBasicIndividualDpForms = () => {
  //   const [loading, setLoading] = useState(false);
  //   const [schema, setSchema] = useState();

  const formik = useFormik({
    initialValues: {
      fieldType: "isMinor",
      firstName: "",
      middleName: "",
      lastName: "",
      clientNameNepali: "",
      gender: "",
      dob: "",
      isNrn: false,
    },
    onSubmit: (values) => {
      //   setLoading(true);
      handleRegister(values);
    },
  });

  const handleRegister = (values) => {
    console.log(values, "values");
    // mutate({ values }, { onSettled: () => setLoading(false) });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return {
    handleRegister,
    formik,
    // loading,
    handleMouseDownPassword,
  };
};
