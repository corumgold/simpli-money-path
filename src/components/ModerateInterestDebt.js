import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { formatter } from "../helperFuncs";
import { setCurrentStep, setDebt } from "../redux/user";

const HighInterestDebt = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state);
  const [remainingDebt, setRemainingDebt] = useState(user.debt);
  const [debtSubmitted, setDebtSubmitted] = useState(false);
  console.log(user);

  const handleClick = () => {
    // dispatch(setCurrentStep("emergency fund"));
    // navigate("/emergency-fund");
  };

  const handleDebt = (e) => {
    setRemainingDebt(+e.target.value);
  };

  const handleDebtSubmit = (e) => {
    e.preventDefault();
    dispatch(setDebt(remainingDebt));
    setDebtSubmitted(true);
  };

  const handleSubmit = () => {};

  if (!user.debt) {
    return (
      <>
        <h1>Congratulations! You're Debt Free!</h1>
        <button onClick={handleClick}>Move On</button>
      </>
    );
  }

  return (
    <>
      <h1>Okay {user.name}, now's the time to finish off that debt.</h1>
      {debtSubmitted ? (
        <>
          <h3>
            You know the drill! It's time to go back to{" "}
            <a href="https://unbury.me/" target={"_blank"} rel="noreferrer">
              unbury.me
            </a>{" "}
            to get that last <span>{formatter.format(user.debt)}</span> paid
            off!
          </h3>
          <button onClick={handleClick}>Debt? Paid!</button>
        </>
      ) : (
        <>
          <h2>
            Of the {formatter.format(user.debt)} you owed before, how much is
            remaining (other than a mortgage)?
          </h2>
          <form>
            <input name="debt" value={remainingDebt} onChange={handleDebt} />

            <button onClick={handleDebtSubmit}>Update Debt</button>
          </form>
        </>
      )}
    </>
  );
};

export default HighInterestDebt;
