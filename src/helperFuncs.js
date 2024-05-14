export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});

export const EmergencyCalc = function (user, amtToSave) {
  const unrounded = amtToSave / (getTotal(user.monthlyIncome) - getTotal(user.budget));
  return Math.floor(unrounded);
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
