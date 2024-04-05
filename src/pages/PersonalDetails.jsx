import React from "react";

const stepsData = [
  { number: 1, label: "Personal Details" },
  { number: 2 },
  { number: 3 },
  { number: 4 },
  { number: 5 },
  { number: 6 },
];

const PersonalDetails = () => {
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center pb-8">
        <div className="flex gap-8 p-4 cursor-pointer">
          {stepsData.map((step) => (
            <div className="flex flex-col items-center">
              <div
                className={`p-6 w-[5px] h-[5px] rounded-full text-xl font-montserrat font-medium flex justify-center items-center ${
                  step.label === "Personal Details"
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
          <h1 className="text-2xl font-montserrat font-semibold text-center p-4">
            Sign Up
          </h1>
          <form>
            <div className="flex flex-col w-[80%] h-[80%] mx-auto">
              <span>
                <h2 className="text-lg font-semibold font-montserrat  pb-2">
                  Bride/Groom - First Name
                  <sup className="text-red-600 font-bold ">*</sup>
                </h2>
                <input
                  type="text"
                  className="w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                  placeholder="First Name"
                />
              </span>
              <span>
                <h2 className="text-lg font-semibold font-montserrat  pb-2">
                  Bride/Groom - Middile Name
                  <sup className="text-red-600 font-bold ">*</sup>
                </h2>
                <input
                  type="text"
                  className="w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                  placeholder="First Name"
                />
              </span>
              <span>
                <h2 className="text-lg font-semibold font-montserrat  pb-2">
                  Bride/Groom - Last Name
                  <sup className="text-red-600 font-bold ">*</sup>
                </h2>
                <input
                  type="text"
                  className="w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                  placeholder="First Name"
                />
              </span>
              <span>
                <h2 className="text-lg font-semibold font-montserrat  pb-2">
                  Date Of Birth
                  <sup className="text-red-600 font-bold ">*</sup>
                </h2>
                <input
                  type="date"
                  className="w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                  placeholder="First Name"
                />
              </span>
              <span>
                <h2 className="text-lg font-semibold font-montserrat  pb-2">
                  Time Of Birth
                  <sup className="text-red-600 font-bold ">*</sup>
                </h2>
                <input
                  type="time"
                  className="w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                  placeholder="First Name"
                />
              </span>

              <span>
                <h2 className="text-lg font-semibold font-montserrat  pb-2">
                  Place Of Birth
                  <sup className="text-red-600 font-bold ">*</sup>
                </h2>
                <select
                  className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full "
                  id="profile"
                  name="profileSection"
                >
                  <option value="">Country</option>
                  <option value="mySelf">India</option>
                  <option value="myBrother">USA</option>
                  <option value="mySister">Pakistan</option>
                  <option value="mySon">Nepal</option>
                  <option value="myDaughter">Austrelia</option>
                  <option value="myFriend">Bangladesh</option>
                </select>
                <select
                  className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full "
                  id="profile"
                  name="profileSection"
                >
                  <option value="">State</option>
                  <option value="mySelf">Bihar</option>
                  <option value="myBrother">Jharkhand</option>
                  <option value="mySister">UP</option>
                  <option value="mySon">MP</option>
                  <option value="myDaughter">Kerla</option>
                  <option value="myFriend">Maharastra</option>
                  <option value="myRelative">Nagpur</option>
                </select>
                <select
                  className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full "
                  id="profile"
                  name="profileSection"
                >
                  <option value="">City</option>
                  <option value="mySelf">Patna</option>
                  <option value="myBrother">Aurangabad</option>
                  <option value="mySister">Samastipur</option>
                  <option value="mySon">Muzzafarpur</option>
                  <option value="myDaughter">Ara</option>
                  <option value="myFriend">Chhappra</option>
                  <option value="myRelative">Darbhanga</option>
                </select>
              </span>

              <span className="">
                <h2 className=" font-semibold font-montserrat">
                  Manglik Status
                  <sup className="text-red-600 font-bold ">*</sup>
                </h2>
                <div className="flex pl-4">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="MALE"
                    className="mr-2 "
                  />
                  <label
                    htmlFor="male"
                    className=" font-montserrat font-medium"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex pl-4">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="MALE"
                    className="mr-2 "
                  />
                  <label
                    htmlFor="male"
                    className=" font-montserrat font-medium"
                  >
                    No
                  </label>
                </div>
                <div className="flex pl-4">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="MALE"
                    className="mr-2 "
                  />
                  <label
                    htmlFor="male"
                    className=" font-montserrat font-medium"
                  >
                    Partials
                  </label>
                </div>
                <div className="flex pl-4">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="MALE"
                    className="mr-2 "
                  />
                  <label
                    htmlFor="male"
                    className=" font-montserrat font-medium"
                  >
                    Not Sure
                  </label>
                </div>
              </span>

              <span className="">
                <h2 className=" font-semibold font-montserrat pt-6 ">
                  Horoscope Matching
                  <sup className="text-red-600 font-bold ">*</sup>
                </h2>
                <div className="flex pl-4">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="MALE"
                    className="mr-2 "
                  />
                  <label
                    htmlFor="male"
                    className=" font-montserrat font-medium"
                  >
                    Required
                  </label>
                </div>
                <div className="flex pl-4">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="MALE"
                    className="mr-2 "
                  />
                  <label
                    htmlFor="male"
                    className=" font-montserrat font-medium"
                  >
                    Not Required
                  </label>
                </div>
                <div className="flex pl-4">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="MALE"
                    className="mr-2 "
                  />
                  <label
                    htmlFor="male"
                    className=" font-montserrat font-medium"
                  >
                    Not Important
                  </label>
                </div>
              </span>

              <div className="flex gap-8 p-8 justify-center items-center">
                <button className="px-8 py-2 border border-[#A92525]  font-montserrat rounded-lg text-[#A92525]v">
                  Back
                </button>
                <button className="px-8 py-2 bg-[#A92525] font-montserrat rounded-lg text-white">
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
