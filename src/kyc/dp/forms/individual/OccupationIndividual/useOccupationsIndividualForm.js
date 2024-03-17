import { useFormik } from "formik";
import * as Yup from "yup";
import { onlyTextRegex } from "../../static/RegExp";
import {
  useAddOccupation,
  useGetOccupation,
} from "../../../../../hooks/kyc/occupaction/useOccupation";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_FORM } from "../../../../../redux/types/types";
import { nextFormPath } from "../../../../../utility/userHelper";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, isLoading } = useGetOccupation({});

  const formik = useFormik({
    initialValues: {
      id: "" || data?.id,
      userId: "" || data?.userId,
      occupation: "" || data?.occupation,
      businessType: "" || data?.businessType,
      orgName: "" || data?.orgName,
      address: "" || data?.address,
      designation: "" || data?.designation,
      employeeId: "" || data?.employeeId,
      financialDetails: "" || data?.financialDetails,
      involvementInOtherCompany: false || data?.involvementInOtherCompany,
      companyName: "" || data?.companyName,
      ifOthers: "" || data?.ifOthers,
      ifOthersBusiness: "" || data?.ifOthersBusiness,
      tradingDesignation: "" || data?.tradingDesignation,
      effectiveFrom: "" || data?.effectiveFrom,
      blackListed: false || data?.blackListed,
      clientCode: "" || data?.clientCode,
      tradingAccount: false || data?.tradingAccount,
      tradingAccountCompanyName: "" || data?.tradingAccountCompanyName,
      sourceOfIncome: "" || data?.sourceOfIncome,
    },
    enableReinitialize: true,
    validationSchema: occupationSchema,
    onSubmit: (values) => {
      if (formik.dirty) {
        const formData = { ...values };
        mutate(formData, {
          onSuccess: (data) => {
            formik.resetForm();
          },
        });
      }
      dispatch({ type: SET_FORM, payload: 7 });
      navigate(nextFormPath(7));
    },
  });

  return { formik };
};
