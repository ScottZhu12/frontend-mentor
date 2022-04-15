import React from 'react';

import { imgPath } from '../../variables';

const ResponsiveImage = ({ imgName }) => {
  return (
    <picture>
      <source
        srcSet={`${imgPath}/assets/desktop/${imgName}.jpg`}
        media='(min-width: 90em)'
      />
      <source
        srcSet={`${imgPath}/assets/mobile/${imgName}.jpg`}
        media='(max-width: 23.5em)'
      />
      <source
        srcSet={`${imgPath}/assets/tablet/${imgName}.jpg`}
        media='(max-width: 48em)'
      />
      <img src={`${imgPath}/assets/desktop/${imgName}.jpg`} alt={imgName} />
    </picture>
  );
};

export default ResponsiveImage;
