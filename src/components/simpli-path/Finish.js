import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RetirementMatch = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <h1>Congratulations, {user.name}! You are in great financial shape!</h1>
      <h2>
        At this point you have some options depending on your current situation
        - here are our recommendations.
      </h2>
      <h3>
        <a
          href="https://investor.vanguard.com/accounts-plans/529-plans"
          target="_blank"
          rel="noreferrer"
        >
          Start a college fund
        </a>
      </h3>
      <h3>
        <a
          href="https://www.businessinsider.com/personal-finance/paying-off-mortgage-early-pros-cons"
          target="_blank"
          rel="noreferrer"
        >
          Pay off your home
        </a>
      </h3>
      <h3>
        <a href="/early-retirement/intro">Invest more/Retire early</a>
      </h3>
      <button onClick={handleClick}>Take me home</button>
    </>
  );
};

export default RetirementMatch;
