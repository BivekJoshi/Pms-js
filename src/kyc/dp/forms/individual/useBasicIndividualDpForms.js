import { useFormik } from "formik"
import useBasicIndividualValidationSchema from "./useBasicIndividualValidationSchema"
import { useAddBasicDetail } from "./BasicDetail/useBasicDetail"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { SET_FORM, SET_MINOR } from "../../../../redux/types/types"
import { nextFormPath } from "../../../../utility/userHelper"

export const useBasicIndividualDpForms = ({ data }) => {
  const { mutate } = useAddBasicDetail({})
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      fname: data?.fname || "",
      mname: data?.mname || "",
      lname: data?.lname || "",
      fnameNep: data?.fnameNep || "",
      mnameNep: data?.mnameNep || "",
      lnameNep: data?.lnameNep || "",
      gender: data?.gender || "",
      countryCd: data?.countryCd || "",
      pan: data?.pan || "",
      dob: data?.dob || "",
      dobBs: data?.dobBs || "",
      isMinor: data?.isMinor || false,
      isGuardianSignature: data?.isGuardianSignature || "",
      isSignature: data?.isSignature || "",
      isDifferentlyAbled: data?.isDifferentlyAbled || false,
      isBiometric:  false,
      isNrn: data?.isNrn || false,
    },
    validationSchema: useBasicIndividualValidationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (formik.dirty) {
        const formData = { ...values }
        mutate(formData, {
          onSuccess: (data) => {
            // formik.resetForm()
          },
        })
      }
      if(formik.isValid){

        dispatch({ type: SET_FORM, payload: 2 })
        
        navigate(nextFormPath(2))
      }
    },
  })

  return { formik }
}
