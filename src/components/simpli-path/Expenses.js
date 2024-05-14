import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentStep } from "../../redux/user";
import { useNavigate } from "react-router-dom";
import { formatter } from "../../helperFuncs";
import { getTotal } from "../../helperFuncs";

const Expenses = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let user = useSelector((state) => state);

  const handleSubmit = async (e) => {
    dispatch(setCurrentStep("debts"));
    navigate("/simpli-path/debts");
  };

  return (
    <>
      <h1>
        So, an average month for {user.name} looks like{" "}
        <span>{formatter.format(getTotal(user.monthlyIncome))}</span> - Sound
        right?
      </h1>
      <h3>
        <a href="/simpli-path/income">Actually... I need to change that...</a>
      </h3>
      <h2>
        Up next, we need to figure out what you typically spend in a month using
        the <a href="/budget">Budget Tool</a>.
      </h2>
      <h2>No pressure, you can always change your budget later.</h2>
      <h2>
        <span>Total Expenses:</span>
      </h2>

      <h2>{formatter.format(getTotal(user.budget))}</h2>
      {user.budget && <button onClick={handleSubmit}>Continue</button>}
    </>
  );
};

export default Expenses;
