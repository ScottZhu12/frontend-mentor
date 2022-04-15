import React from 'react';

import { imgPath } from '../../variables';

const Header = () => {
  return (
    <div className='header'>
      <img
        className='header-logo'
        src={`${imgPath}/assets/logo.svg`}
        alt='company logo'
      />
      <button className='btn btn--header'>pre-order now</button>
    </div>
  );
};

export default Header;
