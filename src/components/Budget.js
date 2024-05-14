import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setBudget } from "../redux/user";
import { formatter } from "../helperFuncs";
import { capitalizeFirstLetter, getTotal } from "../helperFuncs";
import { useNavigate } from "react-router-dom";

const Budget = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  let user = useSelector((state) => state);

  const [userBudget, setUserBudget] = useState(user.budget);
  const [total, setTotal] = useState(getTotal(userBudget));

  const handleChange = (prop) => (e) => {
    const value = e.target.value === "" ? "" : +e.target.value;
    setUserBudget({
      ...userBudget,
      [prop]: value,
    });
  };

  const handleTotalAndBudget = (e) => {
    e.preventDefault();
    dispatch(setBudget(userBudget));
    navigate("/simpli-path/expenses");
  };

  useEffect(() => {
    setTotal(getTotal(userBudget));
  }, [userBudget]);

  return (
    <>
      {user.name ? (
        <>
          <h1>{user.name}'s Budget</h1>

          <form className="money-data">
            {Object.keys(userBudget).map((item) => {
              return (
                <div className="form-item" key={item}>
                  <label htmlFor={item}>{capitalizeFirstLetter(item)}:</label>
                  <input
                    type="number"
                    name={item}
                    value={userBudget[item]}
                    onChange={handleChange(item)}
                  ></input>
                </div>
              );
            })}

            <button onClick={handleTotalAndBudget}>Return to Money Journey</button>
          </form>
          <h3>Total Expenses: {formatter.format(total)}</h3>
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
