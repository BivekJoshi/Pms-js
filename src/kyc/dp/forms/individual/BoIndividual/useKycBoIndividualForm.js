import { useFormik } from "formik";
import { useAddBODetail } from "../../../../../hooks/Kyc/individual/boStatement/useAddKycBo";
import { SET_FORM } from "../../../../../redux/types/types";
import { getUser, nextFormPath } from "../../../../../utility/userHelper";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

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
