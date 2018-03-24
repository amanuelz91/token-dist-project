import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './token_soft_logo.png';

import TokenInfo from './components/TokenInfo/TokenInfo'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Lets Distribute Some Tokens</h1>
          <TokenInfo/>
        </header>
      </div>
    );
  }
}

export default App;
