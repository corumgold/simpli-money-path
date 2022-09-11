import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setIncome } from "../redux/user";
import { useNavigate } from "react-router-dom";
import { formatter } from "../helperFuncs";

const Expenses = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  console.log(user);
  const [userExpenses, setUserExpenses] = useState({
    housing: 0,
    transportation: 0,
    food: 0,
    utilities: 0,
    medical: 0,
    insurance: 0,
    householdSupplies: 0,
    entertainment: 0,
    gifts: 0,
    debtPayments: 0,
    savings: 0,
    other: 0,
  });

  const handleChange = (prop) => (event) => {
    setUserExpenses({
      ...userExpenses,
      [prop]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = Object.values(userExpenses).reduce(
      (acc, curr) => acc + +curr,
      0
    );
    dispatch(setIncome(total));
    navigate("/expenses");
  };

  return (
    <>
      <h2>
        So it looks like you make around {formatter.format(user.monthlyIncome)}{" "}
        every month
      </h2>
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

      {/* <form>
        <label htmlFor="salary">Salary: </label>
        <input
          name="salary"
          value={userIncome.salary}
          onChange={handleChange("salary")}
        />

        <label htmlFor="disability">Disability: </label>
        <input
          name="disability"
          value={userIncome.disability}
          onChange={handleChange("disability")}
        />

        <label htmlFor="acs">Alimony/Child Support: </label>
        <input
          name="acs"
          value={userIncome.alimonyChildSupport}
          onChange={handleChange("alimonyChildSupport")}
        />

        <label htmlFor="other">Other: </label>
        <input
          name="other"
          value={userIncome.other}
          onChange={handleChange("other")}
        />

        <button onClick={handleSubmit}>Continue</button>
      </form> */}
    </>
  );
};

export default Expenses;
