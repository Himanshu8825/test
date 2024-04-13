import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAdditionalDetails } from "../redux/Reducers/AdditionalDetailsReducers";
import { selectPlace, additionalRadio } from "../Data";
import { StapperAction } from "../redux/action/StepersAction";

const AdditionalDetails = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.additionalDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateAdditionalDetails({ [name]: value }));
  };

  const updateCurrentState = () => {
    dispatch(StapperAction(3));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("This is the form Data", formData);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center pb-8">
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
              <h2 className="text-lg font-semibold font-montserrat pb-2">
                Presently Settled in
                <sup className="text-red-600 font-bold">*</sup>
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

            {additionalRadio.map((section, index) => (
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
                onClick={updateCurrentState}
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
