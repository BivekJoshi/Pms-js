import { useFormik } from "formik"
import { usePhotoUpload } from "./usePhotoUplaod"

export const usePhotoUploadForm = ({ file, finalImage }) => {
  const { mutate } = usePhotoUpload({})
  const formik = useFormik({
    initialValues: {
      ppSizePhoto: "",
    },
    onSubmit: () => {
      const formData = {
        name: "ppSizePhoto",
        img: finalImage,
      }
      mutate(formData)
    },
  })

  return { formik }
}
