export function getTotal(userIncome) {
  return Object.values(userIncome).reduce((acc, curr) => acc + +curr, 0);
}

export function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}