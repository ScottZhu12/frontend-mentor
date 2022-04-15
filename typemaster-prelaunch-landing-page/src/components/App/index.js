import React from 'react';

import Header from '../Header';
import Main from '../Main';
import Sub from '../Sub';
import Showcase from '../Showcase';
import Footer from '../Footer';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Main />
        <Sub />
        <Showcase />
        <Footer />
      </div>
    );
  }
}

export default App;
