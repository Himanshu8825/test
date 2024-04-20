import React, { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { StapperAction } from "../redux/action/StepersAction";
import { faimilyData, selectPlace } from "../Data";
import RangeSlider from "../Slider/MinimumDistance";

const FamilyDetails = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fatherFirstName: "",
    fatherMiddleName: "",
    fatherLastName: "",
    fatherOccupation: "",
    motherFirstName: "",
    motherMiddleName: "",
    motherLastName: "",
    motherOccupation: "",
    siblings: [{ name: "", status: "" }],
    livesWithFamily: "",
    country: "",
    state: "",
    city: "",
    religion: "",
    community: "",
    sliderValue: [20, 37],
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    if (name === "siblingsName" || name === "siblingsStatus") {
      const updatedSiblings = [...formData.siblings];
      updatedSiblings[index] = {
        ...updatedSiblings[index],
        [name === "siblingsName" ? "name" : "status"]: value,
      };
      setFormData((prevData) => ({
        ...prevData,
        siblings: updatedSiblings,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    // Clear related errors when a field is changed
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear the error for the changed field
    }));
  };

  const validate = (val) => {
    const errors = {};
    const requiredFields = ["community", "country", "state", "city"];

    requiredFields.forEach((field) => {
      if (!val[field]) {
        // Use the field value itself as the label
        errors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
      }
    });

    return errors;
  };

  useEffect(() => {
    console.log("The Error is", formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formData);
    }
  }, [formErrors]);

  const handleAddSibling = () => {
    setFormData({
      ...formData,
      siblings: [...formData.siblings, { name: "", status: "" }],
    });
  };

  const handleRemoveSibling = (index) => {
    const updatedSiblings = [...formData.siblings];
    updatedSiblings.splice(index, 1);
    setFormData({
      ...formData,
      siblings: updatedSiblings,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formData);
    setFormErrors(errors);
    setIsSubmit(true);
    if (Object.keys(errors).length === 0) {
      dispatch(StapperAction(4));
    }
  };

  const data1 = [
    {
      id: "livesWithFamilyYes",
      value: "Yes",
      label: "Yes",
    },
    {
      id: "livesWithFamilyNo",
      value: "No",
      label: "No",
    },
  ];

  const data2 = [
    {
      id: "religionHinduism",
      value: "Hinduism",
      label: "Hinduism",
    },
    {
      id: "religionMuslim",
      value: "Muslim",
      label: "Muslim",
    },
    {
      id: "religionSikh",
      value: "Sikh",
      label: "Sikh",
    },
  ];

  const communityOptions = [
    "Community1",
    "Community2",
    "Community3",
    "Community4",
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center pb-8">
      {/* Form container */}
      <div className="w-[45%] shadow-primary/50  shadow-lg rounded-xl">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-[80%] h-[80%] mx-auto">
            {faimilyData.map((field, index) => (
              <span key={index}>
                <h2 className="text-lg font-semibold font-montserrat pb-2">
                  {field.label}
                  {field.name && (
                    <sup className="text-red-600 font-bold">*</sup>
                  )}
                </h2>
                {field.names ? (
                  <div className="flex">
                    {field.names.map((name, i) => (
                      <input
                        key={i}
                        type="text"
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        className={`w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] ${
                          i === 0
                            ? "translate-x-2"
                            : i === 2
                            ? "-translate-x-2"
                            : ""
                        }`}
                        placeholder={field.placeholders[i]}
                      />
                    ))}
                  </div>
                ) : (
                  <input
                    type="text"
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                    placeholder={field.placeholder}
                  />
                )}
              </span>
            ))}

            {/* Siblings section */}
            <span>
              <h2 className="text-lg font-semibold font-montserrat  pb-2">
                Siblings
                <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              {formData.siblings.map((sibling, index) => (
                <div className="flex gap-4 items-center " key={index}>
                  <input
                    type="text"
                    name="siblingsName"
                    value={sibling.name}
                    onChange={(e) => handleChange(e, index)}
                    className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full"
                    placeholder="Sibling's Name"
                  />
                  <select
                    name="siblingsStatus"
                    value={sibling.status}
                    onChange={(e) => handleChange(e, index)}
                    className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full"
                  >
                    <option value="">Martial Status</option>
                    <option>Single</option>
                    <option>Married</option>
                    <option>Divorced</option>
                    <option>Widow</option>
                  </select>
                  {index === formData.siblings.length - 1 ? (
                    <FaPlus
                      className="text-6xl text-[#A92525]  mb-4 cursor-pointer"
                      onClick={handleAddSibling}
                    />
                  ) : (
                    <FaMinus
                      className="text-6xl text-[#A92525]  mb-4 cursor-pointer"
                      onClick={() => handleRemoveSibling(index)}
                    />
                  )}
                </div>
              ))}
            </span>

            {/* Lives with Family section */}
            <span>
              <h2 className="text-lg font-semibold font-montserrat  pb-2">
                Bride/Groom Lives With Family
                <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              <div className="flex flex-col pl-4">
                {data1.map((option) => (
                  <div key={option.id} className="flex  items-center mr-4">
                    <input
                      type="radio"
                      id={option.id}
                      name="livesWithFamily"
                      value={option.value}
                      onChange={handleChange}
                      className="mr-2"
                      checked={formData.livesWithFamily === option.value}
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
            </span>

            {/* Family Settled section */}
            <span>
              <h2 className="text-lg font-semibold font-montserrat pb-2">
                Family Settled
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

            {/* Religion section */}
            <span>
              <h2 className="text-lg font-semibold font-montserrat ">
                Religion
                <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              <div className="flex flex-col pl-4">
                {data2.map((option) => (
                  <div key={option.id} className="flex items-center mr-4">
                    <input
                      type="radio"
                      id={option.id}
                      name="religion"
                      value={option.value}
                      onChange={handleChange}
                      className="mr-2"
                      checked={formData.religion === option.value}
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
            </span>

            {/* Community section */}
            <span>
              <h2 className="text-lg font-semibold font-montserrat pb-2 pt-4">
                Community
                <sup className="text-red-600 font-bold">*</sup>
              </h2>
              <div className="flex gap-4 items-center">
                <select
                  name="community"
                  value={formData.community || ""}
                  onChange={handleChange}
                  className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full"
                >
                  <option value="">Community</option>
                  {communityOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              {formErrors["community"] && (
                <span className="text-red-600 ">{formErrors["community"]}</span>
              )}
            </span>

            <span>
              <h2 className="text-lg font-semibold font-montserrat pb-2 pt-4">
                Family Annual Income Range (USD)
                <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              <div>
                <RangeSlider />
              </div>
            </span>

            {/*   Submit button */}
            <div className="mx-auto p-8">
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

export default FamilyDetails;
