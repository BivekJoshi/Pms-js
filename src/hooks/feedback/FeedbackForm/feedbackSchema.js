import * as Yup from "yup";

const feedbackSchema = Yup.object().shape({
    problemType: Yup.string().required("Problem Type is Required"),
    description: Yup.string().required("Description is Required")
});

export { feedbackSchema };
