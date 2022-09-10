import { configureStore } from "@reduxjs/toolkit";
import moneyReducer from "./money";

export default configureStore({
  reducer: { money: moneyReducer },
});
