import React from "react";

function ArrowSVG({ color }: { color: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="feather feather-arrow-down"
      viewBox="0 0 24 24"
    >
      <path d="M12 5L12 19"></path>
      <path d="M19 12L12 19 5 12"></path>
    </svg>
  );
}

export default ArrowSVG;
