import React, { useState } from "react";
import { PartnersDetails } from "../Index";
import toast, { Toaster } from "react-hot-toast";
import { selectPlace } from "../Data";
import { useDispatch, useSelector } from "react-redux";
import { updatePartner } from "../redux/Reducers/PartnerRedures";
import { useNavigate } from "react-router-dom";
import RangeSlider from "../Slider/MinimumDistance";
import { FaChevronDown } from "react-icons/fa";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("profileId");
  const [show, setShow] = useState(false);

  const changeHandler = () => {
    setShow(!show);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formData = useSelector((state) => state.partner);
  const notify = () => toast("Here is your toast.");

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updatePartner({ [name]: value }));
  };

  const data = [
    {
      title: "Martial Status",
      name: "maritalStatus",
      options: [
        "Open To All",
        "Single",
        "Divorced",
        "Awaiting Divorce",
        "Widow or Widower",
      ],
    },
    {
      title: "Manglik Status ",
      name: "manglikStatus ",
      options: ["Yes", "No", "Partial", "Not Sure"],
    },
  ];

  const data2 = [
    {
      title: "Education ",
      name: "Education",
      options: [
        "Open To All",
        "High School and Below",
        "Associate / Diploma",
        "Bachelor's Degree",
        " Master's Degree",
        "Doctorate",
      ],
    },
  ];

  const data3 = [
    {
      title: "Diet Type ",
      name: "Diet Type ",
      options: [
        "Open To All",
        "Vegetarian",
        "Non - Vegetarian",
        "Occasionally Non - Vegetarian ",
        " Eggetarian",
        "Vegan",
      ],
    },
  ];

  const communityOptions = [
    "Community1",
    "Community2",
    "Community3",
    "Community4",
  ];

  const interestDetails = ["Interest1", "Interest2", "Interest3", "Interest4"];

  const smoking = ["Smoking1", "Smoking2", "Smoking3", "Smoking4"];
  const drinking = ["Drinking1", "Drinking2", "Drinking3", "Drinking4"];
  const diet = ["Diet1", "Diet2", "Diet3", "Diet4"];

  const professionOptions = [
    "Profession1",
    "Profession2",
    "Profession3",
    "Profession4",
  ];

  return (
    <div className="pl-16 pr-16 pt-12 pb-12">
      <div className="flex justify-center items-center font-montserrat font-medium text-lg gap-8 ">
        <p
          className={`px-6 py-2 rounded-xl text-black shadow-primary shadow-sm cursor-pointer ${
            activeTab === "profileId" ? "bg-primary text-white" : ""
          }`}
          onClick={() => handleTabClick("profileId")}
        >
          Search By Profile ID
        </p>
        <p
          className={`px-6 py-2 rounded-xl text-black shadow-primary shadow-sm cursor-pointer  ${
            activeTab === "basicSearch" ? "bg-primary text-white" : ""
          }`}
          onClick={() => handleTabClick("basicSearch")}
        >
          Basic Search
        </p>
      </div>
      <div className="tab-content">
        {activeTab === "profileId" && (
          <div className="w-full flex justify-center items-center ">
            <div className="w-[50%] flex flex-col p-16 mt-16 shadow-primary shadow-md rounded-xl">
              <input
                type="text"
                placeholder="By Profile ID......"
                className=" outline-none px-2 py-2 text-lg   border-b-2 border-black "
              />
              <button className="px-4 py-2 font-montserrat bg-primary rounded-xl mt-8 w-40 mx-auto text-white">
                Submit
              </button>
            </div>
          </div>
        )}
        {activeTab === "basicSearch" && (
          <div className="mt-16">
            <div className="w-full flex flex-col justify-center items-center pb-8">
              <div className="w-[50%]  shadow-primary/50  shadow-lg rounded-xl">
                <h1 className="font-montserrat font-semibold text-xl text-center pb-8">
                  Basic Details
                </h1>
                <form>
                  <div className="flex flex-col w-[80%] h-[80%] mx-auto mt-8">
                    <span>
                      <h2 className="text-lg font-semibold font-montserrat pb-2 pt-4">
                        Age Range
                        <sup className="text-red-600 font-bold ">*</sup>
                      </h2>
                      <div>
                        <RangeSlider />
                      </div>
                    </span>

                    <span>
                      <h2 className="text-lg font-semibold font-montserrat pb-2 pt-4">
                        Height Range
                        <sup className="text-red-600 font-bold ">*</sup>
                      </h2>
                      <div>
                        <RangeSlider />
                      </div>
                    </span>

                    {data.map((section, index) => (
                      <span key={index} className="mt-4">
                        <h2 className="font-semibold font-montserrat">
                          {section.title}
                          <sup className="text-red-600 font-bold">*</sup>
                        </h2>
                        {section.options.map((option, optionIndex) => (
                          <div key={optionIndex} className="flex pl-4">
                            <input
                              type="radio"
                              id={`${section.name}-${option}`}
                              name={section.name}
                              value={option}
                              className="mr-2"
                              onChange={handleChange}
                            />
                            <label
                              htmlFor={`${section.name}-${option}`}
                              className="font-montserrat font-medium"
                            >
                              {option}
                            </label>
                          </div>
                        ))}
                      </span>
                    ))}

                    <span>
                      <h2 className="text-2xl text-primary font-semibold font-montserrat  pb-2 pt-4 -ml-4">
                        Location Details
                      </h2>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className=" py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full"
                      >
                        <option value="">Select Country</option>
                        {Object.keys(selectPlace).map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>

                      {formData.country && (
                        <select
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full"
                        >
                          <option value="">Select State</option>
                          {selectPlace[formData.country].states.map((state) => (
                            <option key={state.name} value={state.name}>
                              {state.name}
                            </option>
                          ))}
                        </select>
                      )}

                      {formData.state && selectPlace[formData.country] && (
                        <select
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full"
                        >
                          <option value="">Select City</option>
                          {selectPlace[formData.country].states
                            .find((state) => state.name === formData.state)
                            ?.cities.map((city) => (
                              <option key={city} value={city}>
                                {city}
                              </option>
                            ))}
                        </select>
                      )}
                    </span>

                    <div>
                      <h2 className="text-2xl text-primary font-semibold font-montserrat  pb-2 pt-4 -ml-4">
                        Carrer Details
                      </h2>
                      {data2.map((section, index) => (
                        <div key={index} className="">
                          <h2 className="font-semibold font-montserrat">
                            {section.title}
                            <sup className="text-red-600 font-bold">*</sup>
                          </h2>
                          {section.options.map((option, optionIndex) => (
                            <div key={optionIndex} className="flex pl-4">
                              <input
                                type="radio"
                                id={`${section.name}-${option}`}
                                name={section.name}
                                value={option}
                                className="mr-2"
                                onChange={handleChange}
                              />
                              <label
                                htmlFor={`${section.name}-${option}`}
                                className="font-montserrat font-medium"
                              >
                                {option}
                              </label>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>

                    <span className="">
                      <h2 className="text-lg font-semibold font-montserrat  pb-2 pt-4">
                        Profession
                        <sup className="text-red-600 font-bold ">*</sup>
                      </h2>
                      <div className="flex gap-4 items-center ">
                        <select
                          name="profession"
                          value={formData.profession}
                          onChange={handleChange}
                          className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full"
                        >
                          <option value="">Profession</option>
                          {professionOptions.map((option, index) => (
                            <option key={index}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </span>

                    <span>
                      <h2 className="text-lg font-semibold font-montserrat pb-2 pt-4">
                        Annual Income Range (USD)
                      </h2>
                      <div>
                        <RangeSlider />
                      </div>
                    </span>

                    <div>
                      <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={changeHandler}
                      >
                        <p className=" font-montserrat text-primary text-sm">
                          View Advance Search
                        </p>
                        <FaChevronDown className="text-primary text-sm mt-1" />
                      </div>

                      <div
                        className={`font-montserrat text-white flex flex-col gap-2  mt-4 setting-transition text-[15px] font-light ${
                          show ? "show" : ""
                        }`}
                      >
                        <span>
                          <h2 className="text-2xl font-semibold font-montserrat pb-2  text-primary">
                            Community
                          </h2>
                          <div className="flex gap-4 items-center ">
                            <select
                              name="community"
                              value={formData.community || ""}
                              onChange={handleChange}
                              className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full"
                            >
                              <option value="">Community</option>
                              {communityOptions.map((option, index) => (
                                <option key={index}>{option}</option>
                              ))}
                            </select>
                          </div>
                        </span>

                        <div>
                          <h2 className="text-2xl font-semibold font-montserrat  pb-2  text-primary ">
                            Interests & Lifestyle Details
                          </h2>
                          <span>
                            <div className="flex gap-4 items-center ">
                              <select
                                name="community"
                                value={formData.community || ""}
                                onChange={handleChange}
                                className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full"
                              >
                                <option value="">Interest</option>
                                {interestDetails.map((option, index) => (
                                  <option key={index}>{option}</option>
                                ))}
                              </select>
                            </div>
                          </span>

                          <span>
                            <div className="flex gap-4 items-center ">
                              <select
                                name="community"
                                value={formData.community || ""}
                                onChange={handleChange}
                                className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full"
                              >
                                <option value="">Smoking</option>
                                {smoking.map((option, index) => (
                                  <option key={index}>{option}</option>
                                ))}
                              </select>
                            </div>
                          </span>

                          <span>
                            <div className="flex gap-4 items-center ">
                              <select
                                name="community"
                                value={formData.community || ""}
                                onChange={handleChange}
                                className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full"
                              >
                                <option value="">Drinking</option>
                                {drinking.map((option, index) => (
                                  <option key={index}>{option}</option>
                                ))}
                              </select>
                            </div>
                          </span>

                          <span>
                            <div className="flex gap-4 items-center ">
                              <select
                                name="community"
                                value={formData.community || ""}
                                onChange={handleChange}
                                className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full"
                              >
                                <option value="">Diet</option>
                                {diet.map((option, index) => (
                                  <option key={index}>{option}</option>
                                ))}
                              </select>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mx-auto p-8">
                      <button
                        type="submit"
                        className="px-8 py-2 bg-[#A92525] font-montserrat rounded-lg text-white"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
