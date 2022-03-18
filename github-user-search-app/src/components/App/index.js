import React from 'react';

import Header from '../Header';
import SearchBar from '../SearchBar';

const App = () => {
  return (
    <div className='app'>
      <div className='app-content'>
        <Header />
        {/* <SearchBar initialValues={{ userName: 'ok' }} /> */}
        <SearchBar />
      </div>
    </div>
  );
};

export default App;
