export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});

export const EmergencyCalc = function (user, amtToSave) {
  const unrounded =
    amtToSave / (getTotal(user.monthlyIncome) - getTotal(user.budget));
  return Math.round(unrounded);
};

export function getTotal(userIncome) {
  return Object.values(userIncome).reduce((acc, curr) => {
    const num = parseFloat(curr);
    if (!isNaN(num)) {
      return acc + num;
    }
    return acc;
  }, 0);
}

export function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function navigateToStep(step) {
  switch (step) {
    case "income":
      return "/simpli-path/income";
    case "expenses":
      return "/simpli-path/expenses";
    case "debts":
      return "/simpli-path/debts";
    case "no debt":
      return "/simpli-path/no-debt";
    case "initial emergency":
      return "/simpli-path/initial-emergency-fund";
    case "401k match":
      return "/simpli-path/retirement-match";
    case "high interest debt":
      return "/simpli-path/high-interest-debt";
    case "emergency fund":
      return "/simpli-path/emergency-fund";
    case "moderate interest debt":
      return "/simpli-path/moderate-interest-debt";
    case "retirement":
      return "/simpli-path/retirement";
    case "finish":
      return "/simpli-path/finish";
    default:
      return "/simpli-path/income";
  }
}
