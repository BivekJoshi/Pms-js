import * as Yup from "yup";

const corporatOwnershipDetailsValidationSchema = Yup.object().shape({
  details: Yup.array().of(
    Yup.object().shape({
      designation: Yup.string()
        .typeError("Please select designation")
        .required("Please select designation"),
      firstName: Yup.string()
        .typeError("Please enter first name")
        .required("Please enter first name"),
      lastName: Yup.string()
        .typeError("Please enter last name")
        .required("Please enter last name"),
      fatherName: Yup.string()
        .typeError("Please enter father's name")
        .required("Please enter father's name"),
      grandFather: Yup.string()
        .typeError("Please enter grandfather's name")
        .required("Please enter grandfather's name"),
      permanentAddress: Yup.string()
        .typeError("Please enter permanent address")
        .required("Please enter permanent address"),
      currentAddress: Yup.string()
        .typeError("Please enter current address")
        .required("Please enter current address"),
      mobileNo: Yup.string()
        .typeError("Please enter mobile number")
        .matches(/^(9\d{9}(,9\d{9})*)?$/, "Enter valid mobile number")
        .required("Please enter mobile number"),
      email: Yup.string()
        .email("Please enter valid email address")
        .typeError("Please enter email address")
        .required("Please enter email address"),
      panNo: Yup.string()
        .matches(/^[0-9+-]+$/, "Pan number must be a number")
        .required("Please enter PAN number"),
    })
  ),
  fcpName: Yup.string()
    .typeError("Please enter first contact person name")
    .required("Please enter first contact person name"),
  fcpFatherName: Yup.string()
    .typeError("Please enter first contact person father's name")
    .required("Please enter first contact person father's name"),
  fcpGrandFatherName: Yup.string()
    .typeError("Please enter first contact person grandfather's name")
    .required("Please enter first contact person grandfather's name"),
  fcpDesignation: Yup.string()
    .typeError("Please enter first contact person designation")
    .required("Please enter first contact person designation"),
  scpName: Yup.string()
    .typeError("Please enter second contact person name")
    .required("Please enter second contact person name"),
  scpFatherName: Yup.string()
    .typeError("Please enter second contact person father's name")
    .required("Please enter second contact person father's name"),
  scpGrandFatherName: Yup.string()
    .typeError("Please enter second contact person grandfather's name")
    .required("Please enter second contact person grandfather's name"),
  scpDesignation: Yup.string()
    .typeError("Please enter second contact person designation")
    .required("Please enter second contact person designation"),
  trdName: Yup.string()
    .typeError("Please enter third contact person name")
    .required("Please enter third contact person name"),
  trdFatherName: Yup.string()
    .typeError("Please enter third contact person father's name")
    .required("Please enter third contact person father's name"),
  trdGrandFatherName: Yup.string()
    .typeError("Please enter third contact person grandfather's name")
    .required("Please enter third contact person grandfather's name"),
  trdDesignation: Yup.string()
    .typeError("Please enter third contact person designation")
    .required("Please enter third contact person designation"),
});

export default corporatOwnershipDetailsValidationSchema;
