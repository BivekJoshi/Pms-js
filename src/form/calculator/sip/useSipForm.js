import { useFormik } from "formik";

export const useSipForm = () => {
  const formik = useFormik({
    initialValues: {
      investmentPeriod: "",
      investedAmount: "",
      expectedAnnualReturn: "",
      years: "",
    },
    onSubmit: (values) => {
      const intrestRate =
        values?.expectedAnnualReturn / (values?.investmentPeriod * 100);
        
      const intrestRateWithSum1 = intrestRate + 1;

      const investmentDuration = values?.years * values?.investmentPeriod;

      const futureValue =
        values?.investedAmount *
        (((intrestRateWithSum1 ** investmentDuration) - 1) / intrestRate) *
        intrestRateWithSum1;

      formik.setFieldValue("futureValue",futureValue.toFixed(2))  

      const totalAmountInvested=values?.investedAmount*values?.years*values?.investmentPeriod;
      formik.setFieldValue("totalAmountInvested",totalAmountInvested.toFixed(2))  

      const totalGain =futureValue-totalAmountInvested;
      formik.setFieldValue("totalGain",totalGain.toFixed(2))  

      const totalGainPercent=totalGain*100/totalAmountInvested;
      formik.setFieldValue("totalGainPercent",totalGainPercent.toFixed(2))  

    },
  });

  return {
    formik,
  };
};
