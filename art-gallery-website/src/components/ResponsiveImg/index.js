import React from "react";

import imagePath from "../../imagePath";

const ResponsiveImg = ({ imgName }) => {
  return (
    <div>
      <picture>
        <source
          media="(max-width: 23.45em)"
          srcSet={`${imagePath}/mobile/${imgName}.jpg, ${imagePath}/mobile/${imgName}@2x.jpg 2x`}
        ></source>

        <source
          media="(max-width: 48em)"
          srcSet={`${imagePath}/tablet/${imgName}.jpg, ${imagePath}/tablet/${imgName}@2x.jpg 2x`}
        ></source>

        <img
          srcSet={`${imagePath}/desktop/${imgName}.jpg, ${imagePath}/desktop/${imgName}@2x.jpg 2x`}
          src={`${imagePath}/desktop/${imgName}.jpg`}
          alt="sketch of a woman"
        />
      </picture>
    </div>
  );
};

export default ResponsiveImg;
