import { useFormik } from "formik";
import * as Yup from "yup";
import { useAddBODetail } from "../../../../../hooks/Kyc/individual/boStatement/useAddKycBo";
import { SET_FORM } from "../../../../../redux/types/types";
import { getUser, nextFormPath } from "../../../../../utility/userHelper";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const BoStatementSchema = Yup.object().shape({
  isStandingInstructionForAutomaticTxn: Yup.boolean().nullable(),
  accountStatementPeriod: Yup.string().when(
    "isStandingInstructionForAutomaticTxn",
    {
      is: true,
      then: Yup.string().required("Required"),
    }
  ),
});

export const useKycBoIndividualForm = (data) => {
  const { mutate } = useAddBODetail({});
  const { H: clientType, I: formNature } = getUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        navigate(nextFormPath(7));
      } else {
        dispatch({ type: SET_FORM, payload: 9 });
        navigate(nextFormPath(9));
      }
    },
  });
  return { formik };
};
