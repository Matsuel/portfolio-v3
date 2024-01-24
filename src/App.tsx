import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import topGradient from './assets/top-gradient.svg'
import botGradient from './assets/bot-gradient.svg'
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import { DarkModeContext } from './darkMode';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={`App ${darkMode ? "dark" : "light"}`}>
        <img src={topGradient} alt="top gradient" className="topGradient" />
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        <Contact />
        <img src={botGradient} alt="bot gradient" className="botGradient" />
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
