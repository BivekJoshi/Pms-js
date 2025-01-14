import { useFormik } from "formik"
import * as Yup from "yup"
import { onlyNum, onlyTextRegex } from "../../static/RegExp"
import { useAddKycBank } from "../../../../../hooks/Kyc/individual/kycBank/useKycBank"
import { useDispatch } from "react-redux"
import { SET_FORM } from "../../../../../redux/types/types"

const bankSchema = Yup.object().shape({
  bankName: Yup.string().required("Bank Name is required"),
  // .matches(onlyTextRegex, "Please enter valid middle name"),
  accountNumber: Yup.string()
    .required("Account Number is required")
    .max(30, "Bank Number must be at most 30 number")
    .matches(onlyNum, "Invalid bank number"),
  accountType: Yup.string().required("Account Type is required"),
  branchAddress: Yup.string().required("Branch Address is required"),
})

export const useKycBankForm = () => {
  const { mutate } = useAddKycBank({})
  const formik = useFormik({
    initialValues: {
      bankName: "",
      accountNumber: "",
      accountType: "",
      branchAddress: "",
      isPrimary: false,
      // userId: 159,
    },
    validationSchema: bankSchema,
    onSubmit: (values) => {
      const formData = { ...values }
      mutate(formData, {
        onSuccess: () => {
          formik.resetForm()
        },
      })
    },
  })

  return { formik }
}
