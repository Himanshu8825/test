import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  aboutYourself: "",
  photos: [],
  selectedOptions: {
    Fun: "",
    Fitness: "",
    "Other Interests": "",
  },
};

export const interestSlice = createSlice({
  name: "interest",
  initialState,
  reducers: {
    updateAboutYourself: (state, action) => {
      state.aboutYourself = action.payload;
    },
    updatePhotos: (state, action) => {
      state.photos = action.payload;
    },
    updateSelectedOptions: (state, action) => {
      state.selectedOptions = action.payload;
    },
  },
});

export const { updateAboutYourself, updatePhotos, updateSelectedOptions } =
  interestSlice.actions;

export default interestSlice.reducer;
