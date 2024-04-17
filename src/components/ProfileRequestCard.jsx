import React from "react";
import { PrimaryImg } from "../assets/Index";
import { profileData } from "../Data";

const ProfileRequestCard = ({ decline, accept }) => {
  return (
    <div className="pt-8 pl-8 pr-8 w-full">
      <div className="w-[52%] flex justify-between items-center pr-8 shadoww rounded-xl p-4 mx-auto">
        <div>
          <img src={PrimaryImg} alt="" className="w-[250px] rounded-xl" />
        </div>

        <div>
          <div className="gap-2 font-montserrat font-medium text-black pb-4">
            <p className="font-semibold text-lg">
              Sonali Singh <span> ( CS12345 )</span>
            </p>
            <p className="text-sm">Active now</p>
          </div>

          {profileData.map((data, index) => (
            <div
              key={index}
              className="flex justify-between gap-[2rem] pt-1 font-montserrat text-black font-medium"
            >
              {Object.values(data).map((value, index) => (
                <p key={index}>{value}</p>
              ))}
            </div>
          ))}

          <div className="flex  justify-between mt-4 mb-2 cursor-pointer">
            {decline && (
              <div className=" flex  items-center gap-2 px-4 py-1 border border-primary rounded-lg">
                {decline}
                <h1 className="font-montserrat font-semibold text-primary">Decline</h1>
              </div>
            )}
            {accept && (
              <div className="flex gap-2 items-center px-4 py-1 bg-primary rounded-lg">
                {accept}
                <p className= " font-montserrat font-medium text-white">Accept</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileRequestCard;
