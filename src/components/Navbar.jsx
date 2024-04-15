import React from "react";
import { Logo, NavLogo2 } from "../assets/Index";

import {
  MdOutlineHome,
  MdOutlineChat,
  MdOutlineNotifications,
} from "react-icons/md";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  // Define an array of objects for menu items
  const menuItems = [
    { icon: <MdOutlineHome className="text-2xl mb-1 " />, text: "Home" },
    { icon: <IoSearchOutline className="text-xl" />, text: "Search" },
    { icon: <img src={NavLogo2} alt="" className="mb-2" />, text: "Matches" },
    { icon: <HiOutlineInboxArrowDown className="text-lg" />, text: "Inbox" },
    { icon: <MdOutlineChat className="text-xl" />, text: "Chat" },
    { icon: <MdOutlineNotifications className="text-3xl" />,  }
  ];

  return (
    <div className="flex justify-between pl-16 pr-16 items-center shadow-md">
      <div>
        <img src={Logo} alt="" className="w-[100px]" />
      </div>
      <div className="flex gap-8 ">
        {/* Map over menuItems array to render menu items */}
        {menuItems.map((item, index) => (
          <div key={index} className="flex gap-1 items-center">
            {item.icon}
            <p className="font-montserrat font-semibold text-md mt-">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
