import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as shared from 'shared-lib-proj/src/example';
import {predictTest} from "shared-lib-proj/src/example";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test result: {shared.predictTest()}
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
