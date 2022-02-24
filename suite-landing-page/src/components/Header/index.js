import React from "react";

import Button from "../Button";

const imgPath = process.env.PUBLIC_URL;

const Header = () => {
  return (
    <div className="header">
      <img src={`${imgPath}/assets/logo.svg`} alt="company logo" />
      <Button btnText="Request Beta Access" />
    </div>
  );
};

export default Header;
