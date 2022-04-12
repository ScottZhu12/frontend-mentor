import React from 'react';

import Navigation from '../Navigation';
import { imgPath } from '../../variables';

const Header = () => {
  return (
    <div className='header'>
      <Navigation />
      <div className='header-content'>
        <h1 className='heading heading--header'>we are creatives</h1>
        <img src={`${imgPath}/images/icon-arrow-down.svg`} alt='arrow-down' />
      </div>
    </div>
  );
};

export default Header;
