import React from "react";

const imgPath = process.env.PUBLIC_URL;

const Header = () => {
  return (
    <div className="header">
      <h1 className="heading heading--header">devfinder</h1>
      <div className="header__mode">
        <h2 className="heading heading--header__mode">dark</h2>
        <img src={`${imgPath}/assets/icon-moon.svg`} alt="icon-moon" />
      </div>
    </div>
  );
};

export default Header;
