// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useAddAddress } from "../../../../../hooks/kyc/address/useAddress";

// const AddressSchema = Yup.object().shape({
//   addresses: Yup.array().of(
//     Yup.object().shape({
//       country: Yup.string().required("Country is required"),
//       province: Yup.string().required("Province is required"),
//       district: Yup.string().required("District is required"),
//       municipality: Yup.string().required("Municipality is required"),
//       wardNo: Yup.string().required("Ward No. is required"),
//       tole: Yup.string().required("Tole No. is required"),
//       mobileNo: Yup.string().required("Mobile No. is required"),
//       email: Yup.string().required("Email is required"),
//     })
//   ),
// });

// export const useAddressForm = (data) => {
//   const { mutate } = useAddAddress({});
//   const formik = useFormik({
//     initialValues: {
//       addresses: [
//         {
//           country: data?.[0]?.country || "",
//           province: data?.country || "",
//           district: data?.country || "",
//           municipality: data?.country || "",
//           wardNo: data?.country || "",
//           tole: data?.country || "",
//           streetNo: data?.country || "",
//           mobileNo: data?.country || "",
//           telephoneNo: data?.country || "",
//           email: data?.country || "",
//           website: data?.country || "",
//           longitude: data?.country || "",
//           latitude: data?.country || "",
//           houseNo: data?.country || "",
//           have_different_permanent_address: false,
//         },
//       ],
//     },
//     validationSchema: AddressSchema,
//     onSubmit: (value) => {
//       const formData = { ...value };
//       mutate(formData, {
//         onSuccess: (data) => {
//           formik.resetForm();
//         },
//       });
//     },
//   });
//   return { formik };
// };


// useAddressForm.js

import { useAddAddress } from "../../../../../hooks/kyc/address/useAddress";
import { useFormik } from "formik";
import * as Yup from "yup";

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

export const useAddressForm = (data) => {
  const { mutate } = useAddAddress({});
  const formik = useFormik({
    initialValues: {
      addresses: data
        ? data.map((address) => ({
            ...address,
            have_different_permanent_address: true,
          }))
        : [
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
    // validationSchema: AddressSchema,
    onSubmit: (values) => {
      const formData = { ...values };
      mutate(formData, {
        onSuccess: (data) => {
          formik.resetForm();
        },
      });
    },
  });
  return { formik };
};
