import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenu from './components/MainMenu.js';
import Index from './pages/index.js';
import About from './pages/about.js';
import HeadConfig from './components/HeadConfig';
import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <HeadConfig />
        <MainMenu onClick="handleNavigation"/>

        <header className="App-header">
        <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Index/>} />
              <Route exact path="/home" element={<Index/>} />
              <Route exact path="/about" element={<About/>} />
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}
  
  

export default App;
