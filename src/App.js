import React from 'react';
import MyNavBar from './Components/navigation/NavBar';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyNavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello <code>World</code> XÆA-12 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome!
        </a>
      </header>
    </div>
  );
}

export default App;
