import { useFormik } from "formik"
import { usePhotoUpload, usePhotoUploadDragDrop } from "./usePhotoUplaod"

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


export const usePhotoUploadDragForm = ({ file, finalImage }) => {
  // console.log(finalImage,"FinalImage");
  // const { mutate } = usePhotoUploadDragDrop();
  // console.log(file);
  const formik = useFormik({
    initialValues: {
      ppSizePhoto: "",
    },
 
    onSubmit: (values) => {
      values.ppSizePhoto = file;
      // mutate(values);
      console.log(values);
    },
  });
 
  return { formik };
};
 