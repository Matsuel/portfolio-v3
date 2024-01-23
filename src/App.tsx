import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import topGradient from './assets/top-gradient.svg'
import botGradient from './assets/bot-gradient.svg'
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <img src={topGradient} alt="top gradient" className="topGradient" />
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <img src={botGradient} alt="bot gradient" className="botGradient" />
    </div>
  );
}

export default App;
