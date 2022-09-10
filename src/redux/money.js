import { createSlice } from "@reduxjs/toolkit";

export const moneySlice = createSlice({
  name: "money",
  initialState: {
    monthlyIncome: 0,
    monthlyExpenses: 0,
  },
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
