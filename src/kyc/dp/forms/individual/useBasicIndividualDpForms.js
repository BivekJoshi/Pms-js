import { useFormik } from "formik"
import useBasicIndividualValidationSchema from "./useBasicIndividualValidationSchema"
import { useAddBasicDetail } from "./BasicDetail/useBasicDetail"

export const useBasicIndividualDpForms = ({ individualDetails }) => {
  const { mutate } = useAddBasicDetail({})
  const formik = useFormik({
    initialValues: {
      fname: individualDetails?.fname || "",
      mname: individualDetails?.mname || "",
      lname: individualDetails?.lname || "",
      fnameNep: individualDetails?.fnameNep || "",
      mnameNep: individualDetails?.mnameNep || "",
      lnameNep: individualDetails?.lnameNep || "",
      gender: individualDetails?.gender || "",
      countryCd: individualDetails?.countryCd || "",
      pan: individualDetails?.pan || "",
      dob: individualDetails?.dob || "",
      dobBs: individualDetails?.dobBs || "",
      minorDoc: individualDetails?.minorDoc || "",
      isMinor: individualDetails?.isMinor || false,
      isDifferentlyAbled: individualDetails?.isDifferentlyAbled || false,
      isNrn: individualDetails?.isNrn || false,
    },
    validationSchema: useBasicIndividualValidationSchema,
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
