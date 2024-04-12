import React from "react";
import { RiFileUploadFill, RiDeleteBin6Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  updateAboutYourself,
  updateSelectedOptions,
} from "../redux/Reducers/InterestReducers";

const Interest = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.interest);
  const handleAboutYourselfChange = (event) => {
    dispatch(updateAboutYourself(event.target.value));
  };

  const updateCurrentState = () => {
    dispatch(StapperAction(6));
  };

  const handlePhotoUpload = (event) => {};

  const handleOptionChange = (category, event) => {
    dispatch(
      updateSelectedOptions({
        ...formData.selectedOptions,
        [category]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Handle form submission here if needed
  };

  const items = [
    {
      id: 1,
      imageUrl:
        "https://cdn.pixabay.com/photo/2024/03/19/15/49/woman-8643502_1280.png",
    },
    {
      id: 2,
      imageUrl:
        "https://cdn.pixabay.com/photo/2024/03/19/15/49/woman-8643502_1280.png",
    },
    {
      id: 3,
      imageUrl:
        "https://cdn.pixabay.com/photo/2024/03/19/15/49/woman-8643502_1280.png",
    },
    {
      id: 4,
      imageUrl:
        "https://cdn.pixabay.com/photo/2024/03/19/15/49/woman-8643502_1280.png",
    },
    {
      id: 5,
      imageUrl:
        "https://cdn.pixabay.com/photo/2024/03/19/15/49/woman-8643502_1280.png",
    },
  ];

  const options = [
    { category: "Fun", values: ["Fun1", "Fun2", "Fun3", "Fun4"] },
    {
      category: "Fitness",
      values: ["Fitness1", "Fitness2", "Fitness3", "Fitness4"],
    },
    {
      category: "Other Interests",
      values: ["Other1", "Other2", "Other3", "Other4"],
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center pb-8">
      <div className="w-[60%] shadow-primary/50  shadow-lg rounded-xl">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-[80%] h-[80%] mx-auto mt-8">
            <span>
              <h2 className="text-lg font-semibold font-montserrat  pb-2">
                About yourself
                <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              <textarea
                value={formData.aboutYourself}
                onChange={handleAboutYourselfChange}
                className="w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-black font-montserrat font-medium bg-[#F0F0F0]"
                placeholder="Write about yourself......."
              />
            </span>

            <span>
              <h2 className="text-lg font-semibold font-montserrat  pb-2">
                My photos <sup className="text-red-600 font-bold ">*</sup>
              </h2>
              <div className="flex justify-center items-center pt-4 pb-8     ">
                <div className="flex flex-col gap-4 items-center border border-[#A92525] px-[3rem] py-1  rounded-xl cursor-pointer ">
                  <label
                    htmlFor="photoUpload"
                    className=" font-montserrat font-semibold p-2 cursor-pointer"
                  >
                    Upload a photo
                  </label>
                  <input
                    type="file"
                    id="photoUpload"
                    onChange={handlePhotoUpload}
                    className="hidden"
                    accept="image/*"
                    multiple
                  />
                  <RiFileUploadFill className="text-6xl text-[#A92525] " />
                </div>
              </div>
            </span>

            <span>
              <div className="grid grid-cols-4 gap-4 items-center">
                {items.map((item) => (
                  <div key={item.id}>
                    <div>
                      <img
                        src={item.imageUrl}
                        alt=""
                        className="w-[150px] h-[150px] rounded-lg border border-[#A92525]"
                      />
                    </div>
                    <div className="flex gap-2 items-center justify-center pt-2 pb-2 ">
                      <div className="px-6 py-1.5 border border-[#A92525] rounded-lg ">
                        <FaRegUser className="text-[#A92525] text-sm " />
                      </div>
                      <div className="px-6 py-1.5 border border-[#A92525] rounded-lg">
                        <RiDeleteBin6Line className="text-[#A92525] text-sm" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className=" font-montserrat text-sm pt-4 pb-4 font-medium ">
                Add a minimum of 3 or a maximum of 5 high-quality images. Select
                1 image as your thumbnail image. Your thumbnail image will be
                visible to everyone. Once you permit other profiles, then you
                entire profile will get unlocked & visible to the other members
              </p>
            </span>

            <div>
              {options.map((option, index) => (
                <span key={index}>
                  <h2 className="text-lg font-semibold font-montserrat  pb-2">
                    {option.category}
                  </h2>
                  <select
                    value={formData.selectedOptions[option.category]}
                    onChange={(event) =>
                      handleOptionChange(option.category, event)
                    }
                    className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full"
                  >
                    <option value="">{option.category}</option>
                    {option.values.map((value, index) => (
                      <option key={index} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </span>
              ))}
            </div>

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

export default Interest;
