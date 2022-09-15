import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setCurrentStep, setExpenses } from "../redux/user";
import { useNavigate } from "react-router-dom";
import { formatter } from "../helperFuncs";

const Expenses = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let user = useSelector((state) => state);

  const [userExpenses, setUserExpenses] = useState({
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
  });

  const [totalExpenses, setTotalExpenses] = useState(0);

  const handleChange = (prop) => (e) => {
    setUserExpenses({
      ...userExpenses,
      [prop]: e.target.value,
    });
  };

  const handleTotalBudget = (e) => {
    e.preventDefault();
    const total = Object.values(userExpenses).reduce(
      (acc, curr) => acc + +curr,
      0
    );
    setTotalExpenses(total);
  };

  const handleTotal = (e) => {
    setTotalExpenses(e.target.value);
  };

  const handleSubmit = async (e) => {
    dispatch(setExpenses(+totalExpenses));
    dispatch(setCurrentStep("debts"));
    navigate("/debts");
  };

  return (
    <>
      <h1>
        So, an average month for {user.name} looks like{" "}
        <span>{formatter.format(user.monthlyIncome)}</span> - Sound right?
      </h1>
      <h2>
        Up next, we need to figure out what you typically spend in a month. If
        you aren't used to budgeting, you can use the tool below to get an
        estimate on monthly spending!
      </h2>
      <h2>
        Otherwise, simply input your monthly spending manually at the bottom.
      </h2>

      <form className="money-data">
        {Object.keys(userExpenses).map((expense) => {
          return (
            <div className="form-item" key={expense}>
              <label htmlFor={expense}>{expense}:</label>
              <input
                type='number'
                name={expense}
                value={userExpenses[expense]}
                onChange={handleChange(expense)}
              ></input>
            </div>
          );
        })}

        <button onClick={handleTotalBudget}>Totalize</button>
      </form>
      <form>
        <label htmlFor="total">Total Expenses: </label>
        <input name="total" value={totalExpenses} onChange={handleTotal} />
        <button onClick={handleSubmit}>Continue</button>
      </form>
    </>
  );
};

export default Expenses;
