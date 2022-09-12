import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ExOverIn from "./ExOverIn";

const Debts = () => {
  const user = useSelector((state) => state.user);

  if (user.monthlyExpenses > user.monthlyIncome) {
    return <ExOverIn user={user} />;
  }

  return (
    <>
      <h2>Let's talk about debt</h2>
    </>
  );
};

export default Debts;
