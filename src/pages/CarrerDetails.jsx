import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCarrerDetails } from "../redux/Reducers/CarrerDetailsReducers";
import { carrerData } from "../Data";

const CarrerDetails = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.carrerDetails);

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateCarrerDetails({ [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center pb-8">
      <div className="w-[45%] shadow-primary/50  shadow-lg rounded-xl">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-[80%] h-[80%] mx-auto">
            {carrerData.map((field, index) => (
              <span key={index}>
                <h2 className="text-lg font-semibold font-montserrat pt-6">
                  {field.label}
                  {field.type === "radio" && (
                    <sup className="text-red-600 font-bold">*</sup>
                  )}
                </h2>
                {field.type === "radio" &&
                  field.options.map((option, i) => (
                    <div key={i} className="flex pl-4">
                      <input
                        type="radio"
                        id={option.replace(/ /g, "")}
                        name={field.name}
                        value={option}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label
                        htmlFor={option.replace(/ /g, "")}
                        className="font-montserrat font-medium"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                {field.type === "text" && (
                  <input
                    type="text"
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                    placeholder={field.label}
                  />
                )}
                {field.type === "select" && (
                  <select
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0] w-full"
                  >
                    {field.options.map((option, i) => (
                      <option key={i} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                )}
              </span>
            ))}
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

export default CarrerDetails;
