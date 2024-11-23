import React from "react";

export const RequestInfo = () => {
  return (
    <div>
      <div className="inline-flex flex-col items-start gap-[9.043px]">
        <p className="text-[#27a124] font-poppins text-[16px] font-medium">
          Carolina Stores
        </p>
        <p className="text-[#8f8f8f] font-poppins text-[14px] font-normal">
          Please confirm your Request
        </p>
      </div>
      <div className="flex flex-col items-start gap-[13.565px] mx-auto my-8">
        <hr className="w-full h-[1.13px] border-dashed border-[#8f8f8f] opacity-50" />
        {[
          { name: "Fried Rice", quantity: "2 Plates" },
          { name: "Protein", quantity: "4" },
          { name: "Drink", quantity: "5" },
          { name: "Extras", quantity: "4" },
        ].map((food, index) => (
          <div key={index} className="flex w-full justify-between items-center">
            <p className="text-[#8f8f8f] font-poppins text-[15.825px] font-normal">
              {food.name}
            </p>
            <p className="text-[#565656] font-poppins text-[15.825px] font-normal">
              {food.quantity}
            </p>
          </div>
        ))}
        <hr className="w-full h-[1.13px] border-dashed border-[#8f8f8f] opacity-50" />
      </div>
      <div className="flex flex-col items-start gap-[24px] mx-auto mb-8">
        {[
          { label: "Sub Total", amount: "$10,000" },
          { label: "Delivery", amount: "$10,000" },
          { label: "Total", amount: "$100,000", isTotal: true },
        ].map((account, index) => (
          <div key={index} className="flex w-full justify-between items-center">
            <p className="text-[#8f8f8f] font-poppins text-[15.825px] font-normal">
              {account.label}
            </p>
            <p
              className={`font-poppins text-[15.825px] ${
                account.isTotal
                  ? "text-[#27a124] font-semibold"
                  : "text-[#565656] font-medium"
              }`}
            >
              {account.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
