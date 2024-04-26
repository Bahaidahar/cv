import React from "react";
import { IIcon } from "../interface/Icon";

const ArrowInCircle = ({ size, rotate }: IIcon) => {
  return (
    <svg
      width={size ? size : "800px"}
      height={size ? size : "800px"}
      className={`${
        rotate ? `rotate-${rotate}` : ""
      } hover:scale-105 transition duration-300 `}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 9L8 12M8 12L11 15M8 12H16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowInCircle;
