import React from 'react';

import TipMain from '../TipMain';
import TipSub from '../TipSub';

export const imgPath = process.env.PUBLIC_URL;

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <div className='app__logo'>
          <img src={`${imgPath}/images/logo.svg`} alt='company logo' />
        </div>

        <div className='app__content'>
          <TipMain />
          <TipSub />
        </div>
      </div>
    );
  }
}

export default App;
