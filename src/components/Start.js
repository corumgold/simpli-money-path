import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setName,
  setIncome,
  setExpenses,
  setDebt,
  setCurrentStep,
} from "../redux/user";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const user = useSelector((state) => state);
  console.log(user);

  const handleName = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setName(userName));
    dispatch(setCurrentStep("income"));
    navigate("/income");
  };

  const handleContinue = (e) => {
    e.preventDefault();
    switch (user.currentStep) {
      case "income":
        navigate("./income");
        break;
      case "expenses":
        navigate("./expenses");
        break;
      case "debts":
        navigate("./debts");
        break;
      case "initial emergency":
        navigate("./initial-emergency-fund");
        break;
      case "401k match":
        navigate("./retirement-match");
        break;
      case "high interest debt":
        navigate("./high-interest-debt");
        break;
      case "emergency fund":
        navigate("./emergency-fund");
        break;
        case "moderate interest debt":
          navigate("./moderate-interest-debt");
          break;
      default:
        navigate("./income");
    }
  };

  const handleRestart = (e) => {
    e.preventDefault();
    dispatch(setName(""));
    dispatch(setIncome(0));
    dispatch(setExpenses(0));
    dispatch(setDebt(0));
    dispatch(setCurrentStep(null));
  };

  useEffect(() => {
    return;
  }, [user]);

  return (
    <>
      <h1>69% of Americans aren't saving enough to ever retire*</h1>
      <h1>56% couldn't pay for a $1,000 emergency*</h1>

      <h2>If that sounds like you, today that changes.</h2>

      {!user.name ? (
        <form>
          <label htmlFor="name">What's your name?</label>
          <input name="name" value={userName || ""} onChange={handleName} />

          <button onClick={handleSubmit}>Let's Do This!</button>
        </form>
      ) : (
        <>
          <h2>Hello, {user.name}</h2>
          <button onClick={handleContinue}>Continue</button>
          <button onClick={handleRestart}>Restart</button>
        </>
      )}

      <p>*Bankrate</p>
    </>
  );
};

export default Start;
