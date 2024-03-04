import { useFormik } from "formik";
import { corporateDpValidationSchema } from "./corporateDpValidationSchema";
import { useAddBasicDPCorporate } from '../../../hooks/Kyc/corporate/BasicCoporateDp/useBasicCoporateDp';

export const BasicCorporateDpForm = (data) => {
  const { mutate } = useAddBasicDPCorporate({});
  
  const formik = useFormik({
    initialValues: {
      corporateAccountType: data?.corporateAccountType || "",
      companyName: data?.companyName || "",
      companyCeoName: data?.companyCeoName || "",
      companySecretaryName: data?.companySecretaryName || "",
      companyType: data?.companyType || "",
      contactNumber: data?.contactNumber || "",
      countryReg: data?.countryReg || "",
      incorporationDate: data?.incorporationDate || "",
      registrationNo: data?.registrationNo || "",
      registrationOffice: data?.registrationOffice || "",
      registrationDate: data?.registrationDate || "",
      panNo: data?.panNo || "",
      businessType: data?.businessType || "",
      workArea: data?.workArea || "",
      vatRegistration: data?.vatRegistration || "",
      countryReg: data?.countryReg || "",
      nrbRegistration: data?.nrbRegistration || "",
      nrbApproval: data?.nrbApproval || "",
      isMF: data?.isMF || false,
      isSubsidiary: data?.isSubsidiary || false,
      mainCompanyName: data?.mainCompanyName || "",
      isListed: data?.isListed || false,
      listingDate: data?.listingDate || "",
    },
    validationSchema: corporateDpValidationSchema,
    onSubmit: (values) => {
      const formData = {...values}
      mutate(formData, {
        onSuccess: (data) => {
          formik.resetForm();
        },
      });
    },
  });

  return { formik };
};
