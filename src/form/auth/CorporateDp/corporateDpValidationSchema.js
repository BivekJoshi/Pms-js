import * as Yup from "yup";

const corporateDpValidationSchema = Yup.object({
  corporateAccountType: Yup.string()
    .required("Please select account type"),
  companyName: Yup.string()
    .required("Please enter company name"),
  companyCeoName: Yup.string()
    .required("Please enter company CEO name"),
  companySecretaryName: Yup.string()
    .required("Please enter secretary name"),
  companyType: Yup.string()
    .required("Please select company type"),
  contactNumber: Yup.string()
    .matches(/^(9\d{9}(,9\d{9})*)?$/, "Enter valid phone number")
    .required("Please enter company contact number"),
  countryReg: Yup.string()
    .required("Please select country of registration"),
  incorporationDate: Yup.mixed().required("Please select incorporation date"),

  registrationNo: Yup.string()
    .required("Please enter company registration number"),
  registrationOffice: Yup.string()
    .required("Please enter registration office"),
  registrationDate: Yup.mixed().required("Please select registration date"),
  panNo: Yup.string()
    .matches(/^\d{9}$/, "PAN number must be a 9-digit number")
    .required("Please enter company PAN number"),
  businessType: Yup.string()
    .required("Please select business type"),
  workArea: Yup.string()
    .required("Please enter work area"),
  mainCompanyName: Yup.string().when("isSubsidiary", {
    is: true,
    then: Yup.string()
      .required("Please enter main company name"),
    otherwise: Yup.string().nullable(),
  }),
  listingDate: Yup.mixed().when("isListed", {
    is: true,
    then: Yup.mixed()
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
