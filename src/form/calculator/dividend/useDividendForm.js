import { useFormik } from "formik";

export const useDividendForm = () => {
  const formik = useFormik({
    initialValues: {
      shareQuantity: "",
      bonusDividend: "",
      cashDividend: "",
      paidUpValue: "",
      cashAmount: 0,
      cashAmountTax: 0,
      receivableBonusQuantity: 0,
      bonusShareTax: 0,
      totalPayableTax: 0,
    },
    onSubmit: (values) => {
      const bonusShareTax =
        values?.shareQuantity *
        (values?.bonusDividend / 100) *
        values?.paidUpValue *
        0.05;

      const receivableBonusQuantity =
        values?.shareQuantity * (values?.bonusDividend / 100);

      const cashAmount =
        values?.shareQuantity *
        values?.paidUpValue *
        (values?.cashDividend / 100);

      const cashAmountTax = cashAmount * 0.05;

      const totalPayableTax = cashAmountTax + bonusShareTax;

      formik.setFieldValue("totalPayableTax", totalPayableTax.toFixed(2));
      formik.setFieldValue("bonusShareTax", bonusShareTax.toFixed(2));
      formik.setFieldValue(
        "receivableBonusQuantity",
        receivableBonusQuantity.toFixed(2)
      );
      formik.setFieldValue("cashAmount", cashAmount.toFixed(2));
      formik.setFieldValue("cashAmountTax", cashAmountTax.toFixed(2));
    },
  });

  return {
    formik,
  };
};
