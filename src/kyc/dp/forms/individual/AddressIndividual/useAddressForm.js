import { useAddAddress } from "../../../../../hooks/kyc/address/useAddress"
import { useFormik } from "formik"
import * as Yup from "yup"

const AddressSchema = Yup.object().shape({
  addresses: Yup.array().of(
    Yup.object().shape({
      country: Yup.string().required("Country is required"),
      province: Yup.string().required("Province is required"),
      district: Yup.string().required("District is required"),
      municipality: Yup.string().required("Municipality is required"),
      wordNo: Yup.string().required("Ward No. is required"),
      tole: Yup.string().required("Tole No. is required"),
      mobileNo: Yup.string().required("Mobile No. is required"),
      email: Yup.string().required("Email is required"),
    })
  ),
})

export const useAddressForm = (data) => {
  const { mutate } = useAddAddress({})
  const formik = useFormik({
    initialValues: {
      addresses:
        data?.length > 0
          ? data.map((address) => ({
              ...address,
              have_different_permanent_address: true,
              addressType: address.have_different_permanent_address ?? "P",
            }))
          : [
              {
                country: "",
                province: "",
                district: "",
                municipality: "",
                wordNo: "",
                tole: "",
                streetNo: "",
                mobileNo: "",
                telephoneNo: "",
                email: "",
                website: "",
                longitude: "",
                latitude: "",
                houseNo: "",
                addressType: "P",
                have_different_permanent_address: false,
              },
            ],
    },
    // validationSchema: AddressSchema,
    onSubmit: (values) => {
      const formData = { ...values }
      mutate(formData, {
        onSuccess: (data) => {
          formik.resetForm()
        },
      })
    },
  })
  return { formik }
}
