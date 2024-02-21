import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter valid email address")
    .required("Email is required"),
  // brokerNo: Yup.string().required("Broker name is required"),
  password: Yup.string().required("Password is required"),
});

export { loginSchema };
