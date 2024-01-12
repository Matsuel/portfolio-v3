import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import topGradient from './assets/top-gradient.svg'

function App() {
  return (
    <div className="App">
      <img src={topGradient} alt="top gradient" className="topGradient" />
      <Navbar />
    </div>
  );
}

export default App;
