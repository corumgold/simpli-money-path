import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setIncome } from "../redux/user";
import { useNavigate } from "react-router-dom";

const Income = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const [userIncome, setUserIncome] = useState({
    salary: 0,
    disability: 0,
    alimonyChildSupport: 0,
    other: 0,
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
    navigate("/expenses");
  };

  return (
    <>
      <h2>Okay {user.name}, it's time to get a little personal.</h2>
      <h3>
        I need to know what your total monthly GROSS income is (this is the
        amount of money you make after taxes).
      </h3>
      <h3>
        If you don't know how much that is, check out this{" "}
        <a
          href="https://smartasset.com/taxes/paycheck-calculator"
          target="_blank"
          rel="noreferrer"
        >
          great tool
        </a>{" "}
        to get your after tax income, then meet me back here!
      </h3>

      <form>
        {Object.keys(userIncome).map((source) => {
          return (
            <div className="form-item" key={source}>
              <label htmlFor={source}>{source}:</label>
              <input
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
