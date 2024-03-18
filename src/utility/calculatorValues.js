import { isNumber, lowerCase } from "lodash";
import { axiosInstance } from "./../api/axiosInterceptor";
import { fetchTable } from "../redux/actions/fetchTable";
import { useDispatch } from "react-redux";

export const DP_FEE = 25;
export const SEBBON_FEE = 0.00015;

export const getSebbonFee = (amount) => {
  return amount * SEBBON_FEE;
};

const fetchCommissionData = async () => {
  try {
    const { data } = await axiosInstance.get("/commission");
    return data;
  } catch (err) {
    console.error("🚀 ~ fetchCommissionData ~ err:", err);
    throw err; // Rethrow the error to be handled by the calling function
  }
};

export const brokerComission = async (amount) => {
  try {
    const commissionData = await fetchCommissionData();

    const brokerData = commissionData?.filter(
      (item) => item.activeStatus && item.stockType === "EQ"
    );

    const commission = brokerData.find(({ amountFrom, amountTo }) => {
      return amount >= amountFrom && amount <= amountTo;
    });

    if (commission) {
      const calculatedCommission = commission.percentage * amount;

      return calculatedCommission < commission.minimumAmount
        ? commission.minimumAmount
        : calculatedCommission / 100;
    }
  } catch (err) {
    console.log("🚀 ~ brokerComission ~ err:", err);
  }

  // If no matching commission found or an error occurred, return 0
  return 0;
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
