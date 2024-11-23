import React from "react";
import { MdAdd } from "react-icons/md";
import { HiMinus } from "react-icons/hi2";

export const CTADelivery = () => {
  return (
    <div className="flex justify-between items-center bg-[#3e3e3e] rounded-[8px] w-full my-8 py-2 px-16 md:px-4">
      <div className="flex justify-center items-center gap-12 md:gap-4">
        <div className="flex-shrink-0 w-[28px] h-[28px] text-white">
          <HiMinus />
        </div>
        <div className="text-[#fefefe] font-poppins text-[20px] font-normal">
          0
        </div>
        <div className="flex-shrink-0 w-[28px] h-[28px] text-white">
          <MdAdd />
        </div>
      </div>
      <div className="flex justify-end items-center gap-20 md:gap-8">
        <button className="border-none bg-transparent cursor-pointer outline-none text-[#fefefe] font-poppins text-[20px] font-normal">
          Pick up
        </button>
        <button className="flex justify-center items-center h-[45px] px-[60px] rounded-[8px] border-none bg-[#27a124] text-[#fefefe] font-poppins text-[20px] font-normal">
          Delivery
        </button>
      </div>
    </div>
  );
};
