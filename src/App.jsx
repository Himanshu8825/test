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
    "Faimily Details",
    "Additional Details& Interest",
    "Partner Preference",
  ];

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
    }
  };

  return (
    <Router>
      {/* Wrap your routes with Router component */}
      <>
        <div className="mb-8">
          <Navbar />
        </div>
        <div className="mb-8 w-[60%] mx-auto shadow-xl rounded-xl p-8 bg-red-00">
          <Stapper steps={steps} currentStep={currentStep} />
        </div>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/constent" element={<Constent />} />
          <Route path="/details" element={<PersonalDetails />} />
          <Route path="/aditionalDetails" element={<AdditionalDetails />} />
          <Route path="/carrer" element={<CarrerDetails />} />
          <Route path="/faimily" element={<FaimilyDetails />} /> 
        </Routes>
      </>
    </Router>
  );
};

export default App;
