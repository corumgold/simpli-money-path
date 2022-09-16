import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setIncome, setCurrentStep } from "../../redux/user";
import { useNavigate } from "react-router-dom";

const Income = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state);

  const [userIncome, setUserIncome] = useState({
    Salary: 0,
    Disability: 0,
    "Alimony/Child Support": 0,
    Other: 0,
  });

  const handleChange = (prop) => (event) => {
    setUserIncome({
      ...userIncome,
      [prop]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = Object.values(userIncome).reduce(
      (acc, curr) => acc + +curr,
      0
    );
    dispatch(setIncome(total));
    dispatch(setCurrentStep("expenses"));
    navigate("/simpli-path/expenses");
  };

  return (
    <>
      <h1>Okay {user.name}, it's time to get a little personal.</h1>
      <h2>
        I need to know what your <span>monthly</span> NET income is (the amount
        of money you make after taxes).
      </h2>
      <h3>
        If you don't know how much that is, check out this{" "}
        <a
          href="https://smartasset.com/taxes/paycheck-calculator"
          target="_blank"
          rel="noreferrer"
        >
          great tool
        </a>{" "}
        to get your after tax income - we'll meet you back here!
      </h3>

      <form className="money-data">
        {Object.keys(userIncome).map((source) => {
          return (
            <div className="form-item" key={source}>
              <label htmlFor={source}>{source}:</label>
              <input
                type="number"
                name={source}
                value={userIncome[source]}
                onChange={handleChange(source)}
              ></input>
            </div>
          );
        })}

        <button onClick={handleSubmit}>Continue</button>
      </form>
    </>
  );
};

export default Income;
