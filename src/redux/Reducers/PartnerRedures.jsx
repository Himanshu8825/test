import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  maritalStatus: "",
  Education: "",
  "Working Preference": "",
  "Diet Type ": "",
  community: "",

  profession: "",
};

export const PartnerSlice = createSlice({
  name: "partner",
  initialState,
  reducers: {
    updatePartner: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { updatePartner } = PartnerSlice.actions;
export default PartnerSlice.reducer;
