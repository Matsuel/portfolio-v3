import React from 'react'
import styleNavbar from '../../styles/Navbar.module.css'
import Logo from '../../public/logo.png'
import Github from '../../public/github.svg'
import Linkedin from '../../public/linkedin.svg'

const Navbar = () => {
    const links = ["Home", "About", "Projects", "Contact"]
    const linksRef = ["#home", "#about", "#projects", "#contact"]
    return (
        <div className={styleNavbar.navbarWrap}>
            <div className={styleNavbar.navBarLeft}>
                <img src={Logo.src} alt="logo" className={styleNavbar.navbarLogo} onClick={() => window.location.href = "/"} />
                <div className={styleNavbar.navbarLinks}>
                    {[0, 1, 2, 3].map((index) => (
                        <a href={linksRef[index]} className={styleNavbar.navbarLink}>{links[index]}</a>
                    ))}
                </div>
            </div>
            <div className={styleNavbar.navbarReso}>
                <img src={Github.src} alt="github" className={styleNavbar.navbarResoIcon} onClick={() => window.open("https://github.com/Matsuel", "_blank")} />
                <img src={Linkedin.src} alt="linkedin" className={styleNavbar.navbarResoIcon} onClick={() => window.open("https://www.linkedin.com/in/math%C3%A9o-lang-146539275/", "_blank")} />
            </div>
        </div>
    )
}

export default Navbar
