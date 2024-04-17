import React from "react";
import { PrimaryImg, SaveLogo } from "../assets/Index";
import { profileData } from "../Data";
import { TbEyeCheck } from "react-icons/tb";
import { RiUserFollowLine } from "react-icons/ri";
import { MdBlockFlipped } from "react-icons/md";

const MatchCard = () => {
  return (
    <div className=" pt-8 pl-8 pr-8  w-full ">
      <div className="w-[52%] flex justify-between items-center pr-8  shadoww rounded-xl p-4 mx-auto">
        <div>
          <img src={PrimaryImg} alt="" className="w-[250px]  rounded-xl" />
        </div>

        <div>
          <div className="gap-2 font-montserrat font-medium text-black pb-4">
            <p className=" font-semibold text-lg">
              Sonali Singh <span> ( CS12345 )</span>
            </p>
            <p className=" text-sm">Active now</p>
          </div>

          {profileData.map((data, index) => (
            <div
              key={index}
              className="flex justify-between gap-[2rem] pt-1 font-montserrat text-black font-medium "
            >
              {Object.values(data).map((value, index) => (
                <p key={index}>{value}</p>
              ))}
            </div>
          ))}

          <div className="  flex justify-between text-white mt-2 mb-2">
            <div className="px-8 py-1 bg-primary  rounded-lg">
              <TbEyeCheck className="text-2xl" />
            </div>
            <div className="px-8 py-1 bg-primary  rounded-lg">
              <RiUserFollowLine className="text-2xl" />
            </div>
          </div>
          <div className="  flex justify-between mb-2">
            <div className="px-8 py-1 border border-primary  rounded-lg">
              <img src={SaveLogo} alt="" />
            </div>
            <div className="px-8 py-1  rounded-lg">
              <MdBlockFlipped className="text-2xl text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
