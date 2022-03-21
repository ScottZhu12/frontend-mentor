import React from 'react';

import Header from '../Header';
import SearchBar from '../SearchBar';
import Card from '../Card';

const App = () => {
  return (
    <div className='app'>
      <div className='app-content'>
        <Header />
        {/* <SearchBar initialValues={{ userName: 'ok' }} /> */}
        <SearchBar />
        <Card />
      </div>
    </div>
  );
};

export default App;
