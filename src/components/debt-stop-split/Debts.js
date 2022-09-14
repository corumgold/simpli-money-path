import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ExOverIn from "./ExOverIn";
import { setCurrentStep, setDebt } from "../../redux/user";

const Debts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state);
  console.log(user);

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
    navigate("/initial-emergency-fund");
  };

  if (user.monthlyExpenses > user.monthlyIncome) {
    return <ExOverIn user={user} />;
  }

  return (
    <>
      <h1>Let's talk about the REAL four letter word... "debt"</h1>
      <h2>
        Odds are, you have some form of debt - <span>77%</span> of American
        households do!*
      </h2>
      <h2>Use the form below to input any debts you may have.</h2>
      <form>
        {Object.keys(userDebts).map((debt) => {
          return (
            <div className="form-item" key={debt}>
              <label htmlFor={debt}>{debt}:</label>
              <input
                name={debt}
                value={userDebts[debt]}
                onChange={handleChange(debt)}
              ></input>
            </div>
          );
        })}
        <button onClick={handleSubmit}>Continue</button>
      </form>
      <p>*2020 Federal Reserve Bulletin</p>
    </>
  );
};

export default Debts;
