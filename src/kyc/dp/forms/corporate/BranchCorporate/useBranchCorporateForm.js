import { useFormik } from "formik";
import * as Yup from "yup";
import { phoneRegExp } from "../../static/RegExp";
import { useAddBranchDetail } from "../../../../../hooks/Kyc/branch/useBranchDetail";

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
  console.log("data", data);
  const formik = useFormik({
    initialValues:
      data?.length === 0 ? data : [{
        id: data?.id || "",
        userId: data?.userId || "",
        area: data?.area || "",
        mainBranch: data?.mainBranch || "",
        address: data?.address || "",
        telephoneNo: data?.telephoneNo || "",
        mobileNo: data?.mobileNo || "",
        contactPerson: data?.contactPerson || "",
        otherBranch: data?.otherBranch || false,
      }],
    validationSchema: BranchScheme,
    onSubmit: (value) => {
      console.log("valuesssss", value);
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
