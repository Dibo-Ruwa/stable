import React from "react";

interface DynamicSaleSVGProps {
  saleText: string;
}

const DynamicSaleSVG: React.FC<DynamicSaleSVGProps> = ({ saleText }) => (
  <svg
    width="340"
    height="308"
    viewBox="0 0 340 308"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="0" width="340" height="308" fill="#FFEEE4" />
    <text
      x="50%"
      y="50%"
      dominant-baseline="middle"
      text-anchor="middle"
      font-family="Arial, sans-serif"
      font-size="48"
      fill="#FF5733"
    >
      {saleText}
    </text>
  </svg>
);

export default DynamicSaleSVG;
