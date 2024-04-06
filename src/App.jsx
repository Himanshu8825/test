import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  SignUp,
  Constent,
  PersonalDetails,
  AdditionalDetails,
  CarrerDetails,
  FaimilyDetails,
} from "./Index";

const App = () => {
  return (
    <Router>
      {/* Wrap your routes with Router component */}
      <>
        <div className="mb-8">
          <Navbar />
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
