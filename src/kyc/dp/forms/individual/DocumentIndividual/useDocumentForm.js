import { useFormik } from "formik";
import { usePhotoUpload } from '../../../../../hooks/Kyc/DocumentUpload/usePhotoUplaod';

export const useDocumentForm = () => {
  const { mutate } = usePhotoUpload({});

  const formik = useFormik({
    initialValues: {
      docType: "",
    },
    onSubmit: (values) => {
      const formData = { ...values };
      mutate(formData, {
        onSuccess: (data) => {
          formik.resetForm();
        },
      });
    },
  });

  return { formik };
};
