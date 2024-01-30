import { useFormik } from "formik";
import {
  DP_FEE,
  brokerComission,
  getSebbonFee,
} from "../../../utility/calculatorValues";
import { buySellSchema } from "./buySellSchema";

export const useBuySellForm = () => {
  const formik = useFormik({
    initialValues: {
      shareQty: "",
      buyPrice: "",
      brokerCommission: "",
      sebbonFeeAmount: "",
      buyTotalAmount: "", // Initialize with 0
      buyAmountPayable: "", // Initialize with 0
      costPerShare: "",
    },
    validationSchema: buySellSchema,
    onSubmit: (values) => {
      const buyTotalAmount = values.buyPrice * values.shareQty;
      const brokerCommission = brokerComission(buyTotalAmount);
      const sebbonFeeAmount = getSebbonFee(buyTotalAmount);
      const totalPayable = (
        buyTotalAmount +
        brokerCommission +
        sebbonFeeAmount +
        DP_FEE
      ).toFixed(2);

      const costPerShare = (totalPayable / values.shareQty).toFixed(2);

      formik.setFieldValue("brokerCommission", brokerCommission.toFixed(2));
      formik.setFieldValue("sebbonFeeAmount", sebbonFeeAmount.toFixed(2));
      formik.setFieldValue("dp_Fee", DP_FEE);
      // Update formik state with the new values
      formik.setFieldValue("buyTotalAmount", buyTotalAmount.toFixed(2));
      formik.setFieldValue("buyAmountPayable", totalPayable);
      formik.setFieldValue("costPerShare", costPerShare);

      // Your other form submission logic
    },
  });

  return {
    formik,
  };
};
