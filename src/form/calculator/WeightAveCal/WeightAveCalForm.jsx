import React, { useState } from "react";
import useCommissionData from "../../../utility/useCommissionData";
import { useFormik } from "formik";
import { DP_FEE, getSebbonFee } from "../../../utility/calculatorValues";

const WeightAveCalForm = () => {
  const { calculateCommission } = useCommissionData();
  const calculateValues = (values) => {
    let totalQuantity = 0;
    let totalWeightedAmount = 0;

    const calculateTotalAmountRate = (quantity, rate) => quantity * rate;
    const calculateTotalAmountValue = (quantity, faceValue) =>
      quantity * faceValue;

    const updatedWegCal = values.wegCal.map((section, index) => {
      const FaceValue = values.faceValue;

      const totalAmountRate = calculateTotalAmountRate(
        section.quantity,
        section.rate
      );
      const totalAmountValue = calculateTotalAmountValue(
        section.quantity,
        FaceValue
      );
      const brokerCommissionValue = calculateCommission(totalAmountRate);
      const sebbonFeeAmountValue = getSebbonFee(totalAmountRate);

      const IPO = section.shareType === "IPO" ? totalAmountRate : 0;
      const Secondary =
        section.shareType === "Secondary"
          ? totalAmountRate +
            brokerCommissionValue +
            DP_FEE +
            sebbonFeeAmountValue
          : 0;
      const FPO = section.shareType === "FPO" ? totalAmountRate : 0;
      const Right = section.shareType === "Right" ? totalAmountValue : 0;
      const Bonus = section.shareType === "Bonus" ? totalAmountValue : 0;
      const Auction = section.shareType === "Auction" ? totalAmountRate : 0;

      totalQuantity += Number(section.quantity);

      const valuesToSum = [IPO, Secondary, FPO, Right, Bonus, Auction];
      totalWeightedAmount += valuesToSum.reduce((acc, value) => acc + value, 0);

      return {
        ...section,
        totalAmountRate: totalAmountRate.toFixed(2),
        totalAmountValue: totalAmountValue.toFixed(2),
        brokerCommission: brokerCommissionValue.toFixed(2),
        sebbonFeeAmount: sebbonFeeAmountValue.toFixed(2),
        dp_Fee: DP_FEE,
        ipo: IPO.toFixed(2),
        secondary: Secondary.toFixed(2),
        fpo: FPO.toFixed(2),
        right: Right.toFixed(2),
        bonus: Bonus.toFixed(2),
        auction: Auction.toFixed(2),
        faceValue: FaceValue,
      };
    });

    return {
      wegCal: updatedWegCal,
      totalQuantity,
      totalWeightedAmount,
    };
  };
  const handleAddSection = () => {
    formik.setValues((prevValues) => ({
      ...prevValues,
      wegCal: [
        ...prevValues.wegCal,
        { shareType: "", quantity: "", rate: "", faceValue: "" },
      ],
    }));
  };

  const handleBlur = (index) => {
    formik.handleBlur(`wegCal[${index}].quantity`);
    formik.handleBlur(`wegCal[${index}].rate`);
    formik.handleBlur(`wegCal[${index}].faceValue`);
    const calculatedValues = calculateValues(formik.values);
    formik.setValues({
      ...formik.values,
      ...calculatedValues,
    });
  };

  const formik = useFormik({
    initialValues: {
      wegCal: [
        {
          shareType: "IPO",
          quantity: "",
          rate: "",
          totalAmountRate: "",
          totalAmountValue: "",
          faceValue: "",
          brokerCommissionValue: "",
          DP_FEE: "",
          sebbonFeeAmount: "",
        },
      ],
    },
    onSubmit: (values) => {
      const calculatedValues = calculateValues(values);
      formik.setValues({
        ...values,
        ...calculatedValues,
      });
    },
  });

  return {
    formik,
    handleAddSection,
    handleBlur,
  };
};

export default WeightAveCalForm;
