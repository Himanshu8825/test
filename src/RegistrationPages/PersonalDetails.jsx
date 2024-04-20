import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { inputFields, selectPlace, radioGroups } from "../Data";
import { StapperAction } from "../redux/action/StepersAction";

const PersonalDetails = () => {
  const dispatch = useDispatch();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    timeOfBirth: "",
    country: "",
    state: "",
    city: "",
    manglikStatus: "",
    horoscopeMatching: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formData);
    setFormErrors(errors);
    setIsSubmit(true);
    if (!errors || Object.keys(errors).length === 0) {
      dispatch(StapperAction(2));
    }
  };

  useEffect(() => {
    console.log("The Error is", formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formData);
    }
  }, [formErrors]);

  const validate = (val) => {
    const errors = {};
    const requiredFields = [
      "firstName",
      "middleName",
      "lastName",
      "dateOfBirth",
      "timeOfBirth",
      "country",
      "state",
      "city",
    ];

    requiredFields.forEach((field) => {
      if (!val[field]) {
        const label = field.charAt(0).toUpperCase() + field.slice(1);
        errors[field] = `${label} is required`;
      }
    });

    return errors;
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
                    className="w-full py-3 mb-2 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                    placeholder={field.label}
                  />
                  {formErrors[field.name] && (
                    <span className="text-red-600 ">
                      {formErrors[field.name]}
                    </span>
                  )}
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
                  className="py-3 mb-2 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full"
                >
                  <option value="">Select Country</option>
                  {Object.keys(selectPlace).map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                {formErrors.country && (
                  <span className="text-red-600">{formErrors.country} </span>
                )}

                {formData.country && (
                  <>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="py-3 mb-2 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full"
                    >
                      <option value="">Select State</option>
                      {selectPlace[formData.country]?.states.map((state) => (
                        <option key={state.name} value={state.name}>
                          {state.name}
                        </option>
                      ))}
                    </select>
                    {formErrors.state && (
                      <span className="text-red-600">{formErrors.state}</span>
                    )}
                  </>
                )}

                {formData.state && (
                  <>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="py-3 mb-2 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full"
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
                    {formErrors.city && (
                      <span className="text-red-600">{formErrors.city}</span>
                    )}
                  </>
                )}
              </span>

              <span>
                {radioGroups.map((group, index) => (
                  <div key={index}>
                    <h2 className="text-lg font-semibold font-montserrat pb-2">
                      {group.label}
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
