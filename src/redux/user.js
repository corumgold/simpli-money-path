import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    monthlyIncome: 0,
    monthlyExpenses: 0,
    debt: 0,
    currentStep: null,
    budget: {
      Housing: 0,
      Transportation: 0,
      Food: 0,
      Utilities: 0,
      Medical: 0,
      Insurance: 0,
      "Household Supplies": 0,
      Entertainment: 0,
      Gifts: 0,
      "Debt Payments": 0,
      Other: 0,
    },
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
    setBudget: (state, action) => {
      state.budget = action.payload;
    },
  },
});

export const { setName, setIncome, setExpenses, setDebt, setCurrentStep, setBudget } =
  userSlice.actions;
export default userSlice.reducer;
