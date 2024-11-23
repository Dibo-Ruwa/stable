import React from "react";
import { LuCalendarDays } from "react-icons/lu";
import { BsClock } from "react-icons/bs";
import { TfiAngleDown } from "react-icons/tfi";

export const SchDeliveryOpl = () => {
  return (
    <div className="flex flex-col items-start gap-2 mt-8">
      <p className="text-[#8f8f8f] font-poppins text-[16px] font-normal">
        Schedule Delivery (optional)
      </p>
      <div className="flex justify-between items-center gap-[22px] w-full h-[72px] mb-4 px-[18px] pt-[13px] pb-[18px] bg-[#f7f7f7] rounded-[11.304px] shadow-[0px_7.913px_18.086px_rgba(158,158,158,0.05)]">
        <div className="flex items-center gap-2">
          <div className="flex w-[24px] h-[24px] justify-center items-center text-[#292d32]">
            <LuCalendarDays />
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-[#767575] font-poppins text-[12px] font-normal">
              Date
            </p>
            <p className="text-[#2a2a2a] font-poppins text-[14px] font-normal">
              17, August 2024
            </p>
          </div>
        </div>
        <div className="flex cursor-pointer justify-center items-center gap-2 bg-[rgba(234,235,238,0.49)] rounded-full p-2">
          <TfiAngleDown />
        </div>
      </div>
      <div className="flex justify-between items-center gap-[22px] w-full h-[72px] mb-4 px-[18px] pt-[13px] pb-[18px] bg-[#f7f7f7] rounded-[11.304px] shadow-[0px_7.913px_18.086px_rgba(158,158,158,0.05)]">
        <div className="flex items-center gap-2">
          <div className="flex w-[24px] h-[24px] justify-center items-center text-[#292d32]">
            <BsClock />
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-[#767575] font-poppins text-[12px] font-normal">
              Time
            </p>
            <p className="text-[#2a2a2a] font-poppins text-[14px] font-normal">
              12:00 AM
            </p>
          </div>
        </div>
        <div className="flex cursor-pointer justify-center items-center gap-2 bg-[rgba(234,235,238,0.49)] rounded-full p-2">
          <TfiAngleDown />
        </div>
      </div>
    </div>
  );
};
