import { useFormik } from "formik";
import * as Yup from "yup";
import { useAddBODetail } from "../../../../../hooks/Kyc/individual/boStatement/useAddKycBo";
import { SET_FORM } from "../../../../../redux/types/types";
import { getUser } from "../../../../../utility/userHelper";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
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
  const { H: clientType, I: formNature } = getUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      if (formik.dirty) {
        const formData = { ...values };
        mutate(formData, {
          onSuccess: () => {
            formik.resetForm();
          },
        });
      }

      if (clientType === "C") {
        dispatch({ type: SET_FORM, payload: 7 });
        navigate(nextFormPath());
      } else {
        dispatch({ type: SET_FORM, payload: 9 });
        navigate(nextFormPath());
      }
    },
  });
  return { formik };
};
