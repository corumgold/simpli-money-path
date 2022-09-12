import React from "react";
import { useSelector } from "react-redux";
import { initEmergencyCalc } from "../helperFuncs";
import { useNavigate } from "react-router-dom";

const InitialEmergency = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const handleClick = () => {
    navigate("/retirement-match");
  };

  return (
    <>
      <h2>
        Thank you for taking the time to give us that information! Now let's get
        you where you need to be...
      </h2>
      <h3>
        A great first step is a small emergency fund of $1000. This will prevent
        you from having to use a credit card for common emergencies such as
        vehicle repairs, vet visits, etc.
      </h3>
      <h4>
        If you have $1000 saved - great! You can continue on! If not, that is
        your next task! Based on your prior answers, this should take you around{" "}
        {initEmergencyCalc(user)} months to complete! Once you have your initial
        emergency fund saved, meet us back here to move on!
      </h4>
      <button onClick={handleClick}>Move Forward</button>
    </>
  );
};

export default InitialEmergency;
