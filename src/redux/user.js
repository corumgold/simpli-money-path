import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    monthlyIncome: 0,
    monthlyExpenses: 0,
    debt: 0,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setIncome: (state, action) => {
      state.monthlyIncome = action.payload;
    },
    setExpenses: (state, action) => {
      state.monthlyExpenses = action.payload;
    },
    setDebt: (state, action) => {
      state.debt = action.payload;
    },
  },
});

export const { setName, setIncome, setExpenses, setDebt } = userSlice.actions;
export default userSlice.reducer;
