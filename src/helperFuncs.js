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
    case "early retirement plan":
      return "/early-retirement/plan";
    default:
      return "/simpli-path/income";
  }
}

export function getMonthlySavingsNumber(user, rate) {
  return Math.floor(getTotal(user.monthlyIncome) * (rate / 100));
}

export function getRetirementNumber(user) {
  return getTotal(user.budget) * 12 * 20;
}

export function yearsToReachFutureValue(
  futureValue,
  monthlyContribution,
  interestRate,
  presentValue
) {
  interestRate /= 100;

  let currentValue = presentValue;
  let months = 0;

  while (currentValue < futureValue) {
    // Apply monthly interest
    currentValue *= 1 + interestRate / 12;
    // Add monthly contribution
    currentValue += monthlyContribution;
    // Increment month count
    months++;
  }

  // Convert months to years and remaining months
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  // Construct the result string
  let resultString = "";
  if (years > 0) {
    resultString += `${years} years`;
  }
  if (remainingMonths > 0) {
    if (years > 0) {
      resultString += " ";
    }
    resultString += `and ${remainingMonths} months`;
  }

  return resultString;
}
