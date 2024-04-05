import React from "react";

const stepsData = [
  { number: 1 },
  { number: 2, label: "Additional Details" },
  { number: 3 },
  { number: 4 },
  { number: 5 },
  { number: 6 },
];

const AdditionalDetails = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center pb-8">
      <div className="flex gap-8 p-4 cursor-pointer">
        {stepsData.map((step) => (
          <div className="flex flex-col items-center gap-2">
            <div
              className={`p-6 w-[5px] h-[5px] rounded-full text-xl font-montserrat font-medium flex justify-center items-center ${
                step.number === 1 || step.number === 2
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
        
        <form>
          <div className="flex flex-col w-[80%] h-[80%] mx-auto mt-8">
            <span>
              <h2 className="text-lg font-semibold font-montserrat  pb-2">
                Personal Appearance
              </h2>
              <textarea
                type="time"
                className="w-full py-4 mb-4 rounded-lg
                  focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                placeholder="Personal Appearance"
              ></textarea>
            </span>

            <span>
              <h2 className="text-lg font-semibold font-montserrat  pb-2">
                Personal Appearance
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
                Open/Plan to Relocate in Future
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
                <label htmlFor="male" className=" font-montserrat font-medium">
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
                <label htmlFor="male" className=" font-montserrat font-medium">
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
                <label htmlFor="male" className=" font-montserrat font-medium">
                  Not Sure
                </label>
              </div>
            </span>

            <span className="">
              <h2 className=" font-semibold font-montserrat pt-6 ">
                Diet Type
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
                <label htmlFor="male" className=" font-montserrat font-medium">
                  Vegiterian
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
                <label htmlFor="male" className=" font-montserrat font-medium">
                  Non-Vegiterian
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
                <label htmlFor="male" className=" font-montserrat font-medium">
                  Occasionally Non - Vegetarian
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
                <label htmlFor="male" className=" font-montserrat font-medium">
                  Eggetarian
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
                <label htmlFor="male" className=" font-montserrat font-medium">
                  Vegan
                </label>
              </div>
            </span>

            <span className="mt-4">
              <h2 className=" font-semibold font-montserrat">
                Alcohol Consumption Preference
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
                <label htmlFor="male" className=" font-montserrat font-medium">
                  Regular
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
                <label htmlFor="male" className=" font-montserrat font-medium">
                  Occasional
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
                <label htmlFor="male" className=" font-montserrat font-medium">
                  Social
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
                <label htmlFor="male" className=" font-montserrat font-medium">
                  Not at all
                </label>
              </div>
            </span>

            <span className="">
              <h2 className=" font-semibold font-montserrat pt-6 ">
                Smoking Preference
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
                <label htmlFor="male" className=" font-montserrat font-medium">
                  Regular
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
                <label htmlFor="male" className=" font-montserrat font-medium">
                  Occasional
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
                <label htmlFor="male" className=" font-montserrat font-medium">
                  Social
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
                <label htmlFor="male" className=" font-montserrat font-medium">
                  Not at all
                </label>
              </div>
            </span>

            <span className="mt-4">
              <h2 className=" font-semibold font-montserrat">
                Martial Status <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              <div className="flex pl-4">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="MALE"
                  className="mr-2 "
                />
                <label htmlFor="male" className=" font-montserrat font-medium">
                  Single
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
                <label htmlFor="male" className=" font-montserrat font-medium">
                  Divorce
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
                <label htmlFor="male" className=" font-montserrat font-medium">
                  Awaiting Divorce
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
                <label htmlFor="male" className=" font-montserrat font-medium">
                  Widow or Widower
                </label>
              </div>
            </span>

            <span className="mt-4">
              <h2 className="text-lg font-semibold font-montserrat  pb-2">
                Contact Number
                <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              <input
                type="text"
                className="w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                placeholder="Contact Number"
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
              />
            </span>

            <div className="flex justify-center  pb-4">
              <button className="px-8 py-2 bg-[#A92525] font-montserrat rounded-lg text-white">
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
