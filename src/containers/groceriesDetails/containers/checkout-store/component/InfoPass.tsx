import React from "react";

export const InfoPass = () => {
  return (
    <div className="flex w-full flex-col items-start gap-[13.565px] mx-auto mb-8">
      <p className="text-[#2a2a2a] font-poppins text-[13.565px] font-normal leading-[27.129px]">
        Want to pass an info?
      </p>
      <textarea
        placeholder="Write..."
        name="message"
        rows={4}
        cols={50}
        className="w-full h-[150.342px] p-4 border-none outline-none rounded-lg bg-[rgba(233,233,233,0.31)] resize-none"
      ></textarea>
    </div>
  );
};
