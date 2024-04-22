import React from "react";
import { PrimaryImg, SaveLogo } from "../assets/Index";
import { profileData } from "../Data";

const BlockedCard = () => {
  return (
    <div className=" pt-8 pl-8 pr-8  w-full ">
      <div className="w-[52%] flex  gap-8 items-center pr-8  shadoww rounded-xl p-4 mx-auto">
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

          <div className="flex gap-6 mt-2">
            <p className="text-black ">You have blocked this profile.</p>
            <button className=" bg-primary px-4  text-white font-montserrat font-medium rounded-lg">
              Unblock
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockedCard;
