import React, { useState } from "react";

const CarrerDetails = () => {
  const [formData, setFormData] = useState({
    education: "",
    highestQualification: "",
    schoolOrUniversity: "",
    profession: "",
    currentDesignation: "",
    previousOccupation: "",
    annualIncomeType: "",
    annualIncome: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    <div className="w-full flex flex-col justify-center items-center pb-8">
      <div className="w-[45%] shadow-primary/50  shadow-lg rounded-xl">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-[80%] h-[80%] mx-auto">
            <span>
              <h2 className="text-lg font-semibold font-montserrat pt-6">
                Education
                <sup className="text-red-600 font-bold">*</sup>
              </h2>
              <div className="flex pl-4">
                <input
                  type="radio"
                  id="highSchool"
                  name="education"
                  value="High School and Below"
                  onChange={handleChange}
                  className="mr-2"
                />
                <label
                  htmlFor="highSchool"
                  className="font-montserrat font-medium"
                >
                  High School and Below
                </label>
              </div>
              <div className="flex pl-4">
                <input
                  type="radio"
                  id="diploma"
                  name="education"
                  value="Associate / Diploma"
                  onChange={handleChange}
                  className="mr-2"
                />
                <label
                  htmlFor="diploma"
                  className="font-montserrat font-medium"
                >
                  Associate / Diploma
                </label>
              </div>
              <div className="flex pl-4">
                <input
                  type="radio"
                  id="bachloresDegree"
                  name="education"
                  value="Bachelor's Degree"
                  onChange={handleChange}
                  className="mr-2"
                />
                <label
                  htmlFor="bachloresDegree"
                  className="font-montserrat font-medium"
                >
                  Bachelor's Degree
                </label>
              </div>

              <div className="flex pl-4">
                <input
                  type="radio"
                  id="mastersDegree"
                  name="education"
                  value="Master's Degree"
                  onChange={handleChange}
                  className="mr-2"
                />
                <label
                  htmlFor="mastersDegree"
                  className="font-montserrat font-medium"
                >
                  Master's Degree
                </label>
              </div>

              <div className="flex pl-4">
                <input
                  type="radio"
                  id="doctor"
                  name="education"
                  value=" Doctorate"
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="doctor" className="font-montserrat font-medium">
                  Doctorate
                </label>
              </div>
            </span>

            <span>
              <h2 className="text-lg font-semibold font-montserrat  pb-2">
                Highest Qualification
                <sup className="text-red-600 font-bold">*</sup>
              </h2>
              <input
                type="text"
                name="highestQualification"
                value={formData.highestQualification}
                onChange={handleChange}
                className="w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                placeholder="Highest Qualification"
              />
            </span>

            <span>
              <h2 className="text-lg font-semibold font-montserrat  pb-2">
                School / University
                <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              <input
                type="text"
                name="schoolOrUniversity"
                value={formData.schoolOrUniversity}
                onChange={handleChange}
                className="w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                placeholder=" School / University"
              />
            </span>

            <span>
              <h2 className="text-lg font-semibold font-montserrat  pb-2">
                Profession
                <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              <select
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full"
              >
                <option value="">Profession</option>
                <option value="Doctor">Doctor</option>
                <option value="Engineer">Engineer</option>
                <option value="Advocate">Advocate</option>
                <option value="GovJob">Gov Job</option>
              </select>
            </span>

            <span>
              <h2 className="text-lg font-semibold font-montserrat  pb-2">
                Current Designation
                <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              <input
                type="text"
                name="currentDesignation"
                value={formData.currentDesignation}
                onChange={handleChange}
                className="w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                placeholder="Current Designation"
              />
            </span>

            <span>
              <h2 className="text-lg font-semibold font-montserrat  pb-2">
                Previous Occupation
                <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              <input
                type="text"
                name="previousOccupation"
                value={formData.previousOccupation}
                onChange={handleChange}
                className="w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                placeholder="Previous Occupation"
              />
            </span>

            <span>
              <h2 className="text-lg font-semibold font-montserrat pt-6">
                Approximate Annual Income
                <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              <div className="flex pl-4">
                <input
                  type="radio"
                  id="india"
                  name="annualIncomeType"
                  value="Indian Rupee (INR)"
                  onChange={handleChange}
                  className="mr-2"
                />
                <label
                  htmlFor="highSchool"
                  className="font-montserrat font-medium"
                >
                  Indian Rupee (INR)
                </label>
              </div>
              <div className="flex pl-4">
                <input
                  type="radio"
                  id="dollar"
                  name="annualIncomeType"
                  value="United States Dollar (USD)"
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="dollar" className="font-montserrat font-medium">
                  United States Dollar (USD)
                </label>
              </div>
              {/* Add other income type options similarly */}
              <div className="flex pl-4">
                <input
                  type="radio"
                  id="dirham"
                  name="annualIncomeType"
                  value="United Arab Emirates Dirham (AED)"
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="dirham" className="font-montserrat font-medium">
                  United Arab Emirates Dirham (AED)
                </label>
              </div>

              <div className="flex pl-4">
                <input
                  type="radio"
                  id="gbp"
                  name="annualIncomeType"
                  value="United Kingdom Pound (GBP)"
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="gbp" className="font-montserrat font-medium">
                  United Kingdom Pound (GBP)
                </label>
              </div>
            </span>

            <span>
              <h2 className="text-lg font-semibold font-montserrat  pb-2">
                Annual Income
                <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              <input
                type="text"
                name="annualIncome"
                value={formData.annualIncome}
                onChange={handleChange}
                className="w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                placeholder="Annual Income"
              />
            </span>

            <div  className="mx-auto p-8">
              <button
                type="submit"
                className="px-8 py-2 bg-[#A92525] font-montserrat rounded-lg text-white"
              >
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarrerDetails;
