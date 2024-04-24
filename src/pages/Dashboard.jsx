import React from "react";
import { PiCheckCircleThin } from "react-icons/pi";

const Dashboard = () => {
  return (
    <div className="w-full flex justify-center items-center md:p-16 p-8">
      <div className="w-full   border border-primary shadow-md shadow-primary/50 rounded-lg">
        <div className="w-full h-[100px] bg-primary rounded-b-[4rem]"></div>
        <PiCheckCircleThin className="text-[12rem] text-primary mx-auto m-4" />
        <p className=" font-montserrat text-center text-lg p-4 ">
          ‘Thank You for signing up, We usually take 3-5 business days for
          verification. Once verified you will be able to access the profiles
        </p>
        <div className="w-full flex justify-center mt-6 mb-8 ">
          <button className=" px-4 py-3 bg-primary rounded-xl text-white font-montserrat ">
            Back To Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
