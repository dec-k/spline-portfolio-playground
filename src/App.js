import logo from './logo.svg';
import './App.css';
import * as THREE from 'three';
import { animate } from './scenes/test';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <div style={{ maxHeight: '100px', maxWidth: '100px' }}>
        {animate()}
      </div>
    </div>
  );
}

export default App;
