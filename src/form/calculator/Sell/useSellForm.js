import { useFormik } from "formik";
import {
  DP_FEE,
  brokerComission,
  getSebbonFee,
} from "../../../utility/calculatorValues";

export const useSellForm = () => {
  const calculateValues = (values) => {
    const totalAmount = values.shareQty * values.sellPrice;

    const brokerCommissionValue = brokerComission(totalAmount);
    const sebbonFeeAmountValue = getSebbonFee(totalAmount);

    const grossProfit = totalAmount - values.buyPrice * values.shareQty;

    let capitalGainTax = 0;
    const capitalGaintaxInComplete =
      grossProfit - brokerCommissionValue - sebbonFeeAmountValue - DP_FEE;

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

    const sellAmountReceivable =
      totalAmount -
      brokerCommissionValue -
      sebbonFeeAmountValue -
      DP_FEE -
      capitalGainTax;

    const profitLoss = sellAmountReceivable - values.buyPrice * values.shareQty;

    return {
      totalAmount: totalAmount.toFixed(2),
      brokerCommission: brokerCommissionValue.toFixed(2),
      sebbonFeeAmount: sebbonFeeAmountValue.toFixed(2),
      dp_Fee: DP_FEE,
      capitalGainTax: capitalGainTax.toFixed(2),
      sellAmountReceivable: sellAmountReceivable.toFixed(2),
      profitLoss: profitLoss.toFixed(2),
    };
  };

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
      profitLoss: "",
    },
    // validationSchema: buySellSchema,
    onSubmit: (values) => {
      try {
        const calculatedValues = calculateValues(values);
        formik.setValues({
          ...values,
          ...calculatedValues,
        });
      } catch (error) {
        // Handle errors
        console.error("An error occurred:", error);
      }
    },
  });

  return {
    formik,
  };
};
