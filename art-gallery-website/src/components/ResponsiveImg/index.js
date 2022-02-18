import React from "react";

const imgPath = `${process.env.PUBLIC_URL}/assets`;

const ResponsiveImg = ({ imgName }) => {
  return (
    <div>
      <picture>
        <source
          media="(max-width: 23.45em)"
          srcSet={`${imgPath}/mobile/${imgName}.jpg, ${imgPath}/mobile/${imgName}@2x.jpg 2x`}
        ></source>

        <source
          media="(max-width: 48em)"
          srcSet={`${imgPath}/tablet/${imgName}.jpg, ${imgPath}/tablet/${imgName}@2x.jpg 2x`}
        ></source>

        <img
          srcSet={`${imgPath}/desktop/${imgName}.jpg, ${imgPath}/desktop/${imgName}@2x.jpg 2x`}
          src={`${imgPath}/desktop/${imgName}.jpg`}
          alt="sketch of a woman"
        />
      </picture>
    </div>
  );
};

export default ResponsiveImg;
