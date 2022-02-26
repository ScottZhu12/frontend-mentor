import React from "react";

const imgPath = process.env.PUBLIC_URL;

const Footer = () => {
  return (
    <div className="footer">
      <img src={`${imgPath}/assets/logo.svg`} alt="company logo" />

      <small>Copyright - Suite</small>

      <div className="social-links">
        <img src={`${imgPath}/assets/icon-facebook.svg`} alt="facebook icon" />
        <img src={`${imgPath}/assets/icon-twitter.svg`} alt="twitter icon" />
        <img
          src={`${imgPath}/assets/icon-instagram.svg`}
          alt="instagram icon"
        />
      </div>
    </div>
  );
};

export default Footer;
