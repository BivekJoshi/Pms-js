import * as Yup from "yup";

const corporateDpValidationSchema = Yup.object({
  corporateAccountType: Yup.string()
    .typeError("Please select account type")
    .required("Please select account type"),
  companyName: Yup.string()
    .typeError("Please enter company name")
    .required("Please enter company name"),
  companyCeoName: Yup.string()
    .typeError("Please enter company CEO name")
    .required("Please enter company CEO name"),
  companySecretaryName: Yup.string()
    .typeError("Please enter secretary name")
    .required("Please enter secretary name"),
  companyType: Yup.string()
    .typeError("Please select company type")
    .required("Please select company type"),
  contactNumber: Yup.string()
    .typeError("Please enter company contact number")
    .matches(/^(9\d{9}(,9\d{9})*)?$/, "Enter valid phone number")
    .required("Please enter company contact number"),
  countryReg: Yup.string()
    .typeError("Please select country of registration")
    .required("Please select country of registration"),
  incorporationDate: Yup.mixed().required("Please select incorporation date"),

  registrationNo: Yup.string()
    .typeError("Please enter company registration number")
    .required("Please enter company registration number"),
  registrationOffice: Yup.string()
    .typeError("Please enter registration office")
    .required("Please enter registration office"),
  registrationDate: Yup.mixed().required("Please select registration date"),
  panNo: Yup.number()
    .typeError("PAN number must be a number")
    .required("Please enter company PAN number"),
  businessType: Yup.string()
    .typeError("Please select business type")
    .required("Please select business type"),
  workArea: Yup.string()
    .typeError("Please enter work area")
    .required("Please enter work area"),
  mainCompanyName: Yup.string().when("isSubsidiary", {
    is: true,
    then: Yup.string()
      .typeError("Please enter main company name")
      .required("Please enter main company name"),
    otherwise: Yup.string().nullable(),
  }),
  listingDate: Yup.mixed().when("isListed", {
    is: true,
    then: Yup.mixed()
      .typeError("Please select listing date")
      .required("Please select listing date"),
    otherwise: Yup.mixed().nullable(),
  }),
  vatRegistration: Yup.string()
    .min(0)
    .nullable(true)
    .matches(
      /^(?:[0-9\-/]+|null|NaN)?$/,
      "VAT registration number must be a number"
    )
    .notRequired(),
  nrbRegistration: Yup.string()
    .min(0)
    .nullable(true)
    .matches(/^(?:[0-9\-/]+|null|NaN)?$/, "PAN number must be a number")
    .notRequired(),
}).required();

export { corporateDpValidationSchema };
