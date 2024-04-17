import React, { useState } from "react";
import MatchCard from "../components/MatchCard";

const Matches = () => {
  const [activeTab, setActiveTab] = useState("allMatches");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="p-16 ">
        <div className="flex gap-4 justify-center">
          <p
            className={`px-6 py-2 rounded-xl text-black shadow-primary shadow-sm cursor-pointer ${
              activeTab === "allMatches" ? "bg-primary text-white" : ""
            }`}
            onClick={() => handleTabClick("allMatches")}
          >
            All MAtches
          </p>
          <p
            className={`px-6 py-2 rounded-xl text-black shadow-primary shadow-sm cursor-pointer ${
              activeTab === "newJoined" ? "bg-primary text-white" : ""
            }`}
            onClick={() => handleTabClick("newJoined")}
          >
            Newly Joined
          </p>
          <p
            className={`px-6 py-2 rounded-xl text-black shadow-primary shadow-sm cursor-pointer ${
              activeTab === "shortlist" ? "bg-primary text-white" : ""
            }`}
            onClick={() => handleTabClick("shortlist")}
          >
            Shortlisted By You
          </p>
          <p
            className={`px-6 py-2 rounded-xl text-black shadow-primary shadow-sm cursor-pointer ${
              activeTab === "searchResult" ? "bg-primary text-white" : ""
            }`}
            onClick={() => handleTabClick("searchResult")}
          >
            Search Results
          </p>
        </div>

        <div>
          {activeTab === "allMatches" && (
            <div>
              <MatchCard />
              <MatchCard />
              <MatchCard />
              <MatchCard />
            </div>
          )}

          {activeTab == "newJoined" && (
            <div>
              <div>
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
              </div>
            </div>
          )}
          {activeTab == "shortlist" && (
            <div>
              <div>
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
              </div>
            </div>
          )}
          {activeTab == "searchResult" && (
            <div className="w-full">
              <div className="w-[75%] flex flex-row-reverse pt-4 ml-4 ">
                <button className="px-4 py-2 border border-primary rounded-lg text-primary font-montserrat font-semibold  ">Edit Search Result</button>
              </div>
              <div>
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Matches;
