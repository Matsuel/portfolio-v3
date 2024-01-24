import React, { useState,useContext, useRef } from 'react'
import "./Navbar.css"
import Logo from '../../assets/logo.png'
import Github from '../../assets/github.svg'
import GithubBlack from '../../assets/githubBlack.svg'
import Linkedin from '../../assets/linkedin.svg'
import LindedinBlack from '../../assets/linkedinBlack.svg'
import Mode from '../../assets/mode.svg'
import Moon from '../../assets/moon.svg'
import { DarkModeContext } from '../../darkMode'

const Navbar = () => {
    const links = ["Home", "Skills", "Projects", "Contact"]
    const linksRef = ["#home", "#skills", "#projects", "#contact"]
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const navRef =  useRef<HTMLDivElement>(null);

    window.onwheel = (e) => {
        if (e.deltaY > 0) {
            // @ts-ignore
            navRef.current.style.top = "-100px";
        }else if (e.deltaY < 0) {
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
                        >{links[index]}</a>
                    ))}
                </div>
            </div>
            <div className="navbarReso">
                <img src={darkMode ? Github: GithubBlack} alt="github" className="navbarResoIcon" onClick={() => window.open("https://github.com/Matsuel", "_blank")} />
                <img src={darkMode? Linkedin:LindedinBlack} alt="linkedin" className="navbarResoIcon" onClick={() => window.open("https://www.linkedin.com/in/math%C3%A9o-lang-146539275/", "_blank")} />
                <div className="pip-navbar"></div>
                <img src={darkMode ? Moon : Mode} alt="mode" className="navbarResoIcon toggleButton" onClick={() => toggleDarkMode()} />
            </div>
        </div>
    )
}

export default Navbar