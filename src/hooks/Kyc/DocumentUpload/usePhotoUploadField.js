import { useFormik } from 'formik';

export const usePhotoUploadField = () => {
    const { mutate } = useAddFamily({});
  
    const formik = useFormik({
      initialValues: {
        citizenship: "",

      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        const formData = {...values};
        console.log("formData", formData);
        mutate(formData, {
          onSuccess: (data) => {
            formik.resetForm();
          },
        });
      },
    });
  
    return { formik };
  };