import React, { useState, useContext, useRef } from 'react'
import "./Navbar.css"
import Logo from '../../assets/logo.png'
import Github from '../../assets/github.svg'
import GithubBlack from '../../assets/githubBlack.svg'
import Linkedin from '../../assets/linkedin.svg'
import LindedinBlack from '../../assets/linkedinBlack.svg'
import Mode from '../../assets/mode.svg'
import Moon from '../../assets/moon.svg'
import Fr from '../../assets/fr.svg'
import Uk from '../../assets/uk.svg'
import { DarkModeContext } from '../../darkMode'
import Contact from '../../assets/navbar/contact.svg'
import ContactFull from '../../assets/navbar/contactFull.svg'
import Home from '../../assets/navbar/home.svg'
import HomeFull from '../../assets/navbar/homeFull.svg'
import Projects from '../../assets/navbar/project.svg'
import ProjectsFull from '../../assets/navbar/projectFull.svg'
import User from '../../assets/navbar/user.svg'
import UserFull from '../../assets/navbar/userFull.svg'
import MenuUp from '../../assets/navbar/menuUp.svg'
import MenuDown from '../../assets/navbar/menuDown.svg'

const Navbar = () => {
    const [langue, setLangue] = useState(0)
    const links = ["Home", "Skills", "Projects", "Contact"]
    const linksRef = ["#home", "#skills", "#projects", "#contact"]
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const navRef = useRef<HTMLDivElement>(null);
    const [openDropdown, setOpenDropdown] = useState<boolean>(false)

    window.onwheel = (e) => {
        if (e.deltaY > 0) {
            // @ts-ignore
            navRef.current.style.top = "-100px";
        } else if (e.deltaY < 0) {
            // @ts-ignore
            navRef.current.style.top = "32px";
        }
    }

    const handleLangue = () => {
        if (langue === 0) {
            setLangue(1)
        } else {
            setLangue(0)
        }
    }

    const handleOpenDropdown = () => {
        setOpenDropdown(!openDropdown)
    }


    return (
        <>
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
                    <img src={darkMode ? Github : GithubBlack} alt="github" className="navbarResoIcon" onClick={() => window.open("https://github.com/Matsuel", "_blank")} />
                    <img src={darkMode ? Linkedin : LindedinBlack} alt="linkedin" className="navbarResoIcon" onClick={() => window.open("https://www.linkedin.com/in/math%C3%A9o-lang-146539275/", "_blank")} />
                    <div className={`pip-navbar ${darkMode ? "pip-navbar-light" : "pip-navbar-dark"}`}
                    ></div>
                    <img src={langue === 0 ? Uk : Fr} alt="fr" className="navbarResoIcon" onClick={() => handleLangue()} />
                    <img src={darkMode ? Moon : Mode} alt="mode" className="navbarResoIcon toggleButton" onClick={() => toggleDarkMode()} />
                </div>
            </div>
            <div className="navbarLittle">
                <img src={Contact} alt="contact" className="navbarLittleIcon" onClick={() => window.location.href = "#contact"} />
                <img src={Home} alt="home" className="navbarLittleIcon" onClick={() => window.location.href = "#home"} />
                <img src={Projects} alt="projects" className="navbarLittleIcon" onClick={() => window.location.href = "#projects"} />
                <img src={User} alt="user" className="navbarLittleIcon" onClick={() => window.location.href = "#skills"} />
                <img src={openDropdown? MenuUp: MenuDown} alt="menu" className="navbarLittleIcon menu" onClick={() => handleOpenDropdown()} />
            </div>
        </>
    )
}

export default Navbar

// Faire une nabar pour mobile qui serait en bas par défaut avec des icones et qui s'ouvre en haut avec les liens