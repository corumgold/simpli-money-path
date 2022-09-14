import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    monthlyIncome: 0,
    monthlyExpenses: 0,
    debt: 0,
    currentStep: null,
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
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
  },
});

export const { setName, setIncome, setExpenses, setDebt, setCurrentStep } = userSlice.actions;
export default userSlice.reducer;
