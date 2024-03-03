import { useFormik } from "formik";
import { useAddAmlCft } from "../../../../../hooks/kyc/aml-cft/useAmlCft";

export const useAmlCftForm = () => {
  const { mutate } = useAddAmlCft({});

  const formik = useFormik({
    initialValues: {
      poliAffiHighRnkRln: false,
      poliAffiHighRnkRlnName: [
        {
          name: "",
          relation: "",
        },
      ],
      pastCrimActi: false,
      pastCrimiActiDetail: [
        {
          name: "",
        },
      ],
      beneficialOwner: false,
      beneficialOwnerName: [
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
    onSubmit: (values) => {
      console.log(values,"values");
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
