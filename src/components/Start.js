import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setName } from "../redux/user";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleName = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(setName(userName));
      navigate('/income')
  };

  return (
    <>
      <h1>69% of Americans aren't saving enough to ever retire*</h1>
      <h1>56% couldn't pay for a $1,000 emergency*</h1>

      <h2>If that sounds like you, today that changes.</h2>

      <form>
        <label htmlFor="name">What's your name?</label>
        <input name="name" value={userName || ""} onChange={handleName} />

        <button onClick={handleSubmit}>Let's Do This!</button>
      </form>
      <p>*Bankrate</p>
    </>
  );
};

export default Start;
