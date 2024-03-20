import * as Yup from "yup";

const corporatOwnershipDetailsValidationSchema = Yup.object().shape({
  detail: Yup.array().of(
    Yup.object().shape({
      designation: Yup.string()
        .required("Please select designation"),
      firstName: Yup.string()
        .required("First Name is required"),
      lastName: Yup.string()
        .required("Last Name is required"),
      fatherName: Yup.string()
        .required("Father's Name is required"),
      grandFather: Yup.string()
        .required("Grandfather's Name is required"),
      permanentAddress: Yup.string()
        .required("Permanent Address is required"),
      currentAddress: Yup.string()
        .required("Please enter current address"),
      mobileNo: Yup.string()
        .matches(/^(9\d{9}(,9\d{9})*)?$/, "Enter valid mobile number")
        .required("Please enter mobile number"),
      email: Yup.string()
        .email("Please enter valid email address")
        .required("Please enter email address"),
      panNo: Yup.string()
        .required("Please enter PAN number")
        .matches(/^\d{9}$/, "PAN number must be a 9-digit number"),
    })
  ),
  fcpName: Yup.string()
    .required("Please enter first contact person name"),
  fcpFatherName: Yup.string()
    .required("Please enter first contact person father's name"),
  fcpGrandFatherName: Yup.string()
    .required("Please enter first contact person grandfather's name"),
  fcpDesignation: Yup.string()
    .required("Please enter first contact person designation"),
  scpName: Yup.string()
    .required("Please enter second contact person name"),
  scpFatherName: Yup.string()
    .required("Please enter second contact person father's name"),
  scpGrandFatherName: Yup.string()
    .required("Please enter second contact person grandfather's name"),
  scpDesignation: Yup.string()
    .required("Please enter second contact person designation"),
  trdName: Yup.string()
    .required("Please enter third contact person name"),
  trdFatherName: Yup.string()
    .required("Please enter third contact person father's name"),
  trdGrandFatherName: Yup.string()
    .required("Please enter third contact person grandfather's name"),
  trdDesignation: Yup.string()
    .required("Please enter third contact person designation"),
});

export default corporatOwnershipDetailsValidationSchema;
