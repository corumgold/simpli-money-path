import React, { useEffect } from "react";
import Auth from "./Auth";
import { supabase } from "../supabaseClient";
import { setCurrUser } from "../redux/currUser";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const currUser = useSelector((state) => state.currUser);
  const dispatch = useDispatch();
  console.log(currUser);

  useEffect(() => {
    const checkIfCurrentUser = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        console.log(user);
        dispatch(setCurrUser(user));
      } catch (error) {
        alert(error.error_description || error.message);
      }
    };
    checkIfCurrentUser();
  }, [dispatch]);

  return (
    <>
      <h1>
        <span>77%</span> of Americans are anxious about their financial
        situation.*
      </h1>

      <h2>
        If you feel the same way, <span>today that changes</span>.
      </h2>
      {!currUser ? <Auth /> : null}
      <p>*Capital One & The Decision Lab</p>
    </>
  );
};

export default Home;
