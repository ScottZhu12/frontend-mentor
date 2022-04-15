import React from 'react';

import { imgPath } from '../../variables';
import ResponsiveImage from '../ResponsiveImage';

const Main = () => {
  return (
    <div className='main'>
      <div className='main-content'>
        <h1 className='heading heading--main-content'>typemaster keyboard</h1>
        <p className='paragraph paragraph--main-content'>
          Improve your productivity and gaming without breaking the bank.
          Upgrade to a high quality mechanical typing experience.
        </p>
        <div className='main-content__detail'>
          <button className='btn btn--main'>pre-order now</button>
          <div className='heading heading--main-content__detail'>
            release on 5/27
          </div>
        </div>
      </div>

      <div className='main-image'>
        <ResponsiveImage imgName='image-keyboard' />
      </div>

      <div className='main-square'>
        <img
          src={`${imgPath}/assets/pattern-square.svg`}
          alt='pattern-square'
        />
      </div>
    </div>
  );
};

export default Main;
