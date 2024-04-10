import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  SignUp,
  Constent,
  PersonalDetails,
  AdditionalDetails,
  CarrerDetails,
  FaimilyDetails,
  Stapper,
} from "./Index";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Personal  Details",
    "Additional Details",
    "Carrer Details",
    "Family Details",
    "Additional Details & Interest",
    "Partner Preference",
  ];

  // Function to render the appropriate component based on the current step
  const displaySteps = (step) => {
    switch (step) {
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

  return (
    <Router>
      <>
        <div className="mb-8">
          <Navbar />
        </div>
        <div className="mb-8 w-[60%] mx-auto shadow-xl rounded-xl p-8 bg-red-00">
          <Stapper steps={steps} currentStep={currentStep} />
        </div>
        {/* Render the component based on the current step */}
        
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/add" element={<AdditionalDetails />} />
          <Route path="/carrer" element={<CarrerDetails />} />
          <Route path="/faimily" element={<FaimilyDetails />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
