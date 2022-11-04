import { createSlice } from "@reduxjs/toolkit";

export const currUserSlice = createSlice({
  name: "currUser",
  initialState: null,
  reducers: {
    setCurrUser: (state, action) => {
      state.currUser = action.payload;
    },
  },
});

export const { setCurrUser } = currUserSlice.actions;
export default currUserSlice.reducer;
