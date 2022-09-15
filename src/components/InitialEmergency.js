import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { EmergencyCalc } from "../helperFuncs";
import { useNavigate } from "react-router-dom";
import { setCurrentStep } from "../redux/user";

const InitialEmergency = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const user = useSelector((state) => state);

  const months = EmergencyCalc(user, 1000);

  const handleClick = () => {
    dispatch(setCurrentStep('401k match'))
    navigate("/retirement-match");
  };

  return (
    <>
      <h1>Thanks for those details, {user.name}!</h1>
      <h2>
        Our first step is setting aside a small emergency fund of <span>$1,000</span>. This
        money will prevent you from taking on MORE debt for common emergencies
        such as vehicle repairs, vet visits, etc.
      </h2>
      <h3>
        If you have $1000 saved - continue on! If not, based on your prior answers, this should take you around{" "}
        <span>{months} {months <= 1 ? 'month' : 'months'}</span> to complete. After
        that, meet us back here to move on.
      </h3>
      <button onClick={handleClick}>$1,000 Saved!</button>
    </>
  );
};

export default InitialEmergency;
