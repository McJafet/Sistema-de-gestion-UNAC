import React from "react";

function CheckSVG({ color }: { color: string }) {
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
      className="feather feather-check"
      viewBox="0 0 24 24"
    >
      <path d="M20 6L9 17 4 12"></path>
    </svg>
  );
}

export default CheckSVG;
