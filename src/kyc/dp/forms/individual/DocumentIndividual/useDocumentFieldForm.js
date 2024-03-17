import { useFormik } from "formik"
import { usePhotoUploadDragDrop } from "../../../../../hooks/Kyc/DocumentUpload/usePhotoUplaod"

export const useDocumentFieldForm = () => {
  const { mutate } = usePhotoUploadDragDrop({})

  const formik = useFormik({
    initialValues: {
      citizenshipNo: "",
      docType: "",
      issuedDatebs: "",
      issuedDistrict: "",
    },
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
