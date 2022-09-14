import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setExpenses } from "../redux/user";
import { useNavigate } from "react-router-dom";
import { formatter } from "../helperFuncs";

const Expenses = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let user = useSelector((state) => state);

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
    navigate("/debts");
  };

  return (
    <>
      <h2>
        So it looks like you make around {formatter.format(user.monthlyIncome)}{" "}
        every month.
      </h2>
      <h3>
        Up next, we need to figure out what your average monthly expenses are.
        If you are used to budgeting, you may know how much you spend every
        month already. However, if not, you can use the tool below.
      </h3>

      <form>
        {Object.keys(userExpenses).map((expense) => {
          return (
            <div className='form-item' key={expense}>
              <label htmlFor={expense}>{expense}:</label>
              <input
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
        <label htmlFor="total">Total: </label>
        <input name="total" value={totalExpenses} onChange={handleTotal} />
        <button onClick={handleSubmit}>Continue</button>
      </form>
    </>
  );
};

export default Expenses;
