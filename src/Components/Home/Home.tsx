import React from 'react'
import "./Home.css"
import Logo from "../../assets/logo-high.png"
import { DarkModeContext } from '../../darkMode'
import { Langage } from '../../langage'
import { useParallax } from 'react-scroll-parallax'

const Home = () => {
    const { darkMode } = React.useContext(DarkModeContext)
    const { langage } = React.useContext(Langage)
    const opacity = useParallax<HTMLImageElement>({
        opacity: [5, -1],
    })

    return (
        <div className={`homeWrap ${darkMode ? "homeWrap-dark" : "homeWrap-light"}`} id='home'>
            <div className="home-content">
                <h1 className={`home-title ${darkMode ? "title-light" : "title-dark"}`}>
                    {
                        langage === 0 ? "Hello World!" : "Bonjour à tous !"
                    }
                </h1>
                <p className="home-text">
                    {
                        langage === 0 ? "I am a full stack web and mobile developer based in France. I love back-end development and I'm always looking for new challenges like doing css."
                            : "Je suis un développeur web et mobile full stack basé en France. J'adore le développement back-end et je suis toujours à la recherche de nouveaux défis comme faire du css."
                    }
                
                </p>
                <a className={`home-button ${darkMode ? "home-button-dark" : "home-button-light"} `} href="#contact">
                    {
                        langage === 0 ? "Contact me" : "Contactez moi"
                    }
                </a>
            </div>
            <div className="logo-home">
                <img src={Logo} alt="Logo" className='logo-image' ref={opacity.ref} />
            </div>
        </div>
    )
}

export default Home
