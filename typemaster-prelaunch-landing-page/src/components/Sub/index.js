import React from 'react';

import ResponsiveImage from '../ResponsiveImage';
import { imgPath } from '../../variables';

const Sub = () => {
  return (
    <div className='sub'>
      <div className='sub-square'>
        <img
          src={`${imgPath}/assets/pattern-square.svg`}
          alt='pattern-square'
        />
      </div>

      <div className='sub-content'>
        <div className='sub-content__image-phone'>
          <ResponsiveImage imgName='image-phone-and-keyboard' />
        </div>

        <div className='sub-content__image-keyboard'>
          <ResponsiveImage imgName='image-glass-and-keyboard' />
        </div>

        <div className='sub-content__text'>
          <div className='heading heading--sub-content__text'>
            mechanical wireless Keyboard
          </div>

          <div className='paragraph paragraph--sub-content__text'>
            The Typemaster keyboard boasts top-notch build and practical design.
            It offers a wide variety of switches and keycaps, along with
            reliable wireless connectivity.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sub;
