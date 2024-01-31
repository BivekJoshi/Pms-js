import { isNumber, lowerCase } from "lodash";

export const DP_FEE = 25;
export const SEBBON_FEE = 0.00015;

export const getSebbonFee = (amount) => {
  return amount * SEBBON_FEE;
};

export const brokerComission = (amount) => {
  const commissionRates = [
    { maxAmount: 50000, rate: 0.004 },
    { maxAmount: 500000, rate: 0.0037 },
    { maxAmount: 2000000, rate: 0.0034 },
    { maxAmount: 10000000, rate: 0.003 },
    { maxAmount: Infinity, rate: 0.0027 },
  ];

  const commission = commissionRates.find(
    ({ maxAmount }) => amount <= maxAmount
  );
  return commission
    ? commission.rate * amount < 10
      ? 10
      : commission.rate * amount
    : 0;
};

export const getNumberIntoCurrency = (number) => {
  try {
    if (number && number < 0.01 && number > -0.01) return 0;
    if (number) {
      let num = number;
      let isnumber = isNumber(num);
      if (isnumber) {
        let retValue = new Intl.NumberFormat("en-IN", {
          maximumFractionDigits: 2,
        }).format(number);
        return retValue !== "NaN" ? retValue : number;
      } else {
        let numCopy = number;
        let bracketsIncluded = false;
        if (numCopy.includes("(")) {
          numCopy = numCopy.replace(/[()]/g, "");
          bracketsIncluded = true;
        }
        let ret = new Intl.NumberFormat("en-IN", {
          maximumFractionDigits: 2,
        }).format(parseFloat(numCopy));
        if (lowerCase(number.toString()).includes("dr")) return ret + " DR";
        else if (lowerCase(number.toString()).includes("cr"))
          return ret + " CR";
        else if (bracketsIncluded) return "(" + ret + ")";
        else return ret !== "NaN" ? ret : number;
      }
    } else return number;
  } catch {
    return number;
  }
};
