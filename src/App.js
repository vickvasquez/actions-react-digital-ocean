import React from 'react';
import github from './github.png';
import docker from './docker.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Container-logo">
          <img src={github} className="App-logo" alt="logo" />
          <span>+</span>
          <img src={docker} className="App-logo" alt="logo" />

        </div>
        <p>
          Continuos integration using github actions and continuos deployment to digital ocean
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          View code
        </a>
      </header>
    </div>
  );
}

export default App;
