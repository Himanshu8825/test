import React, { useState } from "react";
import { NavIcon, PrimaryImg } from "../assets/Index";
import { profileData } from "../Data";
import { MdDashboard } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import HomeCard from "../components/HomeCard";

const Home = () => {
  const [show, setShow] = useState(false);

  const changeHandler = () => {
    setShow(!show);
  };

  const data = [
    { number: 39, text: "Pending Invitations" },
    { number: 19, text: "Accepted Invitations" },
    { number: 9, text: "Invitations Sent" },
    { number: 88, text: "Recent Visitors" },
    { number: 13, text: "Shortlisted Profiles" },
    { number: 8, text: "Chat Initiated" },
    { number: 9, text: "Days Ago last Login" },
  ];

  return (
    <>
      <div className="w-full  flex  gap-6 pl-16 pt-12">
        <div className="pr-4  pl-4 bg-primary h-[0%]   rounded-xl">
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
              <p className=" font-montserrat text-lg font-semibold">
                Dashboard
              </p>
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
              <p> Updated Contact Information</p>
              <p> Change Registered Number</p>
              <p> Whatsapp Settings</p>
              <p> Email Settings</p>
              <p> Blocked Profile</p>
              <p> Delete Profile</p>
              <p className="pb-8"> Logout</p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h1 className=" font-montserrat font-semibold text-xl">
            Your Activity Summary
          </h1>
          <div className="w-full grid grid-cols-4 gap-8  mt-4">
            {data.map((item, index) => (
              <div
                key={index}
                className="w-[180px] shadow-primary shadow-md rounded-xl flex flex-col justify-center items-center pl-8 pr-8 pt-12 pb-12 gap-2"
              >
                <p className="text-center font-montserrat font-semibold text-4xl">
                  {item.number}
                </p>
                <p className="text-center font-montserrat text-lg font-semibold">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-between">
            <h1 className=" font-montserrat font-semibold text-xl mt-8 mb-4 cursor-pointer">
              All Matches
            </h1>
            <h1 className=" font-montserrat font-semibold text-lg mt-8 mb-4 pr-8 cursor-pointer">
              See All
            </h1>
          </div>

          <div className="flex gap-4 flex-nowrap overflow-x-auto example">
            <div className="w-[40%] flex-shrink-0  ">
              <HomeCard />
            </div>
            <div className="w-[40%] flex-shrink-0 ">
              <HomeCard />
            </div>
            <div className="w-[40%] flex-shrink-0">
              <HomeCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
