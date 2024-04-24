import React, { useState } from "react";
import { NavIcon, PrimaryImg } from "../assets/Index";
import { profileData } from "../Data";
import { MdDashboard } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

const SideBar = () => {
  const [show, setShow] = useState(false);
  const [navTab, setNavTab] = useState("updateContact");

  const changeHandler = () => {
    setShow(!show);
  };

  const handleNavTabClick = (tab) => {
    setNavTab(tab);
  };
  return (
    <div className="h-full">
      <div className="pr-4  pl-4 bg-red-800 h-[0%]   rounded-xl">
        <div className="flex flex-col justify-center items-center pt-8 pl-8 pr-8 pb-4">
          <img
            src={PrimaryImg}
            alt=""
            className="border-2 border-white rounded-full w-[80px] h-[80px]"
          />
          <div className="font-montserrat font-medium text-white">
            <p>Sonali Singh</p>
            <p className="text-center text-sm">( CS12345 )</p>
          </div>
        </div>
        {profileData.map((data, index) => (
          <div
            key={index}
            className="flex justify-between pl-4 pr-4 pt-2 font-montserrat text-white "
          >
            {Object.values(data).map((value, index) => (
              <p key={index}>{value}</p>
            ))}
          </div>
        ))}

        <div className="pt-8 pl-4 pr-4 ">
          <div className="flex items-center gap-2 bg-white text-primary px-2 py-2 rounded-xl ">
            <MdDashboard className="text-xl" />
            <p className=" font-montserrat text-lg font-semibold">Dashboard</p>
          </div>

          <div className="flex items-center pt-4 pl-2 gap-2 text-white">
            <FaEdit className="text-xl" />
            <p className=" font-montserrat  text-lg">My Profile</p>
          </div>

          <div className="flex items-center pt-4 pl-1 gap-2 text-white">
            <img src={NavIcon} alt="" />
            <p className=" font-montserrat  text-lg">My Photos</p>
          </div>

          <div className="flex items-center pt-4 pl-2 gap-2 text-white">
            <FaEdit className="text-xl" />
            <p className=" font-montserrat  text-lg">Partner Preferences</p>
          </div>

          <div
            className={`flex items-center pt-4 pl-2 gap-2 cursor-pointer ${
              show ? "" : ""
            }`}
            onClick={changeHandler}
          >
            <IoSettingsOutline className="text-[25px] text-white" />
            <div className="flex items-center justify-between w-full pr-4">
              <p className=" font-montserrat  text-white">Setting</p>
              <FaChevronDown className="text-white" />
            </div>
          </div>

          <div
            className={`font-montserrat text-white flex flex-col gap-2 ml-8 mt-4 setting-transition text-[12px] font-light ${
              show ? "show" : ""
            }`}
          >
            <p onClick={() => handleNavTabClick("updateContact")} className=" cursor-pointer ">
              {" "}
              Updated Contact Information
            </p>
            <p> Change Registered Number</p>
            <p> Whatsapp Settings</p>
            <p> Email Settings</p>
            <p> Blocked Profile</p>
            <p> Delete Profile</p>
            <p className="pb-8"> Logout</p>
          </div>
          
        </div>
        
      </div>
      
    </div>
  );
};

export default SideBar;
