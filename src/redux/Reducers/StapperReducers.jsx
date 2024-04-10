import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 1,
};

export const StapperSlice = createSlice({
  name: "Stappers",
  initialState,
  reducers: {
    updateCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
  },
});

export const { updateCurrentStep } = StapperSlice.actions;
export default StapperSlice.reducer;
