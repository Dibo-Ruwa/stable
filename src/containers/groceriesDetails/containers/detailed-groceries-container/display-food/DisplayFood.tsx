"use client";
import React from "react";
import { AboutFood } from "../about-groceries/AboutGroceries";
import { CTADelivery } from "../cta-delivery/CTADelivery";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

// Tailwind CSS classes replace styled-components
export const DisplayFood = () => {
  return (
    <section className="w-full">
      <div>
        <img
          src="/images/Frame 2610163.png"
          alt="on display"
          className="h-[329px] rounded-[20px] w-full object-cover"
        />
      </div>
      <div className="flex gap-4 justify-start mt-4 overflow-x-auto">
        <button className="flex justify-center items-center w-8 h-8 bg-[#eaebee] rounded-full">
          <TfiAngleLeft />
        </button>
        <img
          src="/images/151e2d46640e246f42f769231cc76bab.png"
          alt="on selected"
          className="w-[27%] h-[120px] flex-shrink-0 md:h-[100px]"
        />
        <img
          src="/images/d8cc774cbb454c39b0c0a291406db198.png"
          alt="on selected"
          className="w-[27%] h-[120px] flex-shrink-0 md:h-[100px]"
        />
        <img
          src="/images/d8cc774cbb454c39b0c0a291406db198.png"
          alt="on selected"
          className="w-[27%] h-[120px] flex-shrink-0 md:h-[100px]"
        />
        <img
          src="/images/d8cc774cbb454c39b0c0a291406db198.png"
          alt="on selected"
          className="w-[27%] h-[120px] flex-shrink-0 md:h-[100px]"
        />
        <img
          src="/images/7440670515731ae400623ae77f2ecbd7.png"
          alt="on selected"
          className="w-[27%] h-[120px] flex-shrink-0 md:h-[100px]"
        />
        <button className="flex justify-center items-center w-8 h-8 bg-[#eaebee] rounded-full">
          <TfiAngleRight />
        </button>
      </div>
      <AboutFood />
      <CTADelivery />
    </section>
  );
};
