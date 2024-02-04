import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTable } from "../redux/actions/fetchTable";
import _ from "lodash";

const isEmptyObject = (obj) => {
  return _.isEmpty(obj);
};
const useCommissionData = () => {
  const dispatch = useDispatch();
  const commissionData = useSelector((state) => state.basicTable.data);
  const commissionLoading = useSelector((state) => state.basicTable.processing);
  const reCallAPi = isEmptyObject(commissionData);
  useEffect(() => {
    // Fetch commission data when the hook is first used
    if (reCallAPi) {
      dispatch(fetchTable("/commission"));
    }
  }, [dispatch, reCallAPi]);

  const calculateCommission = (amount) => {
    if (commissionData && amount) {
      const brokerData = Object.values(commissionData).filter(
        (item) => item.activeStatus && item.commissionType === "BROKER"
      );

      const commission = brokerData.find(({ amountFrom, amountTo }) => {
        return amount >= amountFrom && amount <= amountTo;
      });

      if (commission) {
        const calculatedCommission = (commission.percentage / 100) * amount;

        return calculatedCommission < commission.minimumAmount
          ? commission.minimumAmount
          : calculatedCommission;
      }
    }

    // If no matching commission found or an error occurred, return 0
    return 0;
  };

  const calculateCGT = (
    investorType,
    holdingPeriod,
    capitalGaintaxInComplete
  ) => {
    if ((commissionData && investorType, holdingPeriod)) {
      const cgtData = Object.values(commissionData).filter(
        (item) => item.activeStatus && item.commissionType === "CGT"
      );
      const stockType =
        investorType === "institution"
          ? "COR"
          : investorType === "individual" && holdingPeriod === "short-period"
          ? "STI"
          : investorType === "individual" && holdingPeriod === "long-period"
          ? "LTI"
          : "";

      const commission = cgtData.find((item) => item.stockType === stockType);
      if (commission) {
        const calculatedCommission =
          (commission.percentage / 100) * capitalGaintaxInComplete;

        return calculatedCommission < commission.minimumAmount
          ? commission.minimumAmount
          : calculatedCommission;
      }
    }
    // If no matching commission found or an error occurred, return 0
    return 0;
  };

  return {
    commissionData,
    commissionLoading,
    calculateCommission,
    calculateCGT,
  };
};

export default useCommissionData;
