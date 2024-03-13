import { useFormik } from "formik";
import { usePhotoUpload } from "./usePhotoUplaod";

export const usePhotoUploadForm = ({ file, finalImage }) => {
  // console.log(finalImage,"FinalImage");
  const { mutate } = usePhotoUpload({finalImage});
  const formik = useFormik({
    initialValues: {
      ppSizePhoto: "",
    },

    onSubmit: (values) => {
      values.ppSizePhoto = finalImage;
      values.ppSizePhoto = file;
      mutate(values);
    },
  });

  return { formik };
};
