import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  education: "",
  highestQualification: "",
  schoolOrUniversity: "",
  profession: "",
  currentDesignation: "",
  previousOccupation: "",
  annualIncomeType: "",
  annualIncome: "",
};

export const CarrerDetailsSlice = createSlice({
  name: "carrerDetails",
  initialState,
  reducers: {
    updateCarrerDetails: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { updateCarrerDetails } = CarrerDetailsSlice.actions;
export default CarrerDetailsSlice.reducer;
