import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentStep } from "../../redux/user";
import { formatter, getRetirementNumber } from "../../helperFuncs";

const EarlyRetirement = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state);

  const handleClick = () => {
    dispatch(setCurrentStep("early retirement plan"));
    navigate("/early-retirement/plan");
  };

  return (
    <>
      <h1>So you're thinking of retiring early?</h1>
      <h2>
        According to the popular{" "}
        <a
          href="https://www.investopedia.com/terms/f/four-percent-rule.asp"
          target="_blank"
          rel="noreferrer"
        >
          4% Rule
        </a>
        , you're going to need 20x your yearly spend in investment accounts to
        retire.
      </h2>
      <h3>
        For you, {user.name}, that number is{" "}
        <span>{formatter.format(getRetirementNumber(user))}</span>.
      </h3>
      <button onClick={handleClick}>How Do We Do It?</button>
    </>
  );
};

export default EarlyRetirement;
