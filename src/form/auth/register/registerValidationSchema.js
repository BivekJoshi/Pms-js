import * as yup from "yup";

const dematRegisterSchema = yup.object().shape({
  name: yup.string().required("Required"),
  branchId: yup.string().required("Required"),
  email: yup
    .string()
    .email("Enter valid email address")
    .required("Email is required"),
  phoneNo: yup
    .string()
    .min(10, "Mobile number must have at least 10 digits")
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Invalid mobile number format")
    .matches(/^9\d{9}$/, "Mobile number must start from 9"),
});

const tmsanddematRegisterSchema = yup.object().shape({
  name: yup.string().required("Required"),
  branchId: yup.string().required("Required"),
  dematNo: yup.string().required("Required"),
  nepseCode: yup.string().required("Required"),
  clientType: yup.string().required("Required"),
  email: yup
    .string()
    .email("Enter valid email address")
    .required("Email is required"),
  phoneNo: yup
    .string()
    .min(10, "Mobile number must have at least 10 digits")
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Invalid mobile number format")
    .matches(/^9\d{9}$/, "Mobile number must start from 9"),
});

const tmsOnly = yup.object().shape({
  name: yup.string().required("Required"),
  nepseCode: yup.string().required("Required"),
  branchId: yup.string().required("Required"),
  email: yup
    .string()
    .email("Enter valid email address")
    .required("Email is required"),
  clientType: yup.string().required("Required"),
  phoneNo: yup
    .string()
    .min(10, "Mobile number must have at least 10 digits")
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Invalid mobile number format")
    .matches(/^9\d{9}$/, "Mobile number must start from 9"),
});

const dematOnly = yup.object().shape({
  name: yup.string().required("Required"),
  dematNo: yup.string().required("Required"),
  branchId: yup.string().required("Required"),
  email: yup
    .string()
    .email("Enter valid email address")
    .required("Email is required"),
  clientType: yup.string().required("Required"),
  phoneNo: yup
    .string()
    .min(10, "Mobile number must have at least 10 digits")
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Invalid mobile number format")
    .matches(/^9\d{9}$/, "Mobile number must start from 9"),
});

export { dematRegisterSchema, tmsanddematRegisterSchema, tmsOnly, dematOnly };
