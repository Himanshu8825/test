// SignUpSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedOption: "",
};

const SignUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    setSelectedOption: (state, action) => {
      state.selectedOption = action.payload;
    },
  },
});

export const { setSelectedOption } = SignUpSlice.actions;

export const selectSelectedOption = (state) => state.signUp.selectedOption;

export default SignUpSlice.reducer;
