import { useFormik } from "formik";
import * as Yup from "yup";
import { onlyTextRegex } from '../../static/RegExp';

const occupationSchema = Yup.object().shape({
  occupation: Yup.string().required("Occupation is required").matches(onlyTextRegex, "Please enter valid middle name"),
  businessType: Yup.string().when("occupation", {
    is: (val) => val === "BUSINESS",
    then: Yup.string().required("Business Type is required"),
    otherwise: Yup.string(),
  }),
  orgName: Yup.string().when("occupation", {
    is: (val) => val !== "FARMER" && val !== "HOUSEWIFE" && val !== "STUDENT",
    then: Yup.string().required("Organization Name is required"),
    otherwise: Yup.string(),
  }),
  address: Yup.string().when("occupation", {
    is: (val) => val !== "FARMER" && val !== "HOUSEWIFE" && val !== "STUDENT",
    then: Yup.string().required("Address is required"),
    otherwise: Yup.string(),
  }),
  employeeId: Yup.string().when("occupation", {
    is: (val) => val !== "FARMER" && val !== "HOUSEWIFE" && val !== "STUDENT",
    then: Yup.string().required("Employee Id is required"),
    otherwise: Yup.string(),
  }),
  designation: Yup.string().when("occupation", {
    is: (val) => val !== "FARMER" && val !== "HOUSEWIFE" && val !== "STUDENT",
    then: Yup.string().required("Designation Name is required"),
    otherwise: Yup.string(),
  }),
  effectiveFrom: Yup.string().when("occupation", {
    is: (val) => val !== "FARMER" && val !== "HOUSEWIFE" && val !== "STUDENT",
    then: Yup.string().required("Effective Date is required"),
    otherwise: Yup.string(),
  }),
  financialDetails: Yup.string().required("Financial Details is required"),
  sourceOfIncome: Yup.string().required("Source of Income is required"),
});

export const useOccupationsIndividualForm = () => {
  const formik = useFormik({
    initialValues: {
      occupation: "",
      businessType: "",
      orgName: "",
      address: "",
      employeeId: "",
      designation: "",
      effectiveFrom: "",
      financialDetails: "",
      sourceOfIncome: "",
      blackListed: false,
      tradingAccount: false,
      involvementInOtherCompany: false,
    },
    validationSchema: occupationSchema,
    onSubmit: (values) => {
      //   setLoading(true);
      handleRegister(values);
    },
  });

  const handleRegister = (values) => {
    console.log(values, "values");
    // mutate({ values }, { onSettled: () => setLoading(false) });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return {
    handleRegister,
    formik,
    // loading,
    handleMouseDownPassword,
  };
};
