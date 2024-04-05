import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [gender, setGender] = useState("");

  let obj = {
    mySelf: "MALE_FEMALE",
    myBrother: "MALE",
    mySister: "FEMALE",
    mySon: "MALE",
    myDaughter: "FEMALE",
    myFriend: "MALE_FEMALE",
    myRelative: "MALE_FEMALE",
  };

  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;

    setSelectedOption(selectedValue);

    const gender_ = obj[selectedValue];
    setGender(gender_);
    console.log(gender_, selectedValue);
    if (selectedValue === "MALE") {
      setGender("MALE");
    }
    if (selectedValue !== "mySelf") {
      navigate("/constent");
    }
  };

  const handleGenderChange = (e) => {
    if ("MALE_FEMALE" === obj[selectedOption]) {
      const gender_ = e.target.value;
      setGender(gender_);
      console.log(gender_, selectedOption);
    }
  };
  return (
    <div className="w-full h-screen  flex justify-center items-center">
      <div className="w-[45%] shadow-primary/50 shadow-lg rounded-xl">
        <h1 className="text-2xl font-montserrat font-semibold text-center p-4">
          Sign Up
        </h1>
        <form>
          <div className="flex flex-col w-[80%] h-[80%] mx-auto">
            <label
              htmlFor="profile"
              className="text-lg font-montserrat font-semibold pb-2"
            >
              Profile Is Created For
              <sup className="text-red-600 font-bold ">*</sup>
            </label>

            <select
              className="py-2 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] "
              id="profile"
              name="profileSection"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option value="">Profile</option>
              <option value="mySelf">My Self</option>
              <option value="myBrother">My Brother</option>
              <option value="mySister">My Sister</option>
              <option value="mySon">My Son</option>
              <option value="myDaughter">My Daughter</option>
              <option value="myFriend">My Friend</option>
              <option value="myRelative">My Relative</option>
            </select>
            <div className="mb-6 flex flex-col gap-2">
              <h2 className="text-lg font-semibold font-montserrat pb-2">
                Bride/Groom Gender
                <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              {(selectedOption === "myBrother" ||
                selectedOption === "mySon" ||
                selectedOption === "mySelf" ||
                selectedOption === "myFriend" ||
                selectedOption === "myRelative") && (
                <div className="flex ">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="MALE"
                    className="mr-2 form-control"
                    checked={gender === "MALE"}
                    onChange={handleGenderChange}
                  />
                  <label
                    htmlFor="male"
                    className="text-lg font-montserrat font-medium"
                  >
                    Male
                  </label>
                </div>
              )}
              {(selectedOption === "mySister" ||
                selectedOption === "myDaughter" ||
                selectedOption === "mySelf" ||
                selectedOption === "myFriend" ||
                selectedOption === "myRelative") && (
                <div className="flex">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="FEMALE"
                    className="mr-2 form-control"
                    checked={gender === "FEMALE"}
                    onChange={handleGenderChange}
                  />
                  <label
                    htmlFor="female"
                    className="text-lg font-montserrat font-medium"
                  >
                    Female
                  </label>
                </div>
              )}
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-semibold font-montserrat  pb-2">
                Contact Number
                <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              <input
                type="text"
                className="w-full py-2 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                placeholder="Mobile"
              />
            </div>
            <button className="px-6 py-2 bg-[#A92525] font-montserrat rounded-lg text-white">
              Send OTP
            </button>
            <div className="flex items-center justify-center w-full pt-8">
              <div className="w-[45%] border-b border-[#000000]"></div>
              <span className="mx-2 text-lg font-montserrat font-semibold">
                Or
              </span>
              <div className="w-[45%] border-b border-[#000000]"></div>
            </div>
            <p className=" text-[#A0A0A0] font-montserrat text-center pt-2">
              You have an account ?
            </p>
            <button className="px-6 py-2 border font-montserrat font-semibold text-[#A92525]  border-[#A92525] rounded-lg mb-[4rem]">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
