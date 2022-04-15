import React from 'react';

import { imgPath } from '../../variables';

const Showcase = () => {
  return (
    <div className='showcase'>
      <div className='showcase__item'>
        <div className='showcase__item__icon'>
          <img
            src={`${imgPath}/assets/icon-compatible.svg`}
            alt='icon-compatible'
          />
        </div>
        <h3 className='heading heading--showcase'>
          HIGHLY <br />
          COMPATIBLE
        </h3>
        <p className='paragraph paragraph--showcase'>
          Easy to use and works well with all major computer brands, gaming
          consoles and mobile devices. Plug & play, no installation or driver
          needed.
        </p>
      </div>

      <div className='showcase__item'>
        <div className='showcase__item__icon'>
          <img
            src={`${imgPath}/assets/icon-bluetooth.svg`}
            alt='icon-bluetooth.'
          />
        </div>
        <h3 className='heading heading--showcase'>
          WIRELESS <br /> WITH BLUETOOTH
        </h3>
        <p className='paragraph paragraph--showcase'>
          Powerful 2.4G RF technology allows you to connect the cordless
          keyboard from up to 30ft away. Simply plug the unifying receiver into
          your computer.
        </p>
      </div>

      <div className='showcase__item'>
        <div className='showcase__item__icon'>
          <img src={`${imgPath}/assets/icon-battery.svg`} alt='icon-battery' />
        </div>
        <h3 className='heading heading--showcase'>
          HIGH CAPACITY <br />
          BATTERY
        </h3>
        <p className='paragraph paragraph--showcase'>
          Equipped with a long-lasting built-in battery, you'll never have to
          spend a dime on replaceable ones. Enjoy 40 hours of usage time between
          charges.
        </p>
      </div>

      <div className='showcase__item'>
        <div className='showcase__item__icon'>
          <img src={`${imgPath}/assets/icon-light.svg`} alt='icon-light' />
        </div>
        <h3 className='heading heading--showcase'>
          RGB BACKLIT <br />
          MODES
        </h3>
        <p className='paragraph paragraph--showcase'>
          Choose from 4 backlight brightness levels and adjustable breathing
          speed. Each key glows intensely in the dark and helps you type in low
          light conditions.
        </p>
      </div>
    </div>
  );
};

export default Showcase;
