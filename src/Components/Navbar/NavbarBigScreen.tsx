import React, { useRef, useContext, useState } from 'react'
import Logo from '../../assets/logo.png'
import "./Navbar.css"
import { DarkModeContext } from '../../darkMode'
import { Langage } from '../../langage'
import Github from '../../assets/github.svg'
import GithubBlack from '../../assets/githubBlack.svg'
import Linkedin from '../../assets/linkedin.svg'
import LindedinBlack from '../../assets/linkedinBlack.svg'
import Fr from '../../assets/fr.svg'
import Uk from '../../assets/uk.svg'
import Mode from '../../assets/mode.svg'
import Moon from '../../assets/moon.svg'

const NavbarBigScreen = () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const { langage, toggleLangage } = useContext(Langage);
    const navRef = useRef<HTMLDivElement>(null);
    const links = ["Home", "Skills", "Projects", "Contact"]
    const linksFr = ["Accueil", "Compétences", "Projets", "Contact"]
    const linksRef = ["#home", "#skills", "#projects", "#contact"]

    window.onwheel = (e) => {
        if (e.deltaY > 0) {
            // @ts-ignore
            navRef.current.style.top = "-100px";
        } else if (e.deltaY < 0) {
            // @ts-ignore
            navRef.current.style.top = "32px";
        }
    }


    return (
        <div className="navbarWrap" ref={navRef}>
            <div className="navBarLeft">
                <img src={Logo} alt="logo" className="navbarLogo" onClick={() => window.location.href = "/"} />
                <div className="navbarLinks">
                    {[0, 1, 2, 3].map((index) => (
                        <a href={linksRef[index]} className={`navbarLink ${darkMode ? "linkLight" : "linkDark"}`}
                        >
                        {langage === 0 ? links[index] : linksFr[index]}
                        </a>
                    ))}
                </div>
            </div>
            <div className="navbarReso">
                <img src={darkMode ? Github : GithubBlack} alt="github" className="navbarResoIcon" onClick={() => window.open("https://github.com/Matsuel", "_blank")} />
                <img src={darkMode ? Linkedin : LindedinBlack} alt="linkedin" className="navbarResoIcon" onClick={() => window.open("https://www.linkedin.com/in/math%C3%A9o-lang-146539275/", "_blank")} />
                <div className={`pip-navbar ${darkMode ? "pip-navbar-light" : "pip-navbar-dark"}`}></div>
                <img src={langage === 0 ? Uk : Fr} alt="fr" className="navbarResoIcon" onClick={() => toggleLangage()} />
                <img src={darkMode ? Moon : Mode} alt="mode" className="navbarResoIcon toggleButton" onClick={() => toggleDarkMode()} />
            </div>
        </div>
    )
}

export default NavbarBigScreen