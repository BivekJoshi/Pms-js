import { useFormik } from "formik";
import { usePhotoUpload } from "./usePhotoUplaod";

export const usePhotoUploadForm = ({ file, finalImage }) => {
  // console.log(finalImage,"FinalImage");
  const { mutate } = usePhotoUpload({});
  const formik = useFormik({
    initialValues: {
      ppSizePhoto: "",
    },

    onSubmit: (values) => {
      // console.log(values,"Captureddddd");
      values.ppSizePhoto=finalImage;
      // console.log(finalImage,"Final image machai");
      values.ppSizePhoto = file;
      mutate(values);
    },
  });

  return { formik };
};
