import React, { useState } from "react";
import ProfileRequestCard from "../../components/ProfileRequestCard";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";
import SentProfileCard from "../../components/SentProfileCard";
import MatchCard from "../../components/MatchCard";
import BlockedCard from "../../components/BlockCard";

const UpdateContact = () => {
  const [navTab, setNavTab] = useState("updateContact");

  const handleNavTabClick = (tab) => {
    setNavTab(tab);
  };
  return (
    <>
      <div className="p-16">
        <div className="pt-8 relative">
          <div className="border border-primary  rounded-xl absolute mt-8">
            <div className="border-b-2 border-primary m-4">
              <p
                className={`px-6 py-1 rounded-lg text-black  cursor-pointer mb-1  font-medium    ${
                  navTab === "updateContact" ? "bg-primary text-white " : ""
                }`}
                onClick={() => handleNavTabClick("updateContact")}
              >
                Update Contact Information
              </p>
            </div>
            <div className="border-b-2 border-primary m-4">
              <p
                className={`px-6 py-1 rounded-lg text-black  cursor-pointer mb-1   font-medium    ${
                  navTab === "changeNumber" ? "bg-primary text-white " : ""
                }`}
                onClick={() => handleNavTabClick("changeNumber")}
              >
                Change Registered Number
              </p>
            </div>
            <div className="border-b-2 border-primary m-4">
              <p
                className={`px-6 py-1 rounded-lg text-black cursor-pointer mb-1 font-medium    ${
                  navTab === "whatsApp" ? "bg-primary text-white " : ""
                }`}
                onClick={() => handleNavTabClick("whatsApp")}
              >
                Whatsapp Settings
              </p>
            </div>
            <div className="border-b-2 border-primary m-4 ">
              <p
                className={`px-6 py-1 rounded-lg text-black  cursor-pointer font-medium mb-1    ${
                  navTab === "emailSetting" ? "bg-primary text-white " : ""
                }`}
                onClick={() => handleNavTabClick("emailSetting")}
              >
                Subscribe Email Settings
              </p>
            </div>
            <div className="border-b-2 border-primary m-4 ">
              <p
                className={`px-6 py-1 rounded-lg text-black  cursor-pointer font-medium mb-1    ${
                  navTab === "blocked" ? "bg-primary text-white " : ""
                }`}
                onClick={() => handleNavTabClick("blocked")}
              >
                Blocked Profile
              </p>
            </div>
            <div className="border-b-2 border-primary m-4 ">
              <p
                className={`px-6 py-1 rounded-lg text-black  cursor-pointer font-medium mb-1    ${
                  navTab === "deleteAcc" ? "bg-primary text-white " : ""
                }`}
                onClick={() => handleNavTabClick("deleteAcc")}
              >
                Delete Account
              </p>
            </div>
            <div className="border-b-2 border-primary m-4 ">
              <p
                className={`px-6 py-1 rounded-lg text-black  cursor-pointer font-medium mb-1    ${
                  navTab === "logout" ? "bg-primary text-white " : ""
                }`}
                onClick={() => handleNavTabClick("logout")}
              >
                Logout
              </p>
            </div>
          </div>
          {navTab === "updateContact" && (
            <form>
              <div className=" flex justify-end items-center">
                <div className="w-[70%]  p-8  shadow-lg rounded-xl">
                  <h1 className="pt-4 pb-4 font-montserrat font-semibold text-lg">
                    Email and Contact Settings
                  </h1>
                  <div className="w-9/12">
                    <label
                      className="block mb-2 font-montserrat font-medium"
                      htmlFor="name"
                    >
                      Change Email Id
                    </label>
                    <input
                      className="px-3 py-3 bg-[#F0F0F0] rounded-lg w-full outline-none font-montserrat"
                      id="name"
                      type="text"
                      placeholder="Email Id"
                    />
                    <div className="flex gap-4 pt-4 pb-4 flex-row-reverse">
                      <button className="px-4 py-2 font-montserrat font-medium border border-primary text-primary rounded-lg">
                        Cancel
                      </button>
                      <button className="px-4 py-2 font-montserrat font-medium bg-primary text-white rounded-lg ">
                        Update
                      </button>
                    </div>
                  </div>
                  <div className="w-9/12">
                    <label
                      className="block mb-2 font-montserrat font-medium"
                      htmlFor="name"
                    >
                      Change Contact Number
                    </label>
                    <input
                      className="px-3 py-3 bg-[#F0F0F0] rounded-lg w-full outline-none font-montserrat"
                      id="name"
                      type="text"
                      placeholder="Contact Number"
                    />
                    <div className="flex gap-4 pt-4 pb-4 flex-row-reverse">
                      <button className="px-4 py-2 font-montserrat font-medium border border-primary text-primary rounded-lg">
                        Cancel
                      </button>
                      <button className="px-4 py-2 font-montserrat font-medium bg-primary text-white rounded-lg ">
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          )}

          {navTab === "changeNumber" && (
            <div className="flex justify-end items-center mt-8">
              <div className="w-[70%]  p-8  shadow-lg rounded-xl ">
                <h1 className="pt-4 pb-2 font-montserrat font-semibold text-lg ">
                  Change Registered Number
                </h1>

                <div className="flex gap-4 pt-2 pb-4 ">
                  <button className="px-4 py-2 font-montserrat font-medium bg-primary text-white rounded-lg ">
                    Change
                  </button>
                  <button className="px-4 py-2 font-montserrat font-medium border border-primary text-primary rounded-lg">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {navTab === "whatsApp" && (
            <div className="flex justify-end items-center mt-8">
              <div className="w-[70%]  pt-8 pb-8 pl-16  shadow-lg rounded-xl ">
                <h1 className="pt-4 pb-2 font-montserrat font-semibold text-lg ">
                  Whatsapp Settings
                </h1>

                <div className="flex gap-2 flex-col">
                  <h2 className=" font-montserrat">
                    Requests to send as msg on WhatsApp.
                  </h2>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="enable"
                      className="form-radio  mr-2"
                      name="select"
                      checked
                    />
                    Enable
                  </label>

                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="desable"
                      className="form-radio  mr-2 "
                      name="select"
                    />
                    Desable
                  </label>
                </div>
              </div>
            </div>
          )}

          {navTab === "emailSetting" && (
            <div className="flex justify-end items-center mt-8">
              <div className="w-[70%]  pt-8 pb-8 pl-16  shadow-lg rounded-xl ">
                <h1 className="pt-4 pb-2 font-montserrat font-semibold text-lg ">
                  Email Settings
                </h1>

                <div className="flex gap-2 flex-col">
                  <h2 className=" font-montserrat">
                    Subscribe Email Services Every 15 Days
                  </h2>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="enable"
                      className="form-radio  mr-2"
                      name="select"
                      checked
                    />
                    Enable
                  </label>

                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="desable"
                      className="form-radio  mr-2 "
                      name="select"
                    />
                    Desable
                  </label>
                </div>
              </div>
            </div>
          )}
          {navTab === "blocked" && (
            <div>
              <BlockedCard />
            </div>
          )}
          {navTab === "deleteAcc" && (
            <div className="flex justify-end items-center mt-8">
              <div className="w-[70%]  pt-8 pb-8 pl-16  shadow-lg rounded-xl ">
                <h1 className="pt-4 pb-2 font-montserrat font-semibold text-lg ">
                  Delete Profile
                </h1>

                <div className="flex gap-2 flex-col pb-4">
                  <h2 className=" font-montserrat">
                    Please choose a reason for profile deletion.
                  </h2>
                  <p className=" font-montserrat">
                    Note: If you delete your profile, it cannot be restored.
                  </p>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="fixed"
                      className="form-radio  mr-2"
                      name="fixed"
                      checked
                    />
                    Marriage Fixed
                  </label>
                </div>
                <h2 className=" font-montserrat font-medium pb-2">
                  Is your marriage fixed by Connnecting Soulmate ?
                </h2>
                <div className="flex gap-2 ">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="yes"
                      className="form-radio  mr-2"
                      name="delete"
                      checked
                    />
                    Yes
                  </label>

                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="no"
                      className="form-radio  mr-2 "
                      name="delete"
                    />
                    No
                  </label>
                </div>

                <div className="flex gap-2 flex-col pt-2 pb-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="married"
                      className="form-radio  mr-2"
                      name="select"
                      checked
                    />
                    Married
                  </label>

                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="other"
                      className="form-radio  mr-2 "
                      name="select"
                    />
                    Other Reason
                  </label>
                </div>
              </div>
            </div>
          )}
          {navTab === "logout" && (
            <div>
              <MatchCard />
              <MatchCard />
              <MatchCard />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UpdateContact;
