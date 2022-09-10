import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setName } from "../redux/user";

const Start = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");

  const handleName = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setName(userName));
  };

  return (
    <>
      <h1>69% of Americans aren't saving enough for retirement*</h1>
      <h2>If you're one of those, today that changes.</h2>

      <form>
        <label htmlFor="name">What's your name?</label>
        <input name="name" value={userName || ""} onChange={handleName} />

        <button onClick={handleSubmit}>Let's Go!</button>
      </form>
    </>
  );
};

export default Start;
