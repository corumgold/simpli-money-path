import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { useSelector } from "react-redux";
ChartJS.register(...registerables);

const DebtsCalc = () => {
  const user = useSelector((state) => state);
  const disposableIncome = user.monthlyIncome - user.monthlyExpenses;
  console.log(user.debt);
  console.log(disposableIncome);

  const createArrayOfMonthsToPayoff = (totalDebt, monthlyDisposable) => {
    const totalMonths = Math.ceil(totalDebt / monthlyDisposable);
    const months = [];

    function addMonths(numOfMonths, date = new Date()) {
      date.setMonth(date.getMonth() + numOfMonths);
      return date;
    }

    for (let i = totalMonths; i >= 0; i--) {
      // months.unshift(`${new Date().getMonth() + i}/${new Date().getFullYear()}`);
      months.unshift(addMonths(i).getMonth());
    }
    return months;
  };

  const createMonthlyDebtPaydownAmts = (totalDebt, monthlyDisposable) => {
    const monthlyDebtArr = [];
    for (let i = totalDebt; i >= 0; i -= monthlyDisposable) {
      monthlyDebtArr.push(i);
    }
    return monthlyDebtArr;
  };

  // console.log(createMonthlyDebtPaydownAmts(user.debt, disposableIncome));

  return (
    <>
      <h1>Debts</h1>
      <Bar
        // datasetIdKey="id"
        data={{
          labels: createArrayOfMonthsToPayoff(user.debt, disposableIncome),
          datasets: [
            {
              borderColor: "green",
              backgroundColor: "#8ac926",
              // id: 1,
              label: "Total Debt",
              data: createMonthlyDebtPaydownAmts(user.debt, disposableIncome),
            },
          ],
        }}
      />
    </>
  );
};

export default DebtsCalc;
