import { useFormik } from "formik";
import * as Yup from "yup";
import { useAddBranchDetail } from "../../../../../hooks/kyc/branch/useBranchDetail";
import { ageREgex, citizenExp, emailRegex, fullnameRegex, numberRegExp1, phoneRegExp } from "../../static/RegExp";

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
export const useBranchCorporateForm = () => {
  const { mutate } = useAddBranchDetail({});
  const formik = useFormik({
    initialValues: {
      id: "",
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
      const formData = { ...value };
      mutate(formData, {
        onSuccess: (data) => {
          formik.resetForm();
        },
      });
    },
  });
  return { formik };
};
