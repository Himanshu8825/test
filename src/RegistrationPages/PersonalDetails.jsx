import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePersonalDetails } from "../redux/Reducers/PersonalDetailsReducers";
import { inputFields, selectPlace, radioGroups } from "../Data";
import { StapperAction } from "../redux/action/StepersAction";

const PersonalDetails = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.personalDetails);
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updatePersonalDetails({ [name]: value }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(StapperAction(2));
    console.log(formData);
  };

  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center pb-8">
        <div className="w-[45%] shadow-primary/50  shadow-lg rounded-xl">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-[80%] h-[80%] mx-auto">
              {inputFields.map((field) => (
                <span key={field.name}>
                  <h2 className="text-lg font-semibold font-montserrat  pb-2">
                    {field.label}
                    <sup className="text-red-600 font-bold ">*</sup>
                  </h2>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                    placeholder={field.label}
                  />
                </span>
              ))}

              <span>
                <h2 className="text-lg font-semibold font-montserrat pb-2">
                  Place Of Birth
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

              <span>
                {radioGroups.map((group, index) => (
                  <div key={index}>
                    <h2 className="text-lg font-semibold font-montserrat pb-2">
                      {group.label}
                      <sup className="text-red-600 font-bold">*</sup>
                    </h2>
                    {group.options.map((option, optionIndex) => (
                      <div className="flex pl-4" key={optionIndex}>
                        <input
                          type="radio"
                          id={option.id}
                          name={group.name}
                          value={option.value}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <label
                          htmlFor={option.id}
                          className="font-montserrat font-medium"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                ))}
              </span>

              <div className="flex gap-8 p-8 justify-center items-center">
                <button className="px-8 py-2 border border-[#A92525]  font-montserrat rounded-lg text-[#A92525]v">
                  Back
                </button>
                <button
                  type="submit"
                  className="px-8 py-2 bg-[#A92525] font-montserrat rounded-lg text-white"
                  // onClick={updateCurrentState}
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
