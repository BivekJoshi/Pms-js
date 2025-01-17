import { useFormik } from "formik"
import useBasicIndividualValidationSchema from "./useBasicIndividualValidationSchema"
import { useAddBasicDetail } from "./BasicDetail/useBasicDetail"
import { useNavigate } from "react-router-dom"
import useKycNavigation from "../../../hooks/useKycNavigation"

export const useBasicIndividualDpForms = ({ data }) => {
  const { mutate } = useAddBasicDetail({});
  const { nextFormPath } = useKycNavigation();
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      fname: data?.fname || "",
      mname: data?.mname || "",
      lname: data?.lname || "",
      fnameNep: data?.fnameNep || "",
      mnameNep: data?.mnameNep || "",
      lnameNep: data?.lnameNep || "",
      gender: data?.gender || "",
      countryCd: data?.countryCd || "",
      pan: data?.pan || "",
      dob: data?.dob || "",
      dobBs: data?.dobBs || "",
      isMinor: data?.isMinor || false,
      isGuardianSignature: data?.isGuardianSignature || "",
      isSignature: data?.isSignature || "",
      isDifferentlyAbled: data?.isDifferentlyAbled || false,
      isBiometric: false,
      isNrn: data?.isNrn || false,
    },
    validationSchema: useBasicIndividualValidationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (formik.dirty) {
        const formData = { ...values };
        mutate(formData, {
          onSuccess: (data) => {
            // formik.resetForm()
          },
        });
      }

      if(formik.isValid){
        navigate(nextFormPath())
      }
    },
  });

  return { formik };
};
