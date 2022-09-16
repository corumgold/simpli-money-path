import React from "react";
import { formatter } from "../../../helperFuncs";

const ExOverIn = ({ user }) => {
  return (
    <>
      <h1>STOP</h1>
      <h2>
        Right now you are spending around{" "}
        {formatter.format(user.monthlyExpenses - user.monthlyIncome)} more than
        you earn.
      </h2>
      <h2>Don't stress, this is fixable! Hop on over to <a href="https://mint.intuit.com/" target="_blank" rel="noopener noreferrer">Mint</a> or <a href="https://www.personalcapital.com/" target="_blank" rel="noopener noreferrer">Personal Capital</a> to get started with setting up a budget and getting on track!</h2>
    </>
  );
};

export default ExOverIn;
