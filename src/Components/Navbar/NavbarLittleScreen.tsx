import React, {useContext, useState} from 'react'
import { DarkModeContext } from '../../darkMode'
import { Langage } from '../../langage'

import HomeWhite from '../../assets/navbar/homeWhite.svg'
import HomeFullWhite from '../../assets/navbar/homeFullWhite.svg'
import ProjectsWhite from '../../assets/navbar/projectWhite.svg'
import ProjectsFullWhite from '../../assets/navbar/projectFullWhite.svg'
import UserWhite from '../../assets/navbar/userWhite.svg'
import UserFullWhite from '../../assets/navbar/userFullWhite.svg'
import ContactWhite from '../../assets/navbar/contactWhite.svg'
import ContactFullWhite from '../../assets/navbar/contactFullWhite.svg'


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
import MenuWhite from '../../assets/navbar/menuWhite.svg'
import MenuUpWhite from '../../assets/navbar/menuUpWhite.svg'

import Github from '../../assets/github.svg'
import GithubBlack from '../../assets/githubBlack.svg'
import Linkedin from '../../assets/linkedin.svg'
import LindedinBlack from '../../assets/linkedinBlack.svg'

import Mode from '../../assets/mode.svg'
import Moon from '../../assets/moon.svg'
import Fr from '../../assets/fr.svg'
import Uk from '../../assets/uk.svg'

const NavbarLittleScreen = () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const { langage, toggleLangage } = useContext(Langage)
    const [active, setActive] = useState<number>(0)
    const [openDropdown, setOpenDropdown] = useState<boolean>(false)
    const linksRef = ["#home", "#skills", "#projects", "#contact"]

    const handleOpenDropdown = () => {
        setOpenDropdown(!openDropdown)
    }


    const handleActive = (index: number) => {
        setActive(index)
        window.location.href = linksRef[index]
    }

    return (
        <>
            <div className="navbarLittle">
                <img src={active === 0 ? (darkMode ? HomeFullWhite : HomeFull) : (darkMode ? Home : HomeWhite)} alt="home" className={`navbarLittleIcon ${active === 0 ? (darkMode ? "iconActive-dark" : "iconActive-light") : ""}`} onClick={() => handleActive(0)} />
                <img src={active === 1 ? (darkMode ? UserFullWhite : UserFull) : (darkMode ? User : UserWhite)} alt="user" className={`navbarLittleIcon ${active === 1 ? (darkMode ? "iconActive-dark" : "iconActive-light") : ""}`} onClick={() => handleActive(1)} />
                <img src={active === 2 ? (darkMode ? ProjectsFullWhite : ProjectsFull) : (darkMode ? Projects : ProjectsWhite)} alt="projects" className={`navbarLittleIcon ${active === 2 ? (darkMode ? "iconActive-dark" : "iconActive-light") : ""}`} onClick={() => handleActive(2)} />
                <img src={active === 3 ? (darkMode ? ContactFullWhite : ContactFull) : (darkMode ? Contact : ContactWhite)} alt="contact" className={`navbarLittleIcon ${active === 3 ? (darkMode ? "iconActive-dark" : "iconActive-light") : ""}`} onClick={() => handleActive(3)} />
                <img src={openDropdown ? (darkMode ? MenuUp : MenuUpWhite ) : (darkMode ? MenuDown : MenuWhite)}
                alt="menu" className="navbarLittleIcon menu" onClick={() => handleOpenDropdown()} />
            </div>
            {openDropdown ? (
                <div className="dropdown">
                    <img src={darkMode ? Github : GithubBlack} alt="github" className="navbarResoIcon" onClick={() => window.open("https://github.com/Matsuel", "_blank")} />
                    <img src={darkMode ? Linkedin : LindedinBlack} alt="linkedin" className="navbarResoIcon" onClick={() => window.open("https://www.linkedin.com/in/math%C3%A9o-lang-146539275/", "_blank")} />
                    <div className={`pip-navbar ${darkMode ? "pip-navbar-light" : "pip-navbar-dark"}`}
                    ></div>
                    <img src={langage === 0 ? Uk : Fr} alt="fr" className="navbarResoIcon" onClick={() => toggleLangage()} />
                    <img src={darkMode ? Moon : Mode} alt="mode" className="navbarResoIcon toggleButton" onClick={() => toggleDarkMode()} />
                </div>
            ) : null}
        </>
    )
}

export default NavbarLittleScreen