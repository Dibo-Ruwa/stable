import React from "react";
import { CiEdit } from "react-icons/ci";

export const DeliveryLocation = () => {
  return (
    <div className="w-full h-[162.776px] rounded-lg p-4 bg-[#f7f7f7] shadow-[0px_7.913px_18.086px_rgba(158,158,158,0.05)]">
      <div className="flex justify-between items-center mx-auto mb-4">
        <p className="text-[#8f8f8f] font-poppins text-[15.825px] font-normal leading-[27.129px]">
          Delivery location
        </p>
        <div className="flex justify-center items-center gap-2 cursor-pointer">
          <CiEdit className="w-[21.558px] h-[21.558px] flex-shrink-0 text-[#27a124]" />
          <span className="text-[#27a124] font-poppins text-[15.825px] font-normal">
            Edit
          </span>
        </div>
      </div>
      <p className="text-[#767575] font-poppins text-[15.825px] font-normal mb-4">
        Address
      </p>
      <textarea
        name="message"
        rows={4}
        cols={20}
        placeholder="No 24 Eberechi street, umuahia, Eberechi street, umuahia, Abia state."
        className="w-full h-[57.342px] border-none outline-none resize-none bg-[#f7f7f7] text-[#3f3f3f] font-poppins text-[15.825px] font-normal leading-[27.129px]"
      ></textarea>
    </div>
  );
};
