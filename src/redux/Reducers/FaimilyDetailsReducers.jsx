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
};

export const FaimilyDetailsSlice = createSlice({
  name: "additionalDetails",
  initialState,
  reducers: {
    updateFaimilyDetails: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { updateFaimilyDetails } = FaimilyDetailsSlice.actions;
export default FaimilyDetailsSlice.reducer;
