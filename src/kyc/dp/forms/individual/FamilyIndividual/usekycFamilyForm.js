import { useFormik } from "formik";
import * as Yup from "yup";
import { useAddFamily } from "../../../../../hooks/kyc/family/useFamily";
import { useNavigate } from "react-router-dom";
import useKycNavigation from "../../../../hooks/useKycNavigation";

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

export const useKycFamilyForm = ({ familyData }) => {
  const { mutate } = useAddFamily({});
  const navigate = useNavigate();
  const { nextFormPath } = useKycNavigation();

  const initialFormValues =
    familyData?.families?.length &&
    familyData?.families?.reduce(
      (acc, d) => {
        if (
          d.relationTypeId === "GF" ||
          d.relationTypeId === "F" ||
          d.relationTypeId === "M"
        ) {
          acc.personDetail.push({
            id: d.id,
            relationTypeId: d.relationTypeId,
            relationTypeDesc: d.relationTypeDesc,
            relationTypeDescNp: d.relationTypeDescNp,
            personDetail: {
              fname: d.personDetail.fname,
              mname: d.personDetail.mname,
              lname: d.personDetail.lname,
              fnameNep: d.personDetail.fnameNep,
              mnameNep: d.personDetail.mnameNep,
              lnameNep: d.personDetail.lnameNep,
            },
          });
        } else {
          acc.marriedDetail.push({
            id: d.id,
            relationTypeId: d.relationTypeId,
            relationTypeDesc: d.relationTypeDesc,
            relationTypeDescNp: d.relationTypeDescNp,
            personDetail: {
              fname: d.personDetail.fname,
              mname: d.personDetail.mname,
              lname: d.personDetail.lname,
              fnameNep: d.personDetail.fnameNep,
              mnameNep: d.personDetail.mnameNep,
              lnameNep: d.personDetail.lnameNep,
            },
          });
        }
        return acc;
      },
      { personDetail: [], marriedDetail: [] }
    );

  const formik = useFormik({
    initialValues: {
      isMarried: familyData?.isMarried || false,
      personDetail:
        initialFormValues?.personDetail?.length > 0
          ? initialFormValues?.personDetail
          : [
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
      marriedDetail:
        initialFormValues?.marriedDetail?.length > 0
          ? initialFormValues?.marriedDetail
          : [
              {
                relationTypeId: "",
                relationTypeDesc: "",
                relationTypeDescNp: "",
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
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (formik.dirty) {
        const formData = {
          families: [...values.personDetail, ...values.marriedDetail],
          isMarried: values.isMarried,
        };
        mutate(formData, {
          onSuccess: () => {
            // formik.resetForm();
          },
        });
      }
      navigate(nextFormPath());
    },
  });
  return { formik };
};
