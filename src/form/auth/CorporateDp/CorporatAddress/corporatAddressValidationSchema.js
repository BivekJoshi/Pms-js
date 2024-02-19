import * as Yup from "yup";

// Define Yup schema for validation
const corporatAddressValidationSchema = Yup.object().shape({
  country: Yup.string().required("Please select country"),
  province: Yup.string().required("Please select province"),
  district: Yup.string().required("Please select district"),
  municipality: Yup.string().required("Please select municipality"),
  wordNo: Yup.string().required("Please enter ward number"),
  tole: Yup.string().required("Please enter tole"),
  streetNo: Yup.string().required("Please enter house number"),
  mobileNo: Yup.string()
    .matches(/^(9\d{9}(,9\d{9})*)?$/, "Enter valid phone number")
    .required("Please enter mobile number"),
  telephoneNo: Yup.string()
    .matches(/^[0-9+-]+$/, "Telephone number must contain number")
    .required("Please enter telephone number"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter email address"),
  website: Yup.string(),
  latitude: Yup.string().required("Please choose location"),
  longitude: Yup.string().required("Please choose location"),
});

export default corporatAddressValidationSchema;
