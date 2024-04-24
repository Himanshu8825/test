import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCarrerDetails } from "../redux/Reducers/CarrerDetailsReducers";
import { carrerData } from "../Data";
import { StapperAction } from "../redux/action/StepersAction";

const CarrerDetails = () => {
  const dispatch = useDispatch();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [formData, setFormData] = useState({
    education: "",
    highestQualification: "",
    schoolOrUniversity: "",
    profession: "",
    currentDesignation: "",
    previousOccupation: "",
    annualIncomeType: "",
    annualIncome: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "annualIncomeType") {
      let updatedIncome = formData.annualIncome;
      switch (value) {
        case "Indian Rupee (INR)":
          updatedIncome = `₹${formData.annualIncome.replace(/[^0-9]/g, "")}`;
          break;
        case "United States Dollar (USD)":
          updatedIncome = `$${formData.annualIncome.replace(/[^0-9.]/g, "")}`;
          break;
        case "United Arab Emirates Dirham (AED)":
          updatedIncome = `AED ${formData.annualIncome.replace(
            /[^0-9.]/g,
            ""
          )}`;
          break;
        case "United Kingdom Pound (GBP)":
          updatedIncome = `£${formData.annualIncome.replace(/[^0-9.]/g, "")}`;
          break;
        default:
          updatedIncome = formData.annualIncome.replace(/[₹$AED£]/g, "");
      }
      setFormData((prevData) => ({
        ...prevData,
        annualIncome: updatedIncome,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formData);
    setFormErrors(errors);
    setIsSubmit(true);
    if (!errors || Object.keys(errors).length === 0) {
      dispatch(StapperAction(4));
    }
  };

  useEffect(() => {
    console.log("The Error is", formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formData);
    }
  }, [formErrors]);

  const validate = (val) => {
    const errors = {};
    const requiredFields = ["education"];

    requiredFields.forEach((field) => {
      if (!val[field]) {
        const label = field.charAt(0).toUpperCase() + field.slice(1);
        errors[field] = `${label} is required`;
      }
    });

    return errors;
  };

  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <div className="md:w-[45%] w-full md:shadow-primary/50  md:shadow-lg rounded-xl">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-[80%]  mx-auto">
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
                {field.type === "text" && field.name === "annualIncome" && (
                  <input
                    type="text"
                    name={field.name}
                    value={formData.annualIncome}
                    onChange={handleChange}
                    className="w-full py-3 mb-4 rounded-lg focus:outline-none px-2 text-[#A0A0A0] bg-[#F0F0F0]"
                    placeholder={field.label}
                  />
                )}
                {field.type === "text" && field.name !== "annualIncome" && (
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
                {/* Conditionally render the error message for the "education" field */}
                {field.name === "education" && formErrors[field.name] && (
                  <p className="text-red-600">{formErrors[field.name]}</p>
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
