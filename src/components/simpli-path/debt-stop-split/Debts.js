import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ExOverIn from "./ExOverIn";
import { setCurrentStep, setDebt } from "../../../redux/user";
import { getTotal } from "../../../helperFuncs";

const Debts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state);

  const [userDebts, setUserDebts] = useState({
    "Auto Loan(s)": 0,
    "Credit Card(s)": 0,
    "Student Loan(s)": 0,
    Other: 0,
  });

  const handleChange = (prop) => (e) => {
    setUserDebts({
      ...userDebts,
      [prop]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const total = Object.values(userDebts).reduce(
      (acc, curr) => acc + +curr,
      0
    );
    dispatch(setDebt(total));
    dispatch(setCurrentStep("initial emergency"));
    getTotal(userDebts)
      ? navigate("/simpli-path/initial-emergency-fund")
      : navigate("/simpli-path/no-debt");
  };

  if (user.monthlyExpenses > user.monthlyIncome) {
    return <ExOverIn user={user} />;
  }

  return (
    <>
      <h1>Let's talk about the REAL four letter word... "debt"</h1>
      <h2>
        <span>77%</span> of American households have some form of debt.*
      </h2>
      <h2>Use the form below to input any debts you may have.</h2>
      <form className="money-data">
        {Object.keys(userDebts).map((debt) => {
          return (
            <div className="form-item" key={debt}>
              <label htmlFor={debt}>{debt}:</label>
              <input
                type="number"
                name={debt}
                value={userDebts[debt]}
                onChange={handleChange(debt)}
              ></input>
            </div>
          );
        })}
        <button onClick={handleSubmit}>Continue</button>
      </form>
      <p className="citation">*2020 Federal Reserve Bulletin</p>
    </>
  );
};

export default Debts;
