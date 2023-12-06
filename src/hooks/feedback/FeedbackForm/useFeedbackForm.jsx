import { useFormik } from "formik";
import { useAddFeedback } from "../useFeedback";
import { feedbackSchema } from "./feedbackSchema";
// import { watchlistMasterSchema } from "../../watchList/useWatchListForm/watchListSchema";

export const useFeedbackForm = ({ onClose }) => {
    const { mutate } = useAddFeedback({});
    const formik = useFormik({
      initialValues: {
        problemType: "",
        description:"",
      },
      validationSchema: feedbackSchema,
      onSubmit: (values) => {
        console.log(values);
        const formData = { ...values };
        mutate(formData, {
          onSuccess: (data) => {
            onClose();
            formik.resetForm();
          },
        })
      }
    });
    return { formik };
  };
  