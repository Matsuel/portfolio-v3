import React from 'react'
import "./Home.css"
import Logo from "../../assets/logo-high.png"

const Home = () => {
    return (
        <div className='homeWrap' id='home'>
            <div className="home-content">
                <h1 className="home-title">
                    Hello World!
                </h1>
                <p className="home-text">
                I am a full stack web developer based in France. I love back-end development and I'm always looking for new challenges like doing css.
                </p>
                <a className='home-button' href="#contact">Contact me</a>
            </div>
            <div className="logo-home">
                <img src={Logo} alt="Logo" className='logo-image' />
            </div>
        </div>
    )
}

export default Home
