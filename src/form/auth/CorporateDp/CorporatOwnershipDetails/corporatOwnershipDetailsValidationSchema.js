import * as Yup from "yup";

const corporatOwnershipDetailsValidationSchema = Yup.object().shape({
  designation: Yup.string().required("Please select designation"),
  firstName: Yup.string().required("Please enter first name"),
  lastName: Yup.string().required("Please enter last name"),
  fatherName: Yup.string().required("Please enter father's name"),
  grandFather: Yup.string().required("Please enter grandfather's name"),
  spouseName: Yup.string(),
  permanentAddress: Yup.string().required("Please enter permanent address"),
  currentAddress: Yup.string().required("Please enter current address"),
  // telephoneNo: Yup.string()
  //   .matches(/^[0-9]+$/, "Must be a valid telephone number")
  //   .required("Please enter telephone number"),
  mobileNo: Yup.string()
    .matches(/^(9\d{9}(,9\d{9})*)?$/, "Must be a valid mobile number")
    .required("Please enter mobile number"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter email address"),
  // panNo: Yup.string()
  //   .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN number")
  //   .required("Please enter PAN number"),
});

export default corporatOwnershipDetailsValidationSchema;
