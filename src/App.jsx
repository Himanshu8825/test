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
import EditProfile from "./pages/EditPAges/EditProfile";
import PreviewDetails from "./pages/EditPAges/PreviewDetails";
import MyPhotos from "./pages/EditPAges/MyPhotos";
import PartnerPrefrance from "./pages/EditPAges/PartnerPrefrance";
import PartnerPrefranceEdit from "./pages/EditPAges/PartnerPrefranceEdit";

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
          <Route path="/edit6" element={<PartnerPrefranceEdit />} />
          <Route path="/update" element={<UpdateContact />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
