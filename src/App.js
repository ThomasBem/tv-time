// @flow

import React from 'react';

import Search from './components/search/Search';

import './App.css';

class App extends React.Component<{},{}> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to TV-Time</h1>
        </header>
        <Search />
      </div>
    );
  }
}

export default App;
