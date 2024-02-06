import * as Yup from "yup";

const feedbackSchema = Yup.object().shape({
    type: Yup.string().required("Problem Type is Required"),
    message: Yup.string().required("Description is Required")
});

export { feedbackSchema };
