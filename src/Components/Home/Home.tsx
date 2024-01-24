import React from 'react'
import "./Home.css"
import Logo from "../../assets/logo-high.png"
import { DarkModeContext } from '../../darkMode'

const Home = () => {
    const { darkMode } = React.useContext(DarkModeContext)
    return (
        <div className={`homeWrap ${darkMode ? "homeWrap-dark" : "homeWrap-light"}`} id='home'>
            <div className="home-content">
                <h1 className={`home-title ${darkMode ? "title-light" : "title-dark"}`}>
                    Hello World!
                </h1>
                <p className="home-text">
                I am a full stack web developer based in France. I love back-end development and I'm always looking for new challenges like doing css.
                </p>
                <a className={`home-button ${darkMode ? "home-button-dark" : "home-button-light"} `} href="#contact">Contact me</a>
            </div>
            <div className="logo-home">
                <img src={Logo} alt="Logo" className='logo-image' />
            </div>
        </div>
    )
}

export default Home
