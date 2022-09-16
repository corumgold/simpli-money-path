import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setCurrentStep, setExpenses } from "../../redux/user";
import { useNavigate } from "react-router-dom";
import { formatter } from "../../helperFuncs";

const Expenses = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let user = useSelector((state) => state);

  const [totalExpenses, setTotalExpenses] = useState(user.monthlyExpenses);

  const handleTotal = (e) => {
    setTotalExpenses(e.target.value);
  };

  const handleSubmit = async (e) => {
    dispatch(setExpenses(+totalExpenses));
    dispatch(setCurrentStep("debts"));
    navigate("/simpli-path/debts");
  };

  return (
    <>
      <h1>
        So, an average month for {user.name} looks like{" "}
        <span>{formatter.format(user.monthlyIncome)}</span> - Sound right?
      </h1>
      <h3>
        <a href="/simpli-path/income">Actually... I need to change that...</a>
      </h3>
      <h2>
        Up next, we need to figure out what you typically spend in a month (we
        recommend using our <a href="/budget">Budget Tool</a> to get a more
        accurate number).
      </h2>
      <h2>Otherwise, simply input your estimated monthly spending.</h2>
      <form>
        <label htmlFor="total">Total Expenses: </label>
        <input name="total" value={totalExpenses} onChange={handleTotal} />
        <button onClick={handleSubmit}>Continue</button>
      </form>
    </>
  );
};

export default Expenses;
