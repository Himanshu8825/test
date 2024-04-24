import React, { useState, useEffect } from "react";
import { Logo, NavLogo2 } from "../assets/Index";
import {
  MdOutlineHome,
  MdOutlineChat,
  MdOutlineNotifications,
} from "react-icons/md";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  // Define an array of objects for menu items
  const menuItems = [
    {
      icon: <MdOutlineHome className="text-2xl mb-1" />,
      text: "Home",
      path: "/home",
    },
    {
      icon: <IoSearchOutline className="text-xl" />,
      text: "Search",
      path: "/search",
    },
    {
      icon: <img src={NavLogo2} alt="" className="mb-2 " />,
      text: "Matches",
      path: "/matches",
    },
    {
      icon: <HiOutlineInboxArrowDown className="text-lg" />,
      text: "Inbox",
      path: "/inbox",
    },
    {
      icon: <MdOutlineChat className="text-xl" />,
      text: "Chat",
      path: "/chat",
    },
    {
      icon: <MdOutlineNotifications className="text-3xl" />,
      path: "/notifications",
    },
  ];

  return (
    <div className="md:w-full  md:flex hidden justify-between pl-16 pr-16 items-center shadow-md">
      <div>
        <img src={Logo} alt="" className="w-[100px]" />
      </div>
      <div className="flex gap-8 ">
        {/* Map over menuItems array to render menu items */}
        {menuItems.map((item, index) => (
          <Link key={index} to={item.path} className="text-black">
            <div
              className={`flex gap-1 items-center px-4 py-1 rounded-lg font-montserrat font-medium ${
                activePath === item.path ? " bg-primary text-white" : ""
              }`}
            >
              {item.icon}
              <p className="font-montserrat font-semibold text-md mt-">
                {item.text}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
