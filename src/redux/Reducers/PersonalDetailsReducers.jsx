import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  middleName: "",
  lastName: "",
  dateOfBirth: "",
  timeOfBirth: "",
  country: "",
  state: "",
  city: "",
  manglikStatus: "",
  horoscopeMatching: "",
};

export const personalDetailsSlice = createSlice({
  name: "personalDetails",
  initialState,
  reducers: {
    updatePersonalDetails: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { updatePersonalDetails } = personalDetailsSlice.actions;
export default personalDetailsSlice.reducer;
