import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  monthlyIncome: 0,
  monthlyExpenses: 0,
};

export const moneySlice = createSlice({
  name: "money",
  initialState,
  reducers: {
    setIncome: (state, action) => {
      state.monthlyIncome = action.payload;
    },
    setExpenses: (state, action) => {
      state.monthlyIncome = action.payload;
    },
  },
});

export const { setIncome, setExpenses } = moneySlice.actions;
export default moneySlice.reducer;
