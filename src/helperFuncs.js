export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const initEmergencyCalc = function (user) {
  const unrounded = 1000 / (user.monthlyIncome - user.monthlyExpenses);
  return Math.round(unrounded * 10) / 10;
};
