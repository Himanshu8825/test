import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  SignUp,
  Constent,
  Stapper,
  Home,
  Search,
  Matches,
  Inbox,
  MyProfile,
  UpdateContact,
} from "./Index";
import EditProfile from "./pages/EditProfile";
import PreviewDetails from "./pages/PreviewDetails";
import MyPhotos from "./pages/MyPhotos";
import PartnerPrefrance from "./pages/PartnerPrefrance";

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
          <Route path="/matches" element={<Matches />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/edit" element={<MyProfile />} />
          <Route path="/edit2" element={<EditProfile />} />
          <Route path="/edit3" element={<PreviewDetails />} />
          <Route path="/edit4" element={<MyPhotos />} />
          <Route path="/edit5" element={<PartnerPrefrance />} />
          <Route path="/update" element={<UpdateContact />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
