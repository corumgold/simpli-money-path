import React from "react";
import { useNavigate } from "react-router-dom";

const NoDebt = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/simpli-path/initial-emergency-fund");
  };

  return (
    <>
      <h1>Way to be <span>debt free</span>!</h1>
      <h2>
        Avoiding debt is a great way to ensure long term financial success.
      </h2>
      <button onClick={handleClick}>Move On</button>
    </>
  );
};

export default NoDebt;
