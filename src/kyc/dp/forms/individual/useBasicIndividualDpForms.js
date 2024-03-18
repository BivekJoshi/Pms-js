import { useFormik } from "formik"
import useBasicIndividualValidationSchema from "./useBasicIndividualValidationSchema"
import { useAddBasicDetail } from "./BasicDetail/useBasicDetail"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { SET_FORM } from "../../../../redux/types/types"
import { nextFormPath } from "../../../../utility/userHelper"

export const useBasicIndividualDpForms = ({ individualDetails }) => {
  const { mutate } = useAddBasicDetail({})
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      firstName: individualDetails?.firstName || "",
      middleName: individualDetails?.middleName || "",
      lastName: individualDetails?.lastName || "",
      fNameNep: individualDetails?.fNameNep || "",
      mNameNep: individualDetails?.mNameNep || "",
      lNameNep: individualDetails?.lNameNep || "",
      gender: individualDetails?.gender || "",
      countryCd: individualDetails?.countryCd || "",
      panNo: individualDetails?.panNo || "",
      dob: individualDetails?.dob || "",
      dobBs: individualDetails?.dobBs || "",
      minorDoc: individualDetails?.minorDoc || "",
      minor: individualDetails?.minor || false,
      isDifferentlyAbled: individualDetails?.isDifferentlyAbled || false,
      nrn: individualDetails?.nrn || false,
    },
    validationSchema: useBasicIndividualValidationSchema,
    onSubmit: (values) => {
      if (formik.dirty) {
        const formData = { ...values }
        mutate(formData, {
          onSuccess: (data) => {
            // formik.resetForm()
          },
        })
      }
      dispatch({ type: SET_FORM, payload: 2 })
      navigate(nextFormPath(2))
    },
  })

  return { formik }
}
