import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import RangeSlider from "../../Slider/MinimumDistance";

const PartnerPrefranceEdit = () => {
  const Data1 = [
    { label: "Age", value: "25 to 40" },
    { label: "Height", value: "5’ft to 6’ft" },
  ];

  const Data2 = [{ label: "Martial Status", value: "Not Sure" }];

  const ReligiousDetails = [{ label: "Caste", value: "Sub-Caste" }];

  const LocationDetails = [
    { label: "Country", value: "City" },
    {
      label: "State",
    },
  ];

  const CarrerDEtails = [
    { label: "Education", value: "Current Designation" },
    { label: "University", value: "Previous  Occupation" },
    { label: "Passing Year", value: "Approximate Annual Income" },
    { label: "Profession", value: "Doctor" },
  ];

  return (
    <div className="w-full flex flex-col gap-8 justify-center items-center pt-16 ">
      <div className="w-[70%]  shadoww  rounded-xl pl-8 pr-8 pt-4 gap-4 items-center mb-4">
        <div className=" w-full border-b border-[#A0A0A0] pb-2 pt-2">
          <p className="text-primary font-montserrat font-semibold text-xl">
            Basics Details
          </p>
        </div>

        <span>
          <div>
            <p className=" font-montserrat font-medium text-lg pt-4 pb-6">
              Age Range
            </p>
            <RangeSlider />
          </div>
          <div>
            <p className=" font-montserrat font-medium text-lg pt-4 pb-6">
              Height Range
            </p>
            <RangeSlider />
          </div>
        </span>

        <div className="pb-8 rounded-xl ">
          <h1 className=" pb-2 font-montserrat font-semibold text-lg ">
            Martial Status
          </h1>

          <div className="flex gap-2 flex-col">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="open"
                className="form-radio  mr-2"
                name="openToAll"
                checked
              />
              Open To All
            </label>

            <label className="inline-flex items-center">
              <input
                type="radio"
                value="divorce"
                className="form-radio  mr-2 "
                name="divorce"
              />
              Divorce
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="awaiting"
                className="form-radio  mr-2 "
                name="awaitingDivorce"
              />
              Awaiting Divorce
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="widow"
                className="form-radio  mr-2 "
                name="widowOrWidower"
              />
              Widow or Widower
            </label>
          </div>
        </div>
      </div>

      <div className="w-[70%]  shadoww  rounded-xl pl-8 pr-8 pt-4 gap-4 items-center mb-4">
        <div className="flex justify-between w-full border-b border-[#A0A0A0] pb-2 pt-2">
          <p className="text-primary font-montserrat font-semibold text-xl">
            Religious Details
          </p>
          <div className="flex gap-1 items-center text-primary font-montserrat cursor-pointer">
            <FaEdit className="text-lg mb-1" />
            <p className=" font-medium">Edit</p>
          </div>
        </div>
        <div className="flex justify-between m-4">
          <div className="w-full">
            {ReligiousDetails.map((item, index) => (
              <div key={index} className="mb-2 flex justify-between ">
                <p className="font-montserrat font-semibold ">{item.label}</p>
                <p className=" font-montserrat font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[70%]  shadoww  rounded-xl pl-8 pr-8 pt-4 gap-4 items-center mb-4">
        <div className="flex justify-between w-full border-b border-[#A0A0A0] pb-2 pt-2">
          <p className="text-primary font-montserrat font-semibold text-xl">
            Location Details
          </p>
          <div className="flex gap-1 items-center text-primary font-montserrat cursor-pointer">
            <FaEdit className="text-lg mb-1" />
            <p className=" font-medium">Edit</p>
          </div>
        </div>
        <div className="flex justify-between m-4">
          <div className="w-full">
            {LocationDetails.map((item, index) => (
              <div key={index} className="mb-2 flex justify-between ">
                <p className="font-montserrat font-semibold ">{item.label}</p>
                <p className=" font-montserrat font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[70%]  shadoww  rounded-xl pl-8 pr-8 pt-4 gap-4 items-center mb-4">
        <div className="flex justify-between w-full border-b border-[#A0A0A0] pb-2 pt-2">
          <p className="text-primary font-montserrat font-semibold text-xl">
            Career Details
          </p>
          <div className="flex gap-1 items-center text-primary font-montserrat cursor-pointer">
            <FaEdit className="text-lg mb-1" />
            <p className=" font-medium">Edit</p>
          </div>
        </div>
        <div className="flex justify-between m-4">
          <div className="w-full">
            {CarrerDEtails.map((item, index) => (
              <div key={index} className="mb-2 flex justify-between">
                <p className="font-montserrat font-semibold ">{item.label}</p>
                <p className=" font-montserrat font-semibold ">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerPrefranceEdit;
