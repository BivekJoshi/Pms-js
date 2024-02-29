import { useFormik } from "formik";
import { usePhotoUpload } from "./usePhotoUplaod";

export const usePhotoUploadForm = ({ file }) => {
  const { mutate } = usePhotoUpload({});
  const formik = useFormik({
    initialValues: {
      ppSizePhoto: "",
    },

    onSubmit: (values) => {
      values.ppSizePhoto = file;
      mutate(values);
    },
  });

  return { formik };
};
