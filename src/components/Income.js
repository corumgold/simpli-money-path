import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setName } from "../redux/money";
import { useNavigate } from "react-router-dom";

const Income = () => {
    const userName = useSelector((state) => state);
    console.log(userName)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userIncome, setUserIncome] = useState({ monthlyIncome: "" });

  const handleName = (e) => {
    // setUserName({ ...userName, name: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setName(userName));
    navigate("/income");
  };

  return (
    <>
      <h2>Okay {userName}, it's time to get a little personal.</h2>
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
        <label htmlFor="name">What's your gross monthly income?</label>
        <input name="name" value={userName.name || ""} onChange={handleName} />

        <button onClick={handleSubmit}>Let's Go!</button>
      </form>
    </>
  );
};

export default Income;
