import React from "react";

const Button = ({ colour, bgColour, text, size, borderRadius }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColour, color: colour, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
};

export default Button;
