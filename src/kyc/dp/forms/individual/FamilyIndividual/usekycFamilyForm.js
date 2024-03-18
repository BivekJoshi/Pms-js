import { useFormik } from "formik";
import * as Yup from "yup";
import { useAddFamily } from "../../../../../hooks/kyc/family/useFamily";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET_FORM } from "../../../../../redux/types/types";
import { nextFormPath } from "../../../../../utility/userHelper";

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
  const getFamilyData = familyData?.map((d) => {
    return {
      id: d.id,
      relationTypeId: d.relationTypeId,
      relationTypeDesc: d.relationTypeDesc,
      relationTypeDescNp: d.relationTypeDescNp,
      userId: d.userId,
      personDetail: {
        fname: d.fname,
        mname: d.mname,
        lname: d.lname,
        fnameNep: d.fnameNep,
        mnameNep: d.mnameNep,
        lnameNep: d.lnameNep,
      },
    };
  });
  const { mutate } = useAddFamily({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      isMarried: false,
      personDetail:
        getFamilyData?.length > 0
          ? getFamilyData
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
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (formik.dirty) {
        const formData = { ...values };
        mutate(formData?.personDetail, {
          onSuccess: () => {
            formik.resetForm();
          },
        });
      }
      dispatch({ type: SET_FORM, payload: 5 });
      navigate(nextFormPath(5));
    },
  });

  return { formik };
};
