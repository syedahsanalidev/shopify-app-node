import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const API_KEY='1597fa2d0ab1ca092672e128b03e7dd9';
  const API_SECRET='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';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
