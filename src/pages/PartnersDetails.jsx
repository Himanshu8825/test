import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { selectPlace } from "../Data";
import { useDispatch, useSelector } from "react-redux";
import { updatePartner } from "../redux/Reducers/PartnerRedures";
import { useNavigate } from "react-router-dom";

const PartnersDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formData = useSelector((state) => state.partner);
  const notify = () => toast("Here is your toast.");

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updatePartner({ [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/sucess");
    console.log(formData);
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
    {
      title: "Working Preference ",
      name: "Working Preference",
      options: [
        "Open To All",
        "Private Company",
        "Public / Government Sector",
        "Business / Self Employed",
        " Homemaker",
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

  const professionOptions = [
    "Profession1",
    "Profession2",
    "Profession3",
    "Profession4",
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center pb-8">
      <div className="w-[60%]  shadow-primary/50  shadow-lg rounded-xl">
        <h1 className="font-montserrat font-semibold text-xl text-center pb-8">
          Basic Details
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-[80%] h-[80%] mx-auto mt-8">
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
              <h2 className="text-lg font-semibold font-montserrat  pb-2 pt-4">
                Community
                <sup className="text-red-600 font-bold ">*</sup>
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

            <span>
              <h2 className="text-lg font-semibold font-montserrat  pb-2">
                Location
                <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full"
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

            {data2.map((section, index) => (
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

            {data3.map((section, index) => (
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

            <div className="mx-auto p-8">
              <button
                type="submit"
                className="px-8 py-2 bg-[#A92525] font-montserrat rounded-lg text-white"
                onClick={notify}
              >
                Done
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PartnersDetails;
