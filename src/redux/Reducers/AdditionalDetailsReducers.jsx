import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalAppearance: "",
  country: "",
  state: "",
  city: "",
  relocate: "",
  dietType: "",
  alcoholPreference: "",
  smokingPreference: "",
  maritalStatus: "",
  contactNumber: "",
  email: "",
  height: 0,
  weight: 0,
};

export const AdditionalDetailsSlice = createSlice({
  name: "AdditionalDetails",
  initialState,
  reducers: {
    updateAdditionalDetails: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    updateHeight: (state, action) => {
      state.height = action.payload;
    },
    updateWeight: (state, action) => {
      state.weight = action.payload;
    },
  },
});

export const { updateAdditionalDetails, updateHeight, updateWeight } =
  AdditionalDetailsSlice.actions;
export default AdditionalDetailsSlice.reducer;
