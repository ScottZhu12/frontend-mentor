import React from "react";

const imgPath = process.env.PUBLIC_URL;

const Header = () => {
  return (
    <div className="header">
      <img src={`${imgPath}/assets/logo.svg`} alt="company logo" />
    </div>
  );
};

export default Header;
