import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    monthlyIncome: {
      salary: 0,
      disability: 0,
      alimony: 0,
      other: 0,
    },
    debt: 0,
    currentStep: null,
    budget: {
      housing: 0,
      transportation: 0,
      food: 0,
      utilities: 0,
      medical: 0,
      insurance: 0,
      household: 0,
      entertainment: 0,
      gifts: 0,
      debt: 0,
      other: 0,
    },
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setIncome: (state, action) => {
      state.monthlyIncome = action.payload;
    },
    setDebt: (state, action) => {
      state.debt = action.payload;
    },
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    setBudget: (state, action) => {
      state.budget = action.payload;
    },
  },
});

export const {
  setName,
  setIncome,
  setExpenses,
  setDebt,
  setCurrentStep,
  setBudget,
} = userSlice.actions;
export default userSlice.reducer;
