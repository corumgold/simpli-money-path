import React, { useEffect } from "react";
import { useState } from "react";
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

  const handleName = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setName(userName));
    dispatch(setCurrentStep("income"));
    navigate("/simpli-path/income");
  };

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
        housing: 0,
        transportation: 0,
        food: 0,
        utilities: 0,
        medical: 0,
        insurance: 0,
        household: 0,
        entertainment: 0,
        gifts: 0,
        debt: 0,
        other: 0,
      })
    );
  };

  useEffect(() => {
    return;
  }, [user]);

  return (
    <>
      {!user.name ? (
        <>
          <h1>
            <span>77%</span> of Americans are anxious about their financial
            situation.*
          </h1>

          <h2>
            If you feel the same way, <span>today that changes</span>.
          </h2>
          <form>
            <label htmlFor="name">What's your name?</label>
            <input name="name" value={userName || ""} onChange={handleName} />

            <button onClick={handleSubmit}>Let's Do This!</button>
          </form>
        </>
      ) : (
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
      )}

      {!user.name && <p>*Capital One & The Decision Lab</p>}
    </>
  );
};

export default Start;
