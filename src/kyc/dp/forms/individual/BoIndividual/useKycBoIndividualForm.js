import { useFormik } from "formik";
import * as Yup from "yup";
import { useAddBODetail } from "../../../../../hooks/Kyc/individual/boStatement/useAddKycBo";
import { getUser } from "../../../../../utility/userHelper";
import { useNavigate } from "react-router-dom";
import useKycNavigation from "../../../../hooks/useKycNavigation";

const BoStatementSchema = Yup.object().shape({
  isStandingInstructionForAutomaticTxn: Yup.boolean().nullable(),
  accountStatementPeriod: Yup.string().when(
    "isStandingInstructionForAutomaticTxn",
    {
      is: true,
      then: Yup.string().required("Required"),
      otherwise: Yup.string().nullable(),
    }
  ),
});

export const useKycBoIndividualForm = (data) => {
  const { mutate } = useAddBODetail({});
  const { H: clientType } = getUser();
  const navigate = useNavigate();
  const { nextFormPath } = useKycNavigation();

  const formik = useFormik({
    initialValues: {
      isStandingInstructionForAutomaticTxn:
        data?.isStandingInstructionForAutomaticTxn || false,
      accountStatementPeriod: data?.accountStatementPeriod || "",
    },
    validationSchema: BoStatementSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      const formData = { ...values };
      mutate(formData, {
        onSuccess: () => {
          if (clientType === "C") {
            navigate(nextFormPath());
          } else {
            navigate(nextFormPath());
          }
        },
      });
    },
  });
  return { formik };
};
