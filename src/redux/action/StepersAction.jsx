import { updateCurrentStep } from "../Reducers/StapperReducers";

export const StapperAction = (value) => {
  console.log("value printed", value);
  return (dispatch) => {
    dispatch(updateCurrentStep(value));
  };
};
