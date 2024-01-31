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
import { Langage } from './langage';
import dotenv from 'dotenv';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [langage, setLangage] = useState<number>(0);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleLangage = () => {
    if (langage === 0) {
      setLangage(1)
    } else {
      setLangage(0)
    }
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <Langage.Provider value={{ langage, toggleLangage }}>
      <div className={`App ${darkMode ? "dark" : "light"}`}>
        <img src={topGradient} alt="top gradient" className="topGradient" />
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        <Contact />
        <img src={botGradient} alt="bot gradient" className="botGradient" />
      </div>
      </Langage.Provider>
    </DarkModeContext.Provider>
  );
}

export default App;
