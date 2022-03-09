import React from "react";

const imgPath = process.env.PUBLIC_URL;

const ResponsiveImage = ({ imgName }) => {
  return (
    <div className="responsive-image">
      <picture>
        <source
          media="(max-width:23.5em)"
          type="image/svg"
          srcSet={`${imgPath}/images/${imgName}-mobile.svg`}
        />
        <source
          media="(min-width:90em)"
          type="image/svg"
          srcSet={`${imgPath}/images/${imgName}-desktop.svg`}
        />
        <img src={`${imgPath}/images/${imgName}-desktop.svg`} alt={imgName} />
      </picture>
    </div>
  );
};

export default ResponsiveImage;
