import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ExOverIn from "./ExOverIn";
import { setDebt } from "../../redux/user";

const Debts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  console.log(user)

  const [userDebts, setUserDebts] = useState({
    autoLoan: 0,
    creditCards: 0,
    studentLoans: 0,
    other: 0,
  });

  const handleChange = (prop) => (e) => {
    setUserDebts({
      ...userDebts,
      [prop]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const total = Object.values(userDebts).reduce(
      (acc, curr) => acc + +curr,
      0
    );
    dispatch(setDebt(total));
    // navigate("/expenses");
  };

  if (user.monthlyExpenses > user.monthlyIncome) {
    return <ExOverIn user={user} />;
  }

  return (
    <>
      <h2>Let's talk about the REAL four letter word... debt</h2>
      <h3>
        The odds are, you have some form of debt - 77% of American households
        do!
      </h3>
      <form>
        {Object.keys(userDebts).map((debt) => {
          return (
            <div key={debt}>
              <label htmlFor={debt}>{debt}:</label>
              <input
                name={debt}
                value={userDebts[debt]}
                onChange={handleChange(debt)}
              ></input>
            </div>
          );
        })}

        <button onClick={handleSubmit}>Continue</button>
      </form>
    </>
  );
};

export default Debts;
