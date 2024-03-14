import { useFormik } from "formik"
import { usePhotoUpload, usePhotoUploadDragDrop } from "./usePhotoUplaod"

export const usePhotoUploadForm = ({ finalImage }) => {
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

export const usePhotoUploadDragForm = ({ file }) => {
  const { mutate } = usePhotoUploadDragDrop({})

  const handleAddProfileImage = (value) => {
    mutate(value)
  }
  const formik = useFormik({
    initialValues: {
      ppSizePhoto: file,
    },
    onSubmit: () => {
      handleAddProfileImage(file)
    },
  })

  return {
    formik,
  }
}
