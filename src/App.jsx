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
  COmplete,
} from "./Index";

const App = () => {
  // Function to render the appropriate component based on the current step

  return (
    <Router>
      <>
        <Navbar />

        <Routes>
          <Route path="/" element={<SignUp />} />

          <Route path="/details" element={<Stapper />} />

          <Route path="/add" element={<AdditionalDetails />} />
          <Route path="/carrer" element={<CarrerDetails />} />
          <Route path="/faimily" element={<FaimilyDetails />} />
          <Route path="/sucess" element={<COmplete />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
