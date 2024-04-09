import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePersonalDetails } from "../redux/Reducers/PersonalDetailsReducers";

const PersonalDetails = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.personalDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updatePersonalDetails({ [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center pb-8">
        <div className="w-[45%] shadow-primary/50  shadow-lg rounded-xl">
          <h1 className="text-2xl font-montserrat font-semibold text-center p-4">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-[80%] h-[80%] mx-auto">
              <span>
                <h2 className="text-lg font-semibold font-montserrat  pb-2">
                  Bride/Groom - First Name
                  <sup className="text-red-600 font-bold ">*</sup>
                </h2>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                  placeholder="First Name"
                />
              </span>
              <span>
                <h2 className="text-lg font-semibold font-montserrat  pb-2">
                  Bride/Groom - Middle Name
                  <sup className="text-red-600 font-bold ">*</sup>
                </h2>
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                  className="w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                  placeholder="Middle Name"
                />
              </span>
              <span>
                <h2 className="text-lg font-semibold font-montserrat  pb-2">
                  Bride/Groom - Last Name
                  <sup className="text-red-600 font-bold ">*</sup>
                </h2>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                  placeholder="Last Name"
                />
              </span>
              <span>
                <h2 className="text-lg font-semibold font-montserrat  pb-2">
                  Date Of Birth
                  <sup className="text-red-600 font-bold ">*</sup>
                </h2>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                  placeholder="Date Of Birth"
                />
              </span>
              <span>
                <h2 className="text-lg font-semibold font-montserrat  pb-2">
                  Time Of Birth
                  <sup className="text-red-600 font-bold ">*</sup>
                </h2>
                <input
                  type="time"
                  name="timeOfBirth"
                  value={formData.timeOfBirth}
                  onChange={handleChange}
                  className="w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                  placeholder="Time Of Birth"
                />
              </span>
              <span>
                <h2 className="text-lg font-semibold font-montserrat  pb-2">
                  Place Of Birth
                  <sup className="text-red-600 font-bold ">*</sup>
                </h2>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full"
                >
                  <option value="">Country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Australia">Australia</option>
                  <option value="Bangladesh">Bangladesh</option>
                </select>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full"
                >
                  <option value="">State</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="UP">UP</option>
                  <option value="MP">MP</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Nagpur">Nagpur</option>
                </select>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full"
                >
                  <option value="">City</option>
                  <option value="Patna">Patna</option>
                  <option value="Aurangabad">Aurangabad</option>
                  <option value="Samastipur">Samastipur</option>
                  <option value="Muzaffarpur">Muzaffarpur</option>
                  <option value="Ara">Ara</option>
                  <option value="Chhapra">Chhapra</option>
                  <option value="Darbhanga">Darbhanga</option>
                </select>
              </span>
              <span>
                <h2 className="text-lg font-semibold font-montserrat  pb-2">
                  Manglik Status
                  <sup className="text-red-600 font-bold ">*</sup>
                </h2>
                <div className="flex pl-4">
                  <input
                    type="radio"
                    id="manglikYes"
                    name="manglikStatus"
                    value="Yes"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label
                    htmlFor="manglikYes"
                    className="font-montserrat font-medium"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex pl-4">
                  <input
                    type="radio"
                    id="manglikNo"
                    name="manglikStatus"
                    value="No"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label
                    htmlFor="manglikNo"
                    className="font-montserrat font-medium"
                  >
                    No
                  </label>
                </div>
                <div className="flex pl-4">
                  <input
                    type="radio"
                    id="manglikPartials"
                    name="manglikStatus"
                    value="Partials"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label
                    htmlFor="manglikPartials"
                    className="font-montserrat font-medium"
                  >
                    Partials
                  </label>
                </div>
                <div className="flex pl-4">
                  <input
                    type="radio"
                    id="manglikNotSure"
                    name="manglikStatus"
                    value="Not Sure"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label
                    htmlFor="manglikNotSure"
                    className="font-montserrat font-medium"
                  >
                    Not Sure
                  </label>
                </div>
              </span>
              <span>
                <h2 className="text-lg font-semibold font-montserrat pt-6">
                  Horoscope Matching
                  <sup className="text-red-600 font-bold ">*</sup>
                </h2>
                <div className="flex pl-4">
                  <input
                    type="radio"
                    id="horoscopeRequired"
                    name="horoscopeMatching"
                    value="Required"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label
                    htmlFor="horoscopeRequired"
                    className="font-montserrat font-medium"
                  >
                    Required
                  </label>
                </div>
                <div className="flex pl-4">
                  <input
                    type="radio"
                    id="horoscopeNotRequired"
                    name="horoscopeMatching"
                    value="Not Required"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label
                    htmlFor="horoscopeNotRequired"
                    className="font-montserrat font-medium"
                  >
                    Not Required
                  </label>
                </div>
                <div className="flex pl-4">
                  <input
                    type="radio"
                    id="horoscopeNotImportant"
                    name="horoscopeMatching"
                    value="Not Important"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label
                    htmlFor="horoscopeNotImportant"
                    className="font-montserrat font-medium"
                  >
                    Not Important
                  </label>
                </div>
              </span>
              <div className="flex gap-8 p-8 justify-center items-center">
                <button className="px-8 py-2 border border-[#A92525]  font-montserrat rounded-lg text-[#A92525]v">
                  Back
                </button>
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
    </div>
  );
};

export default PersonalDetails;
