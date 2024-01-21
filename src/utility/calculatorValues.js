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
