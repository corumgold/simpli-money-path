import React, { useState } from "react";
import { useSelector } from "react-redux";

import {
  formatter,
  getMonthlySavingsNumber,
  getRetirementNumber,
  getTotal,
  yearsToReachFutureValue,
} from "../../helperFuncs";

const buttonContainerStyles = {
  display: "flex",
  gap: "10px",
};

const buttonStyles = {
  padding: "8px 16px",
};

const warningStyles = {
  color: "#FF6347",
};

const EarlyRetirementPlan = () => {
  const [savingsRate, setSavingsRate] = useState(15);
  const [currentSavings, setCurrentSavings] = useState(0);

  const user = useSelector((state) => state);
  const disposableIncome = getTotal(user.monthlyIncome) - getTotal(user.budget);
  const monthlySavingsNumber = getMonthlySavingsNumber(user, savingsRate);

  const handleChange = (event) => {
    setCurrentSavings(event.target.value);
  };

  return (
    <>
      <h1>
        {formatter.format(getRetirementNumber(user))} is easier to obtain than
        you may think.
      </h1>
      <form className="money-data">
        <div className="form-item">
          <label>Current Savings</label>
          <input
            type="number"
            name="current-savings"
            value={currentSavings}
            onChange={handleChange}
          />
        </div>
      </form>
      <h2>
        If you are saving {savingsRate}% of your take-home pay (
        {formatter.format(monthlySavingsNumber)}), it will take you{" "}
        {yearsToReachFutureValue(
          getRetirementNumber(user),
          getMonthlySavingsNumber(user, savingsRate),
          8,
          currentSavings
        )}
        .*
      </h2>
      <div style={buttonContainerStyles}>
        <button
          style={buttonStyles}
          onClick={() => setSavingsRate(savingsRate + 1)}
        >
          Savings++
        </button>
        <button
          style={buttonStyles}
          onClick={() => savingsRate > 1 && setSavingsRate(savingsRate - 1)}
        >
          Savings--
        </button>
      </div>
      {monthlySavingsNumber > disposableIncome ? (
        <p style={warningStyles}>
          {formatter.format(monthlySavingsNumber)} is more than your current
          disposable income of {formatter.format(disposableIncome)}
        </p>
      ) : null}
      <p className="citation">*Assuming an 8% rate of return</p>
    </>
  );
};

export default EarlyRetirementPlan;
