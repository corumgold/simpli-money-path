import React from "react";
import { useSelector } from "react-redux";
import { EmergencyCalc, formatter } from "../helperFuncs";
import { useNavigate } from "react-router-dom";

const Emergency = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state);

  const handleClick = () => {
    // navigate("/retirement-match");
  };

  const threeMonths = user.monthlyExpenses * 3;
  const sixMonths = user.monthlyExpenses * 4;

  return (
    <>
      <h2>
        So, at this point you have some extra cash ready for a small emergency,
        but what if you run into a larger emergency like the loss of a job or a
        serious accident or illness?
      </h2>
      <h3>
        That's why it's recommended that you have somewhere between 3 and 6
        months expenses {formatter.format(threeMonths)} -{" "}
        {formatter.format(sixMonths)} in a savings account ready if you ever
        need it.
      </h3>
      <h4>
        If you currently have an amount you feel comfortable with available, you
        can continue on! If not, that is your next task! Based on your prior
        answers, this should take you around {EmergencyCalc(user, threeMonths)}{" "}
        months - {EmergencyCalc(user, sixMonths)} months to complete! Once you
        have your full emergency fund saved, meet us back here to move on!
      </h4>
      <button onClick={handleClick}>Continue On</button>
    </>
  );
};

export default Emergency;
