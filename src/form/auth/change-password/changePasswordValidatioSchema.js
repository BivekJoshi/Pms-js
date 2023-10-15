import * as Yup from "yup";

const changePasswordValidatioSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Old Password is required."),
  newPassword: Yup.string()
    .required("New Password is required.")
    .min(8, "New Password must be at least 8 characters long")
    .matches(
      /^(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter."
    )
    .matches(/^(?=.*\d)/, "Password must contain at least one digit (number).")
    .matches(
      /^(?=.*[@#$%^&+=])/,
      "Password must contain at least one special character (@, #, $, %, ^, &, +, =,!)."
    )
    .test(
      "passwords-match",
      "New password must not be the same as old password.",
      function (value) {
        return this.parent.oldPassword !== value;
      }
    ),
  rePassword: Yup.string()
    .required("Re-Type New Password is required.")
    .oneOf([Yup.ref("rePassword"), null], "Passwords from above password must match")
    .matches(
      /^(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter."
    )
    .matches(/^(?=.*\d)/, "Password must contain at least one digit (number).")
    .matches(
      /^(?=.*[@#$%^&+=])/,
      "Password must contain at least one special character (@, #, $, %, ^, &, +, =,!)."
    )
    .test(
      "passwords-match",
      "password must be the same as new password.",
      function (value) {
        return this.parent.newPassword === value;
      }
    ),
});

export { changePasswordValidatioSchema };
