import { configureStore } from "@reduxjs/toolkit";
import PersonalDetailsReducers from "./Reducers/PersonalDetailsReducers";
import AdditionalDetailsReducers from "./Reducers/AdditionalDetailsReducers";
import FaimilyDetailsReducers from "./Reducers/FaimilyDetailsReducers";
import CarrerDetailsReducers from "./Reducers/CarrerDetailsReducers";
import StapperReducers from "./Reducers/StapperReducers";

export const store = configureStore({
  reducer: {
    personalDetails: PersonalDetailsReducers,
    additionalDetails: AdditionalDetailsReducers,
    faimilyDetails: FaimilyDetailsReducers,
    carrerDetails: CarrerDetailsReducers,
    stapeers: StapperReducers,
  },
});
