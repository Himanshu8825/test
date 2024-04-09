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
  },
});

export const { updateAdditionalDetails } = AdditionalDetailsSlice.actions;
export default AdditionalDetailsSlice.reducer;
