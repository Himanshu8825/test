import React, { useEffect, useRef, useState } from "react";
import DisplayStepsform from "./DisplayStepsForm";
import { useDispatch, useSelector } from "react-redux";
import { StapperAction } from "../redux/action/StepersAction";

const Stapper = () => {
  const dispatch = useDispatch();

  // State for the modified steps
  const [newStep, setNewStep] = useState([]);

  // Get the current step from Redux store
  const { currentStep } = useSelector((state) => state.stapeers);

  // Dispatch action to update current step
  const updateCurrentStep = (step) => {
    dispatch(StapperAction(step));
  };

  // Define the steps
  const steps = [
    "Personal Details",
    "Additional Details",
    "Career Details",
    "Family Details",
    "Additional Details & Interest",
    "Partner Preference",
  ];

  // Ref for storing the steps
  const stepRef = useRef();

  // Function to update steps based on current step
  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;

    while (count < newSteps.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
      } else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
      }
      count++;
    }
    return newSteps;
  };

  
  // Effect to update steps when currentStep changes
  useEffect(() => {
    // Create initial step state
    const stepState = steps.map((step, index) => ({
      description: step,
      completed: false,
      highlighted: index === 0,
      selected: index === 0,
    }));
    // Store initial step state in ref
    stepRef.current = stepState;
    // Update steps based on current step
    const current = updateStep(currentStep - 1, stepRef.current);
    // Update state with modified steps
    setNewStep(current);
  }, [currentStep]);

  // Render steps
  const displaySteps = newStep.map((step, index) => (
    <div
      key={index}
      className={
        index !== newStep.length - 1
          ? `w-full flex items-center`
          : "flex items-center"
      }
    >
      <div className="relative  flex flex-col items-center text-black font-montserrat font-bold">
        <div
          className={`rounded-full transition duration-500 ease-in-out shadow-md h-14 w-14 flex items-center justify-center py-3 cursor-pointer ${
            step.selected ? "bg-[#A92525] font-bold " : "bg-white shadow-md"
          }`}
          onClick={() => updateCurrentStep(index + 1) }
        >
          {step.completed ? (
            <span className="text-white text-xl">{index + 1}</span>
          ) : (
            index + 1
          )}
        </div>
        <div
          className={`absolute top-0 text-center mt-16 w-32 text-[10px] font-semibold uppercase font-montserrat ${
            step.highlighted ? "text-gray-900" : "hidden"
          }`}
        >
          {step.description}
        </div>
      </div>
      <div
        className={`flex-auto border-t-4 transition duration-500 ease-in-out ${
          step.completed ? "border-[#A92525]" : "border-none"
        }`}
      ></div>
    </div>
  ));

  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      <div className="flex mb-8 md:w-[60%] w-full md:gap-0 gap-4 mx-auto p-8">{displaySteps}</div>
      <DisplayStepsform currentStep={currentStep} />
    </div>
  );
};

export default Stapper;
