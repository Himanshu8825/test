import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updateFaimilyDetails } from "../redux/Reducers/FaimilyDetailsReducers";
import { selectPlace, faimilyData } from "../Data";
import { StapperAction } from "../redux/action/StepersAction";

const FamilyDetails = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.faimilyDetails);

  //!Function to handle changes in form fields
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "siblingsName" || name === "siblingsStatus") {
      const updatedSiblings = [...formData.siblings];
      updatedSiblings[index] = {
        ...updatedSiblings[index],
        [name === "siblingsName" ? "name" : "status"]: value,
      };
      dispatch(updateFaimilyDetails({ siblings: updatedSiblings }));
    } else {
      dispatch(updateFaimilyDetails({ [name]: value }));
    }
  };

  //!Function to add a new sibling field
  const handleAddSibling = () => {
    dispatch(
      updateFaimilyDetails({
        siblings: [...formData.siblings, { name: "", status: "" }],
      })
    );
  };

  //!Function to remove a sibling field
  const handleRemoveSibling = (index) => {
    const updatedSiblings = [...formData.siblings];
    updatedSiblings.splice(index, 1);
    dispatch(updateFaimilyDetails({ siblings: updatedSiblings }));
  };

  const updateCurrentState = () => {
    dispatch(StapperAction(5));
  };

  //!Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

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
              <div className="flex pl-4">
                <input
                  type="radio"
                  id="livesWithFamilyYes"
                  name="livesWithFamily"
                  value="Yes"
                  onChange={handleChange}
                  className="mr-2"
                />
                <label
                  htmlFor="livesWithFamilyYes"
                  className="font-montserrat font-medium"
                >
                  Yes
                </label>
              </div>
              <div className="flex pl-4">
                <input
                  type="radio"
                  id="livesWithFamilyNo"
                  name="livesWithFamily"
                  value="No"
                  onChange={handleChange}
                  className="mr-2"
                />
                <label
                  htmlFor="livesWithFamilyNo"
                  className="font-montserrat font-medium"
                >
                  No
                </label>
              </div>
            </span>

            {/* Family Settled section */}
            <span>
              <h2 className="text-lg font-semibold font-montserrat  pb-2">
                Family Settled
                <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              {selectPlace.map((place) => (
                <select
                  key={place.name}
                  name={place.name}
                  value={formData[place.name]}
                  onChange={handleChange}
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

            {/* Religion section */}
            <span>
              <h2 className="text-lg font-semibold font-montserrat ">
                Religion
                <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              <div className="flex pl-4">
                <input
                  type="radio"
                  id="religionHinduism"
                  name="religion"
                  value="Hinduism"
                  onChange={handleChange}
                  className="mr-2"
                />
                <label
                  htmlFor="religionHinduism"
                  className="font-montserrat font-medium"
                >
                  Hinduism
                </label>
              </div>
            </span>

            {/* Community section */}
            <span>
              <h2 className="text-lg font-semibold font-montserrat  pb-2 pt-4">
                Community
                <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              <div className="flex gap-4 items-center ">
                <select
                  name="community"
                  value={formData.community}
                  onChange={handleChange}
                  className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full"
                >
                  <option value="">Community</option>
                  <option>Community1</option>
                  <option>Community2</option>
                  <option>Community3</option>
                  <option>Community4</option>
                </select>
              </div>
            </span>

            {/*   Submit button */}
            <div className="mx-auto p-8">
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

export default FamilyDetails;
