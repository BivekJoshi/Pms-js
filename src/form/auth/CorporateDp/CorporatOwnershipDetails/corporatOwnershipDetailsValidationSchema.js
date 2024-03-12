import * as Yup from "yup";

const corporatOwnershipDetailsValidationSchema = Yup.object().shape({
  details: Yup.array().of(
    Yup.object().shape({
      designation: Yup.string()
        .typeError("Please select designation")
        .required("Please select designation"),
      firstName: Yup.string()
        .typeError("First Name is required")
        .required("First Name is required"),
      lastName: Yup.string()
        .typeError("Last Name is required")
        .required("Last Name is required"),
      fatherName: Yup.string()
        .typeError("Father's Name is required")
        .required("Father's Name is required"),
      grandFather: Yup.string()
        .typeError("Grandfather's Name is required")
        .required("Grandfather's Name is required"),
      permanentAddress: Yup.string()
        .typeError("Permanent Address is required")
        .required("Permanent Address is required"),
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
