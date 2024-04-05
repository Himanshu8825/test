import { configureStore } from "@reduxjs/toolkit";
import SignUpSlice from "./slices/SignUpSlice";

export const store = configureStore({
  reducer: {
    signUp: SignUpSlice, 
  },
});
