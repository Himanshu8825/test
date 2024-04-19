import React from 'react'
import { profileData } from '../Data';
import { RiUserFollowLine } from 'react-icons/ri';
import { PrimaryImg, SaveLogo } from '../assets/Index';
import { MdBlockFlipped } from 'react-icons/md';
import { TbEyeCheck } from 'react-icons/tb';

function HomeCard() {
  return (
    <div className="shadoww m-2 !bg-white rounded-xl ">
      <div className="flex flex-col justify-center items-center pt-8 pl-8 pr-8 pb-4">
        <img
          src={PrimaryImg}
          alt=""
          className="border-2 border-primary rounded-full w-[80px] h-[80px]"
        />
        <div className="gap-2 font-montserrat font-medium text-black">
          <p>
            Sonali Singh <span> ( CS12345 )</span>
          </p>
          <p className="text-center text-sm">Active now</p>
        </div>
      </div>
      {profileData.map((data, index) => (
        <div
          key={index}
          className="flex justify-between pl-6 pr-6 pt-2 pb-1 font-montserrat text-black font-medium "
        >
          {Object.values(data).map((value, index) => (
            <p key={index}>{value}</p>
          ))}
        </div>
      ))}

      <div className="pr-6 pl-6 pt-2 flex justify-between text-white">
        <div className="px-8 py-1 bg-primary mb-4 rounded-lg">
          <TbEyeCheck className="text-2xl" />
        </div>
        <div className="px-8 py-1 bg-primary mb-4 rounded-lg">
          <RiUserFollowLine className="text-2xl" />
        </div>
      </div>
      <div className="pr-6 pl-6 flex justify-between">
        <div className="px-8 py-1 border border-primary mb-4 rounded-lg">
          <img src={SaveLogo} alt="" />
        </div>
        <div className="px-8 py-1 mb-4 rounded-lg">
          <MdBlockFlipped className="text-2xl text-primary" />
        </div>
      </div>
    </div>
  );
}

export default HomeCard
