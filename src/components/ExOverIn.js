import React from "react";
import { useSelector } from "react-redux";
import { formatter } from "../helperFuncs";

const ExOverIn = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      <h1>STOP</h1>
      <h2>
        Right now you are spending around{" "}
        {formatter.format(user.monthlyIncome - user.monthlyExpenses)} more than
        you earn.
      </h2>
    </>
  );
};

export default ExOverIn;
