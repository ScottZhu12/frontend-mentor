import React from "react";
import { Link } from "react-router-dom";

import imagePath from "../../imagePath";

const Button = ({ text, imgName, path, btnName }) => {
  return (
    <Link to={path} className={`btn ${btnName}`}>
      <span>{text}</span>
      <span>
        <img src={`${imagePath}/${imgName}.svg`} alt={imgName} />
      </span>
    </Link>
  );
};

export default Button;
