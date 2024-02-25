import { useFormik } from "formik";
import * as Yup from "yup";
import { onlyTextRegex } from '../../static/RegExp';

const familySchema = Yup.object().shape({
  relation: Yup.string().required("Relation is required").matches(onlyTextRegex, "Valid Relation is required"),
  familyDetails: Yup.array().of(
    Yup.object().shape({
      memberName: Yup.string()
        .when(['relation'], (relation, schema) => {
          const requiredRelations = ["father", "mother", "grandFather", "spouse"];
          if (requiredRelations.includes(relation)) {
            return schema.required(`${relation} is required`);
          }
          return schema;
        })
        .matches(onlyTextRegex, "Valid Relation is required"),
      relation: Yup.string().required("Relation is required"),
    })
  )
});


export const useKycFamilyForm = () => {

  const formik = useFormik({
    initialValues: {
      email:"",
      mobileNumber:"",
      memberName: "",
      relation: "referralPerson",
      familyDetails: [
        {
          memberName: "",
          relation: "father",
        },
        {
          memberName: "",
          relation: "mother",      
        },
        {
          memberName: "",
          relation: "grandFather",      
        },
      ],
    },
    validationSchema: familySchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return { formik };
};
