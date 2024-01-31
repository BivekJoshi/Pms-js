import { useFormik } from "formik";
import {
  DP_FEE,
  brokerComission,
  getNumberIntoCurrency,
  getSebbonFee,
} from "../../../utility/calculatorValues";
import { buySellSchema } from "./buySellSchema";

export const useBuySellForm = () => {
  const calculateBuyValues = (values) => {
    const buyTotalAmount = values.buyPrice * values.shareQty;
    const brokerCommissionValue = brokerComission(buyTotalAmount);
    const sebbonFeeAmountValue = getSebbonFee(buyTotalAmount);
    const totalPayable = (
      buyTotalAmount +
      brokerCommissionValue +
      sebbonFeeAmountValue +
      DP_FEE
    ).toFixed(2);

    const costPerShare = (totalPayable / values.shareQty).toFixed(2);

    return {
      brokerCommission: getNumberIntoCurrency(brokerCommissionValue),
      sebbonFeeAmount: getNumberIntoCurrency(sebbonFeeAmountValue),
      dp_Fee: DP_FEE,
      buyTotalAmount: getNumberIntoCurrency(buyTotalAmount),
      buyAmountPayable: getNumberIntoCurrency(totalPayable),
      costPerShare: getNumberIntoCurrency(costPerShare),
    };
  };

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
      try {
        const calculatedBuyValues = calculateBuyValues(values);
        // Update formik state with the new values
        formik.setValues({
          ...values,
          ...calculatedBuyValues,
        });

        // Your other form submission logic
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
