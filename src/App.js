import React from 'react';
import MyNavBar from './Components/navigation/NavBar';
import MyHome from './Components/pages/Home';
import ContactUs from './Components/pages/ContactUs';

import './App.css';

function App() {
  return (
    <div className="App">
      <MyNavBar/>
      <header className="App-header">
        <MyHome/>
        <ContactUs/>
      </header>
    </div>
  );
}

export default App;
