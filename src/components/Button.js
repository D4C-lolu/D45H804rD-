import React from "react";

const Button = (props) => {
  const {
    icon,
    bgColor,
    color,
    bgHoverColor,
    size,
    text,
    borderRadius,
    handlerFunc,
    width,
  } = props;

  return (
    <button
      type="button"
      onClick={() => {
        handlerFunc();
      }}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl w-${width}  hover:bg-${bgHoverColor}`}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
