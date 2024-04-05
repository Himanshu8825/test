import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, SignUp, Constent } from "./Index";

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
        </Routes>
      </>
    </Router>
  );
};

export default App;
