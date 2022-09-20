import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setExpenses, setBudget } from "../redux/user";
import { formatter } from "../helperFuncs";

const Budget = () => {
  const dispatch = useDispatch();

  let user = useSelector((state) => state);

  const [userBudget, setUserBudget] = useState(user.budget);

  const handleChange = (prop) => (e) => {
    setUserBudget({
      ...userBudget,
      [prop]: +e.target.value,
    });
  };

  const handleTotalAndBudget = (e) => {
    e.preventDefault();
    const total = Object.values(userBudget).reduce(
      (acc, curr) => acc + +curr,
      0
    );
    dispatch(setBudget(userBudget));
    dispatch(setExpenses(total));
  };

  return (
    <>
      {user.name ? (
        <>
          <h1>{user.name}'s Budget</h1>

          <form className="money-data">
            {Object.keys(userBudget).map((item) => {
              return (
                <div className="form-item" key={item}>
                  <label htmlFor={item}>{item}:</label>
                  <input
                    type="number"
                    name={item}
                    value={userBudget[item] || null}
                    onChange={handleChange(item)}
                  ></input>
                </div>
              );
            })}

            <button onClick={handleTotalAndBudget}>Set Budget</button>
          </form>
          <h3>Total Expenses: {formatter.format(user.monthlyExpenses)}</h3>
        </>
      ) : (
        <>
          <h1>
            Please <a href="/">Sign In</a> to use the budgeting tool.
          </h1>
        </>
      )}
    </>
  );
};

export default Budget;
