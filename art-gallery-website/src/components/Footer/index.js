import React from "react";

import imagePath from "../../imagePath";

const Footer = ({ footerName }) => {
  return (
    <div className={`footer ${footerName}`}>
      <h2 className="heading heading--footer">
        MODERN <br /> ART GALLERY
      </h2>

      <p className="paragraph paragraph--footer">
        The Modern Art Gallery is free to all visitors and open seven days a
        week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
      </p>

      <div className={`footer__links`}>
        <img src={`${imagePath}/icon-facebook.svg`} alt="facebook icon" />
        <img src={`${imagePath}/icon-instagram.svg`} alt="facebook icon" />
        <img src={`${imagePath}/icon-twitter.svg`} alt="facebook icon" />
      </div>
    </div>
  );
};

export default Footer;
