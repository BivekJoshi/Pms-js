import { useFormik } from "formik";
import * as Yup from "yup";
import { onlyTextRegex } from "../../static/RegExp";
import { useEffect } from "react";
import { useAddFamilyDetail } from "../BasicDetail/useBasicDetail";

const personDetailSchema = Yup.object().shape({
  fname: Yup.string().required("Required"),
  mname: Yup.string(),
  lname: Yup.string().required("Required"),
  fnameNep: Yup.string().required("Required"),
  mnameNep: Yup.string(),
  lnameNep: Yup.string().required("Required"),
});

const validationSchema = Yup.object().shape({
  familyDetailList: Yup.array().of(
    Yup.object().shape({
      personDetail: personDetailSchema,
    })
  ),
});

export const useKycFamilyForm = () => {
  const { mutate } = useAddFamilyDetail();
  const formik = useFormik({
    initialValues: {
      familyDetailList: [
        {
          relationTypeId: "GF",
          relationTypeDesc: "Grand Father",
          relationTypeDescNp: "वाजेको नाम",
          personDetail: {
            fname: "",
            mname: "",
            lname: "",
            fnameNep: "",
            mnameNep: "",
            lnameNep: "",
          },
        },
        {
          relationTypeId: "M",
          relationTypeDesc: "Mother",
          relationTypeDescNp: "आमाको नाम",
          personDetail: {
            fname: "",
            mname: "",
            lname: "",
            fnameNep: "",
            mnameNep: "",
            lnameNep: "",
          },
        },
        {
          relationTypeId: "F",
          relationTypeDesc: "Father",
          relationTypeDescNp: "बुबाको नाम",
          personDetail: {
            fname: "",
            mname: "",
            lname: "",
            fnameNep: "",
            mnameNep: "",
            lnameNep: "",
          },
        },
      ],
    },
    validationSchema: validationSchema,
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
