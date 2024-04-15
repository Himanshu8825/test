import React from "react";
import { NavIcon, PrimaryImg } from "../assets/Index";
import { profileData } from "../Data";
import { MdDashboard } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

const Home = () => {
  return (
    <>
      <div className="pl-16 pr-16 pt-12">
        <div className=" bg-primary w-[25%] h-screen rounded-xl">
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

            <div className="flex items-center pt-4 pl-2 gap-2 ">
              <IoSettingsOutline className="text-[25px] text-white" />
              <select
                name=""
                id=""
                className=" outline-none bg-transparent text-white w-full font-montserrat text-lg  "
              >
                <option value="">Setting</option>
                <option  value="">Updated Contact Information</option>
                <option value="">Change Registered Number</option>
                <option value="">Whatsapp Settings</option>
                <option value="">Email Settings</option>
                <option value="">Blocked Profile</option>
                <option value="">Delete Profile</option>
                <option value="">Logout</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
