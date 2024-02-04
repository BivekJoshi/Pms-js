import { useFormik } from "formik";
import {
  DP_FEE,
  brokerComission,
  getSebbonFee,
} from "../../../utility/calculatorValues";
import useCommissionData from "../../../utility/useCommissionData";

export const useSellForm = () => {
  const { calculateCommission, calculateCGT } = useCommissionData();

  const calculateValues = (values) => {
    const totalAmount = values.shareQty * values.sellPrice;

    const brokerCommissionValue = calculateCommission(totalAmount);
    const sebbonFeeAmountValue = getSebbonFee(totalAmount);

    const grossProfit = totalAmount - values.buyPrice * values.shareQty;
    const capitalGaintaxInComplete =
      grossProfit - brokerCommissionValue - sebbonFeeAmountValue - DP_FEE;
    const capitalGainTax = calculateCGT(
      values.investorType,
      values.holdingPeriod,
      capitalGaintaxInComplete
    );

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
