import React from 'react';
import { connect } from 'react-redux';

import { setTheme } from '../../actions';
// import useLocalStorage from 'use-local-storage';

const imgPath = process.env.PUBLIC_URL;

const Header = ({ setTheme }) => {
  const isThemeDark = localStorage.getItem('theme') === 'dark';

  return (
    <div className='header'>
      <h1
        className='heading heading--header'
        data-theme={localStorage.getItem('theme')}
      >
        devfinder
      </h1>
      <div className='header__mode'>
        <button onClick={setTheme} data-theme={localStorage.getItem('theme')}>
          <h2
            className='heading heading--header__mode'
            data-theme={localStorage.getItem('theme')}
          >
            {isThemeDark ? 'light' : 'dark'}
          </h2>
          <img
            src={
              isThemeDark
                ? `${imgPath}/assets/icon-sun.svg`
                : `${imgPath}/assets/icon-moon.svg`
            }
            alt='icon'
          />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { themeReducer: state.themeReducer };
};

export default connect(mapStateToProps, { setTheme })(Header);
