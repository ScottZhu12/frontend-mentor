import React from "react";

const imgPath = process.env.PUBLIC_URL;

const ResponsiveImg = ({ imgName }) => {
  return (
    <picture>
      <source
        media="(max-width:23.5em)"
        type="image/webp"
        srcset={`${imgPath}/assets/${imgName}-small.webp, ${imgPath}/assets/${imgName}-small@2x.webp 2x`}
      />
      <source
        media="(max-width:23.5em)"
        type="image/png"
        srcset={`${imgPath}/assets/${imgName}-small.png, ${imgPath}/assets/${imgName}-small@2x.png 2x`}
      />
      <source
        media="(min-width:23.6em)"
        type="image/webp"
        srcset={`${imgPath}/assets/${imgName}-large.webp, ${imgPath}/assets/${imgName}-large@2x.webp 2x`}
      />
      <source
        media="(min-width:23.6em)"
        type="image/png"
        srcset={`${imgPath}/assets/${imgName}-large.png, ${imgPath}/assets/${imgName}-large@2x.png 2x`}
      />
      <img src={`${imgPath}/assets/${imgName}-large.png`} alt={`${imgName}`} />
    </picture>
  );
};

export default ResponsiveImg;
