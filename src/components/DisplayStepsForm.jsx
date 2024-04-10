import {
  AdditionalDetails,
  CarrerDetails,
  FaimilyDetails,
  PersonalDetails,
} from "../Index";

const DisplayStepsform = ({currentStep}) => {
  switch (currentStep) {
    case 1:
      return <PersonalDetails />;
    case 2:
      return <AdditionalDetails />;
    case 3:
      return <CarrerDetails />;
    case 4:
      return <FaimilyDetails />;
    default:
      return null;
  }
};

export default DisplayStepsform;
