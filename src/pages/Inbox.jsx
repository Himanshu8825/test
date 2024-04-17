import React, { useState } from "react";
import { SaveLogo } from "../assets/Index";
import { TbEyeCheck } from "react-icons/tb";
import { RiUserFollowLine } from "react-icons/ri";
import { MdBlockFlipped } from "react-icons/md";
import ProfileRequestCard from "../components/ProfileRequestCard";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";



const Inbox = () => {
  const [activeTab, setActiveTab] = useState("profileRequest");
  const [navTab, setNavTab] = useState("recived");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleNavTabClick = (tab) => {
    setNavTab(tab);
  };

  return (
    <>
      <div className="p-16">
        <div className="flex gap-8 justify-center">
          <p
            className={`px-6 py-2 rounded-xl text-black shadow-primary shadow-sm cursor-pointer ${
              activeTab === "profileRequest" ? "bg-primary text-white" : ""
            }`}
            onClick={() => handleTabClick("profileRequest")}
          >
            All MAtches
          </p>

          <p
            className={`px-6 py-2 rounded-xl text-black shadow-primary shadow-sm cursor-pointer ${
              activeTab === "interestRequest" ? "bg-primary text-white" : ""
            }`}
            onClick={() => handleTabClick("interestRequest")}
          >
            All MAtches
          </p>
        </div>

        {activeTab === "profileRequest" && (
          <div className="pt-8 relative">
            <div className="w-[20%] border border-primary  rounded-xl absolute mt-8">
              <div className="border-b-2 border-primary m-4">
                <p
                  className={`px-6 py-1 rounded-lg text-black  cursor-pointer mb-1  font-medium    ${
                    navTab === "recived" ? "bg-primary text-white " : ""
                  }`}
                  onClick={() => handleNavTabClick("recived")}
                >
                  Recived
                </p>
              </div>
              <div className="border-b-2 border-primary m-4">
                <p
                  className={`px-6 py-1 rounded-lg text-black  cursor-pointer mb-1   font-medium    ${
                    navTab === "set" ? "bg-primary text-white " : ""
                  }`}
                  onClick={() => handleNavTabClick("set")}
                >
                  Sent
                </p>
              </div>
              <div className="border-b-2 border-primary m-4">
                <p
                  className={`px-6 py-1 rounded-lg text-black cursor-pointer mb-1 font-medium    ${
                    navTab === "accepted" ? "bg-primary text-white " : ""
                  }`}
                  onClick={() => handleNavTabClick("accepted")}
                >
                  Accepted
                </p>
              </div>
              <div className="border-b-2 border-primary m-4 ">
                <p
                  className={`px-6 py-1 rounded-lg text-black  cursor-pointer font-medium mb-1    ${
                    navTab === "decline" ? "bg-primary text-white " : ""
                  }`}
                  onClick={() => handleNavTabClick("decline")}
                >
                  Decline / Rejected
                </p>
              </div>
            </div>
          </div>
        )}

        {navTab === "recived" && (
          <div className="">
            <ProfileRequestCard
              decline={<RxCross2 className="text-2xl text-primary" />}
              accept={<FaCheck className="text-white" />}
            />
            <ProfileRequestCard
              decline={<RxCross2 className="text-2xl text-primary" />}
              accept={<FaCheck className="text-white" />}
            />
            <ProfileRequestCard
              decline={<RxCross2 className="text-2xl text-primary" />}
              accept={<FaCheck className="text-white" />}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Inbox;
