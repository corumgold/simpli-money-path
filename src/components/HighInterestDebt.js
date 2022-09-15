import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { formatter } from "../helperFuncs";
import { setCurrentStep } from "../redux/user";

const HighInterestDebt = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state);

  const handleClick = () => {
    dispatch(setCurrentStep("emergency fund"));
    navigate("/emergency-fund");
  };

  if (!user.debt) {
    return (
      <>
        <h1>Since you don't have any debt, you can skip this part!</h1>
        <button onClick={handleClick}>Move On</button>
      </>
    );
  }

  return (
    <>
      <h1>Let's pay off some debt, {user.name}! </h1>
      <h2>
        Paying off debt not only gives you room to "breathe" - it also frees up
        extra cash!
      </h2>
      <h3>
        Of the {formatter.format(user.debt)} you currently owe, take a few
        minutes to figure out how much is HIGH interest debt ({">"} 10%).
      </h3>
      <h3>
        We recommend using{" "}
        <a href="https://unbury.me/" target={"_blank"} rel="noreferrer">
          this tool
        </a>{" "}
        to put that{" "}
        <span>
          {formatter.format(user.monthlyIncome - user.monthlyExpenses)}
        </span>{" "}
        left over each month to work and get that debt paid off!
      </h3>
      <button onClick={handleClick}>High Interest Debt? Paid!</button>
    </>
  );
};

export default HighInterestDebt;
