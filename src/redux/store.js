import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import currUserReducer from "./currUser";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    currUser: currUserReducer,
    user: userReducer,
  },
  middleware: [thunk],
});
