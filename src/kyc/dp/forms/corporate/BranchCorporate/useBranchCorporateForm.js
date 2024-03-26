import { useFormik } from "formik";
import * as Yup from "yup";
import { phoneRegExp } from "../../static/RegExp";
import { useAddBranchDetail } from "../../../../../hooks/Kyc/branch/useBranchDetail";
import { SET_FORM } from "../../../../../redux/types/types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useKycNavigation from "../../../../hooks/useKycNavigation";

const BranchScheme = Yup.object().shape({
  area: Yup.string().when("otherBranch", {
    is: true,
    then: Yup.string().required("Please enter area name."),
    otherwise: Yup.string().nullable(),
  }),
  mainBranch: Yup.string().when("otherBranch", {
    is: true,
    then: Yup.string().required("Please enter main Branch or office."),
    otherwise: Yup.string().nullable(),
  }),
  address: Yup.string().when("otherBranch", {
    is: true,
    then: Yup.string().required("Please enter address."),
    otherwise: Yup.string().nullable(),
  }),
  telephoneNo: Yup.string().when("otherBranch", {
    is: true,
    then: Yup.string().required("Please enter main Telephone Number."),
    otherwise: Yup.string().nullable(),
  }),
  mobileNo: Yup.string().when("otherBranch", {
    is: true,
    then: Yup.string()
      .matches(phoneRegExp, "Enter valid mobile number")
      .required("Please enter mobile Number."),
    otherwise: Yup.string().nullable(),
  }),
  contactPerson: Yup.string().when("otherBranch", {
    is: true,
    then: Yup.string().required("Please enter contact person name."),
    otherwise: Yup.string().nullable(),
  }),
});

export const useBranchCorporateForm = (data) => {
  const [loading, setLoading] = useState(false);
  const { mutate } = useAddBranchDetail({});
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { nextFormPath } = useKycNavigation();

  const formik = useFormik({
    initialValues:
      data?.length === 1 && data
        ? {
            id: data?.[0].id || "",
            userId: data?.[0].userId || "",
            area: data?.[0].area || "",
            mainBranch: data?.[0].mainBranch || "",
            address: data?.[0].address || "",
            telephoneNo: data?.[0].telephoneNo || "",
            mobileNo: data?.[0].mobileNo || "",
            contactPerson: data?.[0].contactPerson || "",
            otherBranch: data?.[0].otherBranch || false,
          }
        : {
            id: "",
            userId: "",
            area: "",
            mainBranch: "",
            address: "",
            telephoneNo: "",
            mobileNo: "",
            contactPerson: "",
            otherBranch: false,
          },
    validationSchema: BranchScheme,
    onSubmit: (value) => {
      if(formik.dirty){
        const formData = { ...value };
        mutate(formData, {
          onSuccess: (data) => {
            formik.resetForm();
          },
        });
      }
      dispatch({ type: SET_FORM, payload: 5 })
      navigate(nextFormPath())
    },
  });
  return { formik, loading };
};
