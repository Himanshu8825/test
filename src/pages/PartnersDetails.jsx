import React from "react";
import { additionalRadio, selectPlace } from "../Data";

const PartnersDetails = () => {
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
        " Master's Degree",
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
        " Homemaker",
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
        " Eggetarian",
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
        <form>
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
                      //   onChange={handleChange}
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
                  //   value={formData.community}
                  //   onChange={handleChange}
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
              {selectPlace.map((place) => (
                <select
                  key={place.name}
                  name={place.name}
                  //   value={formData[place.name]}
                  //   onChange={handleChange}
                  className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full"
                >
                  <option value="">{place.label}</option>
                  {place.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ))}
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
                      //   onChange={handleChange}
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
                  name="community"
                  //   value={formData.community}
                  //   onChange={handleChange}
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
                      //   onChange={handleChange}
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
                //   onClick={updateCurrentState}
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
