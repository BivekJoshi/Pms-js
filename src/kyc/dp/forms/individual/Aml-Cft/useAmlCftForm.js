import { useFormik } from "formik";

export const useAmlCftForm = () => {
  const formik = useFormik({
    initialValues: {
      poliAffiHighRnkRln: false,
      poliAffiHighRnkRlnName: [
        {
          name: "",
          relation: "",
        },
      ],
      pastCrimActi: false,
      pastCrimiActiDetail: [
        {
          name: "",
        },
      ],
      beneficialOwner: false,
      beneficialOwnerName: [
        {
            age: "",
            citizenShipNo: "",
            correspondenceAddress: "",
            country: "",
            district: "",
            email: "",
            faxNo: "",
            mobileNo: "",
            municipality: "",
            name: "",
            panNo: "",
            placeOfIssuer: "",
            province: "",
            relation: "",
            telephoneNo: "",
        },
      ],
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
