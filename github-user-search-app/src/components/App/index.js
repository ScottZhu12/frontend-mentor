import React from 'react';
import { connect } from 'react-redux';

import Header from '../Header';
import SearchBar from '../SearchBar';
import Card from '../Card';

class App extends React.Component {
  componentDidMount() {
    if (localStorage.length === 0 && !localStorage.getItem('theme')) {
      const defaultDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      const theme = defaultDark ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
    }
  }

  render() {
    return (
      <div className='app' data-theme={localStorage.getItem('theme')}>
        <div className='app-content'>
          <Header />
          {/* <SearchBar initialValues={{ userName: 'ok' }} /> */}
          <SearchBar />
          <Card />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { themeReducer: state.themeReducer };
};

export default connect(mapStateToProps, {})(App);
