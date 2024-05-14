import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentStep } from "../../redux/user";

const RetirementMatch = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state);

  const handleClick = () => {
    dispatch(setCurrentStep("high interest debt"));
    user.debt
      ? navigate("/simpli-path/high-interest-debt")
      : navigate("/simpli-path/emergency-fund");
  };

  return (
    <>
      <h1>
        Retirement Match (a.k.a. <span>FREE</span> Money)
      </h1>
      <h2>
        Does your employer offer a 401k plan with a match? If so, let's make
        sure you are contributing <span>ONLY</span> enough to get the full
        match.
      </h2>
      <h3>
        If you have questions on how to participate, try consulting with your HR
        representative.
      </h3>
      <button onClick={handleClick}>I'm matched!</button>
    </>
  );
};

export default RetirementMatch;
