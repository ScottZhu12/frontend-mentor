import React from "react";

const imgPath = process.env.PUBLIC_URL;

const ResponsiveImg = ({ imgName }) => {
  return (
    <picture>
      <source
        media="(max-width:23.5em)"
        type="image/webp"
        srcSet={`${imgPath}/assets/${imgName}-mobile.webp, ${imgPath}/assets/${imgName}-mobile@2x.webp 2x`}
      />
      <source
        media="(max-width:23.5em)"
        type="image/png"
        srcSet={`${imgPath}/assets/${imgName}-mobile.png, ${imgPath}/assets/${imgName}-mobile@2x.png 2x`}
      />
      <source
        media="(min-width:23.6em)"
        type="image/webp"
        srcSet={`${imgPath}/assets/${imgName}-desktop.webp, ${imgPath}/assets/${imgName}-desktop@2x.webp 2x`}
      />
      <source
        media="(min-width:23.6em)"
        type="image/png"
        srcSet={`${imgPath}/assets/${imgName}-desktop.png, ${imgPath}/assets/${imgName}-desktop@2x.png 2x`}
      />
      <img
        src={`${imgPath}/assets/${imgName}-desktop.png`}
        alt={`${imgName}`}
      />
    </picture>
  );
};

export default ResponsiveImg;
