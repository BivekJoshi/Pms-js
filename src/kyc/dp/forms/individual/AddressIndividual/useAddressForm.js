import { useFormik } from "formik";

export const useAddressForm = () => {
  const formik = useFormik({
    initialValues: {
      addresses: [
        {
          country: "",
          province: "",
          district: "",
          municipality: "",
          wardNo: "",
          tole: "",
          streetNo: "",
          mobileNo: "",
          telephoneNo: "",
          email: "",
          website: "",
          longitude: "",
          latitude: "",
          houseNo: "",
          have_different_permanent_address: false,
        },
      ],
    },
    onSubmit: (value) => {
      console.log(value);
    },
  });
  return { formik };
};
