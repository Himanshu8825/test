import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, SignUp, Constent, Stapper, Home, Search } from "./Index";

const App = () => {
  // Function to render the appropriate component based on the current step

  return (
    <Router>
      <>
        <Navbar />

        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/details" element={<Stapper />} />
          <Route path="/constent" element={<Constent />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
