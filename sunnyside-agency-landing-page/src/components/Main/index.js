import React from 'react';

import ResponsiveImage from '../ResponsiveImage';

const Main = () => {
  return (
    <div className='main'>
      <div className='main-card main-card--text'>
        <h2 className='heading heading--card-text'>Transform your brand</h2>
        <p className='paragraph paragraph--card-text'>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <div className='main-card__link-container'>
          <div className='heading heading--main-card__link'>
            learn more
            <div className='main-card__link-underline main-card__link-underline--yellow'></div>
          </div>
        </div>
      </div>

      <div className='main-card main-card--img'>
        <ResponsiveImage />
      </div>
    </div>
  );
};

export default Main;
