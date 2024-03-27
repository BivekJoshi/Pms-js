import { useAddAddress } from "../../../../../hooks/kyc/address/useAddress";
import { useFormik } from "formik";
import * as Yup from "yup";
import { mobileNum, phoneRegExp } from "../../static/RegExp";
import { SET_FORM } from "../../../../../redux/types/types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useKycNavigation from "../../../../hooks/useKycNavigation";

const AddressSchema = Yup.object().shape({
  addresses: Yup.array().of(
    Yup.object().shape({
      country: Yup.string().required("Country is required"),
      province: Yup.string().required("Province is required"),
      district: Yup.string().required("District is required"),
      municipality: Yup.string().required("Municipality is required"),
      wordNo: Yup.string().required("Ward No. is required"),
      tole: Yup.string().required("Tole No. is required"),
      mobileNo: Yup.string()
        .required("Mobile No. is required")
        .matches(mobileNum, "Invalid mobile number"),
      email: Yup.string().required("Email is required"),
    })
  ),
});

export const useAddressForm = (data) => {
  const { mutate } = useAddAddress({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { nextFormPath } = useKycNavigation();

  const formik = useFormik({
    initialValues: {
      addresses:
        data?.length > 0
          ? data
          : [
              {
                country: "",
                province: "",
                district: "",
                municipality: "",
                wardNo: "",
                tole: "",
                streetNo: "",
                mobileNo: "",
                telephoneNo: "",
                email: "",
                website: "",
                longitude: "",
                latitude: "",
                houseNo: "",
                perAndCurAddressSame: false,
              },
            ],
    },
    validationSchema: AddressSchema,
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
      dispatch({ type: SET_FORM, payload: 4 });
      navigate(nextFormPath());
    },
  });
  return { formik };
};
