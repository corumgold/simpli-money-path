import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { EmergencyCalc, formatter, getTotal } from "../../helperFuncs";
import { useNavigate } from "react-router-dom";
import { setCurrentStep } from "../../redux/user";

const Emergency = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state);

  const handleClick = () => {
    if (user.debt) {
      dispatch(setCurrentStep("moderate interest debt"));
      navigate("/simpli-path/moderate-interest-debt");
    } else {
      dispatch(setCurrentStep("retirement"));
      navigate("/simpli-path/retirement");
    }
  };

  const threeMonths = getTotal(user.budget) * 3;
  const sixMonths = getTotal(user.budget) * 4;

  return (
    <>
      <h1>Okay, {user.name} - let's go back to the emergency fund</h1>
      <h2>
        You have some cash ready for a small emergency, but what if you run into
        a larger emergency like the loss of a job or a serious accident/illness?
      </h2>
      <h3>
        It's recommended that you have somewhere between 3 and 6 months expenses{" "}
        ({formatter.format(threeMonths)} - {formatter.format(sixMonths)})* in a
        savings account ready if you ever need it.
      </h3>
      <h3>
        Based on your prior answers, this should take you around{" "}
        <span>
          {EmergencyCalc(user, threeMonths - 1000)} -{" "}
          {EmergencyCalc(user, sixMonths - 1000)} months
        </span>{" "}
        to complete!
      </h3>
      <button onClick={handleClick}>I'm Fully Funded!</button>
      <p className="citation">*Wells Fargo</p>
    </>
  );
};

export default Emergency;
