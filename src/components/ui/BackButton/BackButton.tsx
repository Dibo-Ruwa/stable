"use client";

import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { LiaAngleLeftSolid } from "react-icons/lia";
import React from "react";

interface BackButtonProps {
  className?: string;
  onClick?: () => void;
}

export const BackButton: React.FC<BackButtonProps> = ({
  className,
  onClick,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.back();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`border-none outline-none bg-transparent text-primary flex items-center gap-2 cursor-pointer py-5 ${className}`}
    >
      <ArrowLeftIcon className="w-4 h-4 flex-shrink-0" />
      <div className="text-green-600 font-poppins text-base font-normal leading-normal">
        Back
      </div>
    </button>
  );
};

export const BackButton2: React.FC<BackButtonProps> = ({
  className,
  onClick,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.back();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`border-none outline-none bg-transparent text-primary flex items-center gap-2 cursor-pointer py-5 ${className}`}
    >
      <LiaAngleLeftSolid className="w-4 h-4 flex-shrink-0" />
      <div className="text-green-600 font-poppins text-base font-normal leading-normal">
        Back
      </div>
    </button>
  );
};
