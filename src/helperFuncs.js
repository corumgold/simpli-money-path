export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const EmergencyCalc = function (user, amtToSave) {
  const unrounded =
    amtToSave / (user.monthlyIncome - user.monthlyExpenses) 
  return Math.round(unrounded * 10) / 10;
};
