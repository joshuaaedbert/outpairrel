import React from 'react';
import './App.css';
import Home from './Home.js';
import Navbar from './components/Navbar.js';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          {/* <Navbar /> */}
          <Home/>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
