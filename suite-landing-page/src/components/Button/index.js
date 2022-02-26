import React from "react";

const Button = ({ btnText, btnName }) => {
  return <button className={`btn ${btnName}`}>{btnText}</button>;
};

export default Button;
