import { useFormik } from "formik";
import * as Yup from "yup";
import { useAddAddress } from "../../../../../hooks/kyc/address/useAddress";

const AddressSchema = Yup.object().shape({
  addresses: Yup.array().of(
    Yup.object().shape({
      country: Yup.string().required("Country is required"),
      province: Yup.string().required("Province is required"),
      district: Yup.string().required("District is required"),
      municipality: Yup.string().required("Municipality is required"),
      wardNo: Yup.string().required("Ward No. is required"),
      tole: Yup.string().required("Tole No. is required"),
      mobileNo: Yup.string().required("Mobile No. is required"),
      email: Yup.string().required("Email is required"),
    })
  ),
});

export const useAddressForm = () => {
  const { mutate } = useAddAddress({});
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
    validationSchema: AddressSchema,
    onSubmit: (value) => {
      const formData = { ...value };
      mutate(formData, {
        onSuccess: (data) => {
          formik.resetForm();
        },
      });
    },
  });
  return { formik };
};
