import { useFormik } from "formik";
import * as Yup from "yup";
import { onlyTextRegex } from "../../static/RegExp";
import { useEffect } from "react";
import { useAddFamily } from "../../../../../hooks/kyc/family/useFamily";

// const familySchema = Yup.object().shape({
//   relation: Yup.string().required("Relation is required").matches(onlyTextRegex, "Valid Relation is required"),
//   familyDetails: Yup.array().of(
//     Yup.object().shape({
//       memberName: Yup.string()
//         .when(['relation'], (relation, schema) => {
//           const requiredRelations = ["father", "mother", "grandFather", "spouse", 'sonInLaw', "motherInLaw"];
//           if (requiredRelations.includes(relation)) {
//             return schema.required(`${relation} is required`);
//           }
//           return schema;
//         })
//         .matches(onlyTextRegex, "Valid Relation is required"),
//       relation: Yup.string().required("Relation is required"),
//     })
//   )
// });

const familySchema = Yup.object().shape({
  relation: Yup.string()
    .required("Relation is required")
    .matches(onlyTextRegex, "Valid Relation is required"),
  familyDetails: Yup.array().of(
    Yup.object().shape({
      memberName: Yup.string()
        .when("relation", {
          is: "father",
          then: Yup.string().required("Father Name is required"),
        })
        .when("relation", {
          is: "mother",
          then: Yup.string().required("Mother Name is required"),
        })
        .when("relation", {
          is: "grandFather",
          then: Yup.string().required("Grand Father Name is required"),
        })
        .when("relation", {
          is: "spouse",
          then: Yup.string().required("Spouse Name is required"),
        })
        .when("relation", {
          is: "sonInLaw",
          then: Yup.string().required("Son-In-Law Name is required"),
        })
        .when("relation", {
          is: "daughterInLaw",
          then: Yup.string().required("Daughter-In-Law Name is required"),
        })
        .when("relation", {
          is: "motherInLaw",
          then: Yup.string().required("Mother-In-Law Name is required"),
        })
        .when("relation", {
          is: "fatherInLaw",
          then: Yup.string().required("Father-In-Law Name is required"),
        }),
      relation: Yup.string().required("Relation is required"),
    })
  ),
});

const personDetailSchema = Yup.object().shape({
  fname: Yup.string().required("Required"),
  mname: Yup.string(),
  lname: Yup.string().required("Required"),
  fnameNep: Yup.string().required("Required"),
  mnameNep: Yup.string(),
  lnameNep: Yup.string().required("Required"),
});

const validationSchema = Yup.object().shape({
  personDetail: Yup.array().of(
    Yup.object().shape({
      personDetail: personDetailSchema,
    })
  ),
});

export const useKycFamilyForm = ({familyData}) => {
  const { mutate } = useAddFamily({});

  const formik = useFormik({
    initialValues: {
      personDetail: [
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
      const formData = {...values};
      mutate(formData, {
        onSuccess: (data) => {
          formik.resetForm();
        },
      });
    },
  });

  return { formik };
};
