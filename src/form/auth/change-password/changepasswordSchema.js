import * as Yup from "yup";

const changepasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Required"),
  newPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("rePassword")], "Passwords must match"),
  rePassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("newPassword")], "Passwords must match"),
});

export { changepasswordSchema };
