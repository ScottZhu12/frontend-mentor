import React from 'react';

import { imgPath } from '../../variables';

const Navigation = () => {
  return (
    <div className='navigation'>
      <div className='navigation-logo'>
        <img src={`${imgPath}/images/logo.svg`} alt='company logo' />
      </div>

      <div className='navigation-links'>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
