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

import HomeWhite from '../../assets/navbar/homeWhite.svg'
import HomeFullWhite from '../../assets/navbar/homeFullWhite.svg'
import ProjectsWhite from '../../assets/navbar/projectWhite.svg'
import ProjectsFullWhite from '../../assets/navbar/projectFullWhite.svg'
import UserWhite from '../../assets/navbar/userWhite.svg'
import UserFullWhite from '../../assets/navbar/userFullWhite.svg'
import ContactWhite from '../../assets/navbar/contactWhite.svg'
import ContactFullWhite from '../../assets/navbar/contactFullWhite.svg'

const Navbar = () => {
    const [langue, setLangue] = useState(0)
    const links = ["Home", "Skills", "Projects", "Contact"]
    const linksRef = ["#home", "#skills", "#projects", "#contact"]
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const navRef = useRef<HTMLDivElement>(null);
    const [openDropdown, setOpenDropdown] = useState<boolean>(false)
    const [active, setActive] = useState<number>(0)

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

    const handleActive = (index: number) => {
        if(index === 0){
            setActive(0)
            window.location.href = "#home"
        }else if(index === 1){
            setActive(1)
            window.location.href = "#skills"
        }else if(index === 2){
            setActive(2)
            window.location.href = "#projects"
        }else if(index === 3){
            setActive(3)
            window.location.href = "#contact"
        }
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
                <img src={active === 0 ? HomeFullWhite : Home} alt="home" className={`navbarLittleIcon ${active === 0 ? "iconActive" : ""}`} onClick={() => handleActive(0)} />
                <img src={active === 1 ? UserFullWhite : User} alt="user" className={`navbarLittleIcon ${active === 1 ? "iconActive" : ""}`} onClick={() => handleActive(1)} />
                <img src={active === 2 ? ProjectsFullWhite : Projects} alt="projects" className={`navbarLittleIcon ${active === 2 ? "iconActive" : ""}`} onClick={() => handleActive(2)} />
                <img src={active === 3 ? ContactFullWhite : Contact} alt="contact" className={`navbarLittleIcon ${active === 3 ? "iconActive" : ""}`} onClick={() => handleActive(3)} />
                <img src={openDropdown? MenuUp: MenuDown} alt="menu" className="navbarLittleIcon menu" onClick={() => handleOpenDropdown()} />
            </div>
        </>
    )
}

export default Navbar

// Faire une nabar pour mobile qui serait en bas par défaut avec des icones et qui s'ouvre en haut avec les liens