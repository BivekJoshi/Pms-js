import { useFormik } from "formik";
import * as Yup from "yup";
import { phoneRegExp } from "../../static/RegExp";
import { useAddBranchDetail } from "../../../../../hooks/Kyc/branch/useBranchDetail";
import { SET_FORM } from "../../../../../redux/types/types";
import { nextFormPath } from "../../../../../utility/userHelper";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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
      .matches(phoneRegExp, 'Enter valid mobile number')
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
  const { mutate } = useAddBranchDetail({});
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      id: data?.id || "",
      area: data?.area || "",
      mainBranch: data?.mainBranch || "",
      address: data?.address || "",
      telephoneNo: data?.telephoneNo || "",
      mobileNo: data?.mobileNo || "",
      contactPerson: data?.contactPerson || "",
      otherBranch: data?.otherBranch || false,
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
      navigate(nextFormPath(5))
    },
  });
  return { formik };
};
