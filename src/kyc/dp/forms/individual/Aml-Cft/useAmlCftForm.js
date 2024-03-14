import { useFormik } from "formik";
import {
  useAddAmlCft,
  useGetAmlCft,
} from "../../../../../hooks/kyc/aml-cft/useAmlCft";
import * as Yup from "yup";
import { fullnameRegex } from "../../static/RegExp";

const AMLCFTSchema = Yup.object().shape({
  name: Yup.string().when("poliAffiHighRnkRln", {
    is: true,
    then: Yup.string()
      .required("Full Name is required")
      .matches(fullnameRegex, "Please enter valid name"),
    otherwise: Yup.string().nullable(),
  }),
  relation: Yup.string().when("poliAffiHighRnkRln", {
    is: true,
    then: Yup.string()
      .required("Relation is required")
      .matches(fullnameRegex, "Please enter valid name"),
    otherwise: Yup.string().nullable(),
  }),
  name: Yup.string().when("pastCrimActi", {
    is: true,
    then: Yup.string()
      .required("Full Name is required")
      .matches(fullnameRegex, "Please enter valid name"),
    otherwise: Yup.string().nullable(),
  }),
});

export const useAmlCftForm = () => {
  const { mutate } = useAddAmlCft({});
  const { data, isLoading } = useGetAmlCft();

  const formik = useFormik({
    initialValues: {
      poliAffiHighRnkRln: data?.poliAffiHighRnkRln || false,
      poliAffiHighRnkRlnName: data?.poliAffiHighRnkRlnName || [
        {
          name: "",
          relation: "",
        },
      ],
      pastCrimActi: data?.pastCrimActi || false,
      pastCrimiActiDetail: data?.pastCrimiActiDetail || [
        {
          name: "",
        },
      ],
      beneficialOwner: false,
      beneficialOwnerName: data?.beneficialOwnerName || [
        {
          age: "",
          citizenShipNo: "",
          correspondenceAddress: "",
          country: "",
          district: "",
          email: "",
          faxNo: "",
          mobileNo: "",
          municipality: "",
          name: "",
          panNo: "",
          placeOfIssuer: "",
          province: "",
          relation: "",
          telephoneNo: "",
        },
      ],
    },
    // validationSchema: AMLCFTSchema,
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
