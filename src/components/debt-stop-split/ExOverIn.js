import React from "react";
import { formatter } from "../../helperFuncs";

const ExOverIn = ({ user }) => {
  return (
    <>
      <h1>STOP</h1>
      <h2>
        Right now you are spending around{" "}
        {formatter.format(user.monthlyExpenses - user.monthlyIncome)} more than
        you earn.
      </h2>
    </>
  );
};

export default ExOverIn;
