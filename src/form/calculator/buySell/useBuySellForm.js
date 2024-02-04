import { useFormik } from "formik";
import {
  DP_FEE,
  getNumberIntoCurrency,
  getSebbonFee,
} from "../../../utility/calculatorValues";
import { buySellSchema } from "./buySellSchema";
import useCommissionData from "../../../utility/useCommissionData";

export const useBuySellForm = () => {
  const { calculateCommission } = useCommissionData();
  const calculateBuyValues = (values) => {
    const buyTotalAmount = Number(values.buyPrice) * Number(values.shareQty);

    try {
      const brokerCommissionValue = calculateCommission(buyTotalAmount);

      const sebbonFeeAmountValue = getSebbonFee(buyTotalAmount);
      const totalPayable =
        buyTotalAmount + brokerCommissionValue + sebbonFeeAmountValue + DP_FEE;

      const costPerShare = (totalPayable / Number(values.shareQty)).toFixed(2);

      return {
        brokerCommission: getNumberIntoCurrency(brokerCommissionValue),
        sebbonFeeAmount: getNumberIntoCurrency(sebbonFeeAmountValue),
        dp_Fee: DP_FEE,
        buyTotalAmount: getNumberIntoCurrency(buyTotalAmount),
        buyAmountPayable: getNumberIntoCurrency(totalPayable),
        costPerShare: getNumberIntoCurrency(costPerShare),
      };
    } catch (error) {
      console.error("An error occurred:", error);
      return {
        brokerCommission: "N/A",
        sebbonFeeAmount: "N/A",
        dp_Fee: DP_FEE,
        buyTotalAmount: "N/A",
        buyAmountPayable: "N/A",
        costPerShare: "N/A",
      };
    }
  };

  const formik = useFormik({
    initialValues: {
      shareQty: "",
      buyPrice: "",
      brokerCommission: "",
      sebbonFeeAmount: "",
      buyTotalAmount: "",
      buyAmountPayable: "",
      costPerShare: "",
    },
    validationSchema: buySellSchema,
    onSubmit: async (values) => {
      try {
        const calculatedBuyValues = await calculateBuyValues(values);
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
