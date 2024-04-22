import React from "react";
import { PrimaryImg } from "../../assets/Index";
import { profileData } from "../../Data";
import { IoEye } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";

const PreviewDetails = () => {
  const Data1 = [
    { label: "Profile Created For", value: "Myself" },
    { label: "Name", value: "Rahul Kumar" },
    { label: "Gender", value: "Male" },
    { label: "Date of Birth", value: "01/01/1999" },
  ];

  const Data2 = [
    { label: "Time of Birth", value: "05:10 AM" },
    { label: "Age", value: "30 Yrs." },
    { label: "Place of Birth", value: "India, Mumbai" },
    { label: "Manglik Status", value: "Yes" },
  ];

  const CarrerDEtails = [
    { label: "Education", value: "Current Designation" },
    { label: "University", value: "Previous  Occupation" },
    { label: "Passing Year", value: "Approximate Annual Income" },
    { label: "Profession", value: "Doctor" },
  ];
  const AdditionalDetails = [
    { label: "Height", value: "Diet" },
    { label: "Weight", value: "Alcohol Consumption" },
    { label: "Presently Settled in Country", value: "Smoking Preference" },
    { label: "Presently Settled in State", value: "Martial Status" },
    { label: "Presently Settled in City", value: "Contact Details" },
    { label: "Open to Relocate in Future", value: "SEmail Address" },
  ];
  const FamilyDetails = [
    { label: "Father’s Name", value: "Family Settled (Country)" },
    { label: "Father’s Occupation", value: "Family Settled (State)" },
    { label: "Mother’s Name", value: "Family Settled (City)" },
    { label: "Mother’s Occupation", value: "Religion" },
    { label: "Siblings", value: "Caste" },
    { label: "Lives with her Family", value: "Family Annual Income Range" },
  ];
  const Interest = [
    { label: "Interests", value: "Fitness" },
    { label: "Fun", value: "Other Interests" },
  ];

  return (
    <>
      <div className="w-full flex flex-col gap-8 justify-center items-center pt-16 ">
        <div className="w-[70%] shadoww bg-[#f0f0f0] rounded-xl p-8 flex  gap-4 items-center">
          <img
            src={PrimaryImg}
            alt=""
            className="w-[150px] h-[150px] rounded-full border-2 border-primary"
          />
          <div className="w-[50%]">
            <div className="flex flex-col pl-6 pb-2">
              <div className="gap-2 font-montserrat font-medium text-black">
                <div className="w-[50%] flex ml-[28rem] mb-2 px-4 py-2 gap-2 items-center bg-primary rounded-xl">
                  <IoEye className="text-white text-lg" />
                  <button className="font-montserrat text-white font-light">
                    Preview Full Profile
                  </button>
                </div>
                <p className="text-xl font-semibold">Sonali Singh</p>
                <p className="font-semibold">( CS12345 )</p>
              </div>
            </div>
            {profileData.map((data, index) => (
              <div
                key={index}
                className="flex justify-between pl-6 pr-6 pt-2 pb-1 font-montserrat text-black  "
              >
                {Object.values(data).map((value, index) => (
                  <p key={index}>{value}</p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="w-[70%]  shadoww bg-[#f0f0f0] rounded-xl pl-8 pr-8 pt-4 gap-4 items-center mb-4">
          <div className="flex justify-between w-full border-b border-[#A0A0A0] pb-1">
            <p className="text-primary font-montserrat font-semibold text-xl">
              About Yourself
            </p>
            <div className="flex gap-1 items-center text-primary font-montserrat cursor-pointer">
              <FaEdit className="text-lg mb-1" />
              <p className=" font-medium">Edit</p>
            </div>
          </div>
          <p className="text-[#A0A0A0] m-4">
            our multi - dimension suite of products is created with passion and
            decades of experience to help you every step of the way. ur multi -
            dimension suite of products is created with passion and decades of
            experience to help you every step of the way.
          </p>
        </div>

        <div className="w-[70%]  shadoww bg-[#f0f0f0] rounded-xl pl-8 pr-8 pt-4 gap-4 items-center mb-4">
          <div className="flex justify-between w-full border-b border-[#A0A0A0] pb-1">
            <p className="text-primary font-montserrat font-semibold text-xl">
              Personal Appearance
            </p>
            <div className="flex gap-1 items-center text-primary font-montserrat cursor-pointer">
              <FaEdit className="text-lg mb-1" />
              <p className=" font-medium">Edit</p>
            </div>
          </div>
          <p className="text-[#A0A0A0] m-4">
            our multi - dimension suite of products is created with passion and
            decades of experience to help you every step of the way. ur multi -
            dimension suite of products is created with passion and decades of
            experience to help you every step of the way.
          </p>
        </div>

        <div className="w-[70%]  shadoww bg-[#f0f0f0] rounded-xl pl-8 pr-8 pt-4 gap-4 items-center mb-4">
          <div className="flex justify-between w-full border-b border-[#A0A0A0] pb-2 pt-2">
            <p className="text-primary font-montserrat font-semibold text-xl">
              Basics Details
            </p>
            <div className="flex gap-1 items-center text-primary font-montserrat cursor-pointer">
              <FaEdit className="text-lg mb-1" />
              <p className=" font-medium">Edit</p>
            </div>
          </div>
          <div className="flex justify-between m-4">
            <div>
              {Data1.map((item, index) => (
                <div key={index} className="mb-2">
                  <p className="font-montserrat font-semibold ">{item.label}</p>
                  <p className=" font-montserrat">{item.value}</p>
                </div>
              ))}
            </div>
            <div>
              {Data2.map((item, index) => (
                <div key={index} className="mb-2">
                  <p className="font-montserrat font-semibold ">{item.label}</p>
                  <p className=" font-montserrat">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[70%]  shadoww bg-[#f0f0f0] rounded-xl pl-8 pr-8 pt-4 gap-4 items-center mb-4">
          <div className="flex justify-between w-full border-b border-[#A0A0A0] pb-2 pt-2">
            <p className="text-primary font-montserrat font-semibold text-xl">
              Additional Personal Details
            </p>
            <div className="flex gap-1 items-center text-primary font-montserrat cursor-pointer">
              <FaEdit className="text-lg mb-1" />
              <p className=" font-medium">Edit</p>
            </div>
          </div>
          <div className="flex justify-between m-4">
            <div className="w-full">
              {AdditionalDetails.map((item, index) => (
                <div key={index} className="mb-2 flex justify-between ">
                  <p className="font-montserrat font-semibold ">{item.label}</p>
                  <p className=" font-montserrat font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[70%]  shadoww bg-[#f0f0f0] rounded-xl pl-8 pr-8 pt-4 gap-4 items-center mb-4">
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
                  <p className=" font-montserrat font-semibold ">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[70%]  shadoww bg-[#f0f0f0] rounded-xl pl-8 pr-8 pt-4 gap-4 items-center mb-4">
          <div className="flex justify-between w-full border-b border-[#A0A0A0] pb-2 pt-2">
            <p className="text-primary font-montserrat font-semibold text-xl">
              Family Details
            </p>
            <div className="flex gap-1 items-center text-primary font-montserrat cursor-pointer">
              <FaEdit className="text-lg mb-1" />
              <p className=" font-medium">Edit</p>
            </div>
          </div>
          <div className="flex justify-between m-4">
            <div className="w-full">
              {FamilyDetails.map((item, index) => (
                <div key={index} className="mb-2 flex justify-between">
                  <p className="font-montserrat font-semibold ">{item.label}</p>
                  <p className=" font-montserrat font-semibold ">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[70%]  shadoww bg-[#f0f0f0] rounded-xl pl-8 pr-8 pt-4 gap-4 items-center mb-4">
          <div className="flex justify-between w-full border-b border-[#A0A0A0] pb-2 pt-2">
            <p className="text-primary font-montserrat font-semibold text-xl">
              Additional Details & Interests
            </p>
            <div className="flex gap-1 items-center text-primary font-montserrat cursor-pointer">
              <FaEdit className="text-lg mb-1" />
              <p className=" font-medium">Edit</p>
            </div>
          </div>
          <div className="flex justify-between m-4">
            <div className="w-full">
              {Interest.map((item, index) => (
                <div key={index} className="mb-2 flex justify-between">
                  <p className="font-montserrat font-semibold ">{item.label}</p>
                  <p className=" font-montserrat font-semibold ">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewDetails;
