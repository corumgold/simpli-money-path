import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentStep } from "../../redux/user";
import { formatter, getTotal } from "../../helperFuncs";

const RetirementMatch = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state);

  const handleClick = () => {
    dispatch(setCurrentStep("finish"));
    navigate("/simpli-path/finish");
  };

  return (
    <>
      <h1>Time to put retirement on auto-pilot.</h1>
      <h2>
        Face it - nobody wants to work forever, so <span>15%</span> is the magic
        number when it comes to retirement savings.*
      </h2>
      <h3>
        For you, {user.name}, that looks like{" "}
        <span>
          {formatter.format(Math.floor(getTotal(user.monthlyIncome) * 0.15))}
        </span>{" "}
        every month in your 401k, and/or an{" "}
        <a
          href="https://investor.vanguard.com/accounts-plans/iras/how-to-open-an-ira"
          target="_blank"
          rel="noreferrer"
        >
          IRA
        </a>
        . (We suggest making this an automatic deduction!)
      </h3>
      <button onClick={handleClick}>All Set!</button>
      <p className="citation">*Fidelity</p>
    </>
  );
};

export default RetirementMatch;
