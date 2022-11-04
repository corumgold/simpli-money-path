import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setName,
  setIncome,
  setExpenses,
  setDebt,
  setCurrentStep,
  setBudget,
} from "../../redux/user";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const user = useSelector((state) => state);


  // const handleName = (e) => {
  //   setUserName(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(setName(userName));
  //   dispatch(setCurrentStep("income"));
  //   navigate("/simpli-path/income");
  // };

  const handleContinue = (e) => {
    e.preventDefault();
    switch (user.currentStep) {
      case "income":
        navigate("/simpli-path/income");
        break;
      case "expenses":
        navigate("/simpli-path/expenses");
        break;
      case "debts":
        navigate("/simpli-path/debts");
        break;
      case "initial emergency":
        navigate("/simpli-path/initial-emergency-fund");
        break;
      case "401k match":
        navigate("/simpli-path/retirement-match");
        break;
      case "high interest debt":
        navigate("/simpli-path/high-interest-debt");
        break;
      case "emergency fund":
        navigate("/simpli-path/emergency-fund");
        break;
      case "moderate interest debt":
        navigate("/simpli-path/moderate-interest-debt");
        break;
      case "finish":
        navigate("/simpli-path/finish");
        break;
      default:
        navigate("/simpli-path/income");
    }
  };

  const handleRestart = (e) => {
    e.preventDefault();
    dispatch(setName(""));
    dispatch(setIncome(0));
    dispatch(setExpenses(0));
    dispatch(setDebt(0));
    dispatch(setCurrentStep(null));
    dispatch(
      setBudget({
        Housing: 0,
        Transportation: 0,
        Food: 0,
        Utilities: 0,
        Medical: 0,
        Insurance: 0,
        "Household Supplies": 0,
        Entertainment: 0,
        Gifts: 0,
        "Debt Payments": 0,
        Other: 0,
      })
    );
  };

  return (
    <>
          <h1>Welcome back, {user.name}!</h1>
          <h2>
            Would you like to <span>continue</span> where you left off on your
            journey or <span>start fresh</span>?
          </h2>
          <div className="start-buttons">
            <button onClick={handleContinue}>Continue</button>
            <button onClick={handleRestart}>Restart</button>
          </div>
    </>
  );
};

export default Start;
