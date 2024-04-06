import React, { useState } from "react";

const stepsData = [
  { number: 1 },
  { number: 2, label: "Additional Details" },
  { number: 3 },
  { number: 4 },
  { number: 5 },
  { number: 6 },
];

const AdditionalDetails = () => {
  const [formData, setFormData] = useState({
    personalAppearance: "",
    country: "",
    state: "",
    city: "",
    relocate: "",
    dietType: "",
    alcoholPreference: "",
    smokingPreference: "",
    maritalStatus: "",
    contactNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center pb-8">
      <div className="flex gap-8 p-4 cursor-pointer">
        {stepsData.map((step, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div
              className={`p-6 w-[5px] h-[5px] rounded-full text-xl font-montserrat font-medium flex justify-center items-center ${
                step.number === 1 || step.number === 2
                  ? "text-white bg-[#A92525] "
                  : "text-black shadow-black shadow-sm"
              }`}
            >
              {step.number}
            </div>
            <p className="font-montserrat text-sm">{step.label}</p>
          </div>
        ))}
      </div>
      <div className="w-[45%] shadow-primary/50  shadow-lg rounded-xl">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-[80%] h-[80%] mx-auto mt-8">
            <span>
              <h2 className="text-lg font-semibold font-montserrat  pb-2">
                Personal Appearance
              </h2>
              <textarea
                type="text"
                className="w-full py-4 mb-4 rounded-lg
                  focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                placeholder="Personal Appearance"
                name="personalAppearance"
                value={formData.personalAppearance}
                onChange={handleChange}
              ></textarea>
            </span>

            <span>
              <h2 className="text-lg font-semibold font-montserrat  pb-2">
                Personal Appearance
                <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              <select
                className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full "
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="">Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Nepal">Nepal</option>
                <option value="Austrelia">Austrelia</option>
                <option value="Bangladesh">Bangladesh</option>
              </select>
              <select
                className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full "
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
              >
                <option value="">State</option>
                <option value="Bihar">Bihar</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="UP">UP</option>
                <option value="MP">MP</option>
                <option value="Kerla">Kerla</option>
                <option value="Maharastra">Maharastra</option>
                <option value="Nagpur">Nagpur</option>
              </select>
              <select
                className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full "
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
              >
                <option value="">City</option>
                <option value="Patna">Patna</option>
                <option value="Aurangabad">Aurangabad</option>
                <option value="Samastipur">Samastipur</option>
                <option value="Muzzafarpur">Muzzafarpur</option>
                <option value="Ara">Ara</option>
                <option value="Chhappra">Chhappra</option>
                <option value="Darbhanga">Darbhanga</option>
              </select>
            </span>

            <span className="">
              <h2 className=" font-semibold font-montserrat">
                Open/Plan to Relocate in Future
                <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              <div className="flex pl-4">
                <input
                  type="radio"
                  id="relocateYes"
                  name="relocate"
                  value="Yes"
                  className="mr-2 "
                  onChange={handleChange}
                />
                <label
                  htmlFor="relocateYes"
                  className=" font-montserrat font-medium"
                >
                  Yes
                </label>
              </div>
              <div className="flex pl-4">
                <input
                  type="radio"
                  id="relocateNo"
                  name="relocate"
                  value="No"
                  className="mr-2 "
                  onChange={handleChange}
                />
                <label
                  htmlFor="relocateNo"
                  className=" font-montserrat font-medium"
                >
                  No
                </label>
              </div>
              <div className="flex pl-4">
                <input
                  type="radio"
                  id="relocateNotSure"
                  name="relocate"
                  value="Not Sure"
                  className="mr-2 "
                  onChange={handleChange}
                />
                <label
                  htmlFor="relocateNotSure"
                  className=" font-montserrat font-medium"
                >
                  Not Sure
                </label>
              </div>
            </span>

            <span className="mt-4">
              <h2 className=" font-semibold font-montserrat">
                Diet Type <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              <div className="flex pl-4">
                <input
                  type="radio"
                  id="vegetarian"
                  name="dietType"
                  value="Vegetarian"
                  className="mr-2"
                  onChange={handleChange}
                />
                <label
                  htmlFor="vegetarian"
                  className=" font-montserrat font-medium"
                >
                  Vegetarian
                </label>
              </div>
              <div className="flex pl-4">
                <input
                  type="radio"
                  id="nonVegetarian"
                  name="dietType"
                  value="Non - Vegetarian"
                  className="mr-2 "
                  onChange={handleChange}
                />
                <label
                  htmlFor="nonVegetarian"
                  className=" font-montserrat font-medium"
                >
                  Non - Vegetarian
                </label>
              </div>
              <div className="flex pl-4">
                <input
                  type="radio"
                  id="occasionallyNonVegetarian "
                  name="dietType"
                  value="Occasionally Non - Vegetarian"
                  className="mr-2 "
                  onChange={handleChange}
                />
                <label
                  htmlFor="occasionallyNonVegetarian"
                  className=" font-montserrat font-medium"
                >
                  Occasionally Non - Vegetarian
                </label>
              </div>
              <div className="flex pl-4">
                <input
                  type="radio"
                  id="eggetarian"
                  name="dietType"
                  value="Eggetarian"
                  className="mr-2 "
                  onChange={handleChange}
                />
                <label
                  htmlFor="eggetarian"
                  className=" font-montserrat font-medium"
                >
                  Eggetarian
                </label>
              </div>
              <div className="flex pl-4">
                <input
                  type="radio"
                  id="vegan"
                  name="dietType"
                  value="Vegan"
                  className="mr-2 "
                  onChange={handleChange}
                />
                <label htmlFor="vegan" className=" font-montserrat font-medium">
                  Vegan
                </label>
              </div>
            </span>

            <span className="mt-4">
              <h2 className=" font-semibold font-montserrat">
                Alcohol Consumption Preference{" "}
                <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              <div className="flex pl-4">
                <input
                  type="radio"
                  id="regular"
                  name="alcoholPreference"
                  value="Regular"
                  className="mr-2"
                  onChange={handleChange}
                />
                <label
                  htmlFor="regular"
                  className=" font-montserrat font-medium"
                >
                  Regular
                </label>
              </div>
              <div className="flex pl-4">
                <input
                  type="radio"
                  id="occasional"
                  name="alcoholPreference"
                  value="Occasional"
                  className="mr-2 "
                  onChange={handleChange}
                />
                <label
                  htmlFor="occasional"
                  className=" font-montserrat font-medium"
                >
                  Occasional
                </label>
              </div>
              <div className="flex pl-4">
                <input
                  type="radio"
                  id="social"
                  name="alcoholPreference"
                  value="Social"
                  className="mr-2 "
                  onChange={handleChange}
                />
                <label
                  htmlFor="social"
                  className=" font-montserrat font-medium"
                >
                  social
                </label>
              </div>
              <div className="flex pl-4">
                <input
                  type="radio"
                  id="notatall"
                  name="alcoholPreference"
                  value="Not at all"
                  className="mr-2 "
                  onChange={handleChange}
                />
                <label
                  htmlFor="notatall"
                  className=" font-montserrat font-medium"
                >
                  Not at all
                </label>
              </div>
            </span>
            <span className="mt-4">
              <h2 className=" font-semibold font-montserrat">
                Smoking Preference
                <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              <div className="flex pl-4">
                <input
                  type="radio"
                  id="regular"
                  name="smokingPreference"
                  value="Regular"
                  className="mr-2"
                  onChange={handleChange}
                />
                <label
                  htmlFor="regular"
                  className=" font-montserrat font-medium"
                >
                  Regular
                </label>
              </div>
              <div className="flex pl-4">
                <input
                  type="radio"
                  id="occasional"
                  name="smokingPreference"
                  value="Occasional"
                  className="mr-2 "
                  onChange={handleChange}
                />
                <label
                  htmlFor="occasional"
                  className=" font-montserrat font-medium"
                >
                  Occasional
                </label>
              </div>
              <div className="flex pl-4">
                <input
                  type="radio"
                  id="social"
                  name="smokingPreference"
                  value="Social"
                  className="mr-2 "
                  onChange={handleChange}
                />
                <label
                  htmlFor="social"
                  className=" font-montserrat font-medium"
                >
                  social
                </label>
              </div>
              <div className="flex pl-4">
                <input
                  type="radio"
                  id="notatall"
                  name="smokingPreference"
                  value="Not at all"
                  className="mr-2 "
                  onChange={handleChange}
                />
                <label
                  htmlFor="notatall"
                  className=" font-montserrat font-medium"
                >
                  Not at all
                </label>
              </div>
            </span>

            <span className="mt-4">
              <h2 className=" font-semibold font-montserrat">
                Martial Status <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              <div className="flex pl-4">
                <input
                  type="radio"
                  id="single"
                  name="maritalStatus"
                  value="Single"
                  className="mr-2 "
                  onChange={handleChange}
                />
                <label
                  htmlFor="single"
                  className=" font-montserrat font-medium"
                >
                  Single
                </label>
              </div>
              <div className="flex pl-4">
                <input
                  type="radio"
                  id="divorced"
                  name="maritalStatus"
                  value="Divorced"
                  className="mr-2 "
                  onChange={handleChange}
                />
                <label
                  htmlFor="divorced"
                  className=" font-montserrat font-medium"
                >
                  Divorced
                </label>
              </div>
              <div className="flex pl-4">
                <input
                  type="radio"
                  id="awaitingDivorce"
                  name="maritalStatus"
                  value="Awaiting Divorce"
                  className="mr-2 "
                  onChange={handleChange}
                />
                <label
                  htmlFor="awaitingDivorce"
                  className=" font-montserrat font-medium"
                >
                  Awaiting Divorce
                </label>
              </div>
              <div className="flex pl-4">
                <input
                  type="radio"
                  id="widowOrWidower"
                  name="maritalStatus"
                  value="Widow or Widower"
                  className="mr-2 "
                  onChange={handleChange}
                />
                <label
                  htmlFor="widowOrWidower"
                  className=" font-montserrat font-medium"
                >
                  Widow or Widower
                </label>
              </div>
            </span>

            <span className="mt-4">
              <h2 className="text-lg font-semibold font-montserrat  pb-2">
                Contact Number
                <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              <input
                type="text"
                className="w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                placeholder="Contact Number"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </span>

            <span className="mt-4">
              <h2 className="text-lg font-semibold font-montserrat  pb-2">
                Email Id
                <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              <input
                type="email"
                className="w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                placeholder="Email Id"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </span>

            <div className="flex justify-center  pb-4">
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

export default AdditionalDetails;
