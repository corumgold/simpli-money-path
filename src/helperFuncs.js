export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});

export const EmergencyCalc = function (user, amtToSave) {
  const unrounded = amtToSave / (user.monthlyIncome - user.monthlyExpenses);
  return Math.ceil(unrounded);
};
