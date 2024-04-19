import React, { useState } from "react";
import { RiFileUploadFill, RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  updateAboutYourself,
  updatePhotos,
} from "../redux/Reducers/InterestReducers";
import { StapperAction } from "../redux/action/StepersAction";

const MyPhotos = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.interest);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleAboutYourselfChange = (event) => {
    dispatch(updateAboutYourself(event.target.value));
  };

  const updateCurrentState = () => {
    dispatch(StapperAction(6));
  };

  const handlePhotoUpload = (event) => {
    const files = event.target.files;
    const selected = [...files].map((file) => URL.createObjectURL(file));
    setSelectedImages(selected);
    dispatch(updatePhotos(selected));
    console.log("Uploading...");
  };

  const handleDeletePhoto = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
    dispatch(updatePhotos(updatedImages));
  };

  return (
    <div className="w-full flex flex-col justify-center items-center pb-8 pt-8">
      <div className="w-[60%] shadow-primary/50  shadow-lg rounded-xl">
        <form>
          <div className="flex flex-col w-[80%] h-[80%] mx-auto mt-8">
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
                {selectedImages.map((image, index) => (
                  <div key={index}>
                    <div>
                      <img
                        src={image}
                        alt=""
                        className="w-[150px] h-[150px] rounded-lg border border-[#A92525]"
                      />
                    </div>
                    <div
                      className="flex gap-2 items-center justify-center pt-2 pb-2 cursor-pointer "
                      onClick={() => handleDeletePhoto(index)}
                    >
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

export default MyPhotos;
