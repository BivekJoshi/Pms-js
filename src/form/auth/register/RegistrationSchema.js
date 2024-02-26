import * as Yup from "yup";

export const FirstStepSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Enter valid email address").required("Required"),
  phoneNo: Yup.string()
    .min(10, "Mobile number must have at least 10 digits")
    .required("Required")
    .matches(/^[0-9]{10}$/, "Invalid mobile number format")
    .matches(/^9\d{9}$/, "Mobile number must start from 9"),
  clientType: Yup.string().required("Required"),
});

export const SecondSchema = Yup.object().shape({
  nepseExist: Yup.boolean().required("Required"),
  nepseCode: Yup.string().when("nepseExist", {
    is: true,
    then: Yup.string().required("NEPSE Code is required"),
  }),
  dematExist: Yup.boolean().required("Required"),
});

export const ThirdStepSchema = Yup.object().shape({
  dpId: Yup.number().required("Required"),
  dematNo: Yup.string().when("dpId", {
    is: (val) => val === 11400,
    then: Yup.string().required("Required"),
  }),
  accountType: Yup.string().required("Required"),
});
