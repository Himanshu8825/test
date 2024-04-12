import {
  AdditionalDetails,
  CarrerDetails,
  FaimilyDetails,
  Interest,
  PartnersDetails,
  PersonalDetails,
} from "../Index";

const DisplayStepsform = ({ currentStep }) => {
  switch (currentStep) {
    case 1:
      return <PersonalDetails />;
    case 2:
      return <AdditionalDetails />;
    case 3:
      return <CarrerDetails />;
    case 4:
      return <FaimilyDetails />;
    case 5:
      return <Interest />;
    case 6:
      return <PartnersDetails />;
    default:
      return null;
  }
};

export default DisplayStepsform;
