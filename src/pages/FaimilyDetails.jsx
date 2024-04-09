import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updateFaimilyDetails } from "../redux/Reducers/FaimilyDetailsReducers";

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
            {/* Father's Name section */}
            <span>
              <h2 className="text-lg font-semibold font-montserrat  pb-2">
                Father’s Name
              </h2>
              <div className="flex">
                <input
                  type="text"
                  name="fatherFirstName"
                  value={formData.fatherFirstName}
                  onChange={handleChange}
                  className="w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] translate-x-2"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  name="fatherMiddleName"
                  value={formData.fatherMiddleName}
                  onChange={handleChange}
                  className="w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                  placeholder="Middle Name"
                />
                <input
                  type="text"
                  name="fatherLastName"
                  value={formData.fatherLastName}
                  onChange={handleChange}
                  className="w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] -translate-x-2"
                  placeholder="Last Name"
                />
              </div>
            </span>

            {/* Father's Occupation section */}
            <span>
              <h2 className="text-lg font-semibold font-montserrat  pb-2">
                Father’s Occupation
                <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              <input
                type="text"
                name="fatherOccupation"
                value={formData.fatherOccupation}
                onChange={handleChange}
                className="w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                placeholder="Father’s Occupation"
              />
            </span>

            {/* Mother's Name section */}
            <span>
              <h2 className="text-lg font-semibold font-montserrat  pb-2">
                Mother’s Name
              </h2>
              <div className="flex">
                <input
                  type="text"
                  name="motherFirstName"
                  value={formData.motherFirstName}
                  onChange={handleChange}
                  className="w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] translate-x-2"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  name="motherMiddleName"
                  value={formData.motherMiddleName}
                  onChange={handleChange}
                  className="w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                  placeholder="Middle Name"
                />
                <input
                  type="text"
                  name="motherLastName"
                  value={formData.motherLastName}
                  onChange={handleChange}
                  className="w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] -translate-x-2"
                  placeholder="Last Name"
                />
              </div>
            </span>

            {/* Mother's Occupation section */}
            <span>
              <h2 className="text-lg font-semibold font-montserrat  pb-2">
                Mother’s Occupation
                <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              <input
                type="text"
                name="motherOccupation"
                value={formData.motherOccupation}
                onChange={handleChange}
                className="w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                placeholder="Mother’s Occupation"
              />
            </span>

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
              <h2 className="text-lg font-semibold font-montserrat pt-6">
                Family Settled
                <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              <select
                className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full "
                name="country"
                value={formData.country}
                onChange={handleChange}
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
                className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full "
                name="state"
                value={formData.state}
                onChange={handleChange}
              >
                <option value="">State</option>
                <option value="Bihar">Bihar</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="UP">UP</option>
                <option value="MP">MP</option>
                <option value="Kerela">Kerela</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Nagpur">Nagpur</option>
              </select>
              <select
                className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full "
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
                <option value="Chhapra">Chhapra</option>
                <option value="Darbhanga">Darbhanga</option>
              </select>
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
