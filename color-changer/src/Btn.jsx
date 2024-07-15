import React from "react";

const Btn = ({ colorName, btnName, colorChange }) => {
  return (
    <>
      <button
        style={{
          backgroundColor: colorName,
          padding: "20px",
          borderRadius: "10px",
          minWidth: "10px",
          cursor:'pointer'
        }}
        onClick={() => colorChange(colorName)}
      >
        {btnName}
      </button>
    </>
  );
};
export default Btn;
