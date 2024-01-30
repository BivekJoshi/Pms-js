import { useFormik } from "formik";
import {
  DP_FEE,
  brokerComission,
  getSebbonFee,
} from "../../../utility/calculatorValues";

export const useSellForm = () => {
  const formik = useFormik({
    initialValues: {
      shareQty: "",
      buyPrice: "",
      sellPrice: "",
      brokerCommission: "",
      sebbonFeeAmount: "",
      sellAmountReceivable: "",
      holdingPeriod: "",
      investorType: "",
      totalAmount: "",
    },
    // validationSchema: buySellSchema,
    onSubmit: (values) => {
      const totalAmount = values.shareQty * values.sellPrice;
      const brokerCommission = brokerComission(totalAmount);
      const sebbonFeeAmount = getSebbonFee(totalAmount);
      formik.setFieldValue("totalAmount", totalAmount);
      formik.setFieldValue("brokerCommission", brokerCommission.toFixed(2));
      formik.setFieldValue("sebbonFeeAmount", sebbonFeeAmount.toFixed(2));
      formik.setFieldValue("dp_Fee", DP_FEE);

      const grossProfit = totalAmount - values.buyPrice * values.shareQty;

      let capitalGainTax;
      const capitalGaintaxInComplete =
        grossProfit - brokerCommission - sebbonFeeAmount - DP_FEE;
      if (values.investorType === "institution") {
        capitalGainTax = capitalGaintaxInComplete * 0.1;
      } else if (
        values.investorType === "individual" &&
        values.holdingPeriod === "short-period"
      ) {
        capitalGainTax = capitalGaintaxInComplete * 0.075;
      } else if (
        values.investorType === "individual" &&
        values.holdingPeriod === "long-period"
      ) {
        capitalGainTax = capitalGaintaxInComplete * 0.05;
      }

      formik.setFieldValue("capitalGainTax", capitalGainTax);

      const sellAmountReceivable = (
        totalAmount -
        brokerCommission -
        sebbonFeeAmount -
        DP_FEE -
        capitalGainTax
      ).toFixed(2);
      formik.setFieldValue("sellAmountReceivable", sellAmountReceivable);

      // return capitalGainTax;
    },
  });

  return {
    formik,
  };
};
