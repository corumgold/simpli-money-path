import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setIncome: (state, action) => {
      state.monthlyIncome = action.payload;
    },
    setExpenses: (state, action) => {
      state.monthlyIncome = action.payload;
    },
  },
});

export const { setName } = userSlice.actions;
export default userSlice.reducer;
