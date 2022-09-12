import React from "react";
import { useNavigate } from "react-router-dom";

const RetirementMatch = () => {
//   const navigate = useNavigate();

  const handleClick = () => {
    // navigate("/retirement-match");
  };

  return (
    <>
      <h2>Now on to the fun stuff - retirement!</h2>
      <h3>
        Does your employer offer a 401k plan with an employer match? If so, at
        this point, let's make sure you are contributing ONLY as much as you
        need to in order to get the full employer match. This is basically FREE
        MONEY from your employer, and we would hate for you to miss out on it!
        If you have questions on how to participate, you can usually consult
        with your HR representative.
      </h3>
      <h3>Once that's all in order, go ahead and move on!</h3>
      <button onClick={handleClick}>Keep going!</button>
    </>
  );
};

export default RetirementMatch;
