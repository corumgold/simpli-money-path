import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatter } from "../helperFuncs";

const HighInterestDebt = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const handleClick = () => {
    navigate("/emergency-fund");
  };

  if (!user.debt) {
    return (
      <>
        <h2>Since you don't have any debt, you can skip this part!</h2>
        <button onClick={handleClick}>Move Forward</button>
      </>
    );
  }

  return (
    <>
      <h2>
        Let's start paying down some debt! Paying off debt not only gives you
        room to "breathe," but it also frees up extra cash every month!
      </h2>
      <h3>
        Of the {formatter.format(user.debt)} you currently owe, take a few
        minutes to figure out how much of this is HIGH interest debt ({">"}{" "}
        10%).
      </h3>
      <h3>
        If you don't have any high interest debt, great! You can keep moving,
        however if so, we recommend using{" "}
        <a href="https://unbury.me/" target={"_blank"} rel="noreferrer">
          this tool
        </a>{" "}
        to start contributing the{" "}
        {formatter.format(user.monthlyIncome - user.monthlyExpenses)} you have
        left over each month to paying off this pesky debt!
      </h3>
      <button onClick={handleClick}>Move Forward</button>
    </>
  );
};

export default HighInterestDebt;
