import { useFormik } from "formik";
import * as Yup from "yup";
import { onlyTextRegex } from '../../static/RegExp';
import { useDispatch, useSelector } from 'react-redux';
import { postBankKycData } from '../../../../../api/Kyc/Demat/demat_api';
import axios from 'axios';

const bankSchema = Yup.object().shape({
  bankName: Yup.string().required("Bank Name is required").matches(onlyTextRegex, "Please enter valid middle name"),
  accountNumber: Yup.string().required("Account Number is required"),
  accountType: Yup.string().required("Account Type is required"),
  branchAddress: Yup.string().required("Branch Address is required"),
});

export const useKycBankForm = () => {
  const dispatch  = useDispatch();
  const { data, loading, error } = useSelector(state => state);

  const formik = useFormik({
    initialValues: {
      bankName: "",
      accountNumber: "",
      accountType: "",
      branchAddress: "",
    },
    // validationSchema: bankSchema,
    onSubmit: async (values) => {
   
    },
  });

  return { data, loading, error, formik };
};