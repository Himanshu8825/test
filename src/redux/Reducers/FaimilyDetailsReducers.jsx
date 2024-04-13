import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fatherFirstName: "",
  fatherMiddleName: "",
  fatherLastName: "",
  fatherOccupation: "",
  motherFirstName: "",
  motherMiddleName: "",
  motherLastName: "",
  motherOccupation: "",
  siblings: [{ name: "", status: "" }],
  livesWithFamily: "",
  country: "",
  state: "",
  city: "",
  religion: "",
  community: "",
  sliderValue: [20, 37],
};

export const FamilyDetailsSlice = createSlice({
  name: "familyDetails",
  initialState,
  reducers: {
    updateFamilyDetails: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    updateSliderValue: (state, action) => {
      return {
        ...state,
        sliderValue: action.payload,
      };
    },
  },
});

export const { updateFamilyDetails, updateSliderValue } =
  FamilyDetailsSlice.actions;
export default FamilyDetailsSlice.reducer;
