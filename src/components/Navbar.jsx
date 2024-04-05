import React from "react";
import { Logo } from "../assets/Index";

const Navbar = () => {
  return (
    <div className="pl-16  shadow-md">
      <img src={Logo} alt="" className="w-[100px]" />
    </div>
  );
};

export default Navbar;
