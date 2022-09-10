import { configureStore } from "@reduxjs/toolkit";
import moneyReducer from "./money";
import userReducer from "./user";

export default configureStore({
  reducer: { money: moneyReducer, user: userReducer },
});
