import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setIncome } from "../redux/user";
import { useNavigate } from "react-router-dom";

const Income = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  console.log(user)

  const name = useSelector((state) => state.user.name);
  const [userIncome, setUserIncome] = useState({
    salary: 0,
    disability: 0,
    alimonyChildSupport: 0,
    other: 0,
  });

  const handleSalary = (e) => {
    setUserIncome({ ...userIncome, salary: e.target.value });
  };

  const handleDisability = (e) => {
    setUserIncome({ ...userIncome, disability: e.target.value });
  };

  const handleACS = (e) => {
    setUserIncome({ ...userIncome, alimonyChildSupport: e.target.value });
  };

  const handleOther = (e) => {
    setUserIncome({ ...userIncome, other: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = Object.values(userIncome).reduce(
      (acc, curr) => acc + +curr,
      0
    );
    dispatch(setIncome(total));
  };

  return (
    <>
      <h2>Okay {name}, it's time to get a little personal.</h2>
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
        <label htmlFor="salary">Salary: </label>
        <input
          name="salary"
          value={userIncome.salary}
          onChange={handleSalary}
        />

        <label htmlFor="disability">Disability: </label>
        <input
          name="disability"
          value={userIncome.disability}
          onChange={handleDisability}
        />

        <label htmlFor="acs">Alimony/Child Support: </label>
        <input
          name="acs"
          value={userIncome.alimonyChildSupport}
          onChange={handleACS}
        />

        <label htmlFor="other">Other: </label>
        <input name="other" value={userIncome.other} onChange={handleOther} />

        <button onClick={handleSubmit}>Let's Go!</button>
      </form>
    </>
  );
};

export default Income;
