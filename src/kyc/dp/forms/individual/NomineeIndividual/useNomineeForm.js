import { useFormik } from "formik";
import * as Yup from "yup";
import {
  ageREgex,
  citizenExp,
  emailRegex,
  fullnameRegex,
  numberRegExp1,
  onlyNum,
  phoneRegExp,
} from "../../static/RegExp";
import { useAddNomineeDetail } from "../../../../../hooks/Kyc/individual/nominee/useNominee";
import { useEffect } from "react";
import { SET_FORM } from "../../../../../redux/types/types";
import { nextFormPath } from "../../../../../utility/userHelper";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const NomineeSchema = Yup.object().shape({
  name: Yup.string().when("haveNominee", {
    is: true,
    then: Yup.string()
      .required("Full Name is required")
      .matches(fullnameRegex, "Please enter valid name")
      .max(75, "Full Name must be at most 75 characters"),
    otherwise: Yup.string().nullable(),
  }),
  fatherName: Yup.string().when("haveNominee", {
    is: true,
    then: Yup.string()
      .required("Father's Name is required")
      .matches(fullnameRegex, "Please enter valid father's name")
      .max(75, "Father's Name must be at most 75 characters"),
    otherwise: Yup.string().nullable(),
  }),
  grandfatherName: Yup.string().when("haveNominee", {
    is: true,
    then: Yup.string()
      .required("Grandfather's Name is required")
      .matches(
        fullnameRegex,
        "Please enter valid grandfather's name"
      )
      .max(75, "Grandfather's Name must be at most 75 characters"),
    otherwise: Yup.string().nullable(),
  }),
  citizenShipNo: Yup.string().when("haveNominee", {
    is: true,
    then: Yup.string()
      .required("Citizenship Number is required")
      .matches(citizenExp, "Please enter valid citizenship number"),
    otherwise: Yup.string().nullable(),
  }),
  address: Yup.string().when("haveNominee", {
    is: true,
    then: Yup.string().required("Correspondence Address is required"),
    otherwise: Yup.string().nullable(),
  }),
  age: Yup.string().when("haveNominee", {
    is: true,
    then: Yup
      .string()
      .required('Please enter age')
      .max(150, "Invalid age")
      .matches(ageREgex, 'Please enter valid age')
      .test('maxAge', 'Age must be less than or equal to 150', value => {
        return parseInt(value, 10) <= 150;
      }),
    otherwise: Yup.string().nullable(),
  }),
  placeOfIssue: Yup.string().when("haveNominee", {
    is: true,
    then: Yup.string().required("Citizenship Issued District is required"),
    otherwise: Yup.string().nullable(),
  }),
  //   issuedDate: Yup.mixed().when('haveNominee', {
  //     is: true,
  //     then: momentDateSchema.required('Please select registration date'),
  //     otherwise: Yup.mixed().nullable(),
  //   }),
  relation: Yup.string().when("haveNominee", {
    is: true,
    then: Yup.string().required("Relation is required"),
    otherwise: Yup.string().nullable(),
  }),
  country: Yup.string().when("haveNominee", {
    is: true,
    then: Yup.string()
      .required("Country is required"),
    otherwise: Yup.string().nullable(),
  }),
  province: Yup.string().when("haveNominee", {
    is: true,
    then: Yup.string().required("Province is required"),
    otherwise: Yup.string().nullable(),
  }),
  district: Yup.string().when("haveNominee", {
    is: true,
    then: Yup.string().required("District is required"),
    otherwise: Yup.string().nullable(),
  }),
  municipality: Yup.string().when("haveNominee", {
    is: true,
    then: Yup.string().required(
      "Rural municipality/Municipality/Sub Metropolitan city/Metropolitan city is required"
    ),
    otherwise: Yup.string().nullable(),
  }),
  mobileNo: Yup.string().when("haveNominee", {
    is: true,
    then: Yup.string()
      .matches(phoneRegExp, "Enter valid mobile number")
      .required("Mobile Number is required"),
    otherwise: Yup.string().nullable(),
  }),
  email: Yup.string().when("haveNominee", {
    is: true,
    then: Yup.string()
      .email("Please enter a valid email")
      .matches(emailRegex, "Please enter valid email")
      .required("Email is required"),
    otherwise: Yup.string().nullable(),
  }),
  panNo: Yup.string()
    .min(0)
    .max(9, "Pan Number must be at most 9 digites")
    .nullable(true)
    .matches(onlyNum, "PAN Number must be number only")
    .notRequired(),
});

export const useNomineeForm = (data) => {
  const { mutate } = useAddNomineeDetail({});
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      citizenShipNo: data?.citizenShipNo || "",
      address: data?.address || "",
      fatherName: data?.fatherName || "",
      grandfatherName: data?.grandfatherName || "",
      placeOfIssue: data?.placeOfIssue || "",
      name: data?.name || "",
      relation: data?.relation || "",
      country: data?.country || "",
      province: data?.province || "",
      district: data?.district || "",
      municipality: data?.municipality || "",
      telephoneNo: data?.telephoneNo || "",
      mobileNo: data?.mobileNo || "",
      panNo: data?.panNo || "",
      email: data?.email || "",
      fax: data?.fax || "",
      age: data?.age || "",
      issuedDate: data?.issuedDate || "",
      haveNominee: data?.haveNominee || false,
    },
    validationSchema: NomineeSchema,
    onSubmit: (values) => {
      if (formik.dirty) {
        const formData = { ...values };
        mutate(formData, {
          onSuccess: () => {
            // formik.resetForm();
          },
        });
      }
      dispatch({ type: SET_FORM, payload: 8 })
      navigate(nextFormPath(8))
    },
  });

  useEffect(() => {
    formik.setValues({
      citizenShipNo: data?.citizenShipNo || "",
      address: data?.address || "",
      fatherName: data?.fatherName || "",
      grandfatherName: data?.grandfatherName || "",
      placeOfIssue: data?.placeOfIssue || "",
      name: data?.name || "",
      relation: data?.relation || "",
      country: data?.country || "",
      province: data?.province || "",
      district: data?.district || "",
      municipality: data?.municipality || "",
      telephoneNo: data?.telephoneNo || "",
      mobileNo: data?.mobileNo || "",
      panNo: data?.panNo || "",
      email: data?.email || "",
      fax: data?.fax || "",
      age: data?.age || "",
      issuedDate: data?.issuedDate || "",
      haveNominee: data?.haveNominee || false,
    });
  }, [
    data?.citizenShipNo,
    data?.address,
    data?.fatherName,
    data?.grandfatherName,
    data?.placeOfIssue,
    data?.name,
    data?.relation,
    data?.country,
    data?.province,
    data?.district,
    data?.municipality,
    data?.telephoneNo,
    data?.mobileNo,
    data?.panNo,
    data?.email,
    data?.fax,
    data?.age,
    data?.issuedDate,
    data?.haveNominee,
  ]);

  return { formik };
};
