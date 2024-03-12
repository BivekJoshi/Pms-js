import { useFormik } from "formik";
import * as Yup from "yup";

import { useAddFamily } from "../../../../../hooks/kyc/family/useFamily";




const personDetailSchema = Yup.object().shape({
  fname: Yup.string().required("Required"),
  mname: Yup.string().nullable(),
  lname: Yup.string().required("Required"),
  fnameNep: Yup.string().nullable().required("Required"),
  mnameNep: Yup.string().nullable(),
  lnameNep: Yup.string().nullable().required("Required"),
});

const validationSchema = Yup.object().shape({
  personDetail: Yup.array().of(
    Yup.object().shape({
      personDetail: personDetailSchema,
    })
  ),
});

export const useKycFamilyForm = ({familyData}) => {

  const getFamilyData = familyData?.map((d)=> {
    return {
      id: d.id,
      relationTypeId: d.relationTypeId,
      relationTypeDesc: d.relationTypeDesc,
      relationTypeDescNp: d.relationTypeDescNp,
      userId:d.userId,
      personDetail: {
        fname: d.fname,
        mname: d.mname,
        lname: d.lname,
        fnameNep: d.fnameNep,
        mnameNep: d.mnameNep,
        lnameNep: d.lnameNep,
      },
    }
  })
  const { mutate } = useAddFamily({});

  const formik = useFormik({
    initialValues: { 
      personDetail: getFamilyData?.length > 0 ? getFamilyData : [
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
      ],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const formData = {...values};
      console.log("formData", formData);
      mutate(formData?.personDetail, {
        onSuccess: () => {
          formik.resetForm();
        },
      });
    },
  });

  return { formik };
};
