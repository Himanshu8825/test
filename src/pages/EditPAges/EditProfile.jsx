import React from "react";
import { PrimaryImg } from "../../assets/Index";
import { inputFields, profileData, selectPlace } from "../../Data";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updatePersonalDetails } from "../../redux/Reducers/PersonalDetailsReducers";

const EditProfile = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.personalDetails);
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updatePersonalDetails({ [name]: value }));
  };

  const Data1 = [
    { label: "Profile Created For", value: "Myself" },
    { label: "Name", value: "Rahul Kumar" },
    { label: "Gender", value: "Male" },
    { label: "Date of Birth", value: "01/01/1999" },
  ];

  const Data2 = [
    { label: "Time of Birth", value: "05:10 AM" },
    { label: "Age", value: "30 Yrs." },
    { label: "Place of Birth", value: "India, Mumbai" },
    { label: "Manglik Status", value: "Yes" },
  ];

  const CarrerDEtails = [
    { label: "Education", value: "Current Designation" },
    { label: "University", value: "Previous  Occupation" },
    { label: "Passing Year", value: "Approximate Annual Income" },
    { label: "Profession", value: "Doctor" },
  ];
  const AdditionalDetails = [
    { label: "Height", value: "Diet" },
    { label: "Weight", value: "Alcohol Consumption" },
    { label: "Presently Settled in Country", value: "Smoking Preference" },
    { label: "Presently Settled in State", value: "Martial Status" },
    { label: "Presently Settled in City", value: "Contact Details" },
    { label: "Open to Relocate in Future", value: "SEmail Address" },
  ];
  const FamilyDetails = [
    { label: "Father’s Name", value: "Family Settled (Country)" },
    { label: "Father’s Occupation", value: "Family Settled (State)" },
    { label: "Mother’s Name", value: "Family Settled (City)" },
    { label: "Mother’s Occupation", value: "Religion" },
    { label: "Siblings", value: "Caste" },
    { label: "Lives with her Family", value: "Family Annual Income Range" },
  ];
  const Interest = [
    { label: "Interests", value: "Fitness" },
    { label: "Fun", value: "Other Interests" },
  ];
  return (
    <>
      <div className="w-full flex flex-col gap-8 justify-center items-center pt-16 ">
        <div className="w-[70%] shadoww bg-[#f0f0f0] rounded-xl p-8 flex  gap-4 items-center">
          <img
            src={PrimaryImg}
            alt=""
            className="w-[150px] h-[150px] rounded-full border-2 border-primary"
          />
          <div className="w-[50%]">
            <div className="flex flex-col pl-6 pb-2">
              <div className="gap-2 font-montserrat font-medium text-black">
                <p className="text-xl font-semibold">Sonali Singh</p>
                <p className="font-semibold">( CS12345 )</p>
              </div>
            </div>
            {profileData.map((data, index) => (
              <div
                key={index}
                className="flex justify-between pl-6 pr-6 pt-2 pb-1 font-montserrat text-black  "
              >
                {Object.values(data).map((value, index) => (
                  <p key={index}>{value}</p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="w-[70%]  shadoww bg-[#f0f0f0] rounded-xl pl-8 pr-8 pt-4 gap-4 items-center mb-4">
          <div className="flex justify-between w-full border-b border-[#A0A0A0] pb-1">
            <p className="text-primary font-montserrat font-semibold text-xl">
              About Yourself
            </p>
            <div className="flex gap-1 items-center text-primary font-montserrat cursor-pointer">
              <FaEdit className="text-lg mb-1" />
              <p className=" font-medium">Edit</p>
            </div>
          </div>
          <p className="text-[#A0A0A0] m-4">
            our multi - dimension suite of products is created with passion and
            decades of experience to help you every step of the way. ur multi -
            dimension suite of products is created with passion and decades of
            experience to help you every step of the way.
          </p>
        </div>

        <div className="w-[70%]  shadoww bg-[#f0f0f0] rounded-xl pl-8 pr-8 pt-4 gap-4 items-center mb-4">
          <div className="flex justify-between w-full border-b border-[#A0A0A0] pb-1">
            <p className="text-primary font-montserrat font-semibold text-xl">
              Personal Appearance
            </p>
            <div className="flex gap-1 items-center text-primary font-montserrat cursor-pointer">
              <FaEdit className="text-lg mb-1" />
              <p className=" font-medium">Edit</p>
            </div>
          </div>
          <p className="text-[#A0A0A0] m-4">
            our multi - dimension suite of products is created with passion and
            decades of experience to help you every step of the way. ur multi -
            dimension suite of products is created with passion and decades of
            experience to help you every step of the way.
          </p>
        </div>

        <div className="w-[70%]  shadoww selection:placeholder: rounded-xl pl-8 pr-8 pt-4 gap-4 items-center mb-4">
          <div className="flex justify-between w-full border-b border-[#A0A0A0] mb-4 pb-4">
            <p className="text-primary font-montserrat font-semibold text-xl">
              Basics Details
            </p>
          </div>
          <form>
            <div className="grid grid-cols-2 gap-2">
              {inputFields.map((field) => (
                <span key={field.name}>
                  <h2 className="text-lg font-semibold font-montserrat  pb-1">
                    {field.label}
                    <sup className="text-red-600 font-bold ">*</sup>
                  </h2>
                  <input
                    type={field.type}
                    name={field.name}
                    // value={formData[field.name]}
                    // onChange={handleChange}
                    className="w-11/12 py-3 mb-1 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                    // placeholder={field.label}
                  />
                </span>
              ))}

              <span>
                <h2 className="text-lg font-semibold font-montserrat  pb-1">
                  Bride/Groom - Gender
                </h2>
                <label className="font-montserrat font-medium">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="mr-2"
                  />
                  Male
                </label>
                <br />
                <label className="font-montserrat font-medium">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="mr-2"
                  />
                  Female
                </label>
              </span>

              <span className="">
                <h2 className="text-lg font-semibold font-montserrat pb-2">
                  Place Of Birth
                  <sup className="text-red-600 font-bold">*</sup>
                </h2>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-11/12"
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
                    className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-11/12"
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
                    className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-11/12"
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
            </div>
            <div className="pb-4">
              <h2 class="text-lg font-semibold font-montserrat pb-1">
                Manglik Status
              </h2>
              <label class="font-montserrat font-medium ml-6">
                <input
                  type="radio"
                  name="manglikStatus"
                  value="yes"
                  class="mr-2"
                />
                Yes
              </label>
              <br />
              <label class="font-montserrat font-medium ml-6">
                <input
                  type="radio"
                  name="manglikStatus"
                  value="no"
                  class="mr-2"
                />
                No
              </label>
              <br />
              <label class="font-montserrat font-medium ml-6">
                <input
                  type="radio"
                  name="manglikStatus"
                  value="notSure"
                  class="mr-2"
                />
                Not Sure
              </label>
              <br />
              <label class="font-montserrat font-medium ml-6">
                <input
                  type="radio"
                  name="manglikStatus"
                  value="partial"
                  class="mr-2"
                />
                Partial
              </label>
            </div>
            <div className="flex gap-8 p-8 justify-end">
              <button className="px-8 py-2 border border-[#A92525]  font-montserrat rounded-lg text-[#A92525]v">
                Cancel
              </button>
              <button
                type="submit"
                className="px-8 py-2 bg-[#A92525] font-montserrat rounded-lg text-white"
                // onClick={updateCurrentState}
              >
                Save
              </button>
            </div>
          </form>
        </div>

        <div className="w-[70%]  shadoww bg-[#f0f0f0] rounded-xl pl-8 pr-8 pt-4 gap-4 items-center mb-4">
          <div className="flex justify-between w-full border-b border-[#A0A0A0] pb-2 pt-2">
            <p className="text-primary font-montserrat font-semibold text-xl">
              Additional Personal Details
            </p>
            <div className="flex gap-1 items-center text-primary font-montserrat cursor-pointer">
              <FaEdit className="text-lg mb-1" />
              <p className=" font-medium">Edit</p>
            </div>
          </div>
          <div className="flex justify-between m-4">
            <div className="w-full">
              {AdditionalDetails.map((item, index) => (
                <div key={index} className="mb-2 flex justify-between ">
                  <p className="font-montserrat font-semibold ">{item.label}</p>
                  <p className=" font-montserrat font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[70%]  shadoww bg-[#f0f0f0] rounded-xl pl-8 pr-8 pt-4 gap-4 items-center mb-4">
          <div className="flex justify-between w-full border-b border-[#A0A0A0] pb-2 pt-2">
            <p className="text-primary font-montserrat font-semibold text-xl">
              Additional Personal Details
            </p>
            <div className="flex gap-1 items-center text-primary font-montserrat cursor-pointer">
              <FaEdit className="text-lg mb-1" />
              <p className=" font-medium">Edit</p>
            </div>
          </div>
          <div className="flex justify-between m-4">
            <div className="w-full">
              {CarrerDEtails.map((item, index) => (
                <div key={index} className="mb-2 flex justify-between">
                  <p className="font-montserrat font-semibold ">{item.label}</p>
                  <p className=" font-montserrat font-semibold ">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[70%]  shadoww bg-[#f0f0f0] rounded-xl pl-8 pr-8 pt-4 gap-4 items-center mb-4">
          <div className="flex justify-between w-full border-b border-[#A0A0A0] pb-2 pt-2">
            <p className="text-primary font-montserrat font-semibold text-xl">
              Family Details
            </p>
            <div className="flex gap-1 items-center text-primary font-montserrat cursor-pointer">
              <FaEdit className="text-lg mb-1" />
              <p className=" font-medium">Edit</p>
            </div>
          </div>
          <div className="flex justify-between m-4">
            <div className="w-full">
              {FamilyDetails.map((item, index) => (
                <div key={index} className="mb-2 flex justify-between">
                  <p className="font-montserrat font-semibold ">{item.label}</p>
                  <p className=" font-montserrat font-semibold ">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[70%]  shadoww bg-[#f0f0f0] rounded-xl pl-8 pr-8 pt-4 gap-4 items-center mb-4">
          <div className="flex justify-between w-full border-b border-[#A0A0A0] pb-2 pt-2">
            <p className="text-primary font-montserrat font-semibold text-xl">
              Additional Details & Interests
            </p>
            <div className="flex gap-1 items-center text-primary font-montserrat cursor-pointer">
              <FaEdit className="text-lg mb-1" />
              <p className=" font-medium">Edit</p>
            </div>
          </div>
          <div className="flex justify-between m-4">
            <div className="w-full">
              {Interest.map((item, index) => (
                <div key={index} className="mb-2 flex justify-between">
                  <p className="font-montserrat font-semibold ">{item.label}</p>
                  <p className=" font-montserrat font-semibold ">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
