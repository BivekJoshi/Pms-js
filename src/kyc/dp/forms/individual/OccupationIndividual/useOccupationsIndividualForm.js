import { useFormik } from "formik";
import * as Yup from "yup";
import { onlyTextRegex } from "../../static/RegExp";
import { useAddOccupation } from "../../../../../hooks/kyc/occupaction/useOccupation";

const occupationSchema = Yup.object().shape({
  occupation: Yup.string()
    .required("Occupation is required")
    .matches(onlyTextRegex, "Please enter valid middle name"),
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
  companyName: Yup.string().when("involvementInOtherCompany", {
    is: true,
    then: Yup.string().required("Please enter company name"),
    otherwise: Yup.string().nullable(),
  }),
  tradingDesignation: Yup.string().when("involvementInOtherCompany", {
    is: true,
    then: Yup.string().required("Please select designation"),
    otherwise: Yup.string().nullable(),
  }),
  tradingAccountCompanyName: Yup.string().when("tradingAccount", {
    is: true,
    then: Yup.string().required("Please enter trading company name"),
    otherwise: Yup.string().nullable(),
  }),
  clientCode: Yup.string().when("tradingAccount", {
    is: true,
    then: Yup.string().required("Please enter client code"),
    otherwise: Yup.string().nullable(),
  }),
});

export const useOccupationsIndividualForm = () => {
  const { mutate } = useAddOccupation({});

  const formik = useFormik({
    initialValues: {
      id:"",
      userId:"",
      occupation: "",
      businessType: "",
      orgName: "",
      address: "",
      designation: "",
      employeeId: "",
      financialDetails: "",
      involvementInOtherCompany: false,
      companyName: "",
      ifOthers: "",
      ifOthersBusiness: "",
      tradingDesignation: "",
      effectiveFrom: "",
      blackListed: false,
      clientCode: "",
      tradingAccount: false,
      tradingAccountCompanyName: "",
      sourceOfIncome: "",
    },
    validationSchema: occupationSchema,
    onSubmit: (values) => {
      const formData = { ...values };
      mutate(formData, {
        onSuccess: (data) => {
          formik.resetForm();
        },
      });
    },
  });

  return { formik };
};
